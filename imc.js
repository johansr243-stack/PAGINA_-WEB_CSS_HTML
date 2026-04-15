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


function toggleModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

document.getElementById('form-share-recipe').addEventListener('submit', function(e) {
    e.preventDefault();

   
    const nombre = document.getElementById('user-recipe-name').value;
    const cat = document.getElementById('user-recipe-cat').value;
    const macroTag = document.getElementById('user-recipe-macro').value;
    const desc = document.getElementById('user-recipe-desc').value;

   
    const grid = document.querySelector('.recipes-grid');
    const newCard = document.createElement('article');
    newCard.className = `recipe-card recipe-${cat}`;
    
   
    newCard.innerHTML = `
        <div class="recipe-img-placeholder">🍲</div>
        <div class="recipe-content">
            <span class="recipe-tag ${macroTag}">${macroTag.replace('tag-', '').toUpperCase()}</span>
            <h3 class="recipe-title">${nombre}</h3>
            <p class="recipe-desc">${desc}</p>
            <ul class="recipe-macros">
                <li>Proteína: --</li>
                <li>Carbos: --</li>
                <li>Grasas: --</li>
            </ul>
        </div>
    `;

  
    grid.prepend(newCard);

    this.reset();
    toggleModal();
    alert("¡Gracias! Tu receta ha sido compartida con la comunidad.");
});

