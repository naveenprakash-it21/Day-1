let user = [
    {name:'Vimal' , gender:'m'},
    {name:'Navin' , gender:'m'},
    {name:'Pooja' , gender:'F'},
    {name:'Aval' , gender:'F'},
]

let person={
    name:'Navin',
    gender:'m',
    country:'Australia',
}

// for ( let index =0 ; index < user.length ; index++){
//     const result=user[index];
//     console.log(result);
// }// first two only.

// /*==========================================================*/
// FOR OF - > ES6

// for (const element of user) { //
//      console.log(element);
// } // no condition
// for (const [key,value] of Object.entries(person)){
//     console.log(key+' - '+value);
// }
// /*==========================================================*/

// FOR EACH is only used in Array.
// user.forEach((x)=>{
//     console.log(x);
// }) // parameter // no break // more memory
// if we need break we use exception handling
/*=========================================================*/

// FOR IN 
// 1. Used to access the properties in the object.
// used in value from api is in obj diff diff value
// for (const key in person){
//     console.log(key)
//     let val = person[key];
//     console.log(val);
// } 
 
/* ===============================================================*/
// let condition ='5';
// switch(condition){
//     case '1':
//         console.log("1");
//         break;
//     case '2':
//     case '5':
//         console.log("2");
//         break;
//     case '3':
//         console.log("3");
//         break;
//     default:
//         console.log(" Nothing")
// }

/*================================================================*/

// Async -> Always return a promise
// async function fn(){
//     return 'Hello';
// }
// console.log(fn());
//fn().then(val=>console.log(val)) 
// think that are inside the then (resolve method)

// let reach = new Promise((resolve, reject)=>{
//     const reached = false;
//     if(reached){
//         setTimeout(resolve,3000,"vidhy reached");
//     }else{
//         reject("vidhya not reach");
//     }
// })

// async function stauts(){
//     try{
//     console.log('hi ... ')
//     let result=await reach
//     console.log(result)
//     console.log('bye')
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// stauts()
/*=======================================================================*/

// A function inside a object is called methods.

const person1 = {
    fname: 'Naveen', // property
    lname: 'Prakash',
    age: 22,
    fullname: function(){ //methods
       //return this.fname+' '+this.lname;
       return `${this.fname} ${this.lname}`;
    }
}
// getting obj value .. calling obj
document.getElementById("res").innerHTML=  person1.fullname() // person1.fname
// calling method
person1.fullname();


// let reachA = new Promise ((resolve,reject)=>{
//     let A=false
//     if(A){
//         setTimeout(resolve,3000,"A reached");
//     }else{
//         reject("A not reached")
//     }
// })

// let reachB = new Promise ((resolve,reject)=>{
//     let B=false
//     if(B){
//         setTimeout(resolve,10000,"B reached");
//     }else{
//         reject("B not reached")
//     }
// }) 

// let reachC = new Promise ((resolve,reject)=>{
//     let C=false
//     if(C){
//         setTimeout(resolve,1000,"C reached");
//     }else{
//         reject("C not reached")
//     }
// })

// let reachD = new Promise ((resolve,reject)=>{
//     let D=false
//     if(D){
//         setTimeout(resolve,4000,"   D reached");
//     }else{
//         reject("D not reached")
//     }
// })

// Promise.race([reachA,reachB,reachC,reachD])
// .then((msg=>console.log(msg)))
// .catch((msg)=>console.log(msg));

/*=============================================================================*/



