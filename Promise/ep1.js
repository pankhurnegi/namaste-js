const cart = ["shoes", "pants", "kurta"];

// 1. create an order
// 2. proceed to payment

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});


//Inversion of Control