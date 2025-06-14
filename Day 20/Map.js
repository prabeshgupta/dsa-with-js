// Map stores data in key value pairs.

let map = new Map()
map.set("name", "Prabesh Gupta")
map.set("age", 23)
map.set("male", true)
map.set("family", ['Dad', 'Brother'])
map.set(3, 2)
console.log(map)

//Deleted always using keys
map.delete(3)
console.log(map)

//Keys and Values
for (let [key, value] of map) {
    console.log(key, value)
}

//Keys
for (let key of map.keys()) {
    console.log(key)
}

//Values
for (let key of map.keys()) {
    console.log(map.get(key))
}

for (let value of map.values()) {
    console.log(value)
}