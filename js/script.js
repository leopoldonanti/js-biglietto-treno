var eta = prompt("Hey biscottino quanti anni hai?");
var km = prompt("Quanti km dista il tuo arrivo?");

parseInt (eta);
parseFloat (km);

var prezzo;
parseFloat (prezzo);

if(eta < 18){
  prezzo = ((km * 0.21) - ((km * 0.21) / 100 * 20));
  console.log("La tua età è: " + eta + " anni. Il tuo prezzo è: " + prezzo.toFixed(2));
}else if(eta>65){
    prezzo = ((km * 0.21) - ((km * 0.21) / 100 * 40));
    console.log("La tua età è: " + eta + " anni. Il tuo prezzo è: " + prezzo.toFixed(2));
  }else{
    prezzo = km * 0.21;
    console.log("La tua età è: " + eta + " anni. Il tuo prezzo è: " + prezzo.toFixed(2));
  }







