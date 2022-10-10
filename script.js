"use strict";

////////// DOM //////////////
// Buttons
let btnPosalji = document.getElementById(`posalji`);
let btnResetuj = document.getElementById(`resetuj`);

// Input cvece
let inputRuze = document.getElementById(`ruze`);
let inputLjiljani = document.getElementById(`ljiljani`);
let inputGerberi = document.getElementById(`gerberi`);

// Dodatni pokloni
let inputBombonjera = document.getElementById(`bombonjera`);
let inputCokolada = document.getElementById(`cokolada`);
let inputSampanjac = document.getElementById(`sampanjac`);

// Placanje
let inputKes = document.getElementById(`kes`);
let inputKartica = document.getElementById(`kartica`);

// Porudzbina
let cenaBezPopusta = 0;
let popust = 0.1;
let cenaSaPopustom = 0;

// Ispis porudzbine
let ispisPoruzbine = document.getElementById(`ispisPoruzbine`);

///////// Events /////////////
btnPosalji.addEventListener(`click`, e => {
    e.preventDefault();
    // CVECE
    // Ruze
    let inputRuzeValue = inputRuze.value;
    inputRuzeValue = parseInt(inputRuzeValue);
    let cenaRuza = inputRuzeValue * 150;

    if(inputRuze.value == ""){
        cenaRuza = 0;
    } else if(inputRuze.value < 0){
        cenaRuza = 0;
        ispisPoruzbine.innerHTML = `<p class="pogresanUnos">Broj ruža nije dobar!</p>`;
    } else {
        for (let i = 0; i < inputRuzeValue; i++) {
            let img = document.createElement(`img`);
            img.style.width = `50px`;
            img.style.height = `50px`;
            img.src = `img/roses.png`;

            ispisPoruzbine.appendChild(img);  
        };
        let linebreak = document.createElement("br");
        ispisPoruzbine.appendChild(linebreak);
    }
    
    // Ljiljani
    let inputLjiljaniValue = inputLjiljani.value;
    inputLjiljaniValue = parseInt(inputLjiljaniValue);
    let cenaLjiljana = inputLjiljaniValue * 120;

    if(inputLjiljani.value == ""){
        cenaLjiljana = 0;
    } else if(inputLjiljani.value < 0){
        cenaLjiljana = 0;
        ispisPoruzbine.innerHTML = `<p class="pogresanUnos">Broj ljiljana nije dobar!</p>`;
    } else {
        for (let i = 0; i < inputLjiljaniValue; i++) {
            let img = document.createElement(`img`);
            img.style.width = `50px`;
            img.style.height = `50px`;
            img.src = `img/ljiljan.png`;

            ispisPoruzbine.appendChild(img);
        };
        let linebreak = document.createElement("br");
        ispisPoruzbine.appendChild(linebreak);
    };
    
    // Gerberi
    let inputGerberiValue = inputGerberi.value;
    inputGerberiValue = parseInt(inputGerberiValue);
    let cenaGerbera = inputGerberiValue * 70;

    if(inputGerberi.value == ""){
        cenaGerbera = 0;
    } else if(inputGerberi.value < 0){
        cenaGerbera = 0;
        ispisPoruzbine.innerHTML = `<p class="pogresanUnos">Broj gerbera nije dobar!</p>`;
    } else {
        for (let i = 0; i < inputGerberiValue; i++) {
            let img = document.createElement(`img`);
            img.style.width = `50px`;
            img.style.height = `50px`;
            img.src = `img/gerber.png`;

            ispisPoruzbine.appendChild(img);
        };
        let linebreak = document.createElement("br");
        ispisPoruzbine.appendChild(linebreak);
    };
    cenaBezPopusta = cenaRuza + cenaLjiljana + cenaGerbera;

    // DODATNI POKLONI
    let dodatniPokloni = document.querySelectorAll(`input[name="pokloni"]`);
    
    if(dodatniPokloni[0].checked){
        // poruzbini se dodaje 500din
        cenaBezPopusta = cenaBezPopusta + 500;
        ispisPoruzbine.innerHTML += `<p class="poklon"> + bombonjera </p>`;
    } 
    if(dodatniPokloni[1].checked) {
        // poruzbini se dodaje 500din
        cenaBezPopusta = cenaBezPopusta + 500;
        ispisPoruzbine.innerHTML += `<p class="poklon"> + čokolada </p>`;
    }
    if(dodatniPokloni[2].checked) {
        // poruzbini se dodaje 500din
        cenaBezPopusta = cenaBezPopusta + 500;
        ispisPoruzbine.innerHTML += `<p class="poklon"> + šampanjac </p>`;
    }

    // PLACANJE
    let placanja = document.querySelectorAll(`input[name="placanje"]`);
    
    if(placanja[1].checked){
        // ako je porudzbina  preko 2000din, dobija dodatni popust od 10%
        ispisPoruzbine.innerHTML += `<p class="ispis">Cena bez popusta je: ${cenaBezPopusta} din.</p>`;
        if(cenaBezPopusta > 2000){
            cenaSaPopustom = cenaBezPopusta * popust;
            let porudzbina = cenaBezPopusta - cenaSaPopustom;
            ispisPoruzbine.innerHTML += `<p class="ispisPopust">Imate prava na popust od: ${cenaSaPopustom} din.</p>`;
            ispisPoruzbine.innerHTML += `<p class="ispis">Cena sa popustom je: <span>${porudzbina}</span> din.</p>`;
        }
    } else {
        // porudzbina bez popusta
        ispisPoruzbine.innerHTML += `<p class="ispis">Cena je: <span>${cenaBezPopusta}</span> din.</p>`;        
    }
    
});

btnResetuj.addEventListener(`click`, e =>{
    document.location.reload(true);
})
