let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = function () { 
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    voices.forEach(voice => {
        let option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}
voiceSelect.addEventListener('change', () => {
    speech.voice = voices.find(voice => voice.name === voiceSelect.value);
})

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});