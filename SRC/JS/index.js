/* 
 oque precisamos fazer? - quando clicar no botão do personagem na lista temos que marcar 
 o botão como selecionado e mostrar o personagem correspondente
OBJETIVO 1 - quando clicar no botão do personagem na lista,
   marcar o botao como selecionado 
      passo 1 - pegar os botões no js pra poder verificar quando o usuário clicar em cima de um deles
      passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
      passo 3 - verificar se ja existe um botão selecionado,se sim, devemos remover a seleção dele 
OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
      passo 1 - pegar os personagem no js pra poder mostrar ou esconder ele 
      passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou 
      passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele     
    */ 
 // OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
     // passo 1 - pegar os botões no js pra poder verificar quando o usuário clicar em cima de um deles
    
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarbotao();
		desselecionarpersonagem();

		botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");

		
	});
});


function desselecionarpersonagem() {
	const personagemselecionado = document.querySelector(".personagem.selecionado");
	personagemselecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
	const botaoselecionado = document.querySelector(".botao.selecionado");
	botaoselecionado.classList.remove("selecionado");
}