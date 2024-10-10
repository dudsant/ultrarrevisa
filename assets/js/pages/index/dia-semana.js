function pegarDiaSemana() {
    const data = new Date()
    const diaSemanaNum = data.getDay()
    return diaSemanaNum - 1
}