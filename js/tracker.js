// Discord Webhook Tracker
window.sendDiscordAction = function(actionMessage) {
    const webhookUrl = 'https://discord.com/api/webhooks/1506663421796683780/bjxpjQJB_BVtj4GNpg2rVD8BSOMx1snXohQDkQs8qcFvR7NTwDncHh6UJnhexjx-CUo0'; 
    
    // Fire and forget
    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: `👀 **تحديث:** ${actionMessage}` })
    }).catch(err => console.error("Webhook failed:", err));
};

// Global Tracker for ANY interaction
let lastClickTime = 0;
document.addEventListener('click', (e) => {
    // Find closest interactive element
    const target = e.target.closest('button, a, input, select, [role="button"], .cursor-pointer, .sticker');
    
    if (target) {
        // Try to get a human-readable name for the element
        let name = target.innerText || target.placeholder || target.getAttribute('aria-label') || target.id || "عنصر بدون اسم";
        
        if (name && typeof name === 'string') {
            // Clean up name (remove newlines and excess spaces)
            name = name.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
            
            // Truncate if it's too long
            if (name.length > 40) name = name.substring(0, 40) + "...";
            
            if (name.length > 0) {
                const now = Date.now();
                // Prevent spamming (only send 1 click per second max to avoid webhook rate limits)
                if (now - lastClickTime > 1000) {
                    window.sendDiscordAction(`تفاعل: داست على [ ${name} ] 🖱️`);
                    lastClickTime = now;
                }
            }
        }
    }
});
