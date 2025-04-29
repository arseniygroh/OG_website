const menuBtn = document.querySelector(".icon-menu");
const accordionBtns = document.querySelectorAll(".top-footer__title");
const listsToShow = document.querySelectorAll(".list-top-footer");

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



