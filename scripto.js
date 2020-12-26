const buton = document.getElementById('butao');
const img = document.getElementById('imag');
const titulo = document.getElementById('titu');

const img1 = "asserts/1.png"
const img2 = "asserts/2.png"
const img3 = "asserts/3.png"
const img4 = "asserts/4.png"
const img5 = "asserts/5.png"
const img6 = "asserts/6.png"

console.log("O scripto.js foi carregado WOW");
console.log("O style.css foi carregado WOW");

buton.addEventListener('click', () => {
  num = Math.floor(Math.random() * 10);  

  if (num === 1 || num === 2){
      img.src = img1
      titulo.innerHTML = "Não sei o que é ¯\\_(ツ)_/¯"
  } else if (num === 3 || num === 4){
      img.src = img2
      titulo.innerHTML = "Anhangá"
  } else if (num === 5 || num === 6){
      img.src = img3
      titulo.innerHTML = "Capeta de ouro WOW"
  } else if (num === 7 || num === 8){
    img.src = img4
    titulo.innerHTML = "Grande rei do gado"
  } else if (num === 9){
    img.src = img5
    titulo.innerHTML = "Anubis que não está nu"
  } else if (num === 0){
    img.src = img6
    titulo.innerHTML = "Enderman com asfixia pois não tem nariz pra respirar e nem pescoço, mas isso não interfere em nada"
  }
  
  console.log(num);

})