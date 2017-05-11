window.SpeechRecognition = window.SpeechRecognition || window. webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

function translate(e) {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.textContent = transcript;
    // to add a another pharagraph
    // if (e.results[0].isFinal) {
    //   p = document.createElement('p');
    //   words.appendChild(p);
    // };

    console.log(transcript);
};

recognition.addEventListener('result', translate);
recognition.addEventListener('end', recognition.start);

recognition.start();