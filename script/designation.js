const names = ['Software Developer', 'UI/UX Designer', 'Creating with code, driven with passion'];

function pickName() {
    return names[Math.floor(Math.random() * names.length)];
}

setInterval(() => {
    const el = document.getElementById("randomDesignation");
    if (el) {
        el.textContent = pickName();
    }
}, 1500);
