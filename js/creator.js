document.addEventListener('DOMContentLoaded', () => {
  let hasTriggered = false;

  window.addEventListener('scroll', () => {
    if (hasTriggered) return;

    // Trigger when scrolled halfway down the page
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight));
    if (scrollPercent > 0.35 && window.scrollY > 400) {
      triggerCreatorEasterEgg();
    }
  });

  function triggerCreatorEasterEgg() {
    hasTriggered = true;

    if (window.sendDiscordAction) {
        window.sendDiscordAction('عملت Scroll وشافت يوسف وهو بيتشقلب على الشاشة (Creator Easter Egg) 🤸‍♂️');
    }

    // Pause scrolling softly
    document.body.style.overflow = 'hidden';

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/40 z-[300] opacity-0 transition-opacity duration-1000 backdrop-blur-[2px] cursor-not-allowed';
    document.body.appendChild(overlay);

    // Character Container
    const character = document.createElement('div');
    character.className = 'fixed z-[310] pointer-events-none flex flex-col items-center justify-center';
    character.style.top = '50%';
    character.style.left = '-300px';
    character.style.marginTop = '-100px'; // Offset half height
    character.style.marginLeft = '-100px'; // Offset half width for perfect centering
    character.style.width = '200px';
    character.style.height = '200px';

    // Start rotated
    character.style.transform = 'rotate(-180deg)';
    character.style.transition = 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)';

    // Character Image & UI
    character.innerHTML = `
      <div class="relative group">
        <!-- Speech Bubble -->
        <div id="creator-bubble" class="absolute bottom-[110%] left-1/2 -translate-x-1/2 mb-4 bg-white px-6 py-4 rounded-3xl rounded-br-none shadow-2xl border-4 border-[#c5e1a5] opacity-0 transition-all duration-300 scale-50 origin-bottom-right w-[280px]">
          <p id="creator-text" class="font-handwritten text-xl text-[#5a4a42] font-bold text-center leading-relaxed transition-opacity duration-200"></p>
          <div class="absolute -bottom-3 right-4 w-4 h-4 bg-white border-b-4 border-r-4 border-[#c5e1a5] rotate-45"></div>
        </div>
        
        <!-- The Character -->
        <div class="w-32 h-32 md:w-40 md:h-40 bg-[#e8f5e9] rounded-full shadow-2xl border-4 border-dashed border-[#81c784] flex items-center justify-center text-6xl md:text-7xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden" id="creator-img-container">
          <img src="images/yousief.jpeg" onerror="this.style.opacity='0'" class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300" alt="Character" />
          
          <!-- Motion lines (chaotic vibe) -->
          <div class="absolute -left-6 top-1/2 w-4 h-1 bg-white rounded-full opacity-50 -rotate-12 animate-pulse z-20"></div>
          <div class="absolute -right-6 top-1/3 w-6 h-1 bg-white rounded-full opacity-50 rotate-12 animate-pulse z-20"></div>
        </div>
      </div>
    `;

    document.body.appendChild(character);

    // Audio setup
    const voice = new Audio('voice/happy_birthday.ogg');
    const swoosh = new Audio('voice/swoosh.mp3');

    // Force reflow so the browser registers the starting position (-300px)
    void character.offsetWidth;

    // Animation Timeline
    requestAnimationFrame(() => {
      // 1. Enter rolling
      overlay.classList.remove('opacity-0');
      swoosh.play().catch(e => console.log('Swoosh sound error:', e));

      character.style.left = '50%';
      // Pure rotation now that marginLeft handles centering
      character.style.transform = 'rotate(0deg)';

      // Stop moving and settle
      setTimeout(() => {
        character.classList.add('animate-bounce');

        overlay.classList.remove('bg-black/40');
        overlay.classList.add('bg-black/60');

        // 2. Play Audio & Show Subtitles
        voice.play().catch(e => console.log('Voice audio error:', e));
        showSubtitles();

        let isDone = false;
        const finishInteraction = () => {
          if (isDone) return;
          isDone = true;
          endInteraction();
        };

        voice.addEventListener('ended', finishInteraction);
        // Fallback timeout
        setTimeout(finishInteraction, 16000);

      }, 1500);
    });

    function showSubtitles() {
      const bubble = document.getElementById('creator-bubble');
      const textEl = document.getElementById('creator-text');

      bubble.classList.remove('opacity-0', 'scale-50');

      const subtitles = [
        { text: "أحم أحم 😭🎤", duration: 1000 },
        { text: "معلش وقفت عليكي الاسكرول 😭 بس كنت عايز أقولهالك بنفسي ✨", duration: 3500 },
        { text: "كل سنة وإنتي طيبة ي رحومة 💜🎂", duration: 2000 },
        { text: "سنة سعيدة عليكي ياارب وتحققي فيها كل اللي نفسك فيه ✨☕", duration: 3000 },
        { text: "بس كدا أنا هرجع أتشقلب تاني وأمشي 😭🏃‍♂️", duration: 3000 },
        { text: "وإنتي كملي اسكرول يلا باي باي 👋😂", duration: 2500 }
      ];
      let currentSub = 0;

      function nextSubtitle() {
        if (currentSub >= subtitles.length) {
          // Finished subtitles, waiting for audio 'ended' event or fallback timeout to trigger endInteraction
          return;
        }

        textEl.style.opacity = '0';
        setTimeout(() => {
          textEl.textContent = subtitles[currentSub].text;
          textEl.style.opacity = '1';

          // Tiny reaction bounce on text change
          character.style.transform = `rotate(${Math.random() * 14 - 7}deg) scale(1.05)`;
          setTimeout(() => {
            character.style.transform = `rotate(0deg) scale(1)`;
          }, 200);

          setTimeout(nextSubtitle, subtitles[currentSub].duration);
          currentSub++;
        }, 200);
      }

      nextSubtitle();
    }

    function endInteraction() {
      const bubble = document.getElementById('creator-bubble');

      bubble.classList.add('opacity-0', 'scale-50');
      character.classList.remove('animate-bounce');

      // Drop sparkles before leaving
      dropSparkles(character.getBoundingClientRect());

      // Exit screen rolling to the right
      swoosh.play().catch(e => { });

      character.style.transition = 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      character.style.left = '150vw';
      character.style.transform = 'rotate(180deg)';

      // Remove overlay
      overlay.classList.add('opacity-0');

      setTimeout(() => {
        character.remove();
        overlay.remove();
        document.body.style.overflow = ''; // Unlock scroll
      }, 1500);
    }

    function dropSparkles(rect) {
      // Tiny sparkle particles left behind
      for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'fixed z-[280] rounded-full pointer-events-none shadow-sm';

        const isStar = Math.random() > 0.5;
        if (isStar) {
          sparkle.innerHTML = '✨';
          sparkle.className += ' text-xl md:text-2xl';
        } else {
          sparkle.style.width = `${Math.random() * 10 + 5}px`;
          sparkle.style.height = sparkle.style.width;
          sparkle.style.backgroundColor = ['#ffcdd2', '#c5e1a5', '#fff9c4', '#bbdefb'][Math.floor(Math.random() * 4)];
        }

        sparkle.style.left = `${rect.left + rect.width / 2}px`;
        sparkle.style.top = `${rect.top + rect.height / 2}px`;
        sparkle.style.transform = 'translate(-50%, -50%)';
        sparkle.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        sparkle.style.opacity = '1';

        document.body.appendChild(sparkle);

        requestAnimationFrame(() => {
          const angle = Math.random() * Math.PI * 2;
          const dist = 60 + Math.random() * 150;
          sparkle.style.transform = `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) rotate(${Math.random() * 360}deg)`;
          sparkle.style.opacity = '0';
        });

        setTimeout(() => sparkle.remove(), 1000);
      }
    }
  }
});
