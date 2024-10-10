function diasRestantes() {
    let diasRestantesDOM = document.getElementById('dias')
    let data = new Date()
    let dia = data.getDate()
    let mês = data.getMonth() + 1
    let diasRestantes = ''
    
    if (mês == 10){
        diasRestantes = (31 - dia) + 24
    } else if (mês == 11) {
        diasRestantes = 24 - dia
    } else if (dia == 24 && mês == 11) {
        diasRestantes = 'É hojeeeeeeee'
    }

    diasRestantesDOM.innerText = `Faltam ${diasRestantes} dias para a UFRR`
}
