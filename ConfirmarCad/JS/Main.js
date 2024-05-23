const videoElement = document.getElementById('videoElement');
const btnVoltar = document.getElementById('return');
const btnCam = document.getElementById('btn-cam');

btnVoltar.addEventListener("click", function() {
    window.location.href = 'https://johnpaz01.github.io/Site-AG/Login/Main.html';
});

btnCam.addEventListener('click', startRecording);

const MAX_RECORDING_DURATION = 5000; // 5 segundos em milissegundos

let mediaRecorder;
const recordedChunks = [];
let startTime;

function startRecording() {
    startTime = Date.now();
    recordedChunks.length = 0; // Limpar quaisquer chunks gravados anteriormente
    mediaRecorder = new MediaRecorder(videoElement.srcObject);
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
  
    // Parar a gravação após 5 segundos
    setTimeout(stopRecording, MAX_RECORDING_DURATION);
}

function stopRecording() {
    mediaRecorder.stop();
}

function handleDataAvailable(event) {
    recordedChunks.push(event.data);
    const recordedBlob = new Blob(recordedChunks, { type: 'video/mp4' });
    const recordedUrl = URL.createObjectURL(recordedBlob);
    recordedBoomerangElement.src = recordedUrl;
}
