const cajaEmojis = document.querySelector("#container_emojis");
const emojis = document.querySelectorAll("#emoji");
const botonEmoji = document.querySelector("#botonEmoji");
const input = document.querySelector('#cuadroMensaje');

botonEmoji.addEventListener("click", () => {
    cajaEmojis.classList.toggle("open_container_emojis")
});

for(const emojisFor of emojis){
    emojisFor.addEventListener("click", () => {
        input.value += emojisFor.innerHTML;
    });
};


