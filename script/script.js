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


// Toggle function to display paragraph buttons under of the button
function toggleParagraphButtons(articleId) {
    const liElement = document.querySelector(`a[href="#${articleId}"]`).parentElement;
    const buttonsExist = liElement.querySelector(".paragraph-buttons");

    if (buttonsExist) {
        liElement.removeChild(buttonsExist);
    } else {
        addButtonsUnderOrRight(articleId, liElement);
    }
}

// chatGPT
function addButtonsUnderOrRight(articleId, liElement) {
    const article = document.getElementById(articleId);
    const paragraphs = article.getElementsByTagName("p");

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("paragraph-buttons");

    for (let i = 0; i < paragraphs.length; i++) {
        const button = document.createElement("button");

        button.textContent = `Paragraph ${i + 1}`;
        button.id = `paragraph-${i + 1}`;

        button.addEventListener("click", function () {
            paragraphs[i].scroll({ behavior: "smooth", block: "start" });

            copyContent(articleId, i);
        });

        buttonsContainer.appendChild(button);
        buttonsContainer.appendChild(document.createElement("br"));
    }

    liElement.appendChild(buttonsContainer);
}

// Selected content in the clipboard
function copyContent(id, paragraphIndex) {
    var paragraphs = document.querySelectorAll("#" + id + " p");
    var content = "";

    // chatGPT
    content += paragraphs[paragraphIndex].innerText.trim() + "\n\n";

    var textarea = document.getElementById("copy-content");
    textarea.value = content.trim();
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById("copy-content").value).then(textCopied);
}

function textCopied() {
    const messagesDiv = document.getElementById("messages");
    const div = document.createElement("div");
    div.innerText = "Copied!";
    messagesDiv.append(div);
    setTimeout(function () {
        div.innerText = "";
    }, 4000);
}

function init() {
    document.getElementById("copy-to-clipboard").addEventListener("click", copyToClipboard);
}

document.addEventListener("DOMContentLoaded", init);

document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const articleId = event.target.getAttribute("href").slice(1);
            toggleParagraphButtons(articleId);
            copyContent(articleId, 0); 
        });
    });
});



// // Function to dynamically add buttons under each li element based on the number of <p> elements in the selected article
// function addButtonsUnderLi(articleId) {
//     const article = document.getElementById(articleId);
//     const paragraphs = article.getElementsByTagName("p");
//     const liElement = document.querySelector(`a[href="#${articleId}"]`).parentElement;

//     liElement.innerHTML = "";

//     for (let i = 0; i < paragraphs.length; i++) {
//         const button = document.createElement("button");
//         button.textContent = `Paragraph ${i + 1}`;
//         button.id = `paragraph-${i + 1}`;

//         button.addEventListener("click", function () {
//             paragraphs[i].scrollIntoView({ behavior: "smooth", block: "start" });
//         });

//         liElement.appendChild(button);
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const sidebarLinks = document.querySelectorAll(".sidebar a");
//     sidebarLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             const articleId = event.target.getAttribute("href").slice(1);
//             addButtonsUnderLi(articleId);
//             copyContent(articleId);
//         });
//     });
// });

//

// // Selected content in the clipboard
// function copyContent(id) {
//     var paragraphs = document.querySelectorAll("#" + id + " p");
//     var content = "";

//     // chatGPT
//     paragraphs.forEach(function (paragraph) {
//         content += paragraph.innerText.trim() + "\n\n";
//     });

//     var textarea = document.getElementById("copy-content");
//     textarea.value = content.trim();
// }

// function getElement(id) {
//     const element = document.querySelector(`#${id}`);
//     return element;
// }

// function copyToClipboard() {
//     navigator.clipboard.writeText(getElement("copy-content").value).then(textCopied);
// }

// function textCopied() {
//     const messagesDiv = getElement("messages");
//     const div = document.createElement("div");
//     div.innerText = "Copied!";
//     messagesDiv.append(div);
//     setTimeout(function () {
//         div.innerText = "";
//     }, 4000);
// }

// function init() {
//     getElement("copy-to-clipboard").addEventListener("click", copyToClipboard);
// }

// document.addEventListener("DOMContentLoaded", init);
