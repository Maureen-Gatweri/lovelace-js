let fruits = [`Mango`, `Apple`,`Banana`,`Orange`];
let array = new Array(20,30,6,7);
console.log({fruits});
console.log({array})

fruits[1]=3;
console.log({fruits})


console.log(`length`, fruits.length);

//Array methods
//add last
let addLast = fruits.push(`Kiwi`)
console.log({fruits});

//add to beginning
let addFirst = fruits.unshift(`Pawpaw`)
console.log({fruits});

//remove last item
let removeLast = fruits.pop();
console.log({fruits})

//remove first item
let removeFirst = fruits.shift();
console.log({fruits})

//adding numbers using REDUCE. 

let items = [20,30,40,60,80];
let add = items.reduce((acc, curr)=> acc+curr);
console.log({add});

let multiply = items.map(item=>item * 2)
console.log({multiply})


let addEach = [];
let total = 0;

let addeach = items.forEach(item=> item =>{
const add = item +2
console.log({add});
addEach.push(add);
total += item


});

//console.log({addEach});
//console.log({total})
//console.log({multiply})
//items.map(item =>)
//let multiplyAll *= item;
//return item
//Destructuring
let [num1, num2,num3] = items;
console.log({num1});
console.log({num2});
console.log({num3});









//let sum = 0;
//for (const el of items)
//{
//sum+=el
//}
//console.log({sum});



//for (let x = 0; x < 5; x++) {
  //  values.push([2 ** x, 2 * x ** 2]);
  //}
  //console.table(values)


