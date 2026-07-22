function isEven(number){
            console.log(number,'Divided by 2 er vagsesh',number%2)
            if(number%2 === 0){
                        return true;
            }
            else{
                        return false;
            }
}

const result= isEven(51);
console.log(result)

//same jinis ta amra isOdd er khettre mane bijor ber korar jonno o korte pari se khettre amader number%2 === 0 er jaygay 1 dite hbe . ar if return e true ar else return e false dite hbe.