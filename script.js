function getFile() {
  var manual = exercicio.manual.value;
  var pagina = exercicio.pagina.value;
  var exercicio = exercicio.exercicio.value;
  var URL = 'http://matbot.netlify.com/' + manual + '/' + pagina + '/' + exercicio + '..png';

  // Busca a imagem
  if (urlExists(URL)) {
    var logo = document.getElementById('img1');
    logo.src = URL;
  } else {
    var logo1 = document.getElementById('img1');
    logo1.src = 'http://matbot.netlify.com/' + manual + '/' + pagina + '/' + exercicio + '._1.png';
    var logo2 = document.getElementById('img2');
    logo2.src = 'http://matbot.netlify.com/' + manual + '/' + pagina + '/' + exercicio + '._2.png';
  }
}

function urlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status!=404;
}