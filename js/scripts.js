

//cambio de tema comun
const cambiarTema = document.getElementById("cambiarTema");

const cambiarColores = document.getElementById("cambiarColores")

const rootStyles = document.documentElement.style;

cambiarTema.addEventListener("click", ()=>{
    document.body.classList.toggle("oscuro");
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