function mostrarVideo() {
  document.getElementById("pergunta").classList.add("hidden");
  const videoTela = document.getElementById("videoTela");
  videoTela.classList.remove("hidden");
  
  // Isso garante que o vídeo comece a tocar após o clique
  const video = videoTela.querySelector("video");
  video.play();
}
