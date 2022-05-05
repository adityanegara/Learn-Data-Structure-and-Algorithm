//Stack itu ialah data structure dimana data yang pertama kali masuk akan dilayani terakhir
//dan data yang baru masuk itu dilayani paling awal

//

let stack = [];
stack.push(1);
stack.push(2);
//push
stack.push(3);

//stack = [1,2,3]
//         0 1 2

//Pop
console.log(stack.pop());
//Peek
console.log(stack[stack.length - 1]);
//isEmpty
console.log(stack.length == 0);
console.log(stack);