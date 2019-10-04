{
    let a = 42 // primitive
    let b = a
    b ++
    console.log("a", a)
    console.log("b", b)
}

{
    let a = [1, 2, 3]
    let b = a
    let c = [1, 2, 3, 4]
    let d = a.concat()
    let e = [...a]
    b.push(4)
    d.push(5)
    e.push(6)
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)
    console.log("e", e)
    console.log("a === b", a === b)
    console.log("a === c", a === c)
}