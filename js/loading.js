document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBar = document.getElementById('loading-bar');
  const loadingText = document.getElementById('loading-text');
  const loadingPercentage = document.getElementById('loading-percentage');
  const loginScreen = document.getElementById('login-screen');
  
  const messages = [
    'جارِ تحميل الذكريات...',
    'جارِ البحث عن الرسائل السرية...',
    'جارِ تجهيز الاحتفال...',
    'تقريبا خلصنا...',
    'مستعدين! 🎉',
  ];

  let progress = 0;
  const loadingInterval = setInterval(() => {
    progress += 10;
    
    // Update progress bar and text
    if (loadingBar) loadingBar.style.width = `${progress}%`;
    if (loadingPercentage) loadingPercentage.textContent = `${progress}%`;
    
    const messageIndex = Math.floor((progress / 100) * (messages.length - 1));
    if (loadingText) loadingText.textContent = messages[messageIndex];

    if (progress >= 100) {
      clearInterval(loadingInterval);
      setTimeout(() => {
        if (loadingScreen) loadingScreen.style.opacity = '0';
        setTimeout(() => {
          if (loadingScreen) loadingScreen.classList.add('hidden');
          // Show Login Screen
          if (loginScreen) {
            loginScreen.classList.remove('hidden');
            // small delay to let display:block apply before opacity transitions
            setTimeout(() => {
              loginScreen.style.opacity = '1';
            }, 50);
          }
        }, 500);
      }, 500);
    }
  }, 150);
});
