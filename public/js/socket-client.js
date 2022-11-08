//Referencias
const cajaMensajes  = document.querySelector('#caja-mensajes');
const cuadroMensaje = document.querySelector('#cuadroMensaje');
const mensajeForm   = document.querySelector('#formMensaje');
const modoStatus    = document.querySelector('#status')

//Socket client
/*const socket = io();

socket.on('connect', ()=>{
    

    modoStatus.classList.remove('status-off')
    modoStatus.classList.add('status-on')
})

mensajeForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const mensaje = cuadroMensaje.value;
    socket.emit('enviar-mensaje', mensaje)
    cuadroMensaje.value = ""
})

socket.on('mostrar-mensaje', (data)=>{
    const mensaje = data;
    
    cajaMensajes.innerHTML += `
        <div class="mensaje">
            <p class="fs-5">${data}</p>
        </div>
    `
})


socket.on('connect', ()=>{
    

    modoStatus.classList.remove('status-off')
    modoStatus.classList.add('status-on')
})

socket.on('disconnect', ()=>{

    modoStatus.classList.remove('status-on')
    modoStatus.classList.add('status-off')
})*/