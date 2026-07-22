//1. function declear
function firstFunction(){

}

function divide(num1 ,num2){
            const result = num1/num2;
            console.log('devide result:',result);
}

//2. function call
firstFunction();

//3. marameter declear
divide(500, 100);

//4. return kora

function doMath(a,b,c,d){
            const plus = a+b
            const minus = c-d
            const multiply = plus*minus
            const divide = multiply / 2
            return divide;
}

const final=doMath(10,20,40,30);//5.call function with variable.
console.log(final);