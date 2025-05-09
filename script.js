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


document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".carousel-action-button");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
    
        const newScrollLeft = startScrollLeft - (e.pageX - startX);

        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            isDragging = false;
            return;
        }

        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth;
        });
    });
});



const scrollers = document.querySelectorAll(".front-partners-logos-slider");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".front-partners-slider-track");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
    });
    });
}



const players_pr = document.querySelectorAll(".ogroster-player-block");
const players = document.querySelectorAll(".ogroster-player-content");

players_pr[0].classList.add("active_pr-show")
players[0].classList.add("active_player-show")

players_pr.forEach((prElement, index) => {
    prElement.addEventListener('click', () => {
        players_pr.forEach(el => el.classList.remove("active_pr-show"));
        players.forEach(el => el.classList.remove("active_player-show"));

        prElement.classList.add("active_pr-show");
        players[index].classList.add("active_player-show");
    });
});
