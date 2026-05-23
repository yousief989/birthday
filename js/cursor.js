document.addEventListener('DOMContentLoaded', () => {
  // Only enable on non-touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches) return;

  const cursorStyle = document.createElement('style');
  cursorStyle.innerHTML = `
    * {
      cursor: none !important;
    }
    #custom-cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s, background-color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
      will-change: transform;
    }
    .cursor-trail {
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      border-radius: 50%;
      background: #ffb74d;
      opacity: 0.5;
      animation: trailFade 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      will-change: transform, opacity;
    }
    @keyframes trailFade {
      0% { transform: scale(1) translate(-50%, -50%); opacity: 0.5; }
      100% { transform: scale(0) translate(-50%, -50%); opacity: 0; }
    }
    .hover-text-float {
      position: fixed;
      pointer-events: none;
      z-index: 10000;
      background: rgba(255, 255, 255, 0.95);
      color: #6d5b53;
      padding: 6px 14px;
      border-radius: 16px;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: bold;
      border: 2px dashed #ffb74d;
      animation: floatUp 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      white-space: nowrap;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    @keyframes floatUp {
      0% { transform: translateY(0) scale(0.5); opacity: 0; }
      15% { transform: translateY(-15px) scale(1.1); opacity: 1; }
      30% { transform: translateY(-20px) scale(1); opacity: 1; }
      80% { transform: translateY(-40px) scale(1); opacity: 1; }
      100% { transform: translateY(-50px) scale(0.8); opacity: 0; }
    }
    .cursor-steam {
      position: fixed;
      pointer-events: none;
      z-index: 9997;
      font-size: 20px;
      animation: steamRise 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      transform: translate(-50%, -50%);
    }
    @keyframes steamRise {
      0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.8; }
      100% { transform: translate(-50%, -80px) scale(1.5); opacity: 0; }
    }
    .cursor-bite {
      position: fixed;
      pointer-events: none;
      z-index: 9997;
      font-size: 30px;
      animation: biteMark 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      transform: translate(-50%, -50%);
    }
    @keyframes biteMark {
      0% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }
  `;
  document.head.appendChild(cursorStyle);

  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.innerHTML = '✨';
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let isHovering = false;
  
  // Smooth follow interpolation
  function render() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    
    if (!isHovering) {
       cursor.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%))`;
    } else {
       cursor.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%)) scale(1.4) rotate(-15deg)`;
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  let lastTrailTime = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Trail effect
    const now = Date.now();
    if (now - lastTrailTime > 40) { 
      createTrail(e.clientX, e.clientY);
      lastTrailTime = now;
    }
  });

  function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    const size = Math.random() * 4 + 4;
    trail.style.width = `${size}px`;
    trail.style.height = `${size}px`;
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    
    const colors = ['#ffb74d', '#ffcdd2', '#81c784', '#64b5f6'];
    trail.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 400);
  }

  // Contexts
  const contexts = {
    tea: { icon: '☕', clickAction: 'steam', hoverText: 'وقت الروقان 🌿' },
    mint: { icon: '🌿', clickAction: 'steam' },
    secret: { icon: '🔍', hoverText: 'واضح إنك فضولية 😭' },
    eye: { icon: '👀', hoverText: 'في مصيبة مستخبية غالبا 👀' },
    chocolate: { icon: '🍫', hoverText: 'شوكولاتة عشان تروقي 🍫' },
    chaos: { icon: '🚨', hoverText: 'ماتدوسيش هنا 🚨', clickAction: 'shake' },
    teeth: { icon: '🦷', clickAction: 'bite' },
    default: { icon: '✨' }
  };

  let currentContext = 'default';
  let lastHoverTarget = null;

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-cursor], a, button, input, .interactive');
    
    if (target && target !== lastHoverTarget) {
      isHovering = true;
      lastHoverTarget = target;
      
      const context = target.getAttribute('data-cursor');
      if (context && contexts[context]) {
        currentContext = context;
        cursor.innerHTML = contexts[context].icon;
        
        // Only show text occasionally
        if (contexts[context].hoverText && Math.random() > 0.4) {
          showFloatingText(contexts[context].hoverText, mouseX, mouseY);
        }
      } else {
        // Generic hover
        cursor.innerHTML = '👆';
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (lastHoverTarget) {
      const relatedTarget = e.relatedTarget;
      // If we move out of the target and not into one of its children
      if (!relatedTarget || !lastHoverTarget.contains(relatedTarget)) {
        isHovering = false;
        lastHoverTarget = null;
        currentContext = 'default';
        cursor.innerHTML = contexts.default.icon;
      }
    }
  });

  function showFloatingText(text, x, y) {
    const el = document.createElement('div');
    el.className = 'hover-text-float';
    el.textContent = text;
    el.style.left = `${x + 20}px`;
    el.style.top = `${y - 10}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  document.addEventListener('mousedown', () => {
    // Squeeze effect
    cursor.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%)) scale(0.8)`;
    
    const contextData = contexts[currentContext];
    if (contextData && contextData.clickAction) {
      const action = contextData.clickAction;
      if (action === 'steam') {
        const steam = document.createElement('div');
        steam.className = 'cursor-steam';
        steam.textContent = '💨';
        steam.style.left = `${mouseX}px`;
        steam.style.top = `${mouseY}px`;
        document.body.appendChild(steam);
        setTimeout(() => steam.remove(), 1000);
      } else if (action === 'shake') {
        document.body.classList.add('animate-[shake_0.2s_ease-in-out]');
        setTimeout(() => document.body.classList.remove('animate-[shake_0.2s_ease-in-out]'), 200);
      } else if (action === 'bite') {
        const bite = document.createElement('div');
        bite.className = 'cursor-bite';
        bite.textContent = '💥';
        bite.style.left = `${mouseX}px`;
        bite.style.top = `${mouseY}px`;
        document.body.appendChild(bite);
        setTimeout(() => bite.remove(), 500);
      }
    } else {
      // Generic click particles
      for (let i=0; i<3; i++) {
        createTrail(mouseX + (Math.random()*30-15), mouseY + (Math.random()*30-15));
      }
    }
  });

  document.addEventListener('mouseup', () => {
    if (isHovering) {
        cursor.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%)) scale(1.4) rotate(-15deg)`;
    } else {
        cursor.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%)) scale(1)`;
    }
  });

  // Handle window leaving
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
});
