






//slider
$(document).ready(function () {
    //iniciando o plugin
    $('#destaque').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
});

//Interação Menu
function clickMenu(){
    if(itens.style.display =='block'){
        itens.style.display ='none'
    }else{
        itens.style.display = 'block'
    }
}


// Modal
var modalBtn = document.getElementById("modal");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});



function mostrarfrase() {
    const frase = document.getElementById('frase');
    
    // Verifica se o elemento está visível ou não e alterna o display
    if (frase.style.display == 'none' || frase.style.display === '') {
        frase.style.display = 'block'; // Exibe a frase
    } else {
        frase.style.display = 'none'; // Oculta a frase
    }
}

