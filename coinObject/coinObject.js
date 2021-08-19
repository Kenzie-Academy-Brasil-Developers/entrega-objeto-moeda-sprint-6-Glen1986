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
      return chois
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
    },

    toHTML: function (toString) {
      const image = document.createElement("img");
      image.src = `./assets/img/${coin.toString()}.png`
      body.appendChild(image)
      return this.image;
    },
  };

  function display20Flips() {
    const results = [];
    const texto =["Heads", "Tails"]
    const text = document.createElement("p")
    for(let i = 0; i < 20; i++){
    results.push(texto[`${coin.flip()}`])

      let final = results.toString()
      text.innerHTML= final 
      body.appendChild(text);
    }
    return results
}

function display20Images() {
  const results = [];
  for(let i = 0; i < 20; i++){
    coin.toHTML();
    coin.flip()
    coin.toString()
    results.push(coin.toString())
  }
  return results
}
