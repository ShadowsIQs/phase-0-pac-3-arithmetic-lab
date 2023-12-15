function add(a, b){
    console.log(a + b)
    return a + b
}
console.log(add)

function subtract(a, b){
    console.log(a - b)
    return(a - b)
}
console.log(subtract)

function multiply(a, b){
    console.log(a * b)
    return(a * b)
}
console.log(multiply)

function divide(a, b){
    console.log(a / b)
    return(a / b)
}
console.log(divide)



function increment(number){
    
    return (number += 1);
}

console.log(increment(number))

function decrement(number){
    
    return (number -= 1);
}

console.log(decrement(number))

function makeInt(string){
    return parseInt(string, 10)
   
}

console.log(makeInt(string))

function preserveDecimal(string){
    return parseFloat(string)
   
}



console.log(preserveDecimal(string))