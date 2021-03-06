const trenutna = document.querySelector( "#trenutna");
const slike = document.querySelectorAll( ".slike img");
const opacity = 0.5;

// pozivanje funkcije kada se klikne na sliku 
slike.forEach(img => img.addEventListener( "click", klikSlika));

// funkcija koja manja sliku u glavnom prikazu kao i prikaz slike
function klikSlika(e) {

    // resetovanje opacity 
    slike.forEach(img => (img.style.opacity = 1));

    trenutna.src = e.target.src;

    e.target.style.opacity = opacity;
 
}
console.log(trenutna)

