// 1. Crear un array para almacenar los nombres
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// 3. Función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// 4. Función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Elegir un nombre aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    // Mostrar resultado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
