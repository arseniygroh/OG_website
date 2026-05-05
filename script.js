const menuBtn = document.querySelector(".icon-menu");
const accordionBtns = document.querySelectorAll(".top-footer__title");
const listsToShow = document.querySelectorAll(".list-top-footer");
const header = document.getElementById("header");
const main = document.querySelector("main");
const body = document.querySelector("body");

const mediaQuery = window.matchMedia('(min-width: 767.98px)');

window.addEventListener("load", () => {
	document.body.classList.remove("preload");
});

function handleWidthChange(e) {
    if (e.matches) {
        main.style.paddingTop = "0px";
    }
}

handleWidthChange(mediaQuery);

mediaQuery.addEventListener('change', handleWidthChange);

let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('no-transition');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 300);
});


menuBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("open-menu");
    header.classList.toggle("fixed-header")
    if (header.classList.contains("fixed-header")) {
        main.style.paddingTop = "136px";
    } else {
        main.style.paddingTop = "0px";
    }
})

const drpBtn = document.querySelectorAll(".list-navbar-header__link");

for (let i = 0; i < drpBtn.length; i++) {
    if (drpBtn[i].nextElementSibling && drpBtn[i].nextElementSibling.classList.contains("header__bottom-list")) {
        drpBtn[i].classList.add('drop-arrow');
        drpBtn[i].addEventListener('click', () => {
            drpBtn[i].nextElementSibling.classList.toggle("drop_appear");
            drpBtn[i].classList.toggle("arrow-active");
        })
    }
}

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

if (window.location.href.includes("teams") || window.location.href.includes("index")) {

    document.addEventListener("DOMContentLoaded", function () {
        const carousel = document.querySelector(".carousel");
        const arrowBtns = document.querySelectorAll(".carousel-action-button");
        if (!carousel) return;

        const firstCard = carousel.querySelector(".card");
        if (!firstCard) return;

        let isDragging = false,
            startX,
            startScrollLeft;

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX || e.touches[0].pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            
            const currentX = e.pageX || e.touches[0].pageX;
            carousel.scrollLeft = startScrollLeft - (currentX - startX);
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };

        // Mouse Events
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mouseleave", dragStop); 

        // Touch Events (For Mobile/Tablets)
        carousel.addEventListener("touchstart", dragStart, { passive: true });
        carousel.addEventListener("touchmove", dragging, { passive: true });
        document.addEventListener("touchend", dragStop);
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const cardWidth = firstCard.offsetWidth;
                const carouselStyle = window.getComputedStyle(carousel);
                const gap = parseInt(carouselStyle.gap) || 0;
                
                const scrollAmount = cardWidth + gap;
                carousel.scrollBy({
                    left: btn.id === "left" ? -scrollAmount : scrollAmount,
                    behavior: "smooth"
                });
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

    if (window.location.href.includes("teams")) {
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
    }

    
}

if (window.location.href.includes("history_cs")) {
    const years = document.querySelectorAll("#history_years a");
    // console.log(years);
    window.addEventListener("scroll",()=>{
        // console.log(window.scrollY);
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
        // console.log(window.scrollY);
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

if (window.location.href.includes("about")){    
    let imgs = document.querySelectorAll(".achievements_img");
    let counter = 0;
    let timeoutCounter = 0;
    let timeout;
    function toggleClass(){
        if (counter == 0) {
            imgs[0].classList.add("achievements_img_idle");
            imgs[0].nextElementSibling.classList.add("achievements_dropdown_idle");
            counter++;
        }
        else if (counter < imgs.length) {
            imgs[counter - 1].classList.remove("achievements_img_idle");
            imgs[counter -1].nextElementSibling.classList.remove("achievements_dropdown_idle");
            imgs[counter].classList.add("achievements_img_idle");
            imgs[counter].nextElementSibling.classList.add("achievements_dropdown_idle");
            counter++;
        }
        else if (counter == imgs.length) {
            counter = 1;
            imgs[imgs.length - 1].classList.remove("achievements_img_idle");
            imgs[imgs.length - 1].nextElementSibling.classList.remove("achievements_dropdown_idle");
            imgs[0].classList.add("achievements_img_idle");
            imgs[0].nextElementSibling.classList.add("achievements_dropdown_idle");
        }
    }
    let idleToggle = window.setInterval(toggleClass,1500);
    imgs.forEach(element => {
        element.addEventListener("mouseover",()=>{            
            imgs.forEach(element => {
                element.classList.remove("achievements_img_idle")
                element.nextElementSibling.classList.remove("achievements_dropdown_idle")
            });
            window.clearInterval(idleToggle);
            if (timeoutCounter != 0) {
                window.clearTimeout(timeout);
            }
            timeout = window.setTimeout(()=>{
                idleToggle = window.setInterval(toggleClass,1500);
            },2000)
            timeoutCounter++;
        });
    });
}