
// const voiceSearch = document.querySelector(".voice-search");
let microAceptado = false;

/** Funciones flecha */
const voiceSearchModalOpen = ()=>{
	document.querySelector(".voice-search").style.display = "flex";
	document.querySelector(".voice-search").style.animation = "aparecer 0.5s forwards";
	voiceRecognition();
}


const voiceSearchModalClose = () =>{
	document.querySelector(".voice-search").style.animation = "desaparecer 0.25s forwards";
	setTimeout(()=>{
	    voiceSearch.style.display = "none";
	},250)
}

const voiceRecognition = () =>{
	if (microAceptado == false) {
	window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
	if (!'SpeechRecognition' in window) {
		alert("que pena, no podes usar la API")
}  
	}
	document.querySelector(".voice-search__result-text").innerHTML = "Habla ahora";
    let recognition = new window.SpeechRecognition();

    recognition.onresult = (event) => {
    let voiceText = event.results[0][0].transcript;
    document.querySelector(".voice-search__result-text").innerHTML = voiceText;
    recognition.stop();
    setTimeout(()=>{
    window.open("https://google.com/search?q="+voiceText);
    },1800)
}
    recognition.start();
}

/** Esto es nuevo */
document.querySelector('.form__microphone-icon').addEventListener("click",voiceSearchModalOpen);
document.querySelector(".voice-search__close-modal").addEventListener("click",voiceSearchModalClose);
document.querySelector(".voice-search__microphone-border").addEventListener("click",voiceRecognition)