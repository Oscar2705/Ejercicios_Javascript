    
    //EJERCICIO 1
    //En base al siguiente código, añadir una función para restar dos números:

    let multipli = function(x,y){
        return x*y
    }

    let expon = function (x,y){
        return Math.pow(x,y)
    }

    let suma =(x,y) => {return x+y}

    //Con resta
    let resta =(x,y) => {return x-y}

    var result = multipli(5,2)
    alert(`Multiplicacion ${result}`)

    result = suma (3,4)
    alert(`Suma ${result}`)

    result = resta (20,5)
    alert(`Resta ${result}`)

