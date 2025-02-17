const person = { ///->>>>>> OBJECT
    name: "Alice",
    age: 25,
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  
person.greet(); // Output: Hello, my name is Alice

/*========================================================================================================*/
  
class Person { //CLASS
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {  //--->>>> Constructor
    console.log(`Hello, my name is ${this.name}`);
  }
}
  
const alice = new Person("Alice", 25);
alice.greet(); // Output: Hello, my name is Alice

///*========================================================================================================*/

// Encapsulation

class BankAcc{
  #balance;

  constructor(intialamt){
    this.#balance=intialamt;
  }

  getBalance(){
    return this.#balance;
  }

  deposit(amt){
    if(amt>0){
      this.#balance+=amt;
    }
  }    
}

const amtn=new BankAcc(1000);
console.log(amtn.getBalance());
amtn.deposit(123);
console.log(amtn.getBalance());