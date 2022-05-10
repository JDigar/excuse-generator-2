window.onload = function() {
  document.querySelector('#btn').addEventListener("click", function() {
    document.querySelector('#the-excuse').innerHTML = randomFull();
  })
  
  }; 

  let randomFull = function() {
    
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
  
    let random1 = Math.floor(Math.random() * who.length);
    let random2 = Math.floor(Math.random() * what.length);
    let random3 = Math.floor(Math.random() * when.length);
  
    return who[random1] + " " + what[random2] + " " + when[random3];
 
  };
  
   
  