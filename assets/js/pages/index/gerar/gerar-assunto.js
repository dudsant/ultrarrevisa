let cronogramaJSON = localStorage.getItem("cronograma")
let cronograma = JSON.parse(cronogramaJSON)
let diaSemana = pegarDiaSemana()
let resultado = document.getElementById('res')



function gerar() {

    if (cronograma == null) {
        alert('Monte seu cronograma primeiro!')

    } else {

        gerarAssunto1()
        gerarAssunto2()
        salvarAssuntosGerados()
        removerAssunto()

    }
    
}



let matéria1 = ''
let matéria1dados = ''
let etapaSorteada1 = ''
let assuntoSorteado1 = ''
let índiceAssunto1 = ''
let índiceEtapa1 = ''

function gerarAssunto1() {

    matéria1 = cronograma[diaSemana].materia1
    //retorna química

    matéria1dados = matérias[matéria1]
    //retorna array com todas as etapas e assuntos da matéria

    índiceEtapa1 = Math.floor(Math.random() * matéria1dados.length)
    etapaSorteada1 = matéria1dados[índiceEtapa1]
    //retorna uma etapa aleatória da matéria

    if (etapaSorteada1.assunto.length === 0) {
        gerarAssunto1()
    }
    //Gera outro assunto se todos os assuntos da etapa gerada acababou

    índiceAssunto1 = Math.floor(Math.random() * etapaSorteada1.assunto.length)
    assuntoSorteado1 = etapaSorteada1.assunto[índiceAssunto1]
    //retorna um assunto aleatório da etapa sorteada
    
    resultado.innerHTML = `<p>Estude <span>${assuntoSorteado1}</span>, que faz parte do <span>${etapaSorteada1.etapa}</span> de <span>${etapaSorteada1.materia}</span>.</p>`
    //Imprime na tela o resultado

}

let matéria2 = ''
let matéria2dados = ''
let etapaSorteada2 = ''
let assuntoSorteado2 = ''
let índiceAssunto2 = ''
let índiceEtapa2 = ''

function gerarAssunto2() {

    matéria2 = cronograma[diaSemana].materia2
    //retorna química

    matéria2dados = matérias[matéria2]
    //retorna array com todas as etapas e assuntos da matéria
    
    índiceEtapa2 = Math.floor(Math.random() * matéria2dados.length)
    etapaSorteada2 = matéria2dados[índiceEtapa2]
    //retorna uma etapa aleatória da matéria

    if (etapaSorteada2.assunto.length === 0) {
        gerarAssunto2()
    }
    //Gera outro assunto se todos os assuntos da etapa gerada acababou

    índiceAssunto2 = Math.floor(Math.random() * etapaSorteada2.assunto.length)
    assuntoSorteado2 = etapaSorteada2.assunto[índiceAssunto2]
    //retorna um assunto aleatório da etapa sorteada
    
    resultado.innerHTML += `<p>Estude <span>${assuntoSorteado2}</span>, que faz parte do <span>${etapaSorteada2.etapa}</span> de <span>${etapaSorteada2.materia}</span>.</p>`
    //Imprime na tela o resultado

}

