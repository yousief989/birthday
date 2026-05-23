document.addEventListener('DOMContentLoaded', () => {
  const warningScreen = document.getElementById('mobile-warning');
  const warningContent = document.getElementById('mobile-warning-content');

  if (!warningScreen) return;

  // Simple mobile/tablet detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth < 1024;

  if (isMobile) {
    // Show warning with slight delay to ensure it overlays everything initially
    setTimeout(() => {
      warningScreen.classList.remove('hidden');

      // Animate in
      requestAnimationFrame(() => {
        warningScreen.classList.add('opacity-100');
        warningContent.classList.remove('scale-90', 'rotate-[-2deg]');
        warningContent.classList.add('scale-100', 'rotate-1');
      });

      if (window.sendDiscordAction) {
        window.sendDiscordAction('فتحت الموقع من الموبايل واتقفشت بالتحذير النهائي 📱😂');
      }
    }, 100);
  }
});
