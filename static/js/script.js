(function () {
    "use strict";

    // Helper function to add and remove class
    function toggleClass(element, className, condition) {
        if (condition) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }



    /* 
     One Page Navigation
     ========================================================================== */
    document.addEventListener('DOMContentLoaded', function () {
        const fixedTop = document.querySelector('.fixed-top');
        const navigationLinks = document.querySelectorAll(".main-nav .page-scroll")

        toggleClass(fixedTop, 'menu-bg', window.scrollY > 100);

        function onScroll() {
            toggleClass(fixedTop, 'menu-bg', window.scrollY > 100);
        }

        window.addEventListener('scroll', onScroll);


        let burger = document.getElementById('burger'),
            nav = document.getElementById('main-nav')

        burger.addEventListener('click', function (e) {
            this.classList.toggle('is-open');
            nav.classList.toggle('is-open');
        });

        navigationLinks.forEach(entry => {
            entry.addEventListener("click", (e) => {

                e.preventDefault()
                // Remove active 
                navigationLinks.forEach(entry => {
                    entry.classList.remove("active")
                });
                //
                entry.classList.add("active")
                nav.classList.remove("is-open")
                burger.classList.remove("is-open")

                const targetId = entry.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            })
        })
    });



}());
