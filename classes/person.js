// Your code here
class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(array){
    if(Array.isArray(array)){
         array.forEach((person) => {
          if(person instanceof Person){
            return person.introduce()
        }
        else{
          throw new Error("All items in array must be Person class instances.")
          }
          
        
    })
  
    }else{
        throw new Error("introducePeople only takes an array as an argument.");
      }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}