//Array para assuntos estudados de cada matéria

//Array para assuntos estudados de cada matéria, carregados do localStorage, ou array vazio se não houver dados
let assuntosEstudadosPortuguês = JSON.parse(localStorage.getItem("portuguêsEstudados")) || [];
let assuntosEstudadosEspanhol = JSON.parse(localStorage.getItem("espanholEstudados")) || [];
let assuntosEstudadosMatemática = JSON.parse(localStorage.getItem("matemáticaEstudados")) || [];
let assuntosEstudadosFísica = JSON.parse(localStorage.getItem("físicaEstudados")) || [];
let assuntosEstudadosBiologia = JSON.parse(localStorage.getItem("biologiaEstudados")) || [];
let assuntosEstudadosQuímica = JSON.parse(localStorage.getItem("químicaEstudados")) || [];
let assuntosEstudadosGeografia = JSON.parse(localStorage.getItem("geografiaEstudados")) || [];
let assuntosEstudadosHistória = JSON.parse(localStorage.getItem("históriaEstudados")) || [];


//Objeto com as matérias
const assuntosEstudadosObjeto = {
    português: assuntosEstudadosPortuguês,
    espanhol: assuntosEstudadosEspanhol,
    matemática: assuntosEstudadosMatemática,
    biologia: assuntosEstudadosBiologia,
    geografia: assuntosEstudadosGeografia,
    história: assuntosEstudadosHistória,
    química: assuntosEstudadosQuímica,
    física: assuntosEstudadosFísica
}
function salvarAssuntosGerados() {
    
    //Salvando assunto 1
    let assuntoEstudadoArray1 = assuntosEstudadosObjeto[matéria1]
    assuntoEstudadoArray1.push({matéria: etapaSorteada1.materia, assunto: assuntoSorteado1, etapa: etapaSorteada1.etapa})
    
    //Salvando assunto 2
    let assuntoEstudadoArray2 = assuntosEstudadosObjeto[matéria2]
    assuntoEstudadoArray2.push({matéria: etapaSorteada2.materia, assunto: assuntoSorteado2, etapa: etapaSorteada2.etapa})

    salvarAssuntosLocalStorage()
}

function salvarAssuntosLocalStorage() {
    
    //Salvando no localStorage

    localStorage.setItem("portuguêsEstudados", JSON.stringify(assuntosEstudadosPortuguês))
    localStorage.setItem("espanholEstudados", JSON.stringify(assuntosEstudadosEspanhol))
    localStorage.setItem("matemáticaEstudados", JSON.stringify(assuntosEstudadosMatemática))
    localStorage.setItem("físicaEstudados", JSON.stringify(assuntosEstudadosFísica))
    localStorage.setItem("biologiaEstudados", JSON.stringify(assuntosEstudadosBiologia))
    localStorage.setItem("químicaEstudados", JSON.stringify(assuntosEstudadosQuímica))
    localStorage.setItem("geografiaEstudados", JSON.stringify(assuntosEstudadosGeografia))
    localStorage.setItem("históriaEstudados", JSON.stringify(assuntosEstudadosHistória))

}
