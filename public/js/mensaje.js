const mensajeInput = document.querySelector(".mensaje-input");
const mensajeBoton = document.querySelector(".mensaje-boton");
const mensajeEstructura = document.querySelector(".chat_mensajes");
const mensajeBarra = document.querySelector(".chat_estructura");

mensajeBarra.scrollTop = mensajeBarra.scrollHeight - mensajeBarra.clientHeight;
mensajeBoton.addEventListener("click", addMensaje);
mensajeBoton.addEventListener("keypress", addMensaje);

// enviar mensajes
function addMensaje(event){
    event.preventDefault();
    if (event.key === 13) {
        document.getElementsByClassName("mensaje-boton").click();
    }
    
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje");

    const username = document.createElement("h6");
    username.innerText = "username:";
    mensajeDiv.appendChild(username);

    const nuevoMensaje = document.createElement("p");
    nuevoMensaje.innerText = mensajeInput.value;
    mensajeDiv.appendChild(nuevoMensaje);

    mensajeEstructura.appendChild(mensajeDiv)
    mensajeInput.value = "";
}

