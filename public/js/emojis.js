/* Codigo de reserva */


//Variables emojis
/* const cajaEmojis = document.querySelector("#container_emojis");
const emojis = document.querySelectorAll("#emoji");
const botonEmoji = document.querySelector("#botonEmoji");
const input = document.querySelector('#cuadroMensaje'); */
//Variables stickers
const cajaStickers = document.querySelector("#container_stickers");
const stickers = document.querySelectorAll("#sticker");
const scuadroMensaje  = document.querySelector('#txtMensaje');
const scajaMensajes  = document.querySelector('#divChatbox');

var params = new URLSearchParams(window.location.search);

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};

 
//emoji
/* botonEmoji.addEventListener("click", () => {
    cajaEmojis.classList.toggle("open_container_emojis")
});

for(const emojisFor of emojis){
    emojisFor.addEventListener("click", () => {
        input.value += emojisFor.innerHTML;
    });
}; */

//sticker
botonEmoji.addEventListener("click", () => {
    cajaStickers.classList.toggle("open_container_stickers")
});


for(const stickersFor of stickers){
    stickersFor.addEventListener("click", () => {
        scajaMensajes.innerHTML += `${nombre}:  ${stickersFor.innerHTML}`;
    });
}; 

/* for(const stickersFor of stickers){
    stickersFor.addEventListener("click", () => {
        scajaMensajes.innerHTML += `
        <div class="mensaje">
            <p>${stickersFor.innerHTML}</p>
        </div>`
    });
}; */