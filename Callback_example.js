//simple example

function Order(callback){
    setTimeout(()=>{
        console.log("Order Successfully placed");
        var orderId = 45555;
        callback(orderId);
    } , 2000)

    console.log("Hello thanks for ordering!")
  }


  Order((result)=> {
    console.log('Data received:', result);
  })

   // Note: callback  functions are asynchronous , function will not wait for statements to execute , it will go to next line 


   // web dev Simplified example(youtuber) //callback
let userLeft = false;
let userWatchingCatmeme = true;

function watchTutorialCallBack(callback , errorCallback){
    if(userLeft){
        errorCallback( {
            name: 'user left',
            message: ':('
        } )
    }
    else if(userWatchingCatmeme){
        errorCallback({
            name: 'user watching cat meme',
            message: 'WebDevSimplified < cat'
        })
    }
    else{
        callback('Successsss... suiiii');
    }
}

watchTutorialCallBack((message)=>{console.log('Success: ' + message)},
(error)=> { console.log(error.name + " " +error.message) })

//so to avoid asynchronous behaviour we can use promises and call that using try/catch

