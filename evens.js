// const numbers=[12,87, 14, 51, 36, 36];
// const evens=[];
// for(const num of numbers){
//             console.log(num);
//             if(num % 2 === 0 ){
//                         console.log('even:',num)
//                         evens.push(num);
//             }
// }

const numbers=[12,87, 14, 51, 36, 36];

function getEvenNumbers (numbers){
            const evens=[];
            for(const number of numbers){
                        if(number%2 === 0){
                                    evens.push(number);
                        }
            }
            return evens;
}
const result = getEvenNumbers(numbers);
console.log(result)