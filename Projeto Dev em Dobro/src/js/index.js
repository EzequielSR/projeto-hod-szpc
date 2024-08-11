//Objetivo- quando clicarmoss no botão temos que mostrar a imagem de fundo correspondente
// -passo 1 - dar um jeito de pegar o elemento HTML dos Botões
// -passo 2 - dar um jeito de identificar o clique do usuário do botão
// -passo 3 - desmarcar o botão selecionado anterior
// -passo 4 - marcar o botão clicado como se estivesse selecionado
// -passo 5 - esconder a imagem anteriormente selecionado
// -passo 6 - fazer aparecer a imagem correspondente ao botão clicado
// -passo 7 - esconder a informação do dragão anteriormente selecionado
// -passo 8 - mostrar a informação do dragão refetente ao botão clicado
const botaoCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const informacoes = document.querySelectorAll('.informacoes');

botaoCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        botao.classList.add('selecionado');

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoes(indice);

    })
})

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");

    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}