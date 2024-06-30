
var outPut = document.querySelector("#outPut");
var button1 = document.querySelector("#button1");
var num = 0;
button1.addEventListener("click", () => {
  num += 1;
  outPut.innerText = num;
})

const confettiButton = document.getElementById('confetti-button');
const confettiContainer = document.getElementById('confetti-container');

confettiButton.addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti-piece';
    confettiPiece.style.top = `${Math.random() * 100}%`;
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiContainer.appendChild(confettiPiece);
  }
  confettiContainer.style.display = 'block';
});
