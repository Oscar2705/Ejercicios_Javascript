function ejercicio1(){
    let descuento, monto
    let compra=+prompt("Ingrese la compra")
    // let descuento=+prompt("Ingrese la compra")
    // let monto=+prompt("Ingrese la compra")

    if(compra>=150){

        descuento=compra*0.12;
        monto=compra-descuento;
        alert(`El descuento es de S/. ${descuento} y El importe total es de ${monto} Soles`)
    }
    else{
        descuento=0;
        monto=compra;
        alert(`El sueldo es de ${monto} Soles`)
    }
    
}

function ejercicio2(){
    let pro_final

    let nombre=prompt("Nombre del alumno")

    let exa_parc=+prompt("Nota de examen parcial")
    let exa_fin=+prompt("Nota de examen final")
    let pro_pra=+prompt("Promedio de practicas")

    pro_final=(exa_parc+exa_fin+exa_fin+pro_pra)/4

    if(pro_final>=12){
        alert(`Alumno ${nombre} su nota es ${pro_final} y sale Aprobado`)
    }
    else{
        alert(`Alumno ${nombre} su nota es ${pro_final} y sale Desaprobado`)
    }
}

function ejercicio3(){
    let bonificacion, aumento
    
    let nombre=prompt("Nombre del trabajador")
    let sueldo=+prompt("Sueldo del trabajador")
    let hijos=+prompt("Numero de hijos")


    if(hijos>=1){
        aumento=sueldo*0.07
        bonificacion=sueldo+aumento
        alert(`El trabajador ${nombre} su sueldo basico es ${sueldo} , y obtendra una bonificacion del 7% siendo ${bonificacion} soles`)
    }
    else{
        alert(`El trabajador ${nombre} su sueldo basico es ${sueldo} soles `)
    }
    
}


function ejercicio4(){
    let porcentaje    
    let numero=+prompt("Ingrese su numero")

    if(numero>500){
        porcentaje=numero*0.18

        alert(`El 18% de ${numero} es : ${porcentaje}`)
    }
    else{
        alert(`Debes agregar un numero mayor a 500`)
    }
    
}

function ejercicio5(){
    
    let numero=+prompt("Ingrese su numero")
    let f= 1

    for (i=1; i <= numero; i++) {
        f*=i
        } 
        alert(`El factorial de ${numero} es: ${f}`)
}


