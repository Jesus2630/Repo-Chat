//Variables emojis
const cajaEmojis = document.querySelector("#container_emojis");
const emojis = document.querySelectorAll("#emoji");
const botonEmoji = document.querySelector("#botonEmoji");
const input = document.querySelector('#cuadroMensaje');
//Variables stickers
const cajaStickers = document.querySelector("#container_stickers");
const stickers = document.querySelectorAll("#sticker");
const scuadroMensaje  = document.querySelector('#cuadroMensaje');
//Opciones div
const menuOpciones = document.querySelector("#opciones");
const iconEmoji = document.querySelector("#icon_emoji");
const iconSticker = document.querySelector("#icon_sticker");

//emoji
botonEmoji.addEventListener("click", () => {
    cajaEmojis.classList.toggle("open_container_emojis");
    iconEmoji.classList.add("opciones_activo");
});


for(const emojisFor of emojis){
    emojisFor.addEventListener("click", () => {
        input.value += emojisFor.innerHTML;
    });
};


//sticker
iconSticker.addEventListener("click", () => {
    cajaStickers.classList.toggle("open_container_stickers")
});



for(const stickersFor of stickers){
    stickersFor.addEventListener("click", () => {
        scuadroMensaje.value += stickersFor.innerHTML;
    });
};


/* for(const stickersFor of stickers){
    stickersFor.addEventListener("click", () => {
        scajaMensajes.innerHTML += stickersFor.innerHTML;
    });
}; */