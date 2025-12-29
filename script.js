function mostrarPergunta() {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("pergunta").classList.remove("hidden");
}

function mostrarVideo() {
  document.getElementById("pergunta").classList.add("hidden");
  const telaVideo = document.getElementById("videoTela");
  telaVideo.classList.remove("hidden");
  
  const video = telaVideo.querySelector("video");
  if (video) {
    video.play().catch(error => console.log("Erro ao dar play:", error));
  }
}
