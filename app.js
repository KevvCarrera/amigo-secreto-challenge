// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    if (!nombre) return alert('Por favor, inserte un nombre.');

    amigos.push(nombre);
    actualizarListaAmigos();
    document.getElementById('amigo').value = '';
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) return alert('No hay amigos disponibles para sortear.');

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}