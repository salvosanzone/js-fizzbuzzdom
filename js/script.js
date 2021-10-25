// Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

//selezione la classe .row come variabile
const row = document.querySelector('.row');


//creo il mio ciclo for
for (let i = 1; i <= 100; i++)
  {
    const box = document.createElement('div'); //creo un elemento,in questo caso un div, chiamato box
    box.className = 'box'; //questo div creato adesso è vuoto quindi con questa funzione gli dico di sovrascrivere. classList in questo caso sarebbe stato lo stesso perchè al momento è vuoto
    box.innerHTML = i;
    row.append(box); //specifico dove voglio inserire il mio box e lo vedrò nella mia viewport
    console.log(box);
  }