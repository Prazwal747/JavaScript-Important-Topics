function Order(OrderPrice){
    return new Promise((resolve , reject)=>{
        if(OrderPrice > 100){
            resolve("Order Placed SuccessfUlly")
        }
        else{
            reject("Minimum Order value is 101 INR");
        }
    })
}



//calling function with async await , we have to use try catch because we can catch error here in catch block ! , and put await to promise function

async function checkOrder(){
    try{
        let result = await Order(1004);
        console.log(`Amazon.mars`);
    }
    catch(err){
        console.log(err);
    }
}

checkOrder();