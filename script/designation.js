const names = Array('Software Developer', 'UI/UX Designer', 'Creating with code, driven with passion');

function pickName() {
    return names[Math.floor(Math.random() * names.length)]
}

setInterval(function () {
    $("#randomDesignation").text(pickName());
}, 1500);