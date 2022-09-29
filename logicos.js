function desfaioWebI(trabalho1, trabalho2){
    const ganharSSD = trabalho1 || trabalho2
    const ganharNotebook = trabalho1 && trabalho2
    const ganharCamisaFACSI = trabalho1 != trabalho2
    const receberPuxaoDeOrelha = !ganharSSD

    return{ganharSSD, ganharNotebook, ganharCamisaFACSI, receberPuxaoDeOrelha}
}

console.log(desfaioWebI(true,true))
console.log(desfaioWebI(false, true))
console.log(desfaioWebI(true, false))
console.log(desfaioWebI(false,false))