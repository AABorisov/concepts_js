function fA() {
    let a = 1

    function fB() {
        let b = 2

        function fC() {
            let c = 3

            console.log('fC: ', a, b, c)
        }
        fC()
        console.log('fB: ', a, b)
    }
    fB()
    console.log('fA: ', a)
}
fA()