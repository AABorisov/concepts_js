// function sayHelloTo(name) {
//     const message = 'Hello ' + name
//     return function () {
//         console.log(message)
//     }
// }
//
// const helloToElena = sayHelloTo('Elena')
//
// console.log(helloToElena)
// console.log(helloToElena())
// helloToElena()
//
// const helloToEgor = sayHelloTo('Egor')
// helloToEgor()
//
// function createFrameworkManager() {
//     const fw = ['Angular', 'React']
//
//     return {
//         print: function() {
//             console.log(fw)
//         },
//         add: function (framework) {
//             fw.push(framework)
//         }
//     }
// }
//
// const manager = createFrameworkManager()
// console.log(manager)
// manager.print()
// manager.add('VueJS')
// manager.print()

// classical setTimeout

const fib = [1, 2, 3, 5, 8, 13]
for (var i = 0; i < fib.length; i++) {
    setTimeout(function () {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}
// Let
for (let i = 0; i < fib.length; i++) {
    setTimeout(function () {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}

for (var i = 0; i < fib.length; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(i)
}


for (var i = 0; i < fib.length; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(i)
}

