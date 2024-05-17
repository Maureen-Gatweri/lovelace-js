const multiplyByTwo = (num)=> {
    let newArray = [];
    for (let i=0; i<num.length; i++){
        const result = num[i] *2;
        newArray.push(result);
    }
    return newArray;
};
console.log(multiplyByTwo([2,3,4,5,6,7]));

const totalSum = (num) => {
    let sum=0;
    for (let element of num){
        sum += element;
    }
    return sum;
}
console.log(totalSum([1,2,3,4,5,6,7,8]));

//MDN WEB
const teachStudents = (students) =>{
    while(students.length >2){
        console.log('Teach students');
        //how to make a while loop stop
        students.pop();
        //stopping using if
      //if (students.length===1){
            //break

            //using .includes
            if (students.includes("Maureen")){
                break
        }
        //if (students.includes('Monica')){
          //  continue;
        //}
    }
}
teachStudents(['Max', 'Anita', 'John','Evans','Monica'])
const childrenNames = (children) => {
    do{
        return 'There are many children'
    }
    while (children.length > 5)
}
childrenNames(['Max', 'Anita', 'John','Evans','Monica']);

const checkDayofTheWeek = (day) =>{
    switch(day){
        case 'Monnday':
            console.log('Today is Monday');
            break;
            case 'Tuesday':
                console.log('Today is Tuesday')
                break;
                default:
                    console.log('The day is not listed')
    }
}
checkDayofTheWeek('Monday')