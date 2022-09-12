function hashStringToInt(string, tableSize) {
    let hash = 17

    for(let i = 0; i < string.length; i++) {
        hash = ( 13 * hash * string.charCodeAt(i)) % tableSize
    }

    return hash
}


class HashTable {
    table = new Array(100)

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length)
        this.table[idx] = value    
    }
    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length)
        return this.table[idx]
    }
}

const myTable = new HashTable
myTable.setItem("firstName", "bob")
myTable.getItem("firstName")

console.log(myTable.getItem("firstName"))