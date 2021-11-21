//variables globales
let cola_productos = [];

document.getElementById("seleccion").onchange=muestraLista;

function muestraLista() {
  if (document.getElementById("seleccion").value =="") {
    document.getElementById("txt_muestra").innerHTML ="";
    return;
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState == XMLHttpRequest.DONE){
      if(xhttp.status==200){
        document.getElementById("txt_muestra").innerHTML = xhttp.responseText;
      }
      else if(xhttp.status="400"){
        alert('Hubo un error al 400');
      }else{
        alert('Error 200');
      }
    }
  }
  xhttp.open("GET",archivo_texto(),true);
  xhttp.send();

  function archivo_texto(){
    if(document.getElementById("seleccion").value=="1"){
      return "assets/data/video.html";
    }else if(document.getElementById("seleccion").value=="2"){
      return "assets/data/musica.html";
    }else if(document.getElementById("seleccion").value=="3"){
      return "assets/data/peliculas.html";
    }
  }
}
//variables para productos
/*var cod = document.getElementById(cod).textContent;
var desc = document.getElementById(desc).textContent;
var precio = document.getElementById(precio).textContent;*/

function addProducto(cod,desc,precio){
  //Creación de objeto
  producto = {
    cod: cod,
    desc: desc,
    precio
  }
  //Agregar producto a la cola_productos
  cola_productos.push(producto);

  //Creación de tabla
  let html = '<table class="table table-striped table-hover">'
  for (var i=0; i < cola_productos.length; i++){
    html += "<tr>"
    html += "<td>" + cola_productos[i].cod + "<td>"
    html += "<td>" + cola_productos[i].desc + "<td>"
    html += "<td>" + cola_productos[i].precio + "<td>"
  }
  html += "<table>";

  document.getElementById("actualiza").innerHTML = html;
}