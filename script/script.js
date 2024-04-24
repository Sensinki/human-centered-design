// SMALL AND LARGE
document.getElementById("small").addEventListener("click", function () {
    changeFontSize(-1);
});

document.getElementById("large").addEventListener("click", function () {
    changeFontSize(1);
});

function changeFontSize(changeAmount) {
    var articles = document.querySelectorAll("article");
    articles.forEach(function (article) {
        var elements = article.querySelectorAll("*");
        elements.forEach(function (element) {
            var currentFontSize = parseFloat(window.getComputedStyle(element).getPropertyValue("font-size"));
            var newFontSize = currentFontSize + changeAmount;
            if (newFontSize <= 21 && newFontSize >= 8) {
                element.style.fontSize = newFontSize + "px";
            }
        });
    });
}

// UP AND DOWN
document.getElementById("up").addEventListener("click", function () {
    scrollPage(-window.innerHeight);
});

document.getElementById("down").addEventListener("click", function () {
    scrollPage(window.innerHeight);
});

function scrollPage(scrollAmount) {
    window.scrollBy({
        top: scrollAmount,
        left: 0,
        behavior: "smooth",
    });
}

// COPY <p> AND <h2> 
const clipboardTextarea = document.getElementById("copy-content");
const congratsMessage = document.getElementById("congrats-message");

const paragraphs = document.querySelectorAll("article p");
paragraphs.forEach((paragraph) => {
    paragraph.addEventListener("click", () => {
        clipboardTextarea.value = paragraph.textContent.replace(/\s+/g, " ").trim();
        clipboardTextarea.select();
        congratsMessage.style.display = "block";
        setTimeout(() => {
            congratsMessage.style.display = "none";
        }, 1500);
        triggerFireworks();
    });
});

const titels = document.querySelectorAll("article h2");
titels.forEach((titel) => {
    titel.addEventListener("click", () => {
        clipboardTextarea.value = titel.textContent.replace(/\s+/g, " ").trim();
        clipboardTextarea.select();
        // document.execCommand("copy");
        congratsMessage.style.display = "block";
        setTimeout(() => {
            congratsMessage.style.display = "none";
        }, 1500);
        triggerFireworks();
    });
});

// FIREWORK EFFECT form chatGPT (I made some changes that I like)
function triggerFireworks() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#ffa500", "#00ffff", "#800080", "#008000", "#800000"]; // Red, Green, Blue, Yellow, Purple, Orange, Cyan, Purple, Olive, Maroon
    for (let i = 0; i < 100; i++) {
        const fireworks = document.createElement("div");
        fireworks.classList.add("firework");
        fireworks.style.left = Math.random() * window.innerWidth + "px";
        fireworks.style.top = Math.random() * window.innerHeight + "px";
        fireworks.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        fireworks.style.width = Math.random() * 50 + "px";
        fireworks.style.height = Math.random() * 50 + "px";
        document.body.appendChild(fireworks);
    }
    setTimeout(() => {
        overlay.style.display = "none";
        document.querySelectorAll(".firework").forEach((firework) => firework.remove());
    }, 1000);
}

