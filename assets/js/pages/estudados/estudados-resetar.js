function resetar() {
    let confirmar = window.prompt('Para resetar a lista de assuntos estudados, digite "CONFIRMAR":').toLocaleLowerCase()

    if (confirmar == 'confirmar') {
        alert('A lista de assuntos estudados foi resetada com sucesso.')

        limparAssuntosLocalStorage()
        limparDivs()

    } else {
        alert('[ERRO] A lista NÃO foi resetada, digite corretamente.')
    }
}

function limparAssuntosLocalStorage() {

    localStorage.removeItem("PortuguêsEstudados");
    localStorage.removeItem("espanholEstudados");
    localStorage.removeItem("matemáticaEstudados");
    localStorage.removeItem("físicaEstudados");
    localStorage.removeItem("biologiaEstudados");
    localStorage.removeItem("químicaEstudados");
    localStorage.removeItem("geografiaEstudados");
    localStorage.removeItem("históriaEstudados");

}

function limparDivs() {

    //Português
    portuguêsPSS1.innerHTML = ''
    portuguêsPSS2.innerHTML = ''
    portuguêsPSS3.innerHTML = ''
    
}