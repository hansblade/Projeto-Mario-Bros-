/*

OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer

OBJETIVO 2 - quando o usuário cliclar no X, devemos fechar a modal

OBJETIVO 1
- passo 1 - dar um jeito de pegar o elemntoque representa o botão na tela usando o js
- passo 2 - dar um jeitode identificar quando o usuário clilca no botão
- passo 3 - dar um jeito de pegar o elemento da modal no js
- passo 4- abrir a modal na tela

OBJETIVO 2
- passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
- passo 2 - dar um jeito de identificar quando o usuário clilcar no X
- passo 3 - fechar modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer");
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    console.log("clicou em fechar o trailer"); 
    alternarModal();
    video.setAttribute("src", "");
});
