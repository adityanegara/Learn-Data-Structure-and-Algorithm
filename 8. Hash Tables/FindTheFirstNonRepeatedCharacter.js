const FindNonRepeatedCharacter = (text) =>{
    const map = new Map();
    for (let i = 0; i < text.length; i++) {
        let count =  ( map.has(text[i]) == true) ? map.get(text[i]) : 0;
        map.set(text[i], count + 1);
    }
    for (let i = 0; i < text.length; i++) {
        if(map.get(text[i]) == 1){
            return text[i];
        }
    }
    return 'All Repeated'
}
console.log(FindNonRepeatedCharacter('A Green Apple'));