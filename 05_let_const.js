// Let
let a = 'Variable a'
let b = 'Variable b'
{
    a = 'New variable a'
    let b = 'Local Variable B'
    console.log('Scope A:', a)
    console.log('Scope B:', b)
}
console.log('A:', a)
console.log('B:', b)

// Const
const PORT = 8080
try {
    PORT = 8081
} catch (e) {
    console.log('Error')
}

const array = ['JS', 'is', 'awesome']
array.push('!')
array[0] = 'JavaScript'
console.log(array)

const obj = {}
obj.name = 'Andrey'
obj.age = 30

console.log(obj)

obj.age = 31

console.log(obj)

delete obj.name

console.log(obj)
