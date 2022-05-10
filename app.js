window.onload = function() {
  document.querySelector('#btn').addEventListener("click", function() {
    document.querySelector('#the-excuse').innerHTML = randomFull;
  })
  
  }; 


    
    let who = ["El perro", "Mi sobrino", "Mi abuela", "Mi serpiente"];
    let what = [
      "se ha comido mis deberes",
      "me ha perdido el ordenador",
      "ha quemado mi casa",
      "me ha hecho daño"
    ];
    let when = [
      "antes de clase",
      "justo en este momento",
      "cuando lo acabé",
      "mientras lo hacia"
    ];
  
    let random1 = Math.floor(Math.random() * (who.length - 0)) + 0;
    let random2 = Math.floor(Math.random() * (what.length - 0)) + 0;
    let random3 = Math.floor(Math.random() * (when.length - 0)) + 0;
  
    let randomFull = who[random1] + " " + what[random2] + " " + when[random3];
 
   
  
   
  