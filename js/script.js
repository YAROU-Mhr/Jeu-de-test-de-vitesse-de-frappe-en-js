const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".container .intput-field"),
    mistakeTag = document.querySelector(".mistake span");

let charIndex = mistakes = 0;

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

randomParagraph();
inpField.addEventListener("input", initTyping)