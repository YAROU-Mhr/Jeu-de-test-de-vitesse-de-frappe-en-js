const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".container .intput-field"),
    timeTag = document.querySelector(".time span b"),
    mistakeTag = document.querySelector(".mistake span");

let
    timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;

function randomParagraph() {
    let randIndex = Math.floor(Math.random() * paragraphs.length);

    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });

    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];

    if(!isTyping){
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }
    if (typedChar == null) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrecte")) {
            mistakes--;
        }
        characters[charIndex].classList.remove("correcte", "incorrecte");

    } else {

        if (characters[charIndex].innerText === typedChar) {
            characters[charIndex].classList.add("correcte");
        } else {
            mistakes++;
            characters[charIndex].classList.add("incorrecte");
        }
        charIndex++;
    }

    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    mistakeTag.innerText = mistakes;

}


function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

randomParagraph();
inpField.addEventListener("input", initTyping)