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

if (window.location.href.includes("history_cs")) {
    const years = document.querySelectorAll("#history_years a");
    // console.log(years);
    window.addEventListener("scroll",()=>{
        console.log(window.scrollY);
        years.forEach(element => {
           element.classList.remove("year_selected") 
        });
        if (window.scrollY > 5650) {
            years[6].classList.add("year_selected");
        }
        else if (window.scrollY > 4600) {
            years[5].classList.add("year_selected");
        }
        else if (window.scrollY > 3750) {
            years[4].classList.add("year_selected");
        }
        else if (window.scrollY > 2800) {
            years[3].classList.add("year_selected");
        }
        else if (window.scrollY > 1750) {
            years[2].classList.add("year_selected");
        }
        else if (window.scrollY > 850) {
            years[1].classList.add("year_selected");
        }
        else if (window.scrollY <= 850) {
            years[0].classList.add("year_selected");
        }
    })
}
else if (window.location.href.includes("history")) {
    const years = document.querySelectorAll("#history_years a");
    // console.log(years);
    window.addEventListener("scroll",()=>{
        console.log(window.scrollY);
        years.forEach(element => {
           element.classList.remove("year_selected") 
        });
        if (window.scrollY > 9300) {
            years[10].classList.add("year_selected");
        }
        else if (window.scrollY > 8500) {
            years[9].classList.add("year_selected");
        }
        else if (window.scrollY > 7900) {
            years[8].classList.add("year_selected");
        }
        else if (window.scrollY > 6500) {
            years[7].classList.add("year_selected");
        }
        else if (window.scrollY > 5900) {
            years[6].classList.add("year_selected");
        }
        else if (window.scrollY > 5300) {
            years[5].classList.add("year_selected");
        }
        else if (window.scrollY > 4200) {
            years[4].classList.add("year_selected");
        }
        else if (window.scrollY > 2750) {
            years[3].classList.add("year_selected");
        }
        else if (window.scrollY > 1850) {
            years[2].classList.add("year_selected");
        }
        else if (window.scrollY > 900) {
            years[1].classList.add("year_selected");
        }
        else if (window.scrollY <= 900) {
            years[0].classList.add("year_selected");
        }
    })
}
