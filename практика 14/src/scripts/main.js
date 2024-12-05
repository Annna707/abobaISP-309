
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentLocation) {
            link.classList.add('nav__link--active');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .team-member, .about__section').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });


    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
});


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

const registerButton = document.getElementById('registerButton');
const registerForm = document.getElementById('registerForm');

registerButton.addEventListener('click', () => {
  registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
});

const searchButton = document.querySelector('.header__search button');
const searchInput = document.querySelector('.header__search input');

searchButton.addEventListener('click', () => {
  alert(`Вы искали: ${searchInput.value}`);
});


