const isExpressionBalance = (text) =>{
    let bracketStack = [];
    for(let i =0; i<text.length; i++){
        let currentCharacter = text[i];
        if(isItOpenBracket(currentCharacter)){
            bracketStack.push(currentCharacter);
        }
        if(isItCloseBracket(currentCharacter)){
            if(bracketStack.length !== 0){
                let openBracket = bracketStack.pop();
                if(isItPaired(openBracket,currentCharacter )!= true){
                    return false;
                }
            }else{
                return false;
            }
        }
    }
    if(bracketStack.length == 0){
        return true;
    }
    return false;
}

const isItPaired = (openBracket, closeBracket) =>{
    if(openBracket == '<' && closeBracket == '>'){
        return true;
    }
    if(openBracket == '[' && closeBracket == ']'){
        return true;
    }
    if(openBracket == '(' && closeBracket == ')'){
        return true;
    }
    if(openBracket == '{' && closeBracket == '}'){
        return true;
    }
    return false;
}

const isItOpenBracket = (character) =>{
    const openBracketList = ["<", "[", "(", "{"];
    return openBracketList.includes(character);
}

const isItCloseBracket = (character) =>{
    const closeBracketList = [">", "]", ")", "}"];
    return closeBracketList.includes(character);
}

console.log(isExpressionBalance('(<{[]}>)'))
