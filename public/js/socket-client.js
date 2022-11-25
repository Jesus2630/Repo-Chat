//Referencias
const cajaMensajes  = document.querySelector('#caja-mensajes');
const cuadroMensaje = document.querySelector('#cuadroMensaje');
const mensajeForm   = document.querySelector('#formMensaje');
const modoStatus    = document.querySelector('#status');

//Socket client
const socket = io();

var params = new URLSearchParams(window.location.search);

if(!params.has('nombre')){
    window.location = '/'
    throw new Error('Debe ingresar un usuario')
}

var usuario = {
    nombre: params.get('nombre')
}

socket.on('connect', ()=>{
    modoStatus.classList.remove('status-off');
    modoStatus.classList.add('status-on');

    socket.emit('entrar-chat', usuario, respuesta =>{
        console.log('Usuarios conectados: ',respuesta)
    });
})

mensajeForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const mensaje = {
        usuario: usuario.nombre,
        mensaje: cuadroMensaje.value,
    }
    socket.emit('enviar-mensaje', mensaje)
    cuadroMensaje.value = ""
})

socket.on('mostrar-mensaje', (data)=>{
    
    cajaMensajes.innerHTML += `
        <div class="mensaje">
<<<<<<< HEAD
            <p class="fs-5">${data.usuario}: ${data.mensaje} </p>
=======
            <p class="fs-5">${data.usuario}: ${data.mensaje} -- </p>
>>>>>>> rama-front
        </div>
    `
})

//?Mensaje Privado
socket.on('mensaje-privado', (mensaje)=>{
    console.log('Mensaje privado: ', mensaje)
})


socket.on('connect', ()=>{
<<<<<<< HEAD
=======
    
>>>>>>> rama-front
    modoStatus.classList.remove('status-off')
    modoStatus.classList.add('status-on')
})

socket.on('crear-mensaje', (mensaje)=>{
    console.log('Servidor: ',mensaje)
});
<<<<<<< HEAD
=======

socket.on('lista-personas',(personas)=>{
    console.log(personas)
})

socket.on('disconnect', ()=>{
>>>>>>> rama-front

socket.on('lista-personas',(personas)=>{
    console.log(personas)
})

socket.on('disconnect', ()=>{
    console.log('Se perdió la conexión con el servidor')
})

//?Mensajes Privados
socket.on('mensaje-privado', (mensaje)=>{
    console.log('Mensaje privado: ', mensaje)
})