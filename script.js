
// Get HTML elements
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");
const sendButton = document.getElementById("sendButton");
const topicCards = document.querySelectorAll(".topic-card");

// Generate a response based on the user's question
function getResponse(input) {
    const text = input.toLowerCase();

    if (text.includes("electricity") || text.includes("energy")) {
        return "Use LED bulbs, switch off lights when not in use, and unplug unused devices to save energy.";
    }

    if (text.includes("water")) {
        return "Turn off taps properly, report water leakages, and use water responsibly to conserve water.";
    }

    if (text.includes("waste")) {
        return "Separate biodegradable and non-biodegradable waste, reuse materials, and recycle whenever possible.";
    }

    if (text.includes("transport")) {
        return "Use bicycles, public transport, carpooling, or walking whenever possible to reduce pollution.";
    }

    if (text.includes("sustainability")) {
        return "Sustainability means meeting present needs without compromising the ability of future generations to meet their own needs.";
    }

    return "Sorry, I don't have an answer for that topic yet. Please ask about electricity, energy, water, waste, transportation, or sustainability.";
}

// Display messages safely in the chat box
function displayMessage(sender, message, className) {
    const messageElement = document.createElement("div");
    const senderLabel = document.createElement("strong");

    senderLabel.textContent = sender;
    messageElement.className = className;

    messageElement.appendChild(senderLabel);
    messageElement.appendChild(document.createTextNode(message));

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Process and send messages
function sendMessage(message = userInput.value) {
    const input = message.trim();

    if (input === "") {
        return;
    }

    displayMessage("You", input, "user-message");

    const response = getResponse(input);

    displayMessage("🌱 Assistant", response, "bot-message");

    userInput.value = "";
    userInput.focus();
}

// Send button functionality
sendButton.addEventListener("click", function () {
    sendMessage();
});

// Enter key functionality
userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Quick topic card functionality
topicCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const question = card.dataset.question;
        sendMessage(question);
    });
});
