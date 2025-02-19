// Function to handle the scroll and add the "visible" class to sections
function handleScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        // Check if the section is within the viewport
        if (sectionTop <= windowHeight * 0.8) { // Trigger animation before the section fully reaches the bottom of the viewport
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Add the event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial call to ensure sections are properly animated when the page loads
handleScroll();
