
// Navigacija kroz formu dugmići
//prelazak na popunjavanje datuma
$('#btnDaljeKorisnik').on('click', function () {
    $('.modal-korisnik').hide();
    $('.modal-datum').show();
});

// vracanje na unos podataka o korisniku
$('#btnNazadDatum').on('click', function () {
    $('.modal-datum').hide();
    $('.modal-korisnik').show();
});

//vracanje sa izbora sobe na unos datuma
$('#btnNazadRezervacija').on('click', function () {
    $('.modal-soba').css('display', 'none');
    $('.modal-datum').css('display', 'flex');
});

//prikaz unetih podataka
$('#btnPrikaziRezervaciju').on('click', function () {
    $('.modal-soba').css('display', 'none');
    $('.ispis-rezervacije').css('display', 'flex');
});



// Rezervacija klasa 
class Rezervacija {
    constructor(ime, telefon, email, datumPrijave, datumOdjave, soba, brKreveta) {
        this.ime = ime;
        this.telefon = telefon;
        this.email = email;
        this.datumPrijave = datumPrijave;
        this.datumOdjave = datumOdjave;
        this.soba = soba;
        this.brKreveta = brKreveta;
    }
}

// KI klas, korisnicki interfejs
class KI {
    
    static dodajRezervacijuUlistu(rez) {
        const listaKorisnik = document.querySelector('#lista-korisnik');
        const listaRezervacija = document.querySelector('#lista-rezervacija');
        const ispisNaslov = document.querySelector('#ispis-naslov');
        const naslov = document.createElement('h3');
        const redKorisnik = document.createElement('tr');
        const redRezervacija = document.createElement('tr');
        
        redKorisnik.innerHTML = `
        <td>${rez.ime}</td>
        <td>${rez.telefon}</td>
        <td>${rez.email}</td>
        `;

        redRezervacija.innerHTML = `
        <td>${rez.datumPrijave}</td>
        <td>${rez.datumOdjave}</td>
        <td>${rez.soba}</td>
        <td>${rez.brKreveta}</td>
        `;

        naslov.innerHTML = `
        Uneli ste sledece podatke za rezervaciju
        `;

        listaKorisnik.appendChild(redKorisnik);
        listaRezervacija.appendChild(redRezervacija);
        ispisNaslov.appendChild(naslov);
    };


};

// Dogadjaji: Prikazi rezervaciju
document.addEventListener('DOMContentLoaded', KI.prikaziRezervaciju);


// Dodavanej nove rezervacije
document.getElementById("btnPrikaziRezervaciju").addEventListener('click', (e) =>{

//Prevent actual submit
e.preventDefault();


// hvatanje unetih vrednosti
    const ime = document.getElementById('ime').value;
    const telefon = document.getElementById('telefon').value;
    const email = document.getElementById('email').value;
    const datumPrijave = document.getElementById('datumPrijave').value;
    const datumOdjave = document.getElementById('datumOdjave').value;
    const soba = document.getElementById('izborSoba').value;
    const brKreveta = document.getElementById('brKreveta').value;
    

// kreiranjene rezervacije 
   const rezervacija = new Rezervacija (ime, telefon, email, datumPrijave, datumOdjave, soba, brKreveta);
   

//prikaz korisniku
   KI.dodajRezervacijuUlistu(rezervacija);

}); 


//Event:  otkazi rezervaciju, vracanje na pocetnu stranu 
document.getElementById('btnOtkazi').addEventListener('click',(e) =>{
window.location = "./index.html";
});



