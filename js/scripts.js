

//cambio de tema comun
const cambiarTema = document.getElementById("cambiarTema");
const cambiarIcono = document.getElementById("cambiarIcono");
const cambiarTexto = document.getElementById("cambiarTexto");

const cambiarColores = document.getElementById("cambiarColores")

const rootStyles = document.documentElement.style;

cambiarTema.addEventListener("click", ()=>{
    document.body.classList.toggle("oscuro");
    if(cambiarIcono.src.includes('moon.svg')){
        cambiarIcono.src='assets/icons/sun.svg';
        cambiarTexto.textContent='Modo Claro';
    }else{
        cambiarIcono.src='assets/icons/moon.svg';
        cambiarTexto.textContent='Modo Oscuro';
    }
});


cambiarColores.addEventListener("click", (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
});

//cambio del switch de modo oscuro - claro
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}