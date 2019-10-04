// 7 types: null, undefined, boolean, number, string, object, Symbol

console.log(typeof null)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof 0)
console.log(typeof "string")
console.log(typeof {})
console.log(typeof Symbol('JS'))
console.log(typeof NaN)
console.log(undefined/1)

console.log(typeof function () {})
console.log(typeof (()=>{}))
console.log(typeof (()=>{})())

// Apply types
let language = 'JS'
if (language) {
    console.log('The best language is: ', language)
}

// '', 0, null, undefined, NaN, false
console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean('0'))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function () {}))
console.log(Boolean((()=>{})))

// Strings and numbers
console.log(1+'2')
console.log('1'+2)
console.log('' + 1 + 2)
console.log('' - 1 + 2)
console.log('3' * '8')
console.log(4 + 10 + 'px')
console.log('px' + 5 + 10) // px510
console.log('42' - 40) // 2
console.log('42px' - 2) // NaN
console.log(null + 2)

// == vs ===
function compareEquals(a, b) {
    console.log(a + " == " + b, a == b)
    console.log(a + " === " + b, a === b)
}

compareEquals(2, '2')
compareEquals(null, undefined)
compareEquals(null, null)
compareEquals('0', false)
compareEquals('0', 0)

compareEquals(false, 0)
compareEquals(false, '')
compareEquals(false, [])
compareEquals(false, {})
compareEquals(false, null)

compareEquals('', 0)
compareEquals('', [])
compareEquals('', {})
compareEquals('', null)

compareEquals(0, 0)
compareEquals(0, [])
compareEquals(0, {})
compareEquals(0, null)
