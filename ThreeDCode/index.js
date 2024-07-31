
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const loaderWrapper = document.getElementById('loader-wrapper');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default link behavior
            loaderWrapper.style.display = 'flex';  // Show the loader
            
            // Simulate loading time with a timeout
            setTimeout(() => {
                window.location.href = link.href;
            }, 1000);  // Adjust this value based on your loading time
        });
    });
});

window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    loaderWrapper.style.display = 'none';  // Hide the loader after loading the page
});

window.addEventListener('scroll', () => {
    const droplet = document.querySelector('.droplet');
    const scrollTop = window.scrollY;
    droplet.style.top = `${scrollTop + 10}px`;
});
