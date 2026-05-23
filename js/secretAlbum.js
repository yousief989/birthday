document.addEventListener('DOMContentLoaded', () => {
  const stickers = [
    "STK-20241229-WA0010.webp", "STK-20250119-WA0027.webp", "STK-20250124-WA0009.webp",
    "STK-20251004-WA0034.webp", "STK-20251006-WA0007.webp", "STK-20251019-WA0007.webp",
    "STK-20251020-WA0024.webp", "STK-20251224-WA0011.webp", "STK-20260124-WA0000.webp",
    "STK-20260129-WA0000.webp", "STK-20260206-WA0010.webp", "STK-20260206-WA0011.webp",
    "STK-20260207-WA0020.webp", "STK-20260210-WA0015.webp", "STK-20260210-WA0018.webp",
    "STK-20260210-WA0019.webp", "STK-20260210-WA0021.webp", "STK-20260212-WA0069.webp",
    "STK-20260213-WA0010.webp", "STK-20260213-WA0013.webp", "STK-20260213-WA0014.webp",
    "STK-20260217-WA0009.webp", "STK-20260217-WA0010.webp", "STK-20260217-WA0042.webp",
    "STK-20260217-WA0068.webp", "STK-20260226-WA0029.webp", "STK-20260302-WA0003.webp",
    "STK-20260302-WA0151.webp", "STK-20260302-WA0156.webp", "STK-20260303-WA0008.webp",
    "STK-20260303-WA0011.webp", "STK-20260304-WA0010.webp", "STK-20260305-WA0566.webp",
    "STK-20260316-WA0011.webp", "STK-20260317-WA0061.webp", "STK-20260421-WA0010.webp",
    "STK-20260422-WA0009.webp", "STK-20260504-WA0000.webp", "STK-20260510-WA0001.webp",
    "STK-20260510-WA0038.webp", "STK-20260316-WA0014.webp",
  ];

  const btn = document.getElementById('secret-album-btn');
  const modal = document.getElementById('secret-album-modal');
  const content = document.getElementById('secret-album-content');
  const closeBtn = document.getElementById('close-album-btn');
  const grid = document.getElementById('stickers-grid');

  let isPopulated = false;

  const populateGrid = () => {
    if (isPopulated) return;

    // Shuffle stickers so they are in a different order each reload
    const shuffled = [...stickers].sort(() => Math.random() - 0.5);

    shuffled.forEach(sticker => {
      const wrapper = document.createElement('div');

      // Randomize small rotation for scrapbook feel
      const rotate = (Math.random() - 0.5) * 16;

      wrapper.className = 'w-full aspect-square bg-white/80 rounded-2xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.15] hover:z-10 cursor-pointer border-2 border-pink-100 flex items-center justify-center';
      wrapper.style.transform = `rotate(${rotate}deg)`;

      const img = document.createElement('img');
      img.src = `images/stickers/${sticker}`;
      img.className = 'w-full h-full object-contain filter drop-shadow-sm';
      img.loading = 'lazy'; // So they don't block page load

      wrapper.appendChild(img);
      grid.appendChild(wrapper);

      wrapper.addEventListener('click', () => {
        // Play a cute flip animation
        wrapper.classList.add('animate-flip');
        setTimeout(() => wrapper.classList.remove('animate-flip'), 300);
      });
    });

    isPopulated = true;
  };

  const openModal = () => {
    populateGrid();
    
    // Hide the hint permanently once she discovers it
    const tooltip = document.getElementById('album-btn-tooltip');
    if (tooltip) tooltip.classList.add('hidden');

    // Disable scrolling
    document.body.style.overflow = 'hidden';

    if (window.sendDiscordAction) {
      window.sendDiscordAction("فتحت الألبوم السري للستيكرز 📒👀");
    }

    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      content.classList.remove('scale-95');
      content.classList.add('scale-100');
    }, 10);
  };

  const closeModal = () => {
    // Enable scrolling
    document.body.style.overflow = '';
    
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('opacity-0', 'pointer-events-none');
    }, 200);
  };

  btn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
});
