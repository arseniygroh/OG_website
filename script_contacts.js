const menuBtn = document.querySelector(".icon-menu");
const accordionBtns = document.querySelectorAll(".top-footer__title");
const listsToShow = document.querySelectorAll(".list-top-footer");
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const submitBtn = document.querySelector(".bottom-body-form__btn");
menuBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("open-menu");
})

for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener("click", (e) => {
        accordionBtns.forEach((btn) => {
            const content = btn.nextElementSibling;
            if (e.target !== btn) {
                btn.classList.remove("active");
                content.style.maxHeight = null;
            }
        })
        e.target.classList.toggle("active");
        let listToShow = e.target.nextElementSibling;
        if (listToShow.style.maxHeight) {
            listToShow.style.maxHeight = null;
        } else {
            listToShow.style.maxHeight = listToShow.scrollHeight + "px";
        }
    })
}


function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

const emailField = document.getElementsByName("userEmail")[0];
let invalidEmail = false;
emailField.addEventListener("change", (e) => {
    const output = document.createElement("p");
    output.className = "output";
    output.innerHTML = "Invalid email"
    const emailInputBox = document.querySelectorAll(".top-body-form__input")[1];
    const existingMessage = emailInputBox.querySelector(".output");
    if(!valid(e.target.value)) {
        invalidEmail = true;
        if (!emailInputBox.contains(existingMessage)) {
            emailField.insertAdjacentElement("afterend", output);
        }
    } else {
        invalidEmail = false
    }
    if (invalidEmail === false) {
        const emailInputBoxArr = Array.from(emailInputBox.children);
        emailInputBoxArr.forEach(item => {
            if (item.tagName.toLowerCase() === "p") {
                item.remove();
            }
        })
    }
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const bottomBodyForm = document.querySelector(".bottom-body-form");
    const existingMessage = bottomBodyForm.querySelector(".output");
    if (existingMessage) {
        existingMessage.remove();
    }
    const inputsArr = Array.from(inputs);
    const hasEmptyInput = inputsArr.some(input => input.value.trim() === "");
    if (hasEmptyInput || textArea.value.trim() === "" || invalidEmail === true) {
        const output = document.createElement("p");
        output.className = "output";
        output.innerText = "Inputs can't be empty";
        bottomBodyForm.insertAdjacentElement("beforeend", output);
    }
})


