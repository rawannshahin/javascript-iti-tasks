function setThemeColor(backgroundColor, textColor) {
    document.body.style.backgroundColor = backgroundColor;
    
    document.querySelectorAll('.sec1 h1, .sec2 h1, .sec3 h1, .sec4 h1, p, h1, h2, h3').forEach(element => {
        element.style.color = textColor;
    });

    localStorage.setItem("themeBackgroundColor", backgroundColor);
    localStorage.setItem("themeTextColor", textColor);
}

window.onload = function () {
    const savedBackgroundColor = localStorage.getItem("themeBackgroundColor");
    const savedTextColor = localStorage.getItem("themeTextColor");
    if (savedBackgroundColor && savedTextColor) {
        setThemeColor(savedBackgroundColor, savedTextColor);
    }
};

document.getElementById('colorPicker').addEventListener('input', function () {
    const selectedColor = this.value;
    const backgroundColor = selectedColor;
    const textColor = getContrastingTextColor(selectedColor);

    setThemeColor(backgroundColor, textColor);
});

function getContrastingTextColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

