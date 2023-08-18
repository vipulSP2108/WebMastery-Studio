        // looped skill show on home page
        var typed = new Typed('#element', {
            strings: ['Problem Solving','Front-End Developer','Graphic Designer','Criative Idea','Adventurous'],
            typeSpeed: 100,
            loop: true,
        });

        // Form
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxxGxNGvvYVGs9m0S7rPpzTIcOr6Ypl8AQ-Zg33LjOetXCx4KBkH0Z262f2nq4HYOAoag/exec';
        const form = document.forms['contact_main_form'];
        const submitButton = document.getElementById('submit-button');

        form.addEventListener('submit', e => {
            e.preventDefault();

            submitButton.style.background = 'var(--bg-color)';
            submitButton.style.border = '2px solid var(--main-color)';
            submitButton.disabled = true;
            submitButton.value = 'In Process...';

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    if (response.ok) {
                        submitButton.value = 'Submitted';
                        alert("Thank you! Your form is submitted successfully.");
                        form.reset();
                    } else {
                        submitButton.value = 'Not Submitted';
                        alert("Oops! There was a problem submitting your form.");
                    }
                })
                .catch(error => {
                    submitButton.value = 'Not Submitted';
                    console.error('Error!', error.message);
                })
                .finally(() => {
                    submitButton.style.background = 'var(--main-color)';
                    submitButton.style.border = '2px solid var(--main-color)';
                    submitButton.disabled = false;
                    submitButton.value = 'Submit';
                });
        });

        // menu pannel for mobile
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);

            if (toggle && nav) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show');
                    toggle.classList.toggle('bx-x');
                });

                document.addEventListener('click', (event) => {
                    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
                        nav.classList.remove('show');
                        toggle.classList.remove('bx-x');
                    }
                });

                nav.addEventListener('click', (event) => {
                    if (event.target.tagName === 'A') {
                        nav.classList.remove('show');
                        toggle.classList.remove('bx-x');
                        
                        const targetId = event.target.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            }
        };
        showMenu('header-toggle', 'nav_menu');


        // page to home page
        const navLink = document.querySelectorAll('.header_navbar_link');   

        // heart fuction in my portfolio page
        $(document).ready(function() {
            $('.portfolio_main_icon').click(function() {
                event.stopPropagation();
                $(this).find('i').toggleClass('bx-heart bxs-heart');
            });
            $('.portfolio_row').click(function() {
                var link = $(this).data('link');
                if (link) {
                    window.open(link, '_blank');
                }
            });
        });
