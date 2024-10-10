const cronogramaMaterias = [
    {dia:'Segunda', materia1: '', materia2: ''}, {dia:'Terça', materia1: '', materia2: ''}, {dia:'Quarta', materia1: '', materia2: ''}, {dia:'Quinta', materia1: '', materia2: ''}, {dia:'Sexta', materia1: '', materia2: ''}, {dia:'Sábado', materia1: '', materia2: ''}
]

function salvar() {
    
    //Segunda
    cronogramaMaterias[0].materia1 = segundaA.value
    cronogramaMaterias[0].materia2 = segundaB.value

    //Terça
    cronogramaMaterias[1].materia1 = terçaA.value
    cronogramaMaterias[1].materia2 = terçaB.value

    //Quarta
    cronogramaMaterias[2].materia1 = quartaA.value
    cronogramaMaterias[2].materia2 = quartaB.value

    //Quinta
    cronogramaMaterias[3].materia1 = quintaA.value
    cronogramaMaterias[3].materia2 = quintaB.value

    //Sexta
    cronogramaMaterias[4].materia1 = sextaA.value
    cronogramaMaterias[4].materia2 = sextaB.value

    //Sábado
    cronogramaMaterias[5].materia1 = sábadoA.value
    cronogramaMaterias[5].materia2 = sábadoB.value

    //Adiciona ao localStorage
    localStorage.setItem("cronograma", JSON.stringify(cronogramaMaterias))

    //Salvando as informções do select
    localStorage.setItem("segundaA", segundaA.value)
    localStorage.setItem("segundaB", segundaB.value)

    localStorage.setItem("terçaA", terçaA.value)
    localStorage.setItem("terçaB", terçaB.value)

    localStorage.setItem("quartaA", quartaA.value)
    localStorage.setItem("quartaB", quartaB.value)

    localStorage.setItem("quintaA", quintaA.value)
    localStorage.setItem("quintaB", quintaB.value)

    localStorage.setItem("sextaA", sextaA.value)
    localStorage.setItem("sextaB", sextaB.value)

    localStorage.setItem("sábadoA", sábadoA.value)
    localStorage.setItem("sábadoB", sábadoB.value)
    
    window.alert('Seu cronograma foi salvo!')
}
