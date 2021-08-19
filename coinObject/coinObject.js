/*
class Coin {
  constructor(state, flip, toString, toHTML){
    this.state = 0,
    this.flip = flip,
    this.toString = toString,
    this.toHTML = toHTML
  }
 fliping(){
   const random = (num) =>Math.floor(Math.random()*num)
  console.log(random(2));
  }
}
*/

//const coin = new Coin( ' ',this.fliping )
const body = document.getElementById("body");

const coin = {
    state: 0,

    flip: function () {
     const random = (num) =>Math.floor(Math.random()*num)
     return this.state = random(2)
    },

    toString: function (state) {
      let chois = ""
      if(this.state == 0){
        chois = "heades"
      }if(this.state == 1){
        chois = "Tails"
      }
      console.log(chois)
      return chois
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
    },

    toHTML: function (chois) {
      const image = document.createElement("img");
      image.src = `./assets/img/Heads.png`
      image.alt = `./assets/img/Tails.jpg` 
      body.appendChild(image)
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
      return this.image;
    },
  };

  function display20Flips(state) {
    const results = [];
    for(let i = 0; i < 20; i++){
      result.push(state)
    }
    display20Flips();
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}

function display20Images() {
  const results = [];
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
}
