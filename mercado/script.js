//id = produto , preco , mercado , categoria , imagemInput
//Adicionar


let lista = [];
const add = document.getElementById("adicionar")

const cards = document.querySelector(".product-card")

add.addEventListener("click", (event) => {
const produto = document.getElementById("produto").value
const preco = document.getElementById("preco").value
const mercado = document.getElementById("mercado").value
const categoria = document.getElementById("categoria").value

const imagem = document.getElementById("imagemInput")
  const arquivo = imagem.files[0];

  
    const url = URL.createObjectURL(arquivo);
    adicionado({ produto, preco, mercado, categoria, url });
  


  console.log(arquivo);



});

// adicionado em uma lista array
function adicionado(dados) {
  lista.push(dados);
  console.log(lista);
   renderCards();
}


////
// Cria os cards dinamicamente
function renderCards() {
  cards.innerHTML = ""; // limpa antes de desenhar

  lista.forEach((item) => {
    const cardHTML = `
      <div class="product-card">
        <div class="product-category">${item.categoria}</div>
        <img src="${item.url}" alt="Imagem do Produto">
        <div class="product-info">
          <div class="mercado">Mercado: ${item.mercado}</div>
          <div class="produto">${item.produto}</div>
          <div class="preco">R$ ${item.preco}</div>
        </div>
      </div>
    `;
    cards.innerHTML += cardHTML;
  });
}