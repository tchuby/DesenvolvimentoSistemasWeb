function validaCampos () {
    let elemento = document.getElementById("nome")
    if (elemento.value.length < 3){
        elemento.focus();
        elemento.style.border = "2px solid red";
        elemento.style.outline = 0;
    } else {
        elemento.style.border = "2px solid green";
    }
}

function mascara(teclado, mascara) {
    var posicao = teclado.length;
    var saida = mascara.substring(1, 0);
    var texto = mascara.substring(posicao);
    if (texto.substring(0, 1) !== saida){
        teclado.value += texto.substring(0, 1);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', (e) => {
        let input = e.target.value;
        input = input.replace(/\D/g, ''); // Remove tudo que não é dígito

        // Formata o número conforme o tamanho
        if (input.length > 10) {
            input = input.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (input.length > 5) {
            input = input.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (input.length > 2) {
            input = input.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
        } else {
            input = input.replace(/^(\d{0,2}).*/, '($1');
        }

        e.target.value = input;
    });
});