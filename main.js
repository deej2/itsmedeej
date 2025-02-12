const main = document.querySelector('main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while(true) {
    let n = prompt('enter your name');

    if (n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank u";
    

    }
    
     if (n.length > 0) {
         alert ("What if maging seryoso na tayo");
         alert ('What if tayo talaga');
         alert ('I love you bebe + n');
        main.style.display = 'block';
        break; 
     }
    }

     

