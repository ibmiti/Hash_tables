// :: creating a custom hash table using class :: 

class HashTable {  
    constructor(size){
        // this will allow us to set the size when instantiating later
        this.data = new Array(size);
    }

    // identifier named hash, or more fully 'hash key'
    // similar to private props in other langs 
    _hash(key) {
        let hash = 0;
        // as the hash table is filled with values their hashes are being abstracted 
        for (let i=0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length; // enforces that the output stays beneath the assigned size of 50
        }
        return hash;
    }
    set(key,value){
        let address = this._hash(key);
        // to avoid collision's which will mean the deleting of data
        if (!this.data[address]){
            this.data[address] = [];
        }
         this.data[address].push([key, value]);
         return this.data
    }
    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];   
        if (currentBucket){
            for (let i=0; i < currentBucket.length; i++)
            {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }    
            }
        }
        return undefined
    }
    // will allow us to iterate over keys within hash table
    keys(){
        const keyArray = [];
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i]){
                keyArray.push(this.data[i][0][0])
            }
        }
         return keyArray;
    }
}

// setting size of Hash table to 50
const myHashTable = new HashTable(50);
myHashTable.set('oranges', 100);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.keys();

