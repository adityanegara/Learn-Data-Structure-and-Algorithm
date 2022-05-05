const largestTriangle = (heights) =>{
    let leftLimits = getLeftLimits(heights);
    let rightLimits = getRightLimits(heights);
    let maxAreas = getMaxAreas(leftLimits, rightLimits, heights);
    return Math.max(...maxAreas);
}

const getMaxAreas = (leftLimits, rightLimits, heights) =>{
    let maxAreas = [];
    for(let i = 0; i< heights.length ; i++){
        let area = ((rightLimits[i] - leftLimits[i]) + 1) * heights[i] 
        maxAreas.push(area);
    }
    return maxAreas;
}

const getRightLimits = (heights) =>{
    let right = [];
    let stack = [];
    for(let i = heights.length - 1; i>=0  ; i--){
        if(stack.length == 0){
            right[i] = heights.length -1;
        }else{
            while(((stack.length == 0) !== true) && (heights[stack[stack.length - 1]] >= heights[i])){
                stack.pop();
            }
            right[i] = (stack.length == 0) ? heights.length - 1 : stack[stack.length - 1] - 1;
        }
        stack.push(i);
    }
    return right;
}


const getLeftLimits = (heights) =>{
    let left = [];
    let stack = [];
    for(let i = 0; i< heights.length ; i++){
        if(stack.length == 0){
            left[i] = 0;
        }else{
            while(((stack.length == 0) !== true) && (heights[stack[stack.length - 1]] >= heights[i])){
                stack.pop();
            }
            left[i] = (stack.length == 0) ? 0 : stack[stack.length - 1] + 1;
        }
        stack.push(i);
    }
    return left;
}

module.exports = largestTriangle