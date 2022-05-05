class PriorityQueue{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    enqueue = (item) =>{
        let i = this.shiftItemsToInsert(item);
        this.items[i] = item;
        this.count++;
    } 

    dequeue = () =>{
        if(this.isEmpty()){
            throw new Error("Queue is Empty")
        }
        return this.items[-- this.count]
    }

    shiftItemsToInsert = (item) =>{
        let i;
        for(i = this.count - 1; i>= 0; i--){
            if(this.items[i] > item){
                this.items[i+1] = this.items[i];
            }else{
                break;
            }
        }
        return i+1;
    }

    isEmpty = () =>{
        return (this.count == 0);
    }

}

module.exports = PriorityQueue;