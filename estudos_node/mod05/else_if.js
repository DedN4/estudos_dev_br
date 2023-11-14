Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}


const analiseNota = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Número inválido.')
    }
}

analiseNota(10)
analiseNota(7.90)
analiseNota(5.78)
analiseNota(0.10)
analiseNota(-11)