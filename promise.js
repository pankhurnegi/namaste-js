const cart = ["shoes", "pants", "kurta"];

createOrder(cart);

proceedToPayment(orderId);


//promise 
//It is an object representing the eventual completion or failure of an async operation
createOrder(cart)
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
})  
// {data: undefined} 
// after some async time { data: orderDetails} 

// after getting the data it will call proceedToPayment 

// 3 states of a promise 
// pending, fulfilled, rejected