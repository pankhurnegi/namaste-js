const GITHUB_API = "https://github.com/pankhurnegi"

const user = fetch(GITHUB_API);

//States of promises
//PromiseState : "pending"
//PromiseResult : undefined

console.log(user);

user.then(function (data) {
    console.log(data);
});