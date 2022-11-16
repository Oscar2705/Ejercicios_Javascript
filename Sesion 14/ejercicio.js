function ejercicio1(){
    let total, por_h,por_m
    let hombre=+prompt("Cantidad de hombres")
    let mujer=+prompt("Cantidad de mujeres")

    total=hombre+mujer

    por_h=(hombre/total)*100
    por_m=(mujer/total)*100

    alert(`El total es: ${total} el porcentaje de hombres es : ${por_h}% el porcentaje de mujeres es ${por_m}%`)

}

function ejercicio2(){
    let av_mar,av_aban,av_28,av_avi,av_tac
    let monto=+prompt("Ingresa el monto")

    av_mar=monto*0.35
    av_aban=monto*0.25
    av_28=monto*0.10
    av_avi=monto*0.15
    av_tac=monto-(av_mar+av_aban+av_28+av_avi)

    alert(`El monto es ${monto} y se va dividir en Av Mar ${av_mar}soles, en Av Abancay ${av_aban}soles, , en Av 28 de Julio ${av_28}soles, en Av Aviacion ${av_avi}soles, en Av Tacna ${av_tac}soles`)

}

function ejercicio3(){
    
        let toteg,totmay,totmen;
        let eg=+prompt("Entrada general")
        let emay=+prompt("Entrada para mayores de 65")
        let entmen=+prompt("Entrada para menores de edad")       
              
        toteg=eg*150;/*Total de entradas generales*/ 
        totmay=emay*50;/*Total de entradas mayores*/
        totmen=entmen*80;/*Total de entradas menores*/
    
        total=toteg+totmay+totmen; /*Total recaudado*/ 
        
        alert(`Para entrada general fue ${toteg} , entrada mayores de edad es ${totmay}, 
        para menores de edad fue ${totmen} y el total es : ${total}`)

}