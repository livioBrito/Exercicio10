Number.prototype.intervalo = function(inicio, fim){
    return this >= inicio && this <= fim
}

const resultado = function (nota){
    if(nota.intervalo(9,10)){
        console.log('Receber medalha')
    }else if(nota.intervalo(7, 8.99)){
        console.log('Aprovado')
    }else if (nota.intervalo(4, 6.99)){
        console.log('Recuperação')
    }else if (nota.intervalo(0, 3.99)){
        console.log('Reprovado')
    }else {
        console.log('Nota inválida')
    }
}

resultado(10)
resultado(8.9)
resultado(3)
resultado(-8)