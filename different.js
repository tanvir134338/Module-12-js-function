function chowdhurify(name){//string pathano function e 
            const fullName= name+' '+'Choudhury';
            return fullName;
}

const chow = chowdhurify('Tanvir');
console.log(chow);


function doubleOrHalf(price, isDouble){// boolean use kora function e
            if(isDouble === true){
                        const askingPrice = price*2;
                        return askingPrice;
            }
            else {
                     const askingPrice = price / 2
                     return askingPrice;   
            }
}

const myPrice = doubleOrHalf(200, true);
console.log('Price for me:', myPrice);
const leader = doubleOrHalf(200, false);
console.log('Price for leader:', leader);



function firstElementDouble (array){//function e array use
            console.log('Got the value', array);
            const firstElemet = array[0];
            const doubled = firstElemet*2;
            return doubled;
}

const ar = [23,22,24,25];
const doubled= firstElementDouble(ar)
console.log('First elemet doubled:',doubled)

//parameter hisebe object pathano:
const student = {
    name: 'Tanvir',
    marks: 85,
    department: 'CSE'
};

function isStudentAPlus(student){
    console.log('Got the student:', student);

    const marks = student.marks;

    console.log('His marks:', marks);

    if (marks >= 80){
        return true;
    } else {
        return false;
    }
}

const isAPlus = isStudentAPlus(student);

console.log(isAPlus);
