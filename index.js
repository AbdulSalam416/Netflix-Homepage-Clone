let faqListItem = document.querySelectorAll(".faq-list-item");

let isOpen = true;

let open = "open";

let close = "closed";

function showAnswer() {
    let faqAnswer = this.querySelector(".faq-answer");
    let xSign = this.querySelector(".x-sign");

    if (isOpen === true) {
        faqAnswer.classList.add(open);
        faqAnswer.classList.remove(close);
        xSign.textContent = "✖";
    } else {
        faqAnswer.classList.add(close);
        faqAnswer.classList.remove(open);
        xSign.textContent = "➕";
    }

    isOpen = !isOpen;
}

faqListItem.forEach((question) =>
    question.addEventListener("click", showAnswer, false)
);