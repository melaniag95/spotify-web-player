function addPlaylist(){
    let playlist = window.prompt("Inserisci il nome della nuova playlist");
    if(playlist!== null){
        let item = document.createElement("LI");
        let node = document.createTextNode(playlist);
        item.appendChild(node);
        document.getElementById("myList").appendChild(item);
    }
}