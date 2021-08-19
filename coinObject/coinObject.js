const body = document.getElementById("body");
const monedas = document.createElement("section");
const textos = document.createElement("section");
const control = document.createElement("navBar");
const but1 = document.createElement("button")
const but2 = document.createElement("button")
control.appendChild(but1);
control.appendChild(but2);
body.appendChild(control)
body.appendChild(monedas)
body.appendChild(textos)
monedas.classList.add("monedas");
textos.classList.add("textos");
but1.classList.add("but_monedas")
but2.classList.add("but_textos")
but1.id="gerMonedas";
but2.id="gerTextos";
but1.innerText="Flips"
but2.innerText="Pics"
const accion1 = document.getElementById("gerMonedas");
const accion2 = document.getElementById("gerTextos");

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
      textos.appendChild(image)
      return this.image;
    },
  };

  function display20Flips() {
    const results = [];
    const texto =[" Heads", " Tails"]
    const text = document.createElement("p")
    coin.toString()
    for(let i = 0; i < 20; i++){
    results.push(texto[`${coin.flip()}`])
   // results.push(coin.toString())
   // results.push(coin.toString())

    //console.log(coin.toString())
      let final = results.toString()
      text.innerHTML= final 
      monedas.appendChild(text);
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
accion1.addEventListener("click", display20Flips);
accion2.addEventListener("click", display20Images);
