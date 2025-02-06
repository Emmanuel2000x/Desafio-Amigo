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
      
}



function clearBox(){
    document.querySelector('#friend').value = '';
}