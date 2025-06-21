let container = document.querySelector('.container');
let heading = document.querySelector('.heading');
let container2 = document.querySelector('.container2');

// 🔄 Restore state on page load
if (sessionStorage.getItem('containerState') === 'true') {
    container.classList.remove('active');
    container.classList.add('inactive');
    container2.classList.remove('inactive');
    heading.textContent = '';
    // Trigger animation on page load
    animateSections();
}

heading.addEventListener('click', () => {
    container.classList.toggle('active');
    container.classList.toggle('inactive');
    heading.textContent = container.classList.contains('active') ? 'Chutr Putr' : '';
    sessionStorage.setItem('containerState', container.classList.contains("inactive"));
    
    // Trigger animation when container becomes inactive
    if (container.classList.contains('inactive')) {
        container2.classList.remove('inactive');
        // Small delay to ensure DOM is updated
        setTimeout(() => {
            animateSections();
        }, 50);
    } else {
        container2.classList.add('inactive');
    }
});

// Function to handle the animation
function animateSections() {
    const sections = document.querySelectorAll(".container2 section");
    if (sections.length > 0) {
        // Reset any existing animations
        gsap.killTweensOf(sections);
        
        const timeline = gsap.timeline({
            defaults: {
                ease: "power2.out"
            }
        });
        
        timeline.from(sections, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            clearProps: "all"
        });
    }
}