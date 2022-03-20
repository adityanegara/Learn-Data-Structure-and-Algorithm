const binarySearch = (array, searchValue, start , end) =>{
    if(start > end) return false;
    let mid = Math.floor((start+ end)/2);
    if(array[mid] === searchValue) return mid;
    if(array[mid] > searchValue){
        return binarySearch(array, searchValue, start, mid-1)
    }else{
        return binarySearch(array, searchValue, mid+1, end)
    }
}

let array = [1,2,3,4,5,6,7,8];
let searchValue = 9;
let result = binarySearch(array, searchValue, 0, array.length-1);
console.log(result);