// nav-menu
function createElement(...array) {
    return array.map(el => document.createElement(el))
}
const navMenu = document.querySelector(".nav-menu")
const siteHeaderLinks = document.querySelector(".site-header-links")
function navMain() {
    // console.log(1)
    const [elspan, elspanTop, elspanBom] = createElement("span", "span", "span")
    elspan.classList.add("nav-menu__line")
    elspanTop.classList.add("nav-menu__line")
    elspanBom.classList.add("nav-menu__line")
    navMenu.addEventListener("click", function () {
        const sreen = navMenu.getAttribute('data-sreen')
        if (sreen == 1) {
            siteHeaderLinks.style.opacity = 1;
            siteHeaderLinks.style.zIndex = 2;
            elspan.style.backgroundColor = "transparent";

            elspanTop.style.position = "absolute";
            elspanTop.style.transform = "rotate(45deg)";

            elspanBom.style.position = "absolute";
            elspanBom.style.transform = "rotate(-45deg)";
            navMenu.setAttribute('data-sreen', 2)
        } else {
            siteHeaderLinks.style.opacity = 0;
            siteHeaderLinks.style.zIndex = 0;
            navMenu.setAttribute('data-sreen', 1)
            elspan.style.backgroundColor = "white";
            elspanTop.style.position = "unset";
            elspanTop.style.transform = "unset";

            elspanBom.style.position = "unset";
            elspanBom.style.transform = "unset";
        }
    })
    navMenu.append(elspanTop, elspan, elspanBom)
}

navMain()

// about-card__box
if (window.location.pathname.endsWith("/about.html")) {
    const CardBox = [...document.querySelectorAll('.about-card__box')]
    CardBox.forEach(() => {
        this.addEventListener("click", function (click) {
            const cardOpen = click.target.classList.contains("card-open");
            const cardClose = click.target.classList.contains("card-close");
            if (cardOpen) {
                const infoBox = click.target
                    .closest(".about-card__box")
                    .querySelector(".about-box");
                infoBox.style.opacity = "1";
                infoBox.style.visibility = "visible";
            }
            if (cardClose) {
                const infoBox = click.target
                    .closest(".about-card__box")
                    .querySelector(".about-box");
                infoBox.style.opacity = "0";
                infoBox.style.visibility = "hidden";
            }
        });
    });
}
// contact__form
if (window.location.pathname.endsWith("/contact.html")) {
    const contactForm = document.querySelector('.contact__form')
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault()
        let nameInput = document.querySelector('.name__input')
        let emailInput = document.querySelector('.email__input')
        let companyInput = document.querySelector('.company__input')
        let titleInput = document.querySelector('.title__input')
        let messageInput = document.querySelector('.message__input')
        const myHomes = [nameInput, emailInput, companyInput, titleInput, messageInput]

        for (const myHome of myHomes) {
            const errorMsg = myHome.nextElementSibling;
            if (myHome.value.trim()) {
                errorMsg.style.opacity = "0";
                errorMsg.style.visibility = "hidden";
                myHome.style.borderBottom = "0.1rem solid #79c8c7";
                myHome.style.setProperty("--placeholder-color", "#fff");
                // return true;
            } else {
                errorMsg.style.opacity = "1";
                errorMsg.style.visibility = "visible";
                myHome.style.borderBottom = "0.1rem solid #f67e7e";
                myHome.style.setProperty("--placeholder-color", "#f67e7e");
                // return false;
            }
        }
    })
}

