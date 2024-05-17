function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
};
const adam = new Person('Adam',30);
console.log({adam});


console.log({adam});
adam.greet();


const eve = new Person ('eve', 25);
console.log({eve});
eve.children = ['Cain','Abel','Seth'];
console.log({adam});
console.log({eve});

//A prtotype exists in objects and functions
Person.prototype.Skincolor;
