function diasRestantes() {
    let diasRestantesDOM = document.getElementById('dias')
    const hoje = new Date()
    //Data atualizada 2025
    const dataUFRR = new Date('2025-11-24')
    const diferenca = dataUFRR - hoje

    const diasRestantes = Math.ceil(diferenca / (60 * 60 * 24 * 1000))
    

    diasRestantesDOM.innerText = `Faltam ${diasRestantes} dias para a UFRR`
}
