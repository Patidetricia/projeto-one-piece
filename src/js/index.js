const botoes = document.querySelectorAll(".botao");
const apresentacaoDosPersonagens = document.querySelectorAll(".imagem-e-conteudo");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        apresentacaoDosPersonagens[indice].classList.add("selecionado")
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".imagem-e-conteudo.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
