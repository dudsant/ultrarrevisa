function removerAssunto() {

    //Matéria 1

    let cópiaMatéria1 = acessarCópia[assuntoSorteado1.materia]
    //acessa a cópia da matéria

    let assuntosArray1 = etapaSorteada1.assunto
    //acessa a array assuntos da matéria

    assuntosArray1.splice(índiceAssunto1, 1)
    //remove o assunto da array

    localStorage.setItem(`cópia${assuntoSorteado1.materia}`, cópiaMatéria1)
    //salva no localStorage a array atualizada



    //Matéria 2

    let cópiaMatéria2 = acessarCópia[assuntoSorteado2.materia]
    //acessa a cópia da matéria

    let assuntosArray2 = etapaSorteada2.assunto
    //acessa a array assuntos da matéria

    assuntosArray2.splice(índiceAssunto2, 1)
    //remove o assunto da array

    localStorage.setItem(`cópia${assuntoSorteado2.materia}`, cópiaMatéria2)
    //salva no localStorage a array atualizada

}