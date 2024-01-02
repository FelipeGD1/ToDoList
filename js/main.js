const containerList= document.getElementById("list-notes");
const form = document.getElementById("form");
let listNotes= [];


form.addEventListener("submit", addList);
document.addEventListener("DOMContentLoaded", ()=>  {
    listNotes= JSON.parse(localStorage.getItem("list"))|| []

    crearHTML();

    
})


function addList(e){
    e.preventDefault();

    const textArea= document.getElementById("text").value;
    if(textArea===""){
        mostrarError("Por favor agregue algo")
        return;
    }

    let listNotesObj ={
        id:Date.now(),
        textArea
    }

    listNotes= [... listNotes, listNotesObj];

    crearHTML();

    form.reset();
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
    limpiarHTML();

    listNotes.forEach(list=> {
        const li= document.createElement("li");
        const deleteList= document.createElement("a");
        deleteList.classList.add("delete-list");
        deleteList.textContent= "X";
        deleteList.onclick= () => {
            borrarLista(list.id);
        }
        
        li.textContent=list.textArea;
        containerList.appendChild(li);
        li.appendChild(deleteList);
    });
    sincronizarNotas();
}
function sincronizarNotas(){
    localStorage.setItem("list",JSON.stringify(listNotes));

}
function borrarLista(id){
    listNotes= listNotes.filter(list=>list.id !== id);
    crearHTML();


}

function limpiarHTML (){
    while(containerList.firstChild){
        containerList.removeChild(containerList.firstChild);


    }
}
