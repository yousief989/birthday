document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('heavy-btn-container');
  const runawayBtn = document.getElementById('runaway-btn');
  const heavyBtnMsg = document.getElementById('heavy-btn-msg');
  const section = document.getElementById('impossible-gift');

  if (!runawayBtn || !section || !container) return;

  let clicks = 0;
  const maxClicks = 15; // Increased to 15
  
  const messages = [
    "الزرار تقيل محتاج مجهود! زقي كمان 😅",
    "ي بنتي مابتفطريش؟ اضغطي جامد! 💪",
    "ايوة بدأ يتحرك اهو.. كمان! 🏃‍♀️",
    "لا إنتي محتاجة چيم بجد.. زقي كمان! 😤",
    "شكلنا مطولين.. دوسي بكل قوتك! 😭",
    "عاش.. أهو بينزل معاكي شوية! 🔥",
    "أنا لو جايب طفل صغير كان داسه أسرع! 😂",
    "ي مسهل يارب.. دوسي كمان! 🥱",
    "إنتي بتطبطبي عليه؟ اضغطي!! 👊",
    "بدأ يظبط اهو.. هانت! 👏",
    "عضلاتك كلها بتصوت دلوقتي صح؟ 😂",
    "خلاص بدأ يضغط بجد.. كملي! 🔥",
    "أنا تعبت مكانك والله.. زقي! 😩",
    "هانت جدا.. فاضل زقتين! 🤏",
    "التكة الأخيرة.. مستعدة للمفاجأة؟ 👀"
  ];

  let timerStarted = false;
  let timerId = null;
  const da7kaAudio = new Audio('voice/elras_da7ka.mp3');
  da7kaAudio.loop = true;

  // The Monkey prank (if she takes too long before clicking 15 times)
  const startTimer = () => {
    if (!timerStarted) {
      timerStarted = true;
      if (typeof window.sendDiscordAction === 'function') {
        window.sendDiscordAction("بدأت تطارد الهدية المستحيلة 🏃‍♀️🎁");
      }
      timerId = setTimeout(() => {
        triggerMonkeyChaos();
      }, 20000); // Give her 20 seconds to catch it
    }
  };

  let chaosElements = [];
  let chaosInterval = null;

  const triggerMonkeyChaos = () => {
    if (typeof window.sendDiscordAction === 'function') {
      window.sendDiscordAction("وقعت في فخ الهدية (فوضى القرد) 🐒🍿");
    }
    
    // Stop scrolling while chaos is happening
    document.body.style.overflow = 'hidden';
    
    da7kaAudio.play().catch(e => console.log('Audio play failed:', e));
    
    const baseTexts = [
      "كلي فشار أحسن 🍿",
      "مش هتعرفي تفتحيها ريحي نفسك! 😂",
      "ومفيش هدية 😜",
      "بهزر.. أنتي أجمل هدية أصلا 😌💜",
      "لسه بتحاولي؟ مفيش فايدة! 🥱",
      "عاش ي بطل بس مفيش حاجة بردو 🏆",
      "شكلنا مطولين النهاردة 👀",
      "وفري مجهودك مفيش حاجة ورا الزرار 😂",
      "بقولك إيه.. روحي نامي أحسن 😴"
    ];

    let messagePool = [];
    // Ensure every message appears 3 times (9 * 3 = 27 messages)
    for(let i = 0; i < 3; i++) {
      messagePool = messagePool.concat(baseTexts);
    }
    // Shuffle the pool
    messagePool.sort(() => Math.random() - 0.5);

    const createMonkey = () => {
      const el = document.createElement('div');
      el.className = 'fixed z-[200] flex flex-col items-center pointer-events-none transform transition-transform duration-1000';
      
      let randomText;
      if (messagePool.length > 0) {
        randomText = messagePool.pop();
      } else {
        randomText = baseTexts[Math.floor(Math.random() * baseTexts.length)];
      }
      
      el.innerHTML = `
        <video src="videos/monkey.mp4" autoplay loop muted playsinline class="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-[0_10px_40px_rgba(216,27,96,0.5)] border-4 border-dashed border-[#f48fb1]"></video>
        <div class="mt-4 bg-white/90 px-4 py-2 rounded-xl font-handwritten text-xl md:text-2xl text-[#d81b60] font-bold shadow-md rotate-[-5deg] whitespace-nowrap">
          ${randomText}
        </div>
      `;

      // Random position (left/right/top/bottom)
      const x = Math.random() * (window.innerWidth - 250);
      const y = Math.random() * (window.innerHeight - 300);
      
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      
      // Random rotation and scale animation
      const startRot = (Math.random() - 0.5) * 40;
      const endRot = (Math.random() - 0.5) * 40;
      
      el.style.transform = `scale(0) rotate(${startRot}deg)`;
      
      document.body.appendChild(el);
      chaosElements.push(el);

      requestAnimationFrame(() => {
        el.style.transform = `scale(1) rotate(${endRot}deg)`;
      });
      
      // Remove after 4 seconds
      setTimeout(() => {
        el.style.transform = 'scale(0) rotate(0deg)';
        setTimeout(() => el.remove(), 1000);
      }, 4000);
    };

    // Spawn a monkey immediately, then every 1 second to ensure all 27+ messages show
    createMonkey();
    chaosInterval = setInterval(createMonkey, 1000);

    // Automatically stop chaos after 30 seconds
    setTimeout(() => {
      // Cleanup chaos
      clearInterval(chaosInterval);
      chaosElements.forEach(el => el.remove());
      chaosElements = [];
      
      da7kaAudio.pause();
      da7kaAudio.currentTime = 0;
      
      // Reset logic
      document.body.style.overflow = '';
      timerStarted = false;
      clicks = 0;
      evadesPerClick = 0;
      clearTimeout(timerId);
      
      // Reset button visuals
      runawayBtn.style.transform = 'translateY(0px)';
      runawayBtn.style.boxShadow = '0 20px 0 #4a0017, 0 30px 20px rgba(0,0,0,0.5)';
      heavyBtnMsg.classList.add('opacity-0', 'translate-y-4');
      
      container.style.position = 'absolute';
      container.style.left = '50%';
      container.style.transform = 'translateX(-50%)';
      container.style.bottom = '8%'; 
      container.style.top = 'auto';
    }, 30000);
  };

  const moveButtonRandomly = () => {
    const sectionRect = section.getBoundingClientRect();
    const btnRect = container.getBoundingClientRect();

    const maxX = sectionRect.width - btnRect.width - 40; 
    const maxY = sectionRect.height - btnRect.height - 100;

    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    container.style.position = 'absolute';
    container.style.left = `${randomX}px`;
    container.style.top = `${randomY}px`;
    container.style.bottom = 'auto';
    container.style.transform = 'none';
  };

  let lastEvadeTime = 0;
  let evadesPerClick = 0; // Counter for evades

  // Evade exactly 2 times on hover before allowing a click
  document.addEventListener('mousemove', (e) => {
    if (clicks >= maxClicks) return;
    
    // Only evade if she hasn't exhausted the 2 evades
    if (evadesPerClick >= 2) return;

    const sectionRect = section.getBoundingClientRect();
    if (e.clientX < sectionRect.left || e.clientX > sectionRect.right || 
        e.clientY < sectionRect.top || e.clientY > sectionRect.bottom) {
      return;
    }

    const btnRect = container.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distanceX = e.clientX - btnCenterX;
    const distanceY = e.clientY - btnCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const evadeRadius = 120; 
    const now = Date.now();
    
    // 300ms cooldown so she doesn't trigger all 2 evades in one swipe
    if (distance < evadeRadius && now - lastEvadeTime > 300) {
      lastEvadeTime = now;
      evadesPerClick++;
      startTimer();
      moveButtonRandomly();
    }
  });

  // Handle the heavy clicks
  const handleClick = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    
    evadesPerClick = 0; // Reset evades for the next round
    startTimer();
    
    clicks++;

    if (clicks < maxClicks) {
      // Shake effect
      runawayBtn.classList.remove('animate-shake');
      void runawayBtn.offsetWidth; 
      runawayBtn.classList.add('animate-shake');

      // Update visual "weight" (press it down slightly)
      const progress = clicks / maxClicks;
      const shadowSize = 20 - (progress * 20); 
      const translateY = progress * 20; 
      
      runawayBtn.style.transform = `translateY(${translateY}px)`;
      runawayBtn.style.boxShadow = `0 ${shadowSize}px 0 #4a0017, 0 ${shadowSize + 10}px 20px rgba(0,0,0,0.5)`;
      
      // Update message
      heavyBtnMsg.textContent = messages[clicks - 1];
      heavyBtnMsg.classList.remove('opacity-0', 'translate-y-4');
      
      // Force it to jump away after she manages to click it!
      moveButtonRandomly();
      
    } else {
      // Success! But it's a troll!
      clearTimeout(timerId); // Stop normal monkey prank timer
      heavyBtnMsg.innerHTML = '<span class="text-[#d81b60]">يااااه أخيرا! الزرار اتداس! 🥳.. بس مقلب مفيش حاجة 😜</span>';
      
      if (window.sendDiscordAction) {
        window.sendDiscordAction(`نجحت وضغطت الزرار التقيل أخيرا.. وأخدت المقلب التمام! 🎁😂`);
      }
      
      // Trigger the chaos anyway as a reward!
      triggerMonkeyChaos();
    }
  };

  runawayBtn.addEventListener('touchstart', handleClick, { passive: false });
  runawayBtn.addEventListener('click', handleClick);
});
