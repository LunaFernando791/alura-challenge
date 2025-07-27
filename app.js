const amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (!amigo){
        alert('Por favor, ingresa un nombre de amigo.');
        return;
    }
    amigos.push(amigo);
    mostrarAmigos();
    limpiarInput();
    return;
}

function mostrarAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        document.getElementById('listaAmigos').innerHTML += `<li>${amigos[i]}</li>`;
    }
    return;
}

function sortearAmigo(){
    if(!amigos.length){
        alert('No hay amigos para sortear.');
        return;
    }else{
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
    return;
}

function limpiarInput(){ 
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    return;
}