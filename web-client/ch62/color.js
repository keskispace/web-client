const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

color.onclick = () => {
    console.log('got it');
    target.style.color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
}
