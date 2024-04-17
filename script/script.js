// Selected content in the clipboard
function copyContent(id) {
    var paragraphs = document.querySelectorAll("#" + id + " p");
    var content = "";

    // chatGPT
    paragraphs.forEach(function (paragraph) {
        content += paragraph.innerText.trim() + "\n\n";
    });

    var textarea = document.getElementById("copy-content");
    textarea.value = content.trim();
}

function getElement(id) {
    const element = document.querySelector(`#${id}`);
    return element;
}

function copyToClipboard() {
    navigator.clipboard.writeText(getElement("copy-content").value).then(textCopied);
}

function textCopied() {
    const messagesDiv = getElement("messages");
    const div = document.createElement("div");
    div.innerText = "Copied!";
    messagesDiv.append(div);
    setTimeout(function () {
        div.innerText = "";
    }, 4000);
}

function init() {
    getElement("copy-to-clipboard").addEventListener("click", copyToClipboard);
}

document.addEventListener("DOMContentLoaded", init);

//

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
