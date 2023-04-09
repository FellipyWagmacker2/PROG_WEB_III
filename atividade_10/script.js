// Declaração da variável que guarda o índice do slide atual
let slideIndex = 1;

// Mostra o slide atual quando a página é carregada
showSlides(slideIndex);

// Função que avança ou retrocede para o próximo slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função que exibe um slide específico
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função que mostra o slide atual e esconde os demais
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
}
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Remove a classe "active" de todos os pontos indicadores
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Mostra apenas o slide atual e adiciona a classe "active" ao ponto indicador correspondente
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  }



