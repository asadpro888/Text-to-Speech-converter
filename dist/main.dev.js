"use strict";

var speech = new SpeechSynthesisUtterance();
var voices = [];
var voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(function (voice) {
    var option = document.createElement('option');
    option.value = voice.name;
    option.textContent = "".concat(voice.name, " (").concat(voice.lang, ")");
    voiceSelect.appendChild(option);
  });
};

voiceSelect.addEventListener('change', function () {
  speech.voice = voices.find(function (voice) {
    return voice.name === voiceSelect.value;
  });
});
document.querySelector('button').addEventListener('click', function () {
  speech.text = document.querySelector('textarea').value;
  window.speechSynthesis.speak(speech);
});
//# sourceMappingURL=main.dev.js.map
