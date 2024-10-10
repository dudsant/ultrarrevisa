//Não consegui fazer funcionar


let checkbox = document.getElementById('checkbox')
let domingoTable = document.getElementsByClassName('dom')

function incluirDomingo() {
    if (checkbox.checked == true) {
        // Supondo que só haja um elemento com a classe 'dom'
        domingoTable[0].innerHTML = `<p>Domingo</p>
                <select name="domingoSelect" id="domingoA">
                    <option value="" selected>Selecione</option>
                    <option value="biologia">Biologia</option>
                    <option value="química">Química</option>
                    <option value="matemática">Matemática</option>
                    <option value="física">Física</option>
                    <option value="geografia">Geografia</option>
                    <option value="história">História</option>
                    <option value="português">Português</option>
                    <option value="espanhol">Espanhol</option>
                </select>
                <select name="domingoSelect" id="domingoB">
                    <option value="" selected>Selecione</option>
                    <option value="biologia">Biologia</option>
                    <option value="química">Química</option>
                    <option value="matemática">Matemática</option>
                    <option value="física">Física</option>
                    <option value="geografia">Geografia</option>
                    <option value="história">História</option>
                    <option value="português">Português</option>
                    <option value="espanhol">Espanhol</option>
                </select>`
    } else if (checkbox.checked == false) {
        domingoTable[0].innerHTML = ''
    }
}
