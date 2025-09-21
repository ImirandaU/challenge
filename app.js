// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    const campoAmigo = document.getElementById('amigo');
    const nombreAmigo = campoAmigo.value.trim(); // .trim() elimina espacios al inicio y final
    
    // 2. Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return; // Salir de la función si está vacío
    }
    
    // 3. Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // 4. Limpiar el campo de entrada
    campoAmigo.value = '';
    
    // Opcional: Mostrar la lista actualizada en consola para verificar
    console.log('Amigos agregados:', amigos);
    
    // Opcional: Actualizar la lista visual en el HTML
    actualizarListaVisual();
}

// Función adicional para mostrar la lista de amigos en el HTML
function actualizarListaVisual() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función placeholder para el sorteo (para futuros desafíos)
function sortearAmigo() {
    // Esta función se implementará en los siguientes desafíos
    console.log('Función sortearAmigo() será implementada próximamente');
}