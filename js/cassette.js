document.addEventListener('DOMContentLoaded', () => {
  const moodBtns = document.querySelectorAll('.mood-btn');
  const leftReel = document.getElementById('left-reel');
  const rightReel = document.getElementById('right-reel');
  const messageBox = document.getElementById('cassette-message-box');
  const messageText = document.getElementById('cassette-message-text');

  if (!moodBtns.length || !leftReel) return;

  let rotation = 0;
  let reelInterval = null;

  const moods = {
    chill: 'واضح إن المود رايق النهاردة 😌 حقك بصراحة.. عيد ميلادك والجو كله متفصل على مودك، وكل سنة وأنتي طيبة ي أبو الفصاد! 😂💜',
    
    angry: "أيوة كدا.. النظرة دي معناها إن فيه حد هيختفي من على وش الأرض خلال دقايق 😂💀",

    sleepy: "السيستم بدأ يفصل خلاص 😭😴 واضح إنك محتاجة شوية نوم قبل ما المخ يعمل restart",
  };
  moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.getAttribute('data-mood');

      // Stop previous animation
      if (reelInterval) clearInterval(reelInterval);

      // Animation & update
      messageBox.classList.remove('opacity-50', 'scale-95');
      messageBox.classList.add('opacity-0', 'scale-90');

      setTimeout(() => {
        messageText.textContent = moods[mood];
        messageBox.classList.remove('opacity-0', 'scale-90');
        messageBox.classList.add('opacity-100', 'scale-100');
        messageBox.classList.remove('bg-[#fff9c4]', 'border-[#fbc02d]');

        // Change box color based on mood
        if (mood === 'chill') { messageBox.classList.add('bg-[#e0f2f1]', 'border-[#80cbc4]'); }
        else if (mood === 'angry') { messageBox.classList.add('bg-[#ffebee]', 'border-[#ef9a9a]'); }
        else if (mood === 'sleepy') { messageBox.classList.add('bg-[#efebe9]', 'border-[#bcaaa4]'); }
        else if (mood === 'drama') { messageBox.classList.add('bg-[#f3e5f5]', 'border-[#ce93d8]'); }

        // Start reels
        reelInterval = setInterval(() => {
          rotation += 5;
          leftReel.style.transform = `rotate(${rotation}deg)`;
          rightReel.style.transform = `rotate(${rotation}deg)`;
        }, 30);

        // Send discord action if configured
        if (window.sendDiscordAction) {
          window.sendDiscordAction(`شغلت شريط الكاسيت على مود: ${btn.textContent.trim()} 📼`);
        }
      }, 300);

      // Reset button styles
      moodBtns.forEach(b => {
        b.classList.remove('ring-4', 'ring-offset-2', 'ring-[#f48fb1]', 'scale-105');
      });
      btn.classList.add('ring-4', 'ring-offset-2', 'ring-[#f48fb1]', 'scale-105');
    });
  });
});
