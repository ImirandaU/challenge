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

// Función para mostrar la lista de amigos en el HTML
function actualizarListaVisual() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // 2. Limpiar la lista existente
    lista.innerHTML = "";
    
    // 3. Iterar sobre el arreglo usando un bucle for
    for (let i = 0; i < amigos.length; i++) {
        // 4. Agregar elementos a la lista: crear un nuevo elemento de lista
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

// Función placeholder para el sorteo (para futuros desafíos)
function sortearAmigo() {
    // Esta función se implementará en los siguientes desafíos
    console.log('Función sortearAmigo() será implementada próximamente');
}
