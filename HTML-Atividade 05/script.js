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