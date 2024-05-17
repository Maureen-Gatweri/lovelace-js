const cup = {
    color: 'red',
    size : 'small',
    shape : 'cylindrical',
    functionality :{
        drinkType: 'tea',
        temperature : 'hot'
    },
    company:['Kempinski'],
    design : ['floral', 'polka', 'checked'],
    drink: function(){
        console.log('use me to drink tea');
    }

};
console.log('company',cup.company);
console.log('size',cup.size);
console.log({design:cup.design});

console.log({design:cup.design[0]});
console.log('shape',cup['shape']);
console.log('drinkType',cup.functionality.drinkType);
cup.drink();

//console.log(`My main use is to drink ${this.functionality.drinkType}`)

//removing a property from an object
delete cup.color;
console.log({cup});

//to get specifics, values or keys on their own


const values = Object.values(cup);
console.log({values});


const keys  = Object.keys(cup);
console.log({keys});
Object.keys(cup).forEach(item=>{
    console.log({key:item , value : cup[item]});
})



