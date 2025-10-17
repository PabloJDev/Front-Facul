function verificarRefeicao() {
    const inputComida = document.getElementById('comida');
    const comidaDigitada = inputComida.value.toLowerCase().trim();
    const paragrafoMensagem = document.getElementById('mensagem');

    let resultado = "";

    if (comidaDigitada === "pão com ovo") {
        resultado = "Café da manhã";
    } else if (comidaDigitada === "arroz e feijão") {
        resultado = "Almoço";
    } else {
        resultado = "Jantar";
    }

    paragrafoMensagem.innerHTML = resultado;
}

function botaoFor() {
    let paragrafoText = document.getElementById('text');

    for (let i = 0; i < 5; i++) {
        paragrafoText.innerHTML += i;
        console.log(i);
    }

    let lista = ["arroz", "salada", "picanha" ]
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        paragrafoText.innerHTML += `<br>${element}`;
    }

 }