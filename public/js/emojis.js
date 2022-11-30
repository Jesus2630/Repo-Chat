//Variables emojis
const cajaEmojis = document.querySelector("#container_emojis");
const emojis = document.querySelectorAll("#emoji");
const botonEmoji = document.querySelector("#botonEmoji");
const input = document.querySelector('#txtMensaje');
//Variables stickers
const cajaStickers = document.querySelector("#container_stickers");
const stickers = document.querySelectorAll("#sticker");
const scuadroMensaje  = document.querySelector('#txtMensaje');
//Opciones div
const menuOpciones = document.querySelector("#opciones");
const iconEmoji = document.querySelector("#icon_emoji");
const iconSticker = document.querySelector("#icon_sticker");
const iconEmoji2 = document.querySelector("#icon_emoji_2");
const iconSticker2 = document.querySelector("#icon_sticker_2");


//emoji
botonEmoji.addEventListener("click", () => {
    cajaEmojis.classList.toggle("open_container_emojis");
    iconEmoji.classList.add("opciones_activo");
    cajaStickers.classList.remove("open_container_stickers")
});

iconEmoji2.addEventListener("click", () => {
    cajaEmojis.classList.toggle("open_container_emojis");
    iconEmoji.classList.add("opciones_activo");
    cajaStickers.classList.remove("open_container_stickers")
});


for(const emojisFor of emojis){
    emojisFor.addEventListener("click", () => {
        input.value += emojisFor.innerHTML;
    });
};


//sticker
iconSticker.addEventListener("click", () => {
    cajaStickers.classList.toggle("open_container_stickers")
    cajaEmojis.classList.remove("open_container_emojis");
    iconSticker2.classList.add("opciones_activo_2");
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