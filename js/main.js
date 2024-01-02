const containerList= document.getElementById("list-notes");
const form = document.getElementById("form");

form.addEventListener("submit", addList);

let listNotes= [];




function addList(e){
    e.preventDefault();

    const textArea= document.getElementById("text").value;
    if(textArea===""){
        mostrarError("Por favor agregue algo")
        return;
    }

    listNotes= [... listNotes, textArea];
    console.log(listNotes);
    crearHTML();

}

function mostrarError(error){
    const mensajeError = document.createElement("a");
    mensajeError.textContent= error;
    mensajeError.classList.add("error");
    form.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 2000);
}
function crearHTML(){
    console.log("añadiendo nota");

}
