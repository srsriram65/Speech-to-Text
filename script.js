function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();

    if (message === "") {
        return;
    }

    let chatBox = document.getElementById("chatBox");

    chatBox.innerHTML +=
        '<p class="user">You: ' + message + '</p>';

    let reply = "";

    if (message.includes("hello") || message.includes("hi")) {
        reply = "Hello! How can I help you?";
    }
    else if (message.includes("exam")) {
        reply = "Prepare a study schedule and revise important topics.";
    }
    else if (message.includes("study")) {
        reply = "Study regularly and practice with examples.";
    }
    else if (message.includes("python")) {
        reply = "Python is a beginner-friendly programming language.";
    }
    else if (message.includes("java")) {
        reply = "Java is a popular object-oriented programming language.";
    }
    else if (message.includes("college")) {
        reply = "Focus on your subjects, assignments and placement preparation.";
    }
    else if (message.includes("bye")) {
        reply = "Goodbye! All the best for your studies!";
    }
    else {
        reply = "Sorry, I don't understand. Try asking about study, exams, Python or Java.";
    }

    chatBox.innerHTML +=
        '<p class="bot">Bot: ' + reply + '</p>';

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
