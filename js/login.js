document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const passwordInput = document.getElementById('password');
  const loginError = document.getElementById('login-error');
  const loginSuccess = document.getElementById('login-success');
  const loginBtn = document.getElementById('login-btn');
  const loginScreen = document.getElementById('login-screen');
  const mainContent = document.getElementById('main-content');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = passwordInput.value.trim().toLowerCase();

      loginError.classList.add('hidden');
      loginBtn.disabled = true;
      loginBtn.innerHTML = '⏳ جارِ التحقق...';
      loginBtn.classList.add('opacity-50', 'cursor-not-allowed');

      setTimeout(() => {
        if (pass === '3id_melad_abou_el_fasad') {
          loginSuccess.classList.remove('hidden');

          // Send Discord notification
          if (window.sendDiscordAction) {
            window.sendDiscordAction('رحومة فتحت الموقع ودخلت الباسورد صح دلوقتي حالا! 🔓');
          }

          // Throw some login confetti
          if (typeof confetti !== 'undefined') {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          }

          setTimeout(() => {
            if (loginScreen) loginScreen.style.opacity = '0';
            setTimeout(() => {
              if (loginScreen) loginScreen.classList.add('hidden');
              if (mainContent) {
                mainContent.classList.remove('hidden');
                setTimeout(() => {
                  mainContent.classList.remove('opacity-0');
                }, 50);
              }
            }, 500);
          }, 1500);
        } else {
          if (window.sendDiscordAction) {
            window.sendDiscordAction(`كتبت الباسورد غلط: "${pass}" ❌😭`);
          }
          loginError.textContent = 'كلمة السر غلط ي عم 😭';
          loginError.classList.remove('hidden');
          loginBtn.disabled = false;
          loginBtn.innerHTML = 'دخول';
          loginBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
      }, 1000);
    });
  }

  // Celebration Button Logic (if exists)
  const celebrateBtn = document.getElementById('celebrate-btn');
  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', () => {
      if (typeof confetti !== 'undefined') {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
        });
      }
    });
  }
});
