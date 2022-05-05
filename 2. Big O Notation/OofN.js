const calllAllNumbersAndStrings = (numbers, strings) =>{
    for(let i =0; i< numbers.length; i++){
        console.log(numbers[i]);
    }
    for(let i =0; i< strings.length; i++){
        console.log(strings[i]);
    }
}


const callAllNumbers = (numbers) =>{
    for(let i =0; i< numbers.length; i++){
        console.log(numbers[i]);
    }
}

callAllNumbers([1,2,3,4,5]);
calllAllNumbersAndStrings([1,2,3], ['a','b','c']);