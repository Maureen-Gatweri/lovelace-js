class Person{
constructor(name,age){
    this.name = name;
    this.age = age;
    thid.school  = school;
    
}
profession(){
    console.log(`I am a student at ${this.school}`)
}




greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);

}

};
const Jane = new Person('Jane',30);
console.log({Jane});

Jane.greet();
console.log('prototype',Person.prototype);

Person.prototype.nationality = 'Kenyan';
console.log('nationality', Jane.nationality);


//borrowing properties from another object
class Student extends Person{
    constructor(name,age){
        super(name,age);
    };

}
const amanda  = new Student('Amanda',19);
console.log({amanda});
console.log('nationality', amanda.nationality);
amanda.greet();




