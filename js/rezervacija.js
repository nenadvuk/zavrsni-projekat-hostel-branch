
var formValidacija = {
    ime: false,
    email: false,
    telefon: false
};

// funkcija koja proverava da li su svi uslovi validirani odnosno
//  da li je forma ispravno popunjena
function proveriValidaciju(){
if (formValidacija.ime && formValidacija.email  && formValidacija.telefon){
    $('#btnSnimi').removeAttr('disabled');
}
else {
    $('#btnSnimi').attr('disabled', true);
}
};


// provera validnosti input polja #ime
$('#ime').on('input', function(){
var ime = $(this).val();

function prikaziPoruku(sadrzaj){ 
    $('.poruka-ime').text(sadrzaj).show();
};

function sakrijPoruku(){
    $('.poruka-ime').hide();
}

if (ime.length < 1){
    prikaziPoruku('Polje je prazno! Unesite ime');
    formValidacija.ime = false;
    proveriValidaciju();


}
else{
    sakrijPoruku();
    formValidacija.ime = true;
    proveriValidaciju();
    var testValidacijaIme = new RegExp(/^[A-ZŽČĆŠĐ][a-zđšžćč]{1,11}(\s[A-ZŽČĆŠĐ][a-zđšžćč]{1,11})+$/);
    if(!testValidacijaIme.test(ime)){
        prikaziPoruku('Mozete koristiti samo mala i velika slova');
        formValidacija.ime = false;
        proveriValidaciju();
    }
    else{
sakrijPoruku();
formValidacija.ime = true;
proveriValidaciju();

    }
}
});



// provera validnosti input polja #email
$('#email').on('input', function(){
    var email = $(this).val();
    
    function prikaziPoruku(sadrzaj){ 
        $('.poruka-email').text(sadrzaj).show();
    };
    
    function sakrijPoruku(){
        $('.poruka-email').hide();
    }
    
    if (email.length < 1){
        prikaziPoruku('Polje je prazno! Unesite email');
        formValidacija.email = false;
        proveriValidaciju();
    
    
    }
    else{
        sakrijPoruku();
        formValidacija.email = true;
        proveriValidaciju();
        var testValidacijaEmail = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/);
        if(!testValidacijaEmail.test(email)){
            prikaziPoruku('Unesite email u formi test@test.com');
            formValidacija.email = false;
            proveriValidaciju();
        }
        else{
    sakrijPoruku();
    formValidacija.email = true;
    proveriValidaciju();

        }
    }
    });


//provera validnosti input polja #telefon
$('#telefon').on('input', function(){
    var telefon = $(this).val();

    function prikaziPoruku(sadrzaj){ 
        $('.poruka-telefon').text(sadrzaj).show();
        
    };
    
    function sakrijPoruku(){
        $('.poruka-telefon').hide();
      
    }
    
    if (telefon.length < 1){
        prikaziPoruku('Polje je prazno! Unesite broj telefona');
        formValidacija.telefon = false;
        proveriValidaciju();
    
    }
    else{
        sakrijPoruku();
        formValidacija.telefon = true;
        var testValidacijaTelefon = new RegExp(/\d{3}\/(\d){3}[\-]?(\d){3}/);
        if(!testValidacijaTelefon.test(telefon)){
            prikaziPoruku('Unesite telefon u formatu XXX/XXX-XXX-XX');
            formValidacija.telefon = false;
        }
        else{
   sakrijPoruku();
    if(telefon.length > 11 ){
        prikaziPoruku('Uneli ste previse cifara.');
        formValidacija.telefon =false;
        proveriValidaciju();
    }
    else{
        sakrijPoruku();
        formValidacija.telefon = true;
        proveriValidaciju();
        }
        }
    }
    });