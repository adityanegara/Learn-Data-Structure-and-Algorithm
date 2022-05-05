const getMax = (operations) =>{
    let stack = [];
    let returnStack = [];
    let max = 0;
    operations.forEach(operation => {
        operation = operation.split(" ");
        if(operation[0] == 1){
            stack.push(operation[1]);
            if(operation[1] > max){
                max = operation[1];
            }
        }
        if(operation[0] == 2){
            stack.pop();
        }
        if(operation[0] == 3){
            let highestInStack = Math.max(...stack);
            returnStack.push(highestInStack);
        }
    });
    return returnStack;
}


let operations = ['1 97','2','1 20','2','1 26','1 20','2','3','1 91','3']
console.log(getMax(operations));