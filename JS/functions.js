function laske() {
    let V = parseFloat(document.getElementById('V').value);
    let A = parseFloat(document.getElementById('A').value);
    let O = parseFloat(document.getElementById('O').value);

    if (!isNaN(V) && !isNaN(A) && !isNaN(O)) {
        let selectedValue = document.querySelector('input[name="tapa"]:checked').value;
        
        if (selectedValue === "V") {
            V = A * O;
            document.getElementById('V').value = V.toFixed(2);
        } else if (selectedValue === "A") {
            A = V / O;
            document.getElementById('A').value = A.toFixed(2);
        } else if (selectedValue === "O") {
            O = V / A;
            document.getElementById('O').value = O.toFixed(2);
        }
    } else {
        alert("Virhe! Anna kelvollinen arvo");
    }
}

// function kusemalaskuri() Sivun piti sisältää toinen "poronkusema" laskuri vitsillä.
// Mutta se oli haastavaa saada ymmärrettävään muotoon joten jätin sen pois
 