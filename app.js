let friends = []

function agregarAmigo(){
    let newFriend = document.getElementById('friend').value;
    if (newFriend == "") {
        alert("Porfavor agrega un nombre");
        return false;
    } else{
        friends.push(newFriend);
        clearBox();
    }
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    friends.forEach(generarLista);
      
}

function generarLista(name){
    let li = document.createElement("li");
    li.innerText = name;
    lista.appendChild(li);
}

function sorteo(){
    //Generacion aleatoria del indice del vector de amigos
    //Se revisa que el array no este vacio
    if (friends.length){
        let index = Math.floor(Math.random()*friends.length);
        let friendChoose = friends[index];
        let result = document.getElementById('resultado');
        result.innerHTML = friendChoose;
    } else {
        alert("No se ha agregado ningun amigo");
    }
}

function clearBox(){
    document.querySelector('#friend').value = '';
}