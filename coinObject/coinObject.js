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
        chois = "Heades"
      }if(this.state == 1){
        chois = "Tails"
      }
      console.log(chois)
      return chois
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
    },

    toHTML: function (toString) {
      const image = document.createElement("img");
      image.src = `./assets/img/${coin.toString()}.png`
      console.log(coin.toString())
      body.appendChild(image)
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
      return this.image;
    },
  };

  function display20Flips() {
    const results = [];
    const texto =["Heads", "Tails"]
    const text = document.createElement("p")
    for(let i = 0; i < 20; i++){
    results.push(texto[`${coin.flip()}`])
      text.innerHTML= results 

      let final = results.toString()
      body.appendChild(text);
    //  display20Images();
    }
 //   console.log(results)
    return results
}
//display20Flips();

function display20Images() {
  const results = [];
  for(let i = 0; i < 20; i++){
    coin.toHTML();
    console.log(coin.flip())
    console.log(coin.toString())
  }
  return results
}
