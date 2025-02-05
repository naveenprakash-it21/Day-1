/*const person={
    name:"Naveen",
    age:21,
}; /// This is an object

function getDetails(person){
    console.log(person.age); // object called with the attribute also
    console.log(person.name);
}

getDetails(person); /// calling the function
getDetails({name:"Haii", age:23}); // creating object in the function argument


/*------------------------------------------------------------------------------------------------------------*/


const person1={
    name:"Prakash",
    age:24,
}; 

function printP1(name){ // parameter
    console.log(name);
}

printP1(person1.name); /// calling the function /// aruguments

/*------------------------------------------------------------------------------------------------------------*/

const person2={
    name:"Prakashi",
    age:24,
}; 

function printP2(name=" Durga "){ // parameter
    console.log(name);
}

printP2(person2.name);
/*------------------------------------------------------------------------------------------------------------*/

let email= Symbol(); // to hide the keys 
let employee = {};
    employee.name="Name",
    employee.age=21;
employee[email]="Prakash@test.com";
console.log(Object.keys(employee)); // printing the keys 
console.log(employee[email]);  // only way to print the hide key 


/*------------------------------------------------------------------------------------------------------------*/

function sayHello(){        // function decalartion
	console.log("hello "); 
};
sayHello();

const greeting= function sayHello(){      // Function expression or Named function expression
	console.log("hello from greeting");
};
greeting();

const AnonFunc= function (){      //Anonymous Function 
	console.log("hello from Anonymous");
};
AnonFunc();

const greet = () => {   // arrow function or fat arrow fucntion  
    console.log("Hi customer")
}
greet();


// passing with one argument
const greeti = (x) => { // const greeti = x => {  
    return x*x*x;
}

let result = greeti(4);
console.log(result);
/*------------------------------------------------------------------------------------------------------------*/

// Arrow Function in Object
const employee6 ={
    firstname: 'Arun',
    lastname: 'Kumar1',
    // getFullname(){ ----> NORMAL METHOD
    //     return this.firstname + this.lastname;
    // }
    getFullname:()=>{
        return employee6.firstname+employee6.lastname
    }
}

console.log(employee6.getFullname());


alert("Hello da")


let cnf = confirm ("Are you sure? ");
if(cnf ){
    alert("Success");
}
else{
    alert("Sorry");
}

let age = prompt("Enter your age; ");
if(age>18){
    alert("good");
}
else{
    alert("bad");
}*/

function points(argument){
    console.log("Running");
    const total =argument;

    // Add, remove and getTotal
    const addPoint = () => {
        return total + 1;
    }

    const removePoint = (points) => {
        return total - points;
    }

    const getTotalPoint = () => {
        return total;
    }
    return {addPoint, removePoint, getTotalPoint}

    }

const table = points(100);
console.log(table.addPoint());
console.log(table.removePoint(10));
 