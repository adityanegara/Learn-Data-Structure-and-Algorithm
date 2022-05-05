const equalStack = (h1, h2, h3) =>{

}

const isStackEqualHeight = (h1,h2,h3) =>{
    const h1Sum =  h1.reduce((a, b) => a + b, 0);
    const h2Sum =  h2.reduce((a,b) => a+b, 0);
    const h3Sum = h3.reduce((a,b) => a+b, 0);
    console.log(h1Sum);
    console.log(h2Sum);
    console.log(h3Sum);
    return (h1Sum === h2Sum && h2Sum == h3Sum && h1Sum == h3Sum);
}

let testOne = [1,1,1,2];
let testTwo = [2,3];
let testThree = [1,4];
console.log(isStackEqualHeight(testOne, testTwo, testThree))