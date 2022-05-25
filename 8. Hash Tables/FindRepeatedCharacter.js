const FindRepeatedCharacter = (text) =>{
    const letters = new Set();
    for (let c of text) {
        if(c !== ' '){
           if(letters.has(c)){
               return c;
           }
           letters.add(c);
        }
      
    }
    return 'none repeated character'
}

console.log(FindRepeatedCharacter('a green apple'));