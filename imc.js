function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const estaturaCm = parseFloat(document.getElementById('estatura').value);
    const numDisplay = document.getElementById('imc-numero');
    const estadoDisplay = document.getElementById('imc-estado');
    const box = document.getElementById('resultado-imc');

    if (peso > 0 && estaturaCm > 0) {
        const estaturaM = estaturaCm / 100;
        const imc = (peso / (estaturaM * estaturaM)).toFixed(1);

        box.style.display = "block";
        numDisplay.innerText = imc;

        let estado = "";
        let color = "";

        if (imc < 18.5) {
            estado = "Bajo peso";
            color = "#f1c40f";
        } else if (imc < 25) {
            estado = "Peso Normal";
            color = "#2ecc71";
        } else if (imc < 30) {
            estado = "Sobrepeso";
            color = "#e67e22";
        } else {
            estado = "Obesidad";
            color = "#e74c3c";
        }

        estadoDisplay.innerText = estado;
        estadoDisplay.style.color = color;
    } else {
        alert("Por favor, completa peso y estatura correctamente.");
    }
}


function filterRecipes(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    const allCards = document.querySelectorAll('.recipe-card');

    
    buttons.forEach(btn => {
        btn.classList.remove('active');
       
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

   
    allCards.forEach(card => {
        
        card.style.display = 'none';
        
       
        if (card.classList.contains('recipe-' + category)) {
            card.style.display = 'flex'; 
        }
    });
}



