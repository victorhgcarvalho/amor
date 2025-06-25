function irParaHome() {
  const musica = document.getElementById("bg-music");
  musica.play();
  localStorage.setItem("musicaTocando", "true"); // Marca que a música deve continuar

  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "home.html";
  }, 2000);
}



// Carrossel
const imagens = [
  "imgs/foto1.jpg",
  "imgs/foto2.jpg",
  "imgs/foto3.jpg",
  "imgs/foto4.jpg",
  "imgs/foto5.jpg",
  "imgs/foto6.jpg",
  "imgs/foto7.jpg",
  "imgs/foto8.jpg",
  "imgs/foto9.jpg",
  "imgs/foto10.jpg"
];

let index = 0;
const imgElement = document.getElementById("carousel-img");

setInterval(() => {
  index = (index + 1) % imagens.length;
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = imagens[index];
    imgElement.style.opacity = 1;
  }, 500);
}, 3000);

// Texto com digitação
const text = "1 ano, 12 meses, 52 semanas, 365 dias… ao seu lado. Que venham muitos mais.";
let i = 0;
const typing = document.getElementById("typing");

function digitar() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(digitar, 60);
  }
}

window.onload = () => {
  digitar();
  criarCoracoes();
};

// Corações flutuando
function criarCoracoes() {
  const container = document.querySelector(".floating-hearts");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatHeart 5s linear";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 500);

musica.volume = 0.3; // Deixa a música mais suave


  
  
}
