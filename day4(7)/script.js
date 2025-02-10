// SetTimeOut 
// setTimeout ( function , milliseconds, parameters1 , parameter2 ... )

// setTimeout(greeting,3000);

// function greeting(){
//     console.log("Hello2");
// }
// setTimeout(greeting1,3000, 'Hiii');

// function greeting1(x){
//     console.log(x);
// }
// /*----------------------------------*/

// setTimeout(()=>{
//     console.log('Naveen');
// },3000);

// /*------------------------------------------*/
// setInterval ( functions , milliseconds, parameters1 , parameter2 )

// let count=0;
// const countInterval= setInterval(count1,3000)
// function count1(){
//     if(count===4){
//         clearTimeout(countInterval);
//     }
//     console.log("Nammatha");
//     count++;
// };
// //=====================================================================

// let p = new Promise((resolve, reject) => {
//     let n = 1+21;
//     if(n==3){
//         resolve("pass");
//     }else{
//         reject("failed");
//     }
// })

// p.then((message)=>{
//     console.log('Then is in ' + message);
// }).catch((message)=>{
//     console.log("catch "+ message);
// })

//==============================================================
// try{
//     let n = prompt('Enter a number')
//     if(n=='')
//         throw("Should not be empty")
//     if(isNaN (n))
//         throw("Enter a number");
//     console.log(n*2);
// }
// catch(error){
//     console.log(error)
// }

/*========================*/

function walkDog(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalk = true;
            if(dogwalk){
                resolve("Dog is walking");
            }else{
                reject("Dog is not walking");
            }
        },2000)
    })
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const clean = true;
            if(clean){
                resolve("Kitchen is Cleaned")
            }else{
                reject("Kitchen is not cleaned");
            }
        },2000)
    })
}

function trash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashww = true;
            if(trashww){
                resolve("Trash is though");
            }else{
                reject("Trash is filled");
            }
        },2000)
    })
}

walkDog().then(vaue=>{console.log(vaue);
return cleanKitchen()}) .then(vaue=>{console.log(vaue);
return trash()}).then(value=>{console.log(value)}).
catch(error=>console.error());


