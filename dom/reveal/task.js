const reveals = document.querySelectorAll('.reveal');
const revealsArr = Array.from(reveals); 
const viewportHeight = window.innerHeight;

revealsArr.findIndex(reveal => {
    window.addEventListener('scroll', () => {
        const revealTop = reveal.getBoundingClientRect().top;
        if ( revealTop < viewportHeight && revealTop > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});