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

if (window.location.href.includes("about")){    
    let imgs = document.querySelectorAll(".achievements_img");
    let counter = 0;
    let idleToggle = window.setInterval(()=>{
        if (counter == 0) {
            imgs[0].classList.add("achievements_img_idle");
            counter++;
        }
        else if (counter < imgs.length) {
            imgs[counter - 1].classList.remove("achievements_img_idle");
            imgs[counter].classList.add("achievements_img_idle");
            counter++;
        }
        else if (counter == imgs.length) {
            counter = 1;
            imgs[imgs.length - 1].classList.remove("achievements_img_idle");
            imgs[0].classList.add("achievements_img_idle");
        }
    },1500)
    imgs.forEach(element => {
        element.addEventListener("mouseover",()=>{
            imgs.forEach(element => {
                element.classList.remove("achievements_img_idle")
            });
            window.clearInterval(idleToggle);
        });
    });
}