let reverseText = (text) =>{
   let textStack = [];
   let reversedText= '';
   for(let i =0; i< text.length; i++){
        textStack.push(text[i]);
   }
   for(let i =0; i<text.length; i++){
       let character = textStack.pop();
       reversedText += character;
   }
   return reversedText;
}

console.log(reverseText('Aditya Negara'));