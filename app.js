let listaAmigos = [];


function agregarAmigo() {
    
    let nombreAmigo = document.getElementById ("amigo").value;

    if (nombreAmigo === "") {
        alert ("Ingresa un nombre.")

    } else{
        listaAmigos.push(nombreAmigo);
        document.getElementById ("amigo").value ="";
        mostrarListaAmigos();
    }

}

function mostrarListaAmigos () {
    let lista = "";
    let amigo = 0;

  while (amigo < listaAmigos.length) {
    lista = lista + "<li>" + listaAmigos[amigo] + "</li>";
    amigo = amigo + 1;
  }

    document.getElementById ("listaAmigos").innerHTML = lista;
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos en la lista para sortear");
    return;
  }

  let indice = Math.floor(Math.random() * listaAmigos.length);
  let seleccionado = listaAmigos[indice];

  document.getElementById("resultado").innerHTML = "El amigo secreto es: " + seleccionado;
}