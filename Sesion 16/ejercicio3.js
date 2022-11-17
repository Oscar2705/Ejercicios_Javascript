
    //EJERCICIO 3

    //Realizar un programa con una función. Esta función muestra en pantalla
    //la suma de dos números introducidos por el usuario.
    
    let n1=+prompt("Ingrese numero")
    let n2=+prompt("Ingrese numero")

    let suma =(x,y) => {
        return (x+y)
    }

    let result =suma(n1,n2)
    alert(`La suma es ${result}`)

