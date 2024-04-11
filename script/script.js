// function updateSidebar() {
//     const titlesContainer = document.getElementById("titles");
//     const paragraphsContainer = document.getElementById("paragraphs");
//     const titleCountElement = document.getElementById("titleCount");
//     const paragraphCountElement = document.getElementById("paragraphCount");

//     // Clear existing content
//     titlesContainer.innerHTML = "";
//     paragraphsContainer.innerHTML = "";

//     // Get all titles and paragraphs
//     const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
//     // const paragraphs = document.querySelectorAll("p");

//     // Populate titles
//     titles.forEach((title) => {
//         const titleElement = document.createElement("p");
//         titleElement.textContent = title.textContent;
//         titlesContainer.appendChild(titleElement);
//     });
//     titleCountElement.textContent = titles.length;

//     // Populate paragraphs
//     paragraphs.forEach((paragraph) => {
//         const paragraphElement = document.createElement("p");
//         paragraphElement.textContent = paragraph.textContent;
//         paragraphsContainer.appendChild(paragraphElement);
//     });
//     paragraphCountElement.textContent = paragraphs.length;
// }

// // Update sidebar initially
// updateSidebar();

// // Listen for changes in the DOM and update sidebar
// const observer = new MutationObserver(updateSidebar);
// observer.observe(document.body, { subtree: true, childList: true });

// function copyContent(id) {
//     // Get the title and paragraph content
//     var title = document.querySelector("#" + id + " h2").textContent;
//     var paragraph = document.querySelector("#" + id + " p").textContent;

//     // Create a new element to hold the copied content
//     var copiedContent = document.createElement("div");

//     // Set the copied content
//     copiedContent.innerHTML = "<h2>" + title + "</h2>" + "<p>" + paragraph + "</p>";

//     // Append the copied content to the body
//     document.body.appendChild(copiedContent);
//     console.log(copiedContent);
// }

// // JavaScript code
// function copyContent(id) {
//     // Get the title and paragraph content
//     var title = document.querySelector("#" + id + " h2").textContent;
//     var paragraph = document.querySelector("#" + id + " p").textContent;

//     // Concatenate title and paragraph
//     var content = title + "\n\n" + paragraph;

//     // Create a temporary textarea element to hold the content
//     var tempTextarea = document.createElement("textarea");
//     tempTextarea.value = content;

//     // Append the textarea to the document body
//     document.body.appendChild(tempTextarea);

//     // Select the content of the textarea
//     tempTextarea.select();

//     // Copy the selected content to the clipboard
//     document.execCommand("copy");

//     // Remove the temporary textarea from the document body
//     document.body.removeChild(tempTextarea);

//     // Optionally, you can provide feedback to the user
//     alert("Content copied to clipboard:\n\n" + content);
// }

// // JavaScript code
// function copyContent(id) {
//     // Get the title and paragraph content
//     var title = document.querySelector("#" + id + " h2").innerText.trim();
//     var paragraph = document.querySelector("#" + id + " p").innerText.trim();

//     // Concatenate title and paragraph
//     var content = title + "\n\n" + paragraph;

//     // Create a temporary textarea element to hold the content
//     var tempTextarea = document.createElement("textarea");
//     tempTextarea.value = content;

//     // Append the textarea to the document body
//     document.body.appendChild(tempTextarea);

//     // Select the content of the textarea
//     tempTextarea.select();

//     // Copy the selected content to the clipboard
//     document.execCommand("copy");

//     // Remove the temporary textarea from the document body
//     document.body.removeChild(tempTextarea);

//     // Optionally, you can provide feedback to the user
//     alert("Content copied to clipboard:\n\n" + content);
// }

// JavaScript code
// function copyContent(id) {
//     // Get all paragraph elements within the specified section
//     var paragraphs = document.querySelectorAll("#" + id + " p");

//     // Initialize an empty string to hold the concatenated content
//     var content = "";

//     // Loop through each paragraph element and concatenate its text content
//     paragraphs.forEach(function (paragraph) {
//         content += paragraph.innerText.trim() + "\n\n";
//     });

//     // Create a temporary textarea element to hold the content
//     var tempTextarea = document.createElement("textarea");
//     tempTextarea.value = content.trim();

//     // Append the textarea to the document body
//     document.body.appendChild(tempTextarea);
//     console.log(tempTextarea);

//     // Select the content of the textarea
//     tempTextarea.select();

//     // Copy the selected content to the clipboard
//     document.execCommand("copy");

//     // Remove the temporary textarea from the document body
//     document.body.removeChild(tempTextarea);

//     // Optionally, you can provide feedback to the user
//     alert("Content copied to clipboard:\n\n" + content.trim());
// }

// function getElm(id) {
//     const elm = document.querySelector(`#${id}`);
//     return elm;
// }

// function copyToClipboard() {
//     navigator.clipboard.writeText(getElm("copy-content").value).then(textCopied);
// }

// function textCopied() {
//     const messagesDiv = getElm("messages");
//     const div = document.createElement("div");
//     div.innerText = "Copied!";
//     messagesDiv.append(div);
//     setTimeout(function () {
//         div.innerText = "";
//     }, 4000);
// }

// function init() {
//     getElm("copy-to-clipboard").addEventListener("click", copyToClipboard);
// }

// document.addEventListener("DOMContentLoaded", init);

// JavaScript code
function copyContent(id) {
    // Get all paragraph elements within the specified section
    var paragraphs = document.querySelectorAll("#" + id + " p");

    // Initialize an empty string to hold the concatenated content
    var content = "";

    // Loop through each paragraph element and concatenate its text content
    paragraphs.forEach(function (paragraph) {
        content += paragraph.innerText.trim() + "\n\n";
    });

    // Set the copied content to the textarea
    var textarea = document.getElementById("copy-content");
    textarea.value = content.trim();
}

function getElm(id) {
    const elm = document.querySelector(`#${id}`);
    return elm;
}

function copyToClipboard() {
    navigator.clipboard.writeText(getElm("copy-content").value).then(textCopied);
}

function textCopied() {
    const messagesDiv = getElm("messages");
    const div = document.createElement("div");
    div.innerText = "Copied!";
    messagesDiv.append(div);
    setTimeout(function () {
        div.innerText = "";
    }, 4000);
}

function init() {
    getElm("copy-to-clipboard").addEventListener("click", copyToClipboard);
}

document.addEventListener("DOMContentLoaded", init);

// const step = 100; // Adjust this value to change the step size

// document.getElementById("up").addEventListener("click", () => {
//     window.scrollBy({
//         top: -step,
//         behavior: "smooth",
//     });
// });

// document.getElementById("down").addEventListener("click", () => {
//     window.scrollBy({
//         top: step,
//         behavior: "smooth",
//     });
// });

// // To prevent the default button behavior (i.e., scrolling the page to the top)
// document.querySelectorAll("#up-down button").forEach((button) => {
//     button.addEventListener("click", (event) => {
//         event.preventDefault();
//     });
// });



// NOT WORKING 
// const step = 100; // Adjust this value to change the step size

// document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowUp") {
//         window.scrollBy({
//             top: -step,
//             behavior: "smooth",
//         });
//     } else if (event.key === "ArrowDown") {
//         window.scrollBy({
//             top: step,
//             behavior: "smooth",
//         });
//     }
// });

// // To prevent the default button behavior (i.e., scrolling the page to the top)
// document.querySelectorAll("#up-down button").forEach((button) => {
//     button.addEventListener("click", (event) => {
//         event.preventDefault();
//     });
// });
