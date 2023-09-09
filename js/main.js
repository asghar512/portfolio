/*--------------- navigation menu ----------------- */
(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.toggle("open");
        fadeOutEffect();
    }

    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        bodyScrollingToggle();
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300);
    }

    document.addEventListener("DOMContentLoaded", function() {
        const sectionTitles = document.querySelectorAll('.section-title');
    
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        });
    
        sectionTitles.forEach(title => {
            observer.observe(title);
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener('scroll', function() {
            var windowHeight = window.innerHeight;
            var scrollPos = window.pageYOffset;
            
            var imgBox = document.querySelector('.home-section .home-image .img-box');
            var elementPos = imgBox.getBoundingClientRect().top + scrollPos;
    
            if (scrollPos + windowHeight > elementPos) {
                imgBox.classList.add('animate');
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var imgBox = document.querySelector('.about-section .about-img .img-box');
    
        window.addEventListener('scroll', function() {
            var elementTop = imgBox.getBoundingClientRect().top;
            var elementBottom = imgBox.getBoundingClientRect().bottom;
            var elementHeight = imgBox.offsetHeight;
    
            // Trigger the animation when the middle of the element is within the middle of the viewport
            if (elementTop < (window.innerHeight / 2 + elementHeight / 2) && elementBottom > (window.innerHeight / 2 - elementHeight / 2)) {
                // Apply the animation.
                imgBox.style.animation = 'slideInFromLeft 1.5s ease-out forwards';
            } else {
                // Reset the animation
                imgBox.style.animation = '';
            }
        });
    });
//mongodb+srv://asghar:asghar@cluster0.qjx6gve.mongodb.net/
    // document.querySelector('.contact-form form').addEventListener('submit', async (e) => {
    //     e.preventDefault();
    //     console.log(e)
    //     const formData = {
    //         name: e.target.name.value,
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         user_dtls: e.target.user_dtls.value
    //     };
    //     console.log(formData)
    //     try {
    //         const response = await fetch('http://localhost:3017/api/sendmessage', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData)
    //         });
    
    //         const result = await response.json();
    //         console.log(result)
    //         if (response.ok) {
    //             alert('Message sent successfully!');
    //         } else {
    //             alert('Error sending message: ' + result.error);
    //         }
    //     } catch (error) {
    //         alert('An error occurred: ' + error.message);
    //     }
    // });
    

    // document.addEventListener('DOMContentLoaded', function() {
    //     document.querySelector('.contact-form form').addEventListener('submit', async function(e) {
    //         e.preventDefault();
    //         console.log('Form submitted');
    //         const formData = {
    //                     name: e.target.name.value,
    //                     email: e.target.email.value,
    //                     subject: e.target.subject.value,
    //                     user_dtls: e.target.user_dtls.value
    //                 };
    //         console.log(formData)
    //         try {
    //                     const response = await fetch('https://portfolio.cyclic.cloud/api/sendmessage', {
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json'
    //                         },
    //                         body: JSON.stringify(formData)
    //                     });
                
    //                     const result = await response.json();
    //                     console.log(result)
    //                     if (result.status === 1) {
    //                         alert('Message sent successfully!');
    //                     } else {
    //                         alert('Error sending message: ' + result.error);
    //                     }
    //                 } catch (error) {
    //                     alert('An error occurred: ' + error.message);
    //                 }
    //     });
    // });
    

    
    document.addEventListener('DOMContentLoaded', function() {
        const formElement = document.querySelector('.contact-form form');
    
        formElement.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Form submitted');
            const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                user_dtls: e.target.user_dtls.value
            };
            console.log(formData);
    
            try {
                const response = await fetch('https://portfolio.cyclic.cloud/api/sendmessage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                console.log(result);
    
                if (result.status === 1) {
                    alert('Message sent successfully!');
    
                    // Clear the form fields
                    formElement.reset();
    
                } else {
                    alert('Error sending message: ' + result.error);
                }
            } catch (error) {
                alert('An error occurred: ' + error.message);
            }
        });
    });
        
    

    /*----------- attach an event handler to document  ---------- */
    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')){
            // make sure event.target.hash has a value before overridding default behavior
            if(event.target.hash !== ""){
                // prevemnt defaul anchor click behavior 
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active 'section'
                document.querySelector(".section.active").classList.add(".hide");
                document.querySelector(".section.active").classList.remove("active");
                // active new 'section';
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // deactivate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                // if clicked 'link-item' is contained within the navigation menu 
                if(navMenu.classList.contains("open")){
                    // activate new navigation menu 'link-item'
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                    // hide navigation manu 
                    hideNavMenu();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if(hash === item.hash){
                            // activate new navigation menu 'link-item'
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("inner-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url 
                window.location.hash = hash;
            }
        }
    })
})();

// about tab 
(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", "outer-shadow")
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })
    
})();

function bodyScrollingToggle() {
    // document.body.classList.toggle("stop-scrolling");
}

/* --------------- portfolio filter and popup ----------------- */
(() => {
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    preBtn = popup.querySelector(".pp-pre"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    project_details = popup.querySelector(".pp-project-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;

    /* filter portfolio items */
    filterContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
            // deactivate existing active 'filter-item' 
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // active new `filter item'
            event.target.classList.add("active", 'outer-shadow');

            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) =>{
                if(target === item.getAttribute("data-category") || target === 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    
    })

    portfolioItemsContainer.addEventListener("click", (event) =>{
        if(event.target.closest(".portfolio-item-inner")){
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            // get the portfolio items index 
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-image img").getAttribute("data-screenshots");
            // convert screenshots into array 
            screenshots = screenshots.split(",");
            if(screenshots.length === 1 ){
                preBtn.style.display = "none";
                nextBtn.style.display ="none";
            }
    
            else{
                preBtn.style.display = "block";
                nextBtn.style.display ="block";
            }
            slideIndex = 0;
            popupToggle();
            popupSlideshow();
            popupDetails();
        }
        
    })

    closeBtn.addEventListener("click", () =>{
        popupToggle();
        if(projectDetailsContainer.classList.contains("active")){
            popupDetailsToggle();
        }
    })

    function popupToggle() {
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }

    function popupSlideshow() {
        const imgSrc = screenshots[slideIndex]
        const popupImg = popup.querySelector(".pp-img");
        /**
         * active loader until the popupImg loaded 
         */

        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src = imgSrc;
        popupImg.onload = () =>{
            popup.querySelector(".pp-loader").classList.remove("active");
        }
        let last_num = Number( screenshots.length);
        last_num-1;
        popup.querySelector(".pp-counter").innerHTML = (slideIndex + 1 ) + " of " + last_num;


    }

    function sendmail(){

    }

    function popupDetails(){
        if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
            projectDetailsBtn.style.display = "none";
            popup.querySelector(".pp-details").style.maxHeight = "0px";
            popup.querySelector(".pp-details").classList.remove("active");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            return;
        }
        else{
            projectDetailsBtn.style.display = "block";
            // projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
        }

        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        project_details.innerHTML = details;

        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
        popup.querySelector(".pp-title h2").innerHTML = title;

        const category = portfolioItems[itemIndex].getAttribute("data-category");
        popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");

    }

    // next slide 
    nextBtn.addEventListener("click", () =>{
        if(slideIndex === screenshots.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        popupSlideshow();
    })

    // pre slide
    preBtn.addEventListener("click", () =>{
        if(slideIndex === 0){
            slideIndex = screenshots.length-1
        }
        else{
            slideIndex--;
        }
        popupSlideshow();
    })

    projectDetailsBtn.addEventListener("click", () =>{
        popupDetailsToggle();
    })

    function popupDetailsToggle(){
        if(projectDetailsContainer.classList.contains("active")){
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");

            popup.querySelector(".pp-details").classList.remove("active");
            popup.querySelector(".pp-details").style.maxHeight = "0px";
        }
        else{
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");

            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
            popup.querySelector(".pp-details").classList.add("active");
            popup.scrollTo(0, projectDetailsContainer.offsetTop)
        }
    }
    

    /* --------------- hide all section expect active ----------------- */
    
})();

// (() =>{
//     const section = document.querySelectorAll(".section");
//     section.forEach((section) => {
//         if(!section.classList.contains("active")){
//             section.classList.add("hide");
//         }
//     })
// })();

window.addEventListener("load", () =>{
    // preload
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display = "none";
    }, 600)
})