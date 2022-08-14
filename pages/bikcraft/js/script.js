const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

// Ativar Links do Menu
const links = selectAll(".alfa__header--menu a");
function ativarLink(link) {
	const url = location.href;
	const href = link.href;
	if (url.includes(href)) {
		link.classList.add("active");
	}
}
links.forEach(ativarLink);
//

// Ativar Itens do orcamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
	const elemento = document.getElementById(parametro);
	if (elemento) {
		elemento.checked = true;
	}
}
parametros.forEach(ativarProduto);
//

// Ativar perguntas recentes
const perguntas = selectAll(".alfa__perguntas button");
function ativarPergunta(event) {
	const pergunta = event.currentTarget;
	const controls = pergunta.getAttribute("aria-controls");
	const resposta = document.getElementById(controls);
	resposta.classList.toggle("active");
	const active = resposta.classList.contains("active");
	pergunta.setAttribute("aria-expanded", active);
}

function eventosPerguntas(pergunta) {
	pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);
//

// Galeria de Bicicletas
const galeria = selectAll(".alfa__bicicleta--imagens img");
const galeriaContainer = select(".alfa__bicicleta--imagens");

function trocarImagem(event) {
	const img = event.currentTarget;
	const media = matchMedia("(min-width: 1000px)").matches;
	if (media) {
		galeriaContainer.prepend(img);
	}
}
function eventosGaleria(img) {
	img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
	new SimpleAnime();
}
