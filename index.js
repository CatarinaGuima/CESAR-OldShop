const mainImage = document.querySelector(".main-image");
const backImage = document.getElementById("back-image");
const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");

// Função para substituir a imagem principal
function replaceImage(newImage) {
  // Adiciona a classe da nova imagem à mainImage
  mainImage.className = newImage.className;
  mainImage.src = newImage.src; // Altera a src para a nova imagem

  // Restaura a imagem principal ao sair do mouse
  newImage.addEventListener("mouseout", () => {
    // Verifica se o mainImage e o atributo original existem
    const originalSrc = mainImage.getAttribute("data-original-src");
    if (mainImage && originalSrc) {
      mainImage.src = originalSrc; // Restaura a src original da mainImage
      mainImage.className = "main-image"; // Restaura a classe original
    }
  });
}

// Armazena a src original da mainImage para restaurar depois
mainImage.setAttribute("data-original-src", mainImage.src);

// Adiciona os eventos de mouseover
backImage.addEventListener("mouseover", () => replaceImage(backImage));
leftImage.addEventListener("mouseover", () => replaceImage(leftImage));
rightImage.addEventListener("mouseover", () => replaceImage(rightImage));


const btnquantity = document.getElementById("addToCart");
btnquantity.addEventListener("click", () => {
    alert("O produto adicionado com sucesso!");
    const quantity = document.getElementById("input-qtd").value;  // Pega o valor da quantidade
    const qtdCart = document.getElementById("qtd-cart");
    qtdCart.textContent = quantity;  // Atualiza o conteúdo de qtdCart com o valor da quantidade
    document.getElementById("input-qtd").value = 1;  // reseta para o valor do input de quantidade padrão
});
