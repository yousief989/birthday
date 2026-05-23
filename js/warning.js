document.addEventListener('DOMContentLoaded', () => {
  const dangerBtn = document.getElementById('danger-button');
  const warningModal = document.getElementById('warning-modal');
  const warningModalContent = document.getElementById('warning-modal-content');
  const safeBtn = document.getElementById('warning-safe-btn');
  const chaosBtn = document.getElementById('warning-chaos-btn');

  if (!dangerBtn || !warningModal) return;

  // Open Modal
  dangerBtn.addEventListener('click', () => {
    if (window.sendDiscordAction) {
        window.sendDiscordAction('داست على زرار (ماتدوسيش هنا) وفتحت التحذير 🚨');
    }
    warningModal.classList.remove('opacity-0', 'pointer-events-none');
    warningModalContent.classList.remove('scale-90', 'translate-y-10');
    warningModalContent.classList.add('scale-100', 'translate-y-0');
    document.body.classList.add('overflow-hidden');
  });

  // Close Modal (Safe)
  safeBtn.addEventListener('click', () => {
    closeModal();
    createSparkles(dangerBtn);
  });

  // Chaos Mode
  chaosBtn.addEventListener('click', () => {
    if (window.sendDiscordAction) {
        window.sendDiscordAction('عاندت وداست على زرار (هدوس برضه) وبدأت الـ Chaos Mode بتاع هنيدي 🔥😭');
    }
    closeModal();
    setTimeout(startChaosMode, 300);
  });

  function closeModal() {
    warningModalContent.classList.remove('scale-100', 'translate-y-0');
    warningModalContent.classList.add('scale-90', 'translate-y-10');
    warningModal.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }

  function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 15; i++) {
      const sparkle = document.createElement('div');
      sparkle.innerHTML = '✨';
      sparkle.className = 'fixed text-2xl pointer-events-none z-50 animate-ping';
      sparkle.style.left = `${rect.left + Math.random() * rect.width}px`;
      sparkle.style.top = `${rect.top + Math.random() * rect.height}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    }
  }

  let chaosActive = false;

  function startChaosMode() {
    if (chaosActive) return;
    chaosActive = true;

    // Lock scroll during chaos mode
    document.body.style.overflow = 'hidden';

    // Add flashing overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-red-900/60 z-[80] pointer-events-none transition-opacity duration-100 mix-blend-color-burn opacity-0';
    document.body.appendChild(overlay);

    let isOverlayVisible = false;
    const flashInterval = setInterval(() => {
      isOverlayVisible = !isOverlayVisible;
      overlay.style.opacity = isOverlayVisible ? '1' : '0';
    }, 300);

    // Play chaos audio
    const chaosAudio = new Audio('voice/da7ka.mp3');
    chaosAudio.loop = true;
    chaosAudio.play().catch(e => console.log('Audio play failed:', e));

    const chaosTexts = [
      "الوضع خرج عن السيطرة 😭",
      "كان لازم تسمعي الكلام",
      "السيستم بيهنج 💀",
      "ERROR 404: الدماغ باظت 🧠",
      "مش قولتلك بلاش فضول؟ 👀",
      "مفيش رجوع، كملي عياط 😂",
      "إيه كمية العند دي؟ 🤦‍♂️",
      "الشاشة بتترج 😵‍💫"
    ];

    // Show floating texts
    const textInterval = setInterval(() => {
      const textEl = document.createElement('div');
      textEl.textContent = chaosTexts[Math.floor(Math.random() * chaosTexts.length)];
      textEl.className = 'fixed font-handwritten text-3xl md:text-5xl text-white font-bold z-[100] pointer-events-none drop-shadow-2xl bg-black/80 px-8 py-4 rounded-3xl border-4 border-red-500 border-dashed transform shadow-[0_0_50px_rgba(255,0,0,0.8)]';
      textEl.style.left = `${Math.random() * 80 + 10}vw`;
      textEl.style.top = `${Math.random() * 80 + 10}vh`;
      textEl.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 60 - 30}deg) scale(0)`;
      textEl.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      document.body.appendChild(textEl);

      // Animate in
      requestAnimationFrame(() => {
        textEl.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 60 - 30}deg) scale(${Math.random() * 0.5 + 1})`;
      });

      // Remove after some time
      setTimeout(() => {
        textEl.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 60 - 30}deg) scale(0)`;
        setTimeout(() => textEl.remove(), 500);
      }, 2000);
    }, 400);

    // Crazy stickers everywhere
    const rainInterval = setInterval(() => {
      createCrazySticker();
      createCrazySticker();
      createCrazySticker();
    }, 180);

    // Stop chaos after extended time
    setTimeout(() => {
      clearInterval(textInterval);
      clearInterval(rainInterval);
      clearInterval(flashInterval);
      overlay.remove();
      chaosAudio.pause();
      chaosAudio.currentTime = 0;
      setTimeout(() => {
        chaosActive = false; // allow re-triggering
        showAftermathPopup();
      }, 5000); // Wait for the last ones to fall
    }, 15000);
  }

  function showAftermathPopup() {
    const popup = document.createElement('div');
    popup.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-[200] opacity-0 transition-opacity duration-500 px-4';
    
    const content = document.createElement('div');
    content.className = 'bg-[#fffdfa] p-8 md:p-10 rounded-sm shadow-[15px_15px_40px_rgba(0,0,0,0.4)] max-w-sm w-full text-center transform scale-90 translate-y-10 transition-all duration-500 border border-[#e0e0e0] relative';
    
    // Washi Tapes
    const tape1 = document.createElement('div');
    tape1.className = 'absolute -top-4 -left-6 w-24 h-8 bg-[#f8bbd0] opacity-80 rotate-[-15deg] shadow-sm mix-blend-multiply border border-white/50 z-20';
    
    const tape2 = document.createElement('div');
    tape2.className = 'absolute -bottom-4 -right-6 w-24 h-8 bg-[#b2dfdb] opacity-80 rotate-[-10deg] shadow-sm mix-blend-multiply border border-white/50 z-20';
    
    content.appendChild(tape1);
    content.appendChild(tape2);

    // Inner HTML with Polaroid & Text
    const innerWrapper = document.createElement('div');
    innerWrapper.innerHTML = `
      <div class="mb-6 relative inline-block">
        <div class="w-32 h-32 bg-white p-2 pb-6 shadow-md border border-gray-200 rotate-[-4deg] mx-auto rounded-sm relative">
          <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-yellow-100 opacity-60 shadow-sm mix-blend-multiply"></div>
          <div class="w-full h-full bg-pink-50 flex items-center justify-center overflow-hidden border border-pink-100">
            <img src="images/rahma_sticker.webp" onerror="this.style.display='none'" class="w-full h-full object-contain scale-110 drop-shadow-md" />
            <span class="text-4xl absolute" style="display: none;" onerror="this.style.display='block'">🤨</span>
          </div>
        </div>
        <div class="absolute -bottom-4 -right-4 text-4xl animate-bounce drop-shadow-md">🙈</div>
      </div>
      <h3 class="font-handwritten text-4xl md:text-5xl text-[#d81b60] font-bold leading-relaxed mb-2 relative z-10 drop-shadow-sm">
        أنا حذرت<br>وأنتي اخترتي 🤷‍♀️
      </h3>
      <p class="font-sans text-[#6d5b53] font-bold text-lg mb-8 opacity-80 border-b-2 border-dashed border-[#f8bbd0] pb-4 inline-block">
        عمرك ما هتسمعي الكلام 😂
      </p>
    `;
    content.appendChild(innerWrapper);
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'bg-white text-[#d81b60] font-handwritten font-bold text-3xl py-2 px-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 hover:rotate-2 border-2 border-dashed border-[#d81b60] relative z-10';
    closeBtn.textContent = 'خلاص حرمت 😭';
    
    closeBtn.onclick = () => {
      content.classList.remove('scale-100', 'translate-y-0', 'rotate-2');
      content.classList.add('scale-90', 'translate-y-10');
      popup.classList.remove('opacity-100');
      setTimeout(() => {
        popup.remove();
        // Unlock scroll after closing the aftermath popup
        document.body.style.overflow = '';
      }, 500);
    };

    content.appendChild(closeBtn);
    popup.appendChild(content);
    document.body.appendChild(popup);

    // Animate in
    requestAnimationFrame(() => {
      popup.classList.add('opacity-100');
      content.classList.remove('scale-90', 'translate-y-10');
      content.classList.add('scale-100', 'translate-y-0', 'rotate-2');
    });
  }

  function createCrazySticker() {
    const sticker = document.createElement('div');
    sticker.innerHTML = `
      <img src="images/rahma_sticker.webp" onerror="this.style.opacity='0'" class="w-full h-full object-contain drop-shadow-2xl z-10" alt="Grumpy Face" />
    `;

    const size = Math.random() * 100 + 50; // 50px to 150px
    sticker.className = 'fixed z-[90] pointer-events-none drop-shadow-2xl';
    sticker.style.width = `${size}px`;
    sticker.style.height = `${size}px`;

    // 0: top, 1: right, 2: bottom, 3: left
    const side = Math.floor(Math.random() * 4);
    let x, y, vx, vy;
    
    if (side === 0) { // Top
      x = Math.random() * window.innerWidth;
      y = -size * 2;
      vx = (Math.random() - 0.5) * 25;
      vy = Math.random() * 20 + 10;
    } else if (side === 1) { // Right
      x = window.innerWidth + size * 2;
      y = Math.random() * window.innerHeight;
      vx = -(Math.random() * 25 + 10);
      vy = (Math.random() - 0.5) * 20;
    } else if (side === 2) { // Bottom
      x = Math.random() * window.innerWidth;
      y = window.innerHeight + size * 2;
      vx = (Math.random() - 0.5) * 25;
      vy = -(Math.random() * 20 + 10);
    } else { // Left
      x = -size * 2;
      y = Math.random() * window.innerHeight;
      vx = Math.random() * 25 + 10;
      vy = (Math.random() - 0.5) * 20;
    }

    let rot = Math.random() * 360;
    const rotSpeed = (Math.random() - 0.5) * 35;
    let scale = Math.random() * 0.5 + 0.5;
    let scaleSpeed = (Math.random() - 0.5) * 0.15;
    const isWacky = Math.random() > 0.8; // 20% chance to be super wacky scaling

    document.body.appendChild(sticker);

    function animate() {
      x += vx;
      y += vy;
      rot += rotSpeed;
      scale += scaleSpeed;
      
      // Wacky scaling behavior (bouncing size or even flipping)
      if (isWacky) {
        if (scale > 3 || scale < -1) scaleSpeed = -scaleSpeed; 
      } else {
        if (scale > 2 || scale < 0.2) scaleSpeed = -scaleSpeed;
      }

      sticker.style.left = `${x}px`;
      sticker.style.top = `${y}px`;
      // Translate to center so scaling/rotation happens from center
      sticker.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;

      // Remove if way out of bounds
      if (x < -size*4 || x > window.innerWidth + size*4 || y < -size*4 || y > window.innerHeight + size*4) {
        sticker.remove();
      } else {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }
});
