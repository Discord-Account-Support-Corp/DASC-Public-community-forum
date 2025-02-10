document.addEventListener("DOMContentLoaded", loadMessages);

function postMessage() {
    let messageInput = document.getElementById("messageInput");
    let messageText = messageInput.value.trim();

    if (messageText === "") return;

    let messages = JSON.parse(localStorage.getItem("forumMessages")) || [];
    messages.push(messageText);
    localStorage.setItem("forumMessages", JSON.stringify(messages));

    messageInput.value = "";
    loadMessages();
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("forumMessages")) || [];
    let forumMessages = document.getElementById("forumMessages");

    forumMessages.innerHTML = "";
    messages.forEach((msg) => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.textContent = msg;
        forumMessages.appendChild(messageDiv);
    });
}
