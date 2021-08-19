class Coin {
  constructor(flip, toString, toHTML){
    this.flip = flip,
    this.toString = toString,
    this.toHTML = toHTML
  }
}
const coin = new Coin("hola", "stringCoin", "htmlCoin");
const moneda = new Coin("moneda", "stringMoneda", "htmlCoin");
console.log(coin);
console.log(moneda);
