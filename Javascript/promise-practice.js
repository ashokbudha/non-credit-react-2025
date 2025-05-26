const cart =["pant","shirt",'trouser',"jacket"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
})
.then(function(cardId){
    return proceedToPayment();
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){

    const pr =  new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("cart is invalid");
            reject(err);
        }
        let orderId = "12345";

        setTimeout(() => {
            resolve(orderId);
        }, 5000);
    });
    return pr;
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        resolve("Payment Sucessfull.");
    })
}