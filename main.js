onload = () =>{
        document.body.classList.remove("container");
};

// Seleccionamos el elemento audio
const audio = document.getElementById('myAudio');

// Configuramos el intervalo deseado (en segundos)
const startTime = 30; // Empieza en el segundo 30
const endTime = 60;   // Termina en el segundo 60

// Cuando el archivo de audio esté listo, establece el tiempo de inicio
audio.addEventListener('canplay', () => {
    audio.currentTime = startTime;
});

// Escuchar el evento de tiempo y pausar el audio al alcanzar el final del lapso
audio.addEventListener('timeupdate', () => {
    if (audio.currentTime >= endTime) {
        audio.pause();  // Pausar cuando llegue al final
    }
});

// Iniciar la reproducción automáticamente al cargar la página
window.onload = () => {
    audio.play();
};
