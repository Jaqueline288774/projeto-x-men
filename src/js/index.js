/*
o que precisamos fazer? - quando passar o mouse em  cima do personagem na lista temos que adicionar a  borda azul de seleçao na imagem pequena do  personagem e mostrar a imgem, o nome e o texto grande do personagem que está selecionado

OBJETIVO 1 - quando passar o mouse em cima  do personagem na listagem, devemos selecioná-lo
 passo 1- pegar os personagens no JS  pra poder verificar quando o usuário passar mouse em cima de um deles

 passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

 passo 3 - verificar se já existir um personagem selecionado, se sim, devemos remover a seleçao dele

 OBJETIVO 2 - quando passar o mouse em  cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande 

 passo 1- pegar o elemento do personagem grande pra adicionar as informações nele

 passo 2- alterar a imagem do personagem grande 

 passo 3- alterar o nome do personagem grande

 passo 4- alterar a descrição do personagem grande

*/

//OBJETIVO 1 - quando passar o mouse em cima  do personagem na listagem, devemos selecioná-lo
//passo 1- pegar os personagens no JS  pra poder verificar quando o usuário passar mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');


//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter' , () => {

    //passo 3 - verificar se já existir um personagem selecionado, se sim, devemos remover a seleçao dele

    const personagmSelecionado = document.querySelector('.selecionado');
    personagmSelecionado.classList.remove('selecionado')


     personagem.classList.add('selecionado');

     //OBJETIVO 2 - quando passar o mouse em  cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande 

     //passo 1- pegar o elemento do personagem grande pra adicionar as informações nele

     const ImagemPersonagemGrande = document.querySelector('.personagem-grande');

     //passo 2- alterar a imagem do personagem grande 
     const idPersonagem = personagem.attributes.id.value;

     ImagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
     ;

     //passo 3- alterar o nome do personagem grande

     const nomePersonagem = document.getElementById('nome-personagem');

     nomePersonagem.innerText = personagem.getAttribute('data-name');


     //passo 4- alterar a descrição do personagem grande

     const descricaoPersonagem = document.getElementById('descricao-personagem');
     descricaoPersonagem.innerText = personagem.getAttribute('data-description');


    } )
})