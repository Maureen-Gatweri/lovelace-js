function personAge(age){
    if (age>18){
        return "You are an adult";
    }
    else if (age >12 && age<= 16){
        return "You are a teenager";

    }
    else{
        return "you are underage";
    }


}
console.log(personAge(14));
console.log(personAge(90))