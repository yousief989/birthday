const notesData = [
  {
    id: 1,
    label: 'ماتدوسيش هنا 🚫',
    message: 'عارف إنك هتعاندي وتدوسي 😂 فضولك ده حكاية لوحده.. بس هو اللي بيعمل بهجة للمكان ✨',
    color: '#f8bbd0',
    rotation: -4
  },
  {
    id: 2,
    label: '🤫 رسالة سرية جدا',
    message: 'السر اللي: إنك شخصية جدعة وتستاهلي كل حاجة حلوة في الدنيا.. كل سنة وإنتي طيبة ومبسوطة دايما ي رحومة 💜',
    color: '#e1bee7',
    rotation: 3
  },
  {
    id: 3,
    label: '🏆 شهادة طبية معتمدة 🏆',
    message: 'تُمنح رحوومة لقب "أكتر واحدة بيجيلها برد وبتركب كانولا في التاريخ" 🧣💉 شدي حيلك بقى وبلاش تعب عشان عايزين نشوفك دايما مفرفشة ☕🔥',
    color: '#fce4ec',
    rotation: -2
  },
  {
    id: 4,
    label: '🌿 الراعي الرسمي لروقانك',
    message: 'صاحبة أعلى مزاج بكوباية الشاي بالنعناع.. مستعدة تضحي بأي حاجة في الدنيا إلا الكوباية بتاعتك دي! 😂☕ كل سنة وأنتي رايقة ومزاجك دايما في العالي ✨',
    color: '#f3e5f5',
    rotation: 5
  },
  {
    id: 5,
    label: '🚨 زر الطوارئ',
    message: 'لما الدنيا تقفل معاكي أو تحسي بضغط: افتكري إنك شخصية مميزة وتستاهلي تفرحي، ودايما هتلاقي ناس بتعزك وبتتمنالك الخير 😎✨',
    color: '#f48fb1',
    rotation: -3
  },
  {
    id: 6,
    label: '🌾 اللقب الرسمي',
    message: 'بما إنك ماشية بمبدأ "أيوا أنا فلاحة ومعترفة".. فكان لازم أقولك في يوم زي ده ي عم إنتي أحلى فلاحة 😂 كل سنة وإنتي طيبة وجدعة 💜',
    color: '#ce93d8',
    rotation: 2
  },
  {
    id: 7,
    label: '🧠 العيادة النفسية',
    message: 'رغم إنك بتحللي كل كلمة بنقولها وبتحسسينا إننا محتاجين نتعالج 😂 بس إنتي أشطر وأجدع أخصائية نفسية.. كل سنة وإنتي بتعالجي الناس ومجننانا إحنا 💜',
    color: '#ffcdd2',
    rotation: -5
  },
  {
    id: 8,
    label: '🦷 الدليل الجنائي 📸',
    message: 'مهما تعملي فيها بريئة وتعملي مصلحة نفسية علينا، أنا معايا الصورة اللي بتثبت إنك كائن مفترس بيعض 😂 العضة دي لسه معلمة تذكار تاريخي على إيدي.. خفي شوية ي رحومة! كل سنة وإنتي طيبة ي أخطر عضاضة في المجرة 💜🦷',
    color: '#f8bbd0',
    rotation: 4,
    image: 'images/3ada.jpeg'
  },
  {
    id: 9,
    label: '👠 الفاشونيستا',
    message: 'ميزانية الميكب والبرفانات بتاعتك محتاجة بنك يمولها لوحدها 😂 بس بصراحة الشياكة دي مش بتيجي من فراغ.. دايما الأوتفتاية جامدة، وكل سنة وأوتفتاتك حلوة زيك ي رحومة 👗✨',
    color: '#fce4ec'
  },
  {
    id: 10,
    label: '🍫 كائن الشوكولاتة',
    message: 'لو في حاجة مستحيل تستغني عنها في حياتك فهي الشكولاتة 😂🍫 الكائن الوحيد اللي ممكن مزاجه يتحسن بالكامل بسبب الشكولاتة.. كل سنة وانتي طيبة ي أحلى كائن بيحب الشوكولاتة ✨💜',
    color: '#e1bee7'
  },
  {
    id: 11,
    label: '👀 إيرور 404',
    message: 'لما بتستغربي وعينيكي تقعد تروح يمين وشمال بحس إن السيستم عندك هنج وبتحاولي تستوعبي اللي بيحصل 😂 الريأكشن ده بيبقى تحفة.. كل سنة وإنتي طيبة وضحكتك منورة 🌸',
    color: '#fce4ec'
  },
  {
    id: 12,
    label: '👢 رئيسة حزب البوتات',
    message: 'واضح إن أي outfit عندك لازم يقفل بالبوط وإلا الإطلالة متكملش 😂👢 الثقة اللي بتدخلي بيها لما تلبسيه بتبقى زيادة 200% فعلا.. بس الصراحة؟ بيبقى عليكي أسطوري وبتعرفي تخطفي بيه العين 😌✨',
    color: '#e1bee7',
    rotation: 4
  },
  {
    id: 13,
    label: '📸 ملكة الكاميرا',
    message: 'أي خروجة بالنسبالك لازم يبقى فيها ٤٠٠ صورة على الأقل 😭📸 وعادي جدا تقعدي ترتبيهم وتختاري بينهم بالساعات.. بس الصور بتحلو بيكي فعلا ✨💜',
    color: '#f3e5f5',
    rotation: -2
  },
  {
    id: 14,
    label: '🎬 الجانب السري',
    message: 'جانب تيك توك المستخبي منك.. حاسس إنه رايق جدا وفي عالم بتاعك ومخبياه عن الكل! 👀🎥✨',
    color: '#fce4ec',
    rotation: -4
  },
  {
    id: 15,
    label: '❄️ الكائن الشتوي',
    message: 'عاشقة الشتا اللي مع أول يوم صيف بتقعد تقول "أنا بسيح"! 😭☀️ ومستعدة تعمل أي حاجة بس الصيف يخلص.. روقانك مرتبط بالبرد! ☃️',
    color: '#bbdefb',
    rotation: 3
  },
  {
    id: 16,
    label: '📍 المقر الرئيسي (السرير)',
    message: 'مملكة النوم والروقان.. المكان اللي بتصالحي بيه نفسك، ومستعدة تلغي علشانه أي حاجة في الكوكب! 😉💤',
    color: '#e1bee7',
    rotation: -2
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mini-world-container');
  const map = document.getElementById('mini-world-map');
  const buildingsContainer = document.getElementById('mini-world-buildings');
  const particlesContainer = document.getElementById('mini-world-particles');

  if (!container || !map || !buildingsContainer) return;

  // Zoom and Pan State
  let scale = 1;
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 2;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let translateX = 0;
  let translateY = 0;

  // --- Bouquet Progress State ---
  const visitedLocations = new Set();
  const bouquetProgress = document.getElementById('bouquet-progress');
  const flowerCountEl = document.getElementById('flower-count');
  const flowerEmojis = document.getElementById('flower-emojis');

  function updateBouquetProgress(locId, sourceEl) {
    if (!bouquetProgress || visitedLocations.has(locId)) return;

    visitedLocations.add(locId);

    // Show progress UI if hidden
    bouquetProgress.classList.remove('-translate-x-full', 'opacity-0');

    const count = visitedLocations.size;
    if (flowerCountEl) flowerCountEl.textContent = count;

    // Add a flower emoji to the vase
    const flowers = ['🌹', '🌷', '🌺', '🌸', '🌼'];
    const flower = flowers[Math.floor(Math.random() * flowers.length)];

    if (flowerEmojis) {
      const flowerSpan = document.createElement('span');
      flowerSpan.textContent = flower;
      flowerSpan.className = 'animate-[bounce_0.5s_ease-out] drop-shadow-md';
      flowerSpan.style.transform = `rotate(${(Math.random() - 0.5) * 40}deg)`;
      flowerEmojis.appendChild(flowerSpan);
    }

    // Animate a flower flying from the building to the progress UI
    if (sourceEl) {
      const rect = sourceEl.getBoundingClientRect();
      const targetRect = bouquetProgress.getBoundingClientRect();

      const flyingFlower = document.createElement('div');
      flyingFlower.textContent = flower;
      flyingFlower.className = 'fixed text-4xl z-[150] pointer-events-none transition-all duration-1000 ease-in-out drop-shadow-lg';
      flyingFlower.style.left = `${rect.left + rect.width / 2}px`;
      flyingFlower.style.top = `${rect.top + rect.height / 2}px`;
      document.body.appendChild(flyingFlower);

      // Force reflow
      flyingFlower.getBoundingClientRect();

      flyingFlower.style.left = `${targetRect.left + 40}px`;
      flyingFlower.style.top = `${targetRect.top + 40}px`;
      flyingFlower.style.transform = 'scale(0.5) rotate(360deg)';
      flyingFlower.style.opacity = '0';

      setTimeout(() => flyingFlower.remove(), 1000);
    }

    // Bounce the UI
    bouquetProgress.classList.add('scale-105');
    setTimeout(() => bouquetProgress.classList.remove('scale-105'), 300);
  }

  function updateTransform() {
    map.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  // --- Map Navigation Controls ---

  const zoomInBtn = document.getElementById('zoom-in-world');
  const zoomOutBtn = document.getElementById('zoom-out-world');
  const resetBtn = document.getElementById('reset-world');

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      scale = Math.min(scale + 0.2, MAX_SCALE);
      updateTransform();
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      scale = Math.max(scale - 0.2, MIN_SCALE);
      updateTransform();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      scale = 1;
      translateX = 0;
      translateY = 0;
      updateTransform();
    });
  }

  // --- Mouse / Touch Dragging ---

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  // Touch support
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX - translateX;
      startY = e.touches[0].clientY - translateY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    translateX = e.touches[0].clientX - startX;
    translateY = e.touches[0].clientY - startY;
    updateTransform();
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Zoom with mouse wheel
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1;
    scale = Math.min(Math.max(scale + zoomDelta, MIN_SCALE), MAX_SCALE);
    updateTransform();
  }, { passive: false });


  // --- Mini World Locations ---
  // Using global notesData array (defined in notes.js) to map locations to their messages
  // fallback items if not found by id
  const getNote = (id, fallbackIndex) => {
    if (typeof notesData !== 'undefined') {
      const note = notesData.find(n => n.id === id);
      return note || notesData[fallbackIndex] || notesData[0];
    }
    return { label: 'سر', message: 'محتوى سري', color: '#fff' };
  };

  const locations = [
    {
      id: 'warning', icon: '🚫',
      top: '15%', left: '15%',
      bgColor: 'bg-[#ffebee]', borderColor: 'border-[#ef9a9a]', shadow: 'shadow-[0_10px_20px_rgba(239,154,154,0.3)]',
      noteId: 1, animation: 'animate-bounce-slow', particleColor: '#ef9a9a', decorations: ['⚠️', '🛑']
    },
    {
      id: 'secret', icon: '🤫',
      top: '15%', left: '50%',
      bgColor: 'bg-[#f3e5f5]', borderColor: 'border-[#ce93d8]', shadow: 'shadow-[0_10px_20px_rgba(206,147,216,0.3)]',
      noteId: 2, animation: 'animate-float-slow', particleColor: '#ce93d8', decorations: ['🗝️', '✨']
    },
    {
      id: 'medical', icon: '🏥',
      top: '20%', left: '80%',
      bgColor: 'bg-[#e3f2fd]', borderColor: 'border-[#90caf9]', shadow: 'shadow-[0_10px_20px_rgba(144,202,249,0.3)]',
      noteId: 3, animation: 'animate-jiggle-slow', particleColor: '#90caf9', decorations: ['💊', '🌡️']
    },
    {
      id: 'cafe', icon: '☕',
      top: '35%', left: '15%',
      bgColor: 'bg-[#e8f5e9]', borderColor: 'border-[#81c784]', shadow: 'shadow-[0_10px_20px_rgba(129,199,132,0.3)]',
      noteId: 4, animation: 'animate-bounce-slow', particleColor: '#81c784', decorations: ['🌿', '🍵']
    },
    {
      id: 'emergency', icon: '🚨',
      top: '45%', left: '50%',
      bgColor: 'bg-[#fff3e0]', borderColor: 'border-[#ffb74d]', shadow: 'shadow-[0_10px_20px_rgba(255,183,77,0.3)]',
      noteId: 5, animation: 'animate-pulse', particleColor: '#ffb74d', decorations: ['🆘', '🔥']
    },
    {
      id: 'farm', icon: '🌾',
      top: '60%', left: '30%',
      bgColor: 'bg-[#fff9c4]', borderColor: 'border-[#fff176]', shadow: 'shadow-[0_10px_20px_rgba(255,241,118,0.3)]',
      noteId: 6, animation: 'animate-bounce-slow', particleColor: '#fff176', decorations: ['🐔', '🌻']
    },
    {
      id: 'clinic', icon: '🧠',
      top: '75%', left: '45%',
      bgColor: 'bg-[#fce4ec]', borderColor: 'border-[#f48fb1]', shadow: 'shadow-[0_10px_20px_rgba(244,143,177,0.3)]',
      noteId: 7, animation: 'animate-float-slow', particleColor: '#f48fb1', decorations: ['👀', '📝']
    },
    {
      id: 'detective', icon: '🦷',
      top: '60%', left: '65%',
      bgColor: 'bg-[#ffecb3]', borderColor: 'border-[#ffd54f]', shadow: 'shadow-[0_10px_20px_rgba(255,213,79,0.3)]',
      noteId: 8, animation: 'animate-jiggle-slow', particleColor: '#ffd54f', decorations: ['🚨', '🔍']
    },
    {
      id: 'mall', icon: '👠',
      top: '55%', left: '85%',
      bgColor: 'bg-[#f3e5f5]', borderColor: 'border-[#ba68c8]', shadow: 'shadow-[0_10px_20px_rgba(186,104,200,0.3)]',
      noteId: 9, animation: 'animate-float-slow', particleColor: '#ba68c8', decorations: ['💅', '👗', '✨']
    },
    {
      id: 'factory', icon: '🍫',
      top: '80%', left: '85%',
      bgColor: 'bg-[#efebe9]', borderColor: 'border-[#bcaaa4]', shadow: 'shadow-[0_10px_20px_rgba(188,170,164,0.3)]',
      noteId: 10, animation: 'animate-jiggle-slow', particleColor: '#8d6e63', decorations: ['🍬', '🍩']
    },
    {
      id: 'error', icon: '💻',
      top: '85%', left: '65%',
      bgColor: 'bg-[#e0f2f1]', borderColor: 'border-[#4db6ac]', shadow: 'shadow-[0_10px_20px_rgba(77,182,172,0.3)]',
      noteId: 11, animation: 'animate-pulse', particleColor: '#4db6ac', decorations: ['👀', '🔌']
    },
    {
      id: 'boots', icon: '👢',
      top: '35%', left: '85%',
      bgColor: 'bg-[#e1bee7]', borderColor: 'border-[#ab47bc]', shadow: 'shadow-[0_10px_20px_rgba(171,71,188,0.3)]',
      noteId: 12, animation: 'animate-bounce-slow', particleColor: '#ab47bc', decorations: ['👢', '✨']
    },
    {
      id: 'camera', icon: '📸',
      top: '25%', left: '35%',
      bgColor: 'bg-[#f3e5f5]', borderColor: 'border-[#ce93d8]', shadow: 'shadow-[0_10px_20px_rgba(206,147,216,0.3)]',
      noteId: 13, animation: 'animate-float-slow', particleColor: '#ce93d8', decorations: ['🎞️', '📸']
    },
    {
      id: 'tiktok', icon: '🎬',
      top: '55%', left: '15%',
      bgColor: 'bg-[#fce4ec]', borderColor: 'border-[#f06292]', shadow: 'shadow-[0_10px_20px_rgba(240,98,146,0.3)]',
      noteId: 14, animation: 'animate-pulse', particleColor: '#f06292', decorations: ['🎵', '🎭']
    },
    {
      id: 'winter', icon: '❄️',
      top: '80%', left: '20%',
      bgColor: 'bg-[#bbdefb]', borderColor: 'border-[#64b5f6]', shadow: 'shadow-[0_10px_20px_rgba(100,181,246,0.3)]',
      noteId: 15, animation: 'animate-float-slow', particleColor: '#64b5f6', decorations: ['☃️', '❄️']
    },
    {
      id: 'bed', icon: '🛌',
      top: '40%', left: '70%',
      bgColor: 'bg-[#e1bee7]', borderColor: 'border-[#ce93d8]', shadow: 'shadow-[0_10px_20px_rgba(206,147,216,0.3)]',
      noteId: 16, animation: 'animate-pulse', particleColor: '#ce93d8', decorations: ['💤', '🌙']
    }
  ];

  // Render locations
  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = `absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${loc.animation}`;
    el.style.top = loc.top;
    el.style.left = loc.left;

    // Build building HTML
    let decorHTML = loc.decorations.map((d, i) =>
      `<span class="absolute text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" style="top: ${-20 + (i * -15)}px; left: ${i % 2 === 0 ? '-10px' : '30px'}; transition-delay: ${i * 0.1}s;">${d}</span>`
    ).join('');

    // Get label dynamically from notesData
    const note = getNote(loc.noteId);
    const labelTitle = note.label;

    el.innerHTML = `
      ${decorHTML}
      <!-- Building container -->
      <div class="relative w-16 h-16 md:w-20 md:h-20 ${loc.bgColor} rounded-2xl border-2 md:border-4 ${loc.borderColor} ${loc.shadow} flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110 z-10">
        <span class="text-2xl md:text-4xl drop-shadow-sm mb-1">${loc.icon}</span>
        
        <!-- Roof/Awning styling -->
        <div class="absolute -top-2 w-[110%] h-4 rounded-t-lg bg-white/40 border-b-2 border-white/60"></div>
      </div>
      <!-- Label -->
      <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 px-3 py-1 rounded-full border-2 border-dashed border-gray-300 shadow-sm opacity-100 z-20 pointer-events-none font-handwritten text-base text-gray-800">
        ${labelTitle}
      </div>
    `;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openLocationModal(loc, el);

      // Make the building inactive after clicking
      el.classList.add('opacity-60', 'grayscale');
      el.classList.remove(loc.animation, 'cursor-pointer', 'group');
    });

    buildingsContainer.appendChild(el);
  });

  // Open the global note modal with custom animation/effects based on location
  function openLocationModal(loc, sourceEl) {
    const note = getNote(loc.noteId);
    const labelTitle = note.label;

    if (window.sendDiscordAction) {
      window.sendDiscordAction(`استكشفت ${labelTitle} 🗺️`);
    }

    createParticles(loc);

    const noteModal = document.getElementById('note-modal');
    const noteModalContent = document.getElementById('note-modal-content');
    const modalLabel = document.getElementById('modal-label');
    const modalMessage = document.getElementById('modal-message');
    const modalImageContainer = document.getElementById('modal-image-container');
    const modalImage = document.getElementById('modal-image');

    if (!noteModal || !noteModalContent) return;

    // Trigger Bouquet Progress
    updateBouquetProgress(loc.id, sourceEl);

    // Clean up old dynamic elements
    noteModalContent.querySelectorAll('.dynamic-scrapbook-element').forEach(el => el.remove());
    document.querySelectorAll('.holo-beam').forEach(b => b.remove());

    modalLabel.textContent = labelTitle;
    modalMessage.innerHTML = `<span class="block mb-4 text-3xl opacity-50 z-10 relative">${loc.icon}</span><span class="relative z-10 font-bold">${note.message}</span>`;

    if (note.image) {
      modalImage.src = note.image;
      modalImage.style.filter = ''; // Reset any previous filters
      modalImage.style.mixBlendMode = 'normal';
      modalImageContainer.classList.remove('hidden');
    } else {
      modalImageContainer.classList.add('hidden');
      modalImage.src = '';
    }

    // Custom Theme Map per Location
    const themeMap = {
      'warning': { deco: '📌', pattern: 'stripes', border: '#ffcdd2' },
      'secret': { deco: '🗝️', pattern: 'dots', border: '#e1bee7' },
      'medical': { deco: '🩹', pattern: 'grid', border: '#bbdefb' },
      'cafe': { deco: '🌿', pattern: 'dots', border: '#c8e6c9' },
      'emergency': { deco: '🚨', pattern: 'stripes', border: '#ffe0b2' },
      'farm': { deco: '🌻', pattern: 'grid', border: '#fff9c4' },
      'clinic': { deco: '📝', pattern: 'dots', border: '#f8bbd0' },
      'detective': { deco: '🔍', pattern: 'stripes', border: '#ffecb3' },
      'mall': { deco: '🎀', pattern: 'dots', border: '#e1bee7' },
      'factory': { deco: '🍫', pattern: 'grid', border: '#d7ccc8' },
      'error': { deco: '💻', pattern: 'stripes', border: '#b2dfdb' },
      'boots': { deco: '👢', pattern: 'dots', border: '#e1bee7' },
      'camera': { deco: '📸', pattern: 'grid', border: '#f3e5f5' },
      'tiktok': { deco: '🎬', pattern: 'stripes', border: '#f8bbd0' },
      'winter': { deco: '☃️', pattern: 'dots', border: '#e3f2fd' }
    };

    const theme = themeMap[loc.id] || { deco: '🎀', pattern: 'dots', border: '#fff' };

    // --- Cute Scrapbook / Polaroid Styling ---
    noteModalContent.style.borderRadius = "12px 12px 24px 24px";
    noteModalContent.style.border = `8px solid ${theme.border}`;
    noteModalContent.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)";

    // Background based on theme
    noteModalContent.style.backgroundColor = note.color || '#fff0f5';
    if (theme.pattern === 'stripes') {
      noteModalContent.style.backgroundImage = 'repeating-linear-gradient(45deg, rgba(255,255,255,0.25), rgba(255,255,255,0.25) 10px, transparent 10px, transparent 20px)';
    } else if (theme.pattern === 'grid') {
      noteModalContent.style.backgroundImage = 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)';
    } else {
      noteModalContent.style.backgroundImage = 'radial-gradient(rgba(255,255,255,0.4) 3px, transparent 3px)';
    }
    noteModalContent.style.backgroundSize = '20px 20px';
    noteModalContent.style.backdropFilter = "none";

    // Soft text styling & Readability Box
    noteModalContent.style.color = "#333";

    modalLabel.style.color = '#d81b60'; // Soft pinkish red
    modalLabel.style.textShadow = 'none';
    modalLabel.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    modalLabel.style.padding = '4px 16px';
    modalLabel.style.borderRadius = '20px';
    modalLabel.style.display = 'inline-block';

    modalMessage.style.color = '#333';
    modalMessage.style.textShadow = 'none';
    modalMessage.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    modalMessage.style.padding = '1.5rem';
    modalMessage.style.borderRadius = '16px';
    modalMessage.style.boxShadow = '0 4px 10px rgba(0,0,0,0.03)';

    // Top Decoration
    const topDeco = document.createElement('div');
    topDeco.className = 'dynamic-scrapbook-element absolute -top-6 left-1/2 -translate-x-1/2 text-5xl drop-shadow-sm z-50 transform hover:scale-110 transition-transform cursor-pointer';
    topDeco.innerHTML = theme.deco;
    noteModalContent.appendChild(topDeco);

    // Add cute stickers to corners mixed with location decorations
    const baseStickers = ['✨', '💖', '🌸', '🎀'];
    const locationDecos = loc.decorations || [];
    const stickers = [...baseStickers, ...locationDecos];

    const addSticker = (top, left, right, bottom, rotate) => {
      const sticker = document.createElement('div');
      sticker.className = 'dynamic-scrapbook-element absolute text-3xl drop-shadow-md z-50 pointer-events-none opacity-90';
      sticker.innerHTML = stickers[Math.floor(Math.random() * stickers.length)];
      if (top) sticker.style.top = top;
      if (left) sticker.style.left = left;
      if (right) sticker.style.right = right;
      if (bottom) sticker.style.bottom = bottom;
      sticker.style.transform = `rotate(${rotate}deg)`;
      noteModalContent.appendChild(sticker);
    };

    addSticker('-15px', '-15px', null, null, -15);
    addSticker(null, null, '-15px', '-10px', 20);

    // Reset container styling
    noteModalContent.style.transformOrigin = "center center";
    noteModalContent.classList.remove('transition-all', 'duration-300', 'scale-90', 'translate-y-10', 'rotate-[-5deg]', 'scale-100', 'translate-y-0', 'rotate-0');

    // Soft glowing pink backdrop
    noteModal.style.backgroundColor = 'rgba(255, 235, 240, 0.7)';
    noteModal.style.backdropFilter = 'blur(5px)';
    noteModal.classList.remove('pointer-events-none', 'opacity-0');
    noteModalContent.style.opacity = '0';

    // Dreamy Entrance Animation (Bouncy Float Up)
    const finalRotate = (Math.random() - 0.5) * 6; // Slight random tilt

    noteModalContent.animate([
      { transform: 'translateY(150px) scale(0.8) rotate(-10deg)', opacity: 0 },
      { transform: 'translateY(-15px) scale(1.02) rotate(5deg)', opacity: 1, offset: 0.6 },
      { transform: `translateY(0) scale(1) rotate(${finalRotate}deg)`, opacity: 1 }
    ], {
      duration: 800,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy spring easing
      fill: 'forwards'
    }).onfinish = () => {
      noteModalContent.style.opacity = '1';
      noteModalContent.style.transform = `translateY(0) scale(1) rotate(${finalRotate}deg)`;

      // Sparkle/Heart burst from the card
      if (window.confetti) {
        confetti({
          particleCount: 50,
          spread: 90,
          origin: { y: 0.5 },
          colors: [note.color || '#ffb6c1', theme.border, '#ffffff', '#ffeb3b'],
          shapes: ['circle'],
          scalar: 1.2
        });
      }

      // Continuous gentle float (Breathing effect)
      if (noteModalContent.holoAnimation) noteModalContent.holoAnimation.cancel();
      noteModalContent.customAnimation = noteModalContent.animate([
        { transform: `translateY(0px) rotate(${finalRotate}deg)` },
        { transform: `translateY(-6px) rotate(${finalRotate + 1}deg)` },
        { transform: `translateY(0px) rotate(${finalRotate}deg)` }
      ], {
        duration: 3500,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    };
  }

  // --- Particles Effect ---
  function createParticles(loc) {
    if (!particlesContainer) return;

    // Confetti / Particles on click
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.textContent = loc.decorations[Math.floor(Math.random() * loc.decorations.length)] || loc.icon;
      p.className = 'absolute text-xl md:text-2xl pointer-events-none z-50';

      // Starting position based on the building's coordinates
      p.style.top = loc.top;
      p.style.left = loc.left;

      // Random movement
      const tx = (Math.random() - 0.5) * 200;
      const ty = (Math.random() - 0.5) * 200 - 50;
      const rot = Math.random() * 360;

      p.style.transition = 'all 1s cubic-bezier(0.1, 0.8, 0.3, 1)';
      p.style.transform = 'translate(-50%, -50%) scale(0.5) rotate(0deg)';

      particlesContainer.appendChild(p);

      // Animate out
      requestAnimationFrame(() => {
        p.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.2) rotate(${rot}deg)`;
        p.style.opacity = '0';
      });

      // Cleanup
      setTimeout(() => {
        if (p.parentNode) p.parentNode.removeChild(p);
      }, 1000);
    }
  }

  // --- Modal Close Logic ---
  const noteModal = document.getElementById('note-modal');
  const noteModalContent = document.getElementById('note-modal-content');
  const closeModalBtn = document.getElementById('close-modal-btn');

  function closeModal() {
    if (!noteModalContent || !noteModal) return;

    if (noteModalContent.customAnimation) {
      noteModalContent.customAnimation.cancel();
    }
    if (noteModalContent.holoAnimation) {
      noteModalContent.holoAnimation.cancel();
    }

    // Soft slide down fade out
    noteModalContent.animate([
      { transform: noteModalContent.style.transform || 'scale(1)', opacity: 1 },
      { transform: 'translateY(50px) scale(0.9) rotate(-5deg)', opacity: 0 }
    ], {
      duration: 300,
      easing: 'ease-in',
      fill: 'forwards'
    }).onfinish = () => {
      noteModal.classList.add('pointer-events-none', 'opacity-0');
      noteModal.style.backgroundColor = '';
      noteModal.style.backdropFilter = '';
      noteModalContent.style.opacity = '0';

      const modalImage = document.getElementById('modal-image');
      if (modalImage) {
        modalImage.style.filter = '';
        modalImage.style.mixBlendMode = '';
      }

      // Check for Final Bouquet Reward
      setTimeout(() => {
        if (visitedLocations.size === locations.length) {
          showBouquetModal();
        }
      }, 100);
    };

    document.querySelectorAll('.holo-beam').forEach(b => b.remove());
  }

  // --- Final Bouquet Reward Logic ---
  const bouquetModal = document.getElementById('bouquet-modal');
  const closeBouquetBtn = document.getElementById('close-bouquet-btn');

  function showBouquetModal() {
    if (!bouquetModal || bouquetModal.classList.contains('shown')) return;

    bouquetModal.classList.add('shown');
    bouquetModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    if (window.sendDiscordAction) {
      window.sendDiscordAction(`جمعت بوكيه الورد بالكامل من الخريطة! 💐`);
    }

    // Trigger Confetti Storm
    if (window.confetti) {
      const duration = 4000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 8,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: ['#ffb6c1', '#ff69b4', '#d81b60', '#ffcdd2', '#ffffff']
        });
        confetti({
          particleCount: 8,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ['#ffb6c1', '#ff69b4', '#d81b60', '#ffcdd2', '#ffffff']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }

    setTimeout(() => {
      bouquetModal.classList.remove('opacity-0');
      const container = document.getElementById('bouquet-container');
      if (container) {
        container.classList.remove('translate-y-full');
        container.classList.add('translate-y-0');
      }
    }, 50);
  }

  if (closeBouquetBtn) {
    closeBouquetBtn.addEventListener('click', () => {
      bouquetModal.classList.add('opacity-0');
      const container = document.getElementById('bouquet-container');
      if (container) {
        container.classList.add('translate-y-full');
        container.classList.remove('translate-y-0');
      }
      setTimeout(() => {
        bouquetModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }, 1000);
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (noteModal) {
    noteModal.addEventListener('click', (e) => {
      if (e.target === noteModal) closeModal();
    });
  }

});
