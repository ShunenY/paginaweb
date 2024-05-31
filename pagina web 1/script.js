var i = 0;
var txt = 'systemas de hardware'; // El texto que deseas que se escriba
var speed = 100; // Velocidad de escritura en milisegundos

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    // Pausa antes de borrar el texto
    setTimeout(function() {
      document.getElementById("title").innerHTML = '';
      // Reinicia el texto y llama a typeWriter nuevamente después de un retraso
      i = 0;
      setTimeout(typeWriter, 100); // Ajusta este valor para cambiar el retraso antes de que el texto se vuelva a escribir
    }, 2000); // Ajusta este valor para cambiar el retraso antes de borrar el texto
  }
}

typeWriter();
