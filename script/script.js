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

// // Get the copy button and the clipboard textarea
// const copyButton = document.getElementById("copy-to-clipboard");
// const clipboardTextarea = document.getElementById("copy-content");

// // to copy p elements
// const paragraphs = document.querySelectorAll("article p");
// paragraphs.forEach((paragraph) => {
//     paragraph.addEventListener("click", () => {
//         clipboardTextarea.value = paragraph.textContent.replace(/\s+/g, " ").trim();
//     });
// });

// // to copy titles
// const titels = document.querySelectorAll("article h2");
// titels.forEach((titel) => {
//     titel.addEventListener("click", () => {
//         clipboardTextarea.value = titel.textContent.replace(/\s+/g, " ").trim();
//     });
// });

// // Add click event listener to the copy button
// copyButton.addEventListener("click", () => {
//     // Copy the content of the clipboard textarea to the clipboard
//     clipboardTextarea.select();
//     document.execCommand("copy");
//     // Display message
//     alert("Text copied to clipboard!");
// });

//
//
//

// const clipboardTextarea = document.getElementById("copy-content");

// // Get all <p> elements
// const paragraphs = document.querySelectorAll("article p");

// // Add click event listener to each <p> element
// paragraphs.forEach((paragraph) => {
//     paragraph.addEventListener("click", () => {
//         // Copy the text content of the clicked <p> element to the clipboard textarea
//         clipboardTextarea.value = paragraph.textContent.replace(/\s+/g, " ").trim();
//         // Copy the content of the clipboard textarea to the clipboard
//         clipboardTextarea.select();
//         document.execCommand("copy");
//         // Display message
//         alert("Text copied to clipboard!");
//     });
// });

const clipboardTextarea = document.getElementById("copy-content");

// Get all <p> elements
const paragraphs = document.querySelectorAll("article p");

// Get the congratulations message element
const congratsMessage = document.getElementById("congrats-message");

// Add click event listener to each <p> element
paragraphs.forEach((paragraph) => {
    paragraph.addEventListener("click", () => {
        clipboardTextarea.value = paragraph.textContent.replace(/\s+/g, " ").trim();
        clipboardTextarea.select();
        // document.execCommand("copy");
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

// Firework form chatGPT (I made some changes that I like)
function triggerFireworks() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    // Create fireworks bursts
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
        // Hide overlay and remove fireworks bursts after animation
        overlay.style.display = "none";
        document.querySelectorAll(".firework").forEach((firework) => firework.remove());
    }, 1000);
}

// // Toggle function to display paragraph buttons under of the button
// function toggleParagraphButtons(articleId) {
//     const liElement = document.querySelector(`a[href="#${articleId}"]`).parentElement;
//     const buttonsExist = liElement.querySelector(".paragraph-buttons");

//     if (buttonsExist) {
//         liElement.removeChild(buttonsExist);
//     } else {
//         addButtonsUnderOrRight(articleId, liElement);
//     }
// }

// // chatGPT
// function addButtonsUnderOrRight(articleId, liElement) {
//     const article = document.getElementById(articleId);
//     const paragraphs = article.getElementsByTagName("p");

//     const buttonsContainer = document.createElement("div");
//     buttonsContainer.classList.add("paragraph-buttons");

//     for (let i = 0; i < paragraphs.length; i++) {
//         const button = document.createElement("button");

//         button.textContent = `Paragraph ${i + 1}`;
//         button.id = `paragraph-${i + 1}`;

//         button.addEventListener("click", function () {
//             paragraphs[i].scroll({ behavior: "smooth", block: "start" });

//             copyContent(articleId, i);
//         });

//         buttonsContainer.appendChild(button);
//         buttonsContainer.appendChild(document.createElement("br"));
//     }

//     liElement.appendChild(buttonsContainer);
// }

// // Selected content in the clipboard
// function copyContent(id, paragraphIndex) {
//     var paragraphs = document.querySelectorAll("#" + id + " p");
//     var content = "";

//     // chatGPT
//     content += paragraphs[paragraphIndex].innerText.trim() + "\n\n";

//     var textarea = document.getElementById("copy-content");
//     textarea.value = content.trim();
// }

// function copyToClipboard() {
//     navigator.clipboard.writeText(document.getElementById("copy-content").value).then(textCopied);
// }

// function textCopied() {
//     const messagesDiv = document.getElementById("messages");
//     const div = document.createElement("div");
//     div.innerText = "Copied!";
//     messagesDiv.append(div);
//     setTimeout(function () {
//         div.innerText = "";
//     }, 4000);
// }

// function init() {
//     document.getElementById("copy-to-clipboard").addEventListener("click", copyToClipboard);
// }

// document.addEventListener("DOMContentLoaded", init);

// document.addEventListener("DOMContentLoaded", function () {
//     const sidebarLinks = document.querySelectorAll(".sidebar a");
//     sidebarLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             const articleId = event.target.getAttribute("href").slice(1);
//             toggleParagraphButtons(articleId);
//             copyContent(articleId, 0);
//         });
//     });
// });
