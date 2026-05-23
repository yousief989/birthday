const dictionaryData = [
  // {
  //   id: 1,
  //   phrase: '"ياعم"',
  //   meaning: '"تُستخدم كبداية ونهاية وأحيانا محتوى الجملة كلها 😭"',
  //   wrapperClass: 'mt-4',
  //   flipDir: '180deg',
  //   flipBack: '180deg',
    
  //   // Front Styles
  //   frontBg: 'bg-[#fff9c4]',
  //   frontBorder: 'border border-[#f0e68c]',
  //   frontRounded: 'rounded-sm',
  //   frontRotate: 'rotate-3',
  //   frontDecoration: `<div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#e1bee7] opacity-80 rotate-2 mix-blend-multiply shadow-sm"></div>`,
  //   frontLabel: `<div class="absolute bottom-4 right-4 text-sm font-handwritten text-[#5a4a42] bg-white/70 px-3 py-1 rounded shadow-sm rotate-[-5deg]">يُستخدم يوميا 📌</div>`,
    
  //   // Back Styles
  //   backBg: 'bg-[#fffff8]',
  //   backBorder: 'border-2 border-[#fff9c4]',
  //   backRounded: 'rounded-sm',
  //   backRotate: '-rotate-2',
  //   backDecoration: `
  //     <div class="mt-6 text-sm font-sans text-[#8b7a6e] border-t border-dashed border-[#d7ccc8] pt-3 w-full text-center font-bold">
  //       عدد مرات الاستخدام: غير قابل للإحصاء 🚨
  //     </div>
  //   `,
    
  //   // Outer Decorations
  //   outerDecoration: `<div class="absolute -left-12 top-1/2 hidden lg:block text-3xl rotate-45 text-[#ffb6c1] opacity-70">➚</div>`
  // },
  // {
  //   id: 2,
  //   phrase: '"سجدة شكر"',
  //   meaning: '"تُقال بعد أي خبر مريح أو لما الحياة تقرر ترحمنا فجأة 😭"',
  //   wrapperClass: 'mt-12 md:mt-0',
  //   flipDir: '-180deg',
  //   flipBack: '-180deg',
    
  //   frontBg: 'bg-[#f8bbd0]',
  //   frontBorder: 'border-4 border-double border-white',
  //   frontRounded: 'rounded-2xl',
  //   frontRotate: '-rotate-4',
  //   phraseClass: 'mt-4',
  //   frontDecoration: `
  //     <div class="absolute top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#ff5252] shadow-md z-10">
  //       <div class="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/50"></div>
  //     </div>
  //   `,
  //   frontLabel: `<div class="absolute bottom-5 left-4 text-sm font-handwritten text-white bg-[#ef5350]/90 px-3 py-1 rounded-full shadow-sm rotate-[4deg]">درجة خطورته عالية ⚡</div>`,
    
  //   backBg: 'bg-[#fff0f5]',
  //   backBorder: 'border-2 border-dashed border-[#f8bbd0]',
  //   backRounded: 'rounded-2xl',
  //   backRotate: 'rotate-1',
  //   backDecoration: `<div class="absolute top-4 right-4 text-2xl animate-bounce">💖</div>`
  // },
  // {
  //   id: 3,
  //   phrase: '"ياعم متشكرين"',
  //   meaning: '"طريقة محترمة لإنهاء أي نقاش بدون أي تفاوض إضافي 😌"',
  //   wrapperClass: 'mt-8',
  //   flipDir: '180deg',
  //   flipBack: '180deg',
    
  //   frontBg: 'bg-[#e1bee7]',
  //   frontBorder: 'border border-[#d1c4e9]',
  //   frontRounded: 'rounded-md',
  //   frontRotate: 'rotate-2',
  //   frontStyle: 'background-image: repeating-linear-gradient(transparent, transparent 29px, #d1c4e9 30px);',
  //   phraseClass: 'bg-white/50 px-2 py-1 rounded',
  //   frontDecoration: `<div class="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-24 bg-[#c5e1a5] opacity-70 rotate-12 mix-blend-multiply shadow-sm"></div>`,
  //   frontLabel: `<div class="absolute top-4 left-4 text-sm font-handwritten text-[#5a4a42] bg-[#fff9c4] px-3 py-1 shadow-md rotate-[-8deg] rounded-sm">مصطلح معتمد رسميا 🏅</div>`,
    
  //   backBg: 'bg-[#fafafa]',
  //   backBorder: 'border-l-4 border-l-[#e1bee7]',
  //   backRounded: 'rounded-md',
  //   backRotate: '-rotate-3',
  //   backStyle: 'background-image: repeating-linear-gradient(transparent, transparent 29px, #e0e0e0 30px);',
  //   meaningClass: 'bg-white/80 px-2 py-1 rounded',
  //   backDecoration: ``
  // },
  // {
  //   id: 4,
  //   phrase: '"يلاهوي بقى"',
  //   meaning: '"تُقال عند الوصول لأقصى مراحل الصدمة 😭"',
  //   wrapperClass: 'mt-16 md:mt-8',
  //   flipDir: '-180deg',
  //   flipBack: '-180deg',
    
  //   frontBg: 'bg-[#c5e1a5]',
  //   frontBorder: 'border-[8px] border-white',
  //   frontRounded: 'rounded-sm',
  //   frontRotate: '-rotate-5',
  //   frontExtraClasses: 'hover:scale-105 transition-transform duration-300',
  //   frontDecoration: `
  //     <div class="absolute bottom-[-8px] left-[-8px] w-10 h-10 bg-black/10 z-10" style="clip-path: polygon(0 0, 100% 100%, 0 100%);"></div>
  //     <div class="absolute bottom-[-8px] left-[-8px] w-10 h-10 bg-white z-20 shadow-inner" style="clip-path: polygon(100% 0, 0 0, 100% 100%);"></div>
  //     <div class="absolute top-4 right-4 text-3xl animate-pulse">✨</div>
  //     <div class="absolute bottom-4 right-4 text-2xl rotate-12">🙈</div>
  //   `,
    
  //   backBg: 'bg-white',
  //   backBorder: 'border-2 border-[#c5e1a5]',
  //   backRounded: 'rounded-sm',
  //   backRotate: 'rotate-2',
  //   backDecoration: `
  //     <div class="mt-8 font-handwritten text-xl text-[#e53935] text-center bg-[#ffebee] px-4 py-1 rounded-full rotate-[-3deg] shadow-sm font-bold">
  //       ⚠️ خطر الانفجار
  //     </div>
  //   `
  // }
  {
    id: 1,
    phrase: '"ياعم ماشي"',
    meaning: '"بتتقال لما تكون عايزة تقفل أي حوار أو تجيب من الآخر.. والترجمة الحرفية ليها: (سيبني في حالي وماتوجعش دماغي) 😂"',
    wrapperClass: 'mt-4',
    flipDir: '180deg',
    flipBack: '180deg',
    
    // Front Styles
    frontBg: 'bg-[#fff9c4]',
    frontBorder: 'border border-[#f0e68c]',
    frontRounded: 'rounded-sm',
    frontRotate: 'rotate-3',
    frontDecoration: `<div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#e1bee7] opacity-80 rotate-2 mix-blend-multiply shadow-sm"></div>`,
    frontLabel: `<div class="absolute bottom-4 right-4 text-sm font-handwritten text-[#5a4a42] bg-white/70 px-3 py-1 rounded shadow-sm rotate-[-5deg]">يُستخدم يوميا 📌</div>`,
    
    // Back Styles
    backBg: 'bg-[#fff9c4]',
    backBorder: 'border-2 border-[#f0e68c]',
    backRounded: 'rounded-sm',
    backRotate: '-rotate-2',
    meaningClass: 'text-[#5a4a42] font-semibold',
    backDecoration: `
      <div class="mt-6 text-sm font-sans text-[#8b7a6e] border-t border-dashed border-[#d7ccc8] pt-3 w-full text-center font-bold">
        عدد مرات الاستخدام: غير قابل للإحصاء 🚨
      </div>
    `,
    
    // Outer Decorations
    outerDecoration: `<div class="absolute -left-12 top-1/2 hidden lg:block text-3xl rotate-45 text-[#ffb6c1] opacity-70">➚</div>`
  },
  {
    id: 2,
    phrase: '"حاضر"',
    meaning: '"الكلمة السحرية اللي بتسكتنا بيها عشان نخلص، وطبعا كلنا عارفين إنها في الآخر بتعمل اللي في دماغها برضه 🙄"',
    wrapperClass: 'mt-10 md:mt-2',
    flipDir: '-180deg',
    flipBack: '-180deg',
    
    // Front Styles
    frontBg: 'bg-[#bbdefb]',
    frontBorder: 'border border-[#90caf9]',
    frontRounded: 'rounded-lg',
    frontRotate: '-rotate-2',
    frontDecoration: `<div class="absolute -top-3 right-1/4 w-16 h-6 bg-[#ffcc80] opacity-80 rotate-[-6deg] mix-blend-multiply shadow-sm"></div>`,
    frontLabel: `<div class="absolute bottom-4 left-4 text-sm font-handwritten text-[#1565c0] bg-white/80 px-3 py-1 rounded shadow-sm rotate-[4deg]">تسليك معتمد 🤫</div>`,
    
    // Back Styles
    backBg: 'bg-[#bbdefb]',
    backBorder: 'border-2 border-dashed border-[#90caf9]',
    backRounded: 'rounded-lg',
    backRotate: 'rotate-1',
    meaningClass: 'text-[#0d47a1] font-semibold',
    backDecoration: `<div class="absolute top-4 right-4 text-2xl animate-pulse">🤐</div>`,
    
    outerDecoration: ``
  },
  {
    id: 3,
    phrase: '"ياعم متشكرين"',
    meaning: '"أسرع قفلة حوار في الدنيا وبأقل مجهود.. أول ما تحسي إن الكلام هيطول 💅😂"',
    wrapperClass: 'mt-8',
    flipDir: '180deg',
    flipBack: '180deg',
    
    frontBg: 'bg-[#e1bee7]',
    frontBorder: 'border border-[#d1c4e9]',
    frontRounded: 'rounded-md',
    frontRotate: 'rotate-2',
    frontStyle: 'background-image: repeating-linear-gradient(transparent, transparent 29px, #d1c4e9 30px);',
    phraseClass: 'bg-white/50 px-2 py-1 rounded',
    frontDecoration: `<div class="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-24 bg-[#c5e1a5] opacity-70 rotate-12 mix-blend-multiply shadow-sm"></div>`,
    frontLabel: `<div class="absolute top-4 left-4 text-sm font-handwritten text-[#5a4a42] bg-[#fff9c4] px-3 py-1 shadow-md rotate-[-8deg] rounded-sm">مصطلح معتمد رسميا 🏅</div>`,
    
    backBg: 'bg-[#e1bee7]',
    backBorder: 'border-l-4 border-l-[#d1c4e9]',
    backRounded: 'rounded-md',
    backRotate: '-rotate-3',
    backStyle: 'background-image: repeating-linear-gradient(transparent, transparent 29px, #d1c4e9 30px);',
    meaningClass: 'bg-white/50 px-2 py-1 rounded text-[#4a148c] font-semibold',
    backDecoration: ``
  },
  {
    id: 4,
    phrase: '"سجدة شكر"',
    meaning: '"لما الخطة بتاعتها تنجح وتمشي على هواها 🤲😂"',
    wrapperClass: 'mt-12 md:mt-0',
    flipDir: '-180deg',
    flipBack: '-180deg',
    
    frontBg: 'bg-[#f8bbd0]',
    frontBorder: 'border-4 border-double border-white',
    frontRounded: 'rounded-2xl',
    frontRotate: '-rotate-4',
    phraseClass: 'mt-4',
    frontDecoration: `
      <div class="absolute top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#ff5252] shadow-md z-10">
        <div class="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/50"></div>
      </div>
    `,
    frontLabel: `<div class="absolute bottom-5 left-4 text-sm font-handwritten text-white bg-[#ef5350]/90 px-3 py-1 rounded-full shadow-sm rotate-[4deg]">درجة خطورته عالية ⚡</div>`,
    
    backBg: 'bg-[#f8bbd0]',
    backBorder: 'border-2 border-dashed border-[#f48fb1]',
    backRounded: 'rounded-2xl',
    backRotate: 'rotate-1',
    meaningClass: 'text-[#880e4f] font-semibold',
    backDecoration: `<div class="absolute top-4 right-4 text-2xl animate-bounce">💖</div>`
  },
  {
    id: 5,
    phrase: '"يلاهوي بقى"',
    meaning: '"إعلان رسمي لانتهاء المخزون الاستراتيجي للصبر 😂 🤦‍♀️"',
    wrapperClass: 'mt-16 md:mt-8',
    flipDir: '-180deg',
    flipBack: '-180deg',
    
    frontBg: 'bg-[#c5e1a5]',
    frontBorder: 'border-[8px] border-white',
    frontRounded: 'rounded-sm',
    frontRotate: '-rotate-5',
    frontExtraClasses: 'hover:scale-105 transition-transform duration-300',
    frontDecoration: `
      <div class="absolute bottom-[-8px] left-[-8px] w-10 h-10 bg-black/10 z-10" style="clip-path: polygon(0 0, 100% 100%, 0 100%);"></div>
      <div class="absolute bottom-[-8px] left-[-8px] w-10 h-10 bg-white z-20 shadow-inner" style="clip-path: polygon(100% 0, 0 0, 100% 100%);"></div>
      <div class="absolute top-4 right-4 text-3xl animate-pulse">✨</div>
      <div class="absolute bottom-4 right-4 text-2xl rotate-12">🙈</div>
    `,
    
    backBg: 'bg-[#c5e1a5]',
    backBorder: 'border-2 border-[#aed581]',
    backRounded: 'rounded-sm',
    backRotate: 'rotate-2',
    meaningClass: 'text-[#33691e] font-semibold',
    backDecoration: `
      <div class="mt-8 font-handwritten text-xl text-[#e53935] text-center bg-[#ffebee] px-4 py-1 rounded-full rotate-[-3deg] shadow-sm font-bold">
        ⚠️ خطر الانفجار
      </div>
    `
  },
  {
    id: 6,
    phrase: '"تحفة"',
    meaning: '"التقييم الأعلى لأي حاجة بتعجبك بجد ودخلت دماغك.. كلمة بتلخص الروقان كله! ✨👌"',
    wrapperClass: 'mt-10 md:mt-12',
    flipDir: '180deg',
    flipBack: '180deg',
    
    frontBg: 'bg-[#ffecb3]',
    frontBorder: 'border-2 border-dashed border-[#ffb300]',
    frontRounded: 'rounded-xl',
    frontRotate: 'rotate-4',
    phraseClass: 'mt-2 text-3xl text-[#f57f17] drop-shadow-sm',
    frontDecoration: `
      <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/70 rotate-[-5deg] shadow-sm border border-white"></div>
    `,
    frontLabel: `<div class="absolute bottom-4 left-4 text-sm font-handwritten text-[#f57f17] bg-white px-3 py-1 shadow-md rotate-[6deg] rounded-md font-bold border border-[#ffe082]">ختم الجودة 🏅</div>`,
    
    backBg: 'bg-[#ffecb3]',
    backBorder: 'border-4 border-[#ffb300]',
    backRounded: 'rounded-xl',
    backRotate: '-rotate-2',
    meaningClass: 'text-gray-800 font-bold',
    backDecoration: `<div class="absolute top-4 right-4 text-2xl animate-[spin_4s_linear_infinite]">⭐</div>`
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const dictionaryGrid = document.getElementById('dictionary-grid');
  
  if (!dictionaryGrid) return;
  
  dictionaryGrid.innerHTML = '';
  
  dictionaryData.forEach(item => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = `group relative w-full sm:w-[320px] h-[250px] cursor-pointer [perspective:1000px] ${item.wrapperClass || ''}`;
    
    cardWrapper.innerHTML = `
      <div class="absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(${item.flipDir})]">
        <!-- Front -->
        <div class="absolute inset-0 [backface-visibility:hidden] ${item.frontBg || ''} p-6 shadow-xl ${item.frontRounded || ''} transform ${item.frontRotate || ''} flex flex-col items-center justify-center ${item.frontBorder || ''} hover:shadow-2xl transition-shadow ${item.frontExtraClasses || ''}" style="${item.frontStyle || ''}">
          ${item.frontDecoration || ''}
          <h3 class="font-heading text-4xl md:text-5xl text-[#5a4a42] font-bold text-center ${item.phraseClass || ''}">${item.phrase}</h3>
          ${item.frontLabel || ''}
        </div>
        <!-- Back -->
        <div class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(${item.flipBack})] ${item.backBg || ''} p-6 shadow-xl ${item.backRounded || ''} transform ${item.backRotate || ''} flex flex-col items-center justify-center ${item.backBorder || ''}" style="${item.backStyle || ''}">
          <p class="font-sans text-xl md:text-2xl leading-relaxed text-center text-[#5a4a42] font-semibold ${item.meaningClass || ''}">
            ${item.meaning}
          </p>
          ${item.backDecoration || ''}
        </div>
      </div>
      ${item.outerDecoration || ''}
    `;
    
    dictionaryGrid.appendChild(cardWrapper);
  });
});
