var params = new URLSearchParams(window.location.search);

var nombre = params.get('nombre');
var sala = params.get('sala');


// referencias de jQuery
var divUsuarios = $('#divUsuarios');
var formEnviar = $('#formEnviar');
var txtMensaje = $('#txtMensaje');
var divChatbox = $('#divChatbox');
var usuario = $('#usuario');
var mostrarsala = $('#sala');
var usuariosLeft = $('#usuariosLeft');

//Variables emojis
const cajaEmojis = document.querySelector("#container_emojis");
const emojis = document.querySelectorAll("#emoji");
const botonEmoji = document.querySelector("#botonEmoji");
const input = document.querySelector('#cuadroMensaje');
//Variables stickers
const cajaStickers = document.querySelector("#container_stickers");
const stickers = document.querySelectorAll("#sticker");
const scuadroMensaje  = document.querySelector('#txtMensaje');
const scajaMensajes  = document.querySelector('#divChatbox');



//Muestro el nombre del usuario y sala
usuario.html(nombre);
mostrarsala.html(sala);

//Config para stickers y emojis
botonEmoji.addEventListener("click", () => {
    cajaStickers.classList.toggle("open_container_stickers")
});



function renderizarUsuarios(personas) { // [{},{},{}]

    console.log(personas);
    
    var html = '';

    //Listado de usuarios columna derecha

    for (var i = 0; i < personas.length; i++) {

        html += '<li>';
        html += '    <p data-id="' + personas[i].id + '"  href="javascript:void(0)"> <span>' + personas[i].nombre + ' <small class="text-success">online</small></span></p>';
        html += '</li>';
    }

    //Listado de usuarios columna izquierda

    var htmleft = '';

    for (var i = 0; i < personas.length; i++) {

        htmleft += '<li>';
        htmleft += '    <p> <i class="bx bx-user" style="color:#17901e"></i> <span>' + personas[i].nombre + '</span></p>';
        htmleft += '</li>';
    }

    usuariosLeft.html(htmleft);
    divUsuarios.html(html);
}

function renderizarMensajes(mensaje, yo) {

    var html = '';
    var fecha = new Date(mensaje.fecha);
    var hora = fecha.getHours() + ':' + fecha.getMinutes();

    var adminClass = 'info';
    if (mensaje.nombre === 'Administrador') {
        html += '<li class="reverse fs-7">';
        html += '    <div class="mensaje d-flex">';
        html += '        <p class="text-secondary">' + mensaje.nombre + '  :  ' + '</p>';
        html += '        <div class="box bg-light-inverse ms-2">' + mensaje.mensaje + '</div>';
        html += '    <div class="chat-time ms-auto">' + hora + '</div>';
        html += '    </div>';
        html += '</li>';
    }

    if (yo) {
        html += '<li class="reverse">';
        html += '    <div class="mensaje d-flex">';
        html += '        <h5 class="fw-bold">' + mensaje.nombre + '  :  ' + '</h5>';
        html += '        <div class="box bg-light-inverse ms-2">' + mensaje.mensaje + '</div>';
        html += '    <div class="chat-time ms-auto">' + hora + '</div>';
        html += '    </div>';
        html += '</li>';

    } else if(mensaje.nombre != 'Administrador') {

        html += '<li class="animated fadeIn">';


        html += '    <div class="mensaje d-flex">';
        html += '        <h5 class="fw-bold">' + mensaje.nombre + '  :  ' + '</h5>';
        html += '        <div class="box bg-light-inverse ms-2">' + mensaje.mensaje + '</div>';
        html += '       <div class="chat-time ms-auto">' + hora + '</div>';
        html += '    </div>';
        html += '</li>';

    }


    divChatbox.append(html);

}

function scrollBottom() {

    // selectors
    var newMessage = divChatbox.children('li:last-child');

    // heights
    var clientHeight = divChatbox.prop('clientHeight');
    var scrollTop = divChatbox.prop('scrollTop');
    var scrollHeight = divChatbox.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight() || 0;

    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
        divChatbox.scrollTop(scrollHeight);
    }
}




// Listeners
divUsuarios.on('click', 'a', function() {

    var id = $(this).data('id');

    if (id) {
        console.log(id);
    }

});

formEnviar.on('submit', function(e) {

    e.preventDefault();

    if (txtMensaje.val().trim().length === 0) {
        return;
    }

    socket.emit('crearMensaje', {
        nombre: nombre,
        mensaje: txtMensaje.val()
    }, function(mensaje) {
        txtMensaje.val('').focus();
        renderizarMensajes(mensaje, true);
        scrollBottom();
    });
});