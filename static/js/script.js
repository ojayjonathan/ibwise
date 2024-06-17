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
        const body = document.body;
        const fixedTop = document.querySelector('.fixed-top');
        toggleClass(fixedTop, 'menu-bg', window.scrollY > 100);
        
        function onScroll() {
            toggleClass(fixedTop, 'menu-bg', window.scrollY > 100);
        }

        body.addEventListener('scroll', onScroll);

        window.addEventListener('scroll', onScroll);

        /* Auto Close Responsive Navbar on Click
        ========================================================*/
        function closeToggle() {
            const navbarCollapseLinks = document.querySelectorAll('.navbar-collapse a');
            const navbarCollapse = document.querySelector('.navbar-collapse');

            if (window.innerWidth <= 768) {
                navbarCollapseLinks.forEach(function (link) {
                    link.addEventListener('click', function () {
                        if (navbarCollapse) {
                            navbarCollapse.classList.remove('show');
                        }
                    });
                });
            } else {
                navbarCollapseLinks.forEach(function (link) {
                    link.removeEventListener('click', function () {
                        if (navbarCollapse) {
                            navbarCollapse.classList.remove('show');
                        }
                    });
                });
            }
        }

        closeToggle();
        window.addEventListener('resize', closeToggle);
    });

}());
