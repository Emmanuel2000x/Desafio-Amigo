let friends = []

function agregarAmigo(){
    let newFriend = document.getElementById('friend').value;
    if (newFriend == "") {
        alert("Porfavor agrega un nombre");
        return false;
    } else{
        friends.push(newFriend);
        console.log(friends),
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

function clearBox(){
    document.querySelector('#friend').value = '';
}