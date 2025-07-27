const amigos = []; 

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; // Obtener el valor del input
    amigo = amigo.trim();                       // Eliminar espacios al inicio y al final
    if (!amigo){
        alert('Por favor, ingresa un nombre de amigo.');
        return;
    }
    amigos.push(amigo);
    mostrarAmigos();                            // Mostrar la lista actualizada de amigos
    limpiarInput();                             // Limpiar el input después de agregar
    return;
}

function mostrarAmigos(){                       // Mostrar la lista de amigos en el HTML
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        document.getElementById('listaAmigos').innerHTML += `<li>${amigos[i]}</li>`;
    }
    return;
}

function sortearAmigo(){                        // Función para sortear un amigo de la lista
    if(!amigos.length){                         //Si no hay elementos en el array
        alert('No hay amigos para sortear.');
        return;
    }else{                                      // Si hay amigos, se procede a sortear uno
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);// Generar un índice aleatorio
        const amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
    return;
}

function limpiarInput(){                       // Limpiar el input y enfocar nuevamente
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    return;
}