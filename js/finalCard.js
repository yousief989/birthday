// Final Card Confetti Logic
document.addEventListener('DOMContentLoaded', () => {
  const finalCard = document.getElementById('final-card');
  const finalHint = document.getElementById('final-click-hint');
  
  if (finalCard) {
    finalCard.addEventListener('click', () => {
      if (finalHint) finalHint.classList.add('hidden');
      
      const duration = 3000;
      const end = Date.now() + duration;
      const colors = ['#ffd4d4', '#d4a59a', '#f5e6d3', '#fffbf7', '#ffccbc'];

      if (typeof confetti === 'undefined') return;

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    });
  }
});
