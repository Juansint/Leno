document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu
    const toggleButtom = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButtom.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    })

    // Video Modal
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer')

    // Open when click
    videoButton.addEventListener('click', function () {
        modal.style.display = 'block'
        
        // Replace source attribute
        videoPlayer.src = 'https://www.youtube.com/embed/jLfyRW6x-BM?si=4SRB5sJKegpNp5fJ'
    })
        
    // Close button
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        videoPlayer.src = '';
    })

    // Close outter click
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoPlayer.src = '';
        }
    })
})

// Navigation background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll')
    } else {
        navbar.classList.remove('navbar--scroll')
    };
});