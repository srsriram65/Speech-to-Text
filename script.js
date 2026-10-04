let recognition;

if ("webkitSpeechRecognition" in window) {

    recognition = new webkitSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = function () {
        document.getElementById("status").innerText =
            "🎙️ Listening... Speak now";
    };

    recognition.onresult = function (event) {

        let text = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {

            text += event.results[i][0].transcript;
        }

        document.getElementById("result").value = text;
    };

    recognition.onerror = function () {

        document.getElementById("status").innerText =
            "⚠️ Microphone or speech recognition error";
    };

    recognition.onend = function () {

        document.getElementById("status").innerText =
            "Ready to listen";
    };

} else {

    alert("Speech recognition is not supported in this browser.");
}


function startListening() {

    if (recognition) {
        recognition.start();
    }
}


function stopListening() {

    if (recognition) {
        recognition.stop();
    }
}


function clearText() {

    document.getElementById("result").value = "";

    document.getElementById("status").innerText =
        "Ready to listen";
}


function copyText() {

    let text = document.getElementById("result").value;

    if (text === "") {
        alert("There is no text to copy.");
        return;
    }

    navigator.clipboard.writeText(text);

    document.getElementById("status").innerText =
        "✅ Text copied!";
}
