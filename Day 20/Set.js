// Set stores unique values

//Basic
let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)

set.delete(2)

console.log(set.size) // size is the property

console.log(set.has(1))

//Used with set and map
for (let i of set) {
    console.log(i)
}