/* Renderizado generico */
window.onload = () => {
  document.querySelector("header").innerHTML = `
  <div class="header-escritorio">
    <a title="Conectar LAB" href="#top">
      <img class="header-logo" src="./logosConectar/logoConectarLab.png" alt="Logo de Conectar LAB" />
    </a>
    <nav class="header-nav" >
      <ul>
        <li><a href="#top">Inicio</a></li>
        <li><a href="#images">Imagenes</a></li>
        <li><a href="#info">Información</a></li>
      </ul>
    </nav>
    <button class="menu-hamburguesa" href="" onclick="precionarInterruptor()">
      <i class="menu-hamburguesa-icono fa-solid fa-bars"></i>
    </button>
  </div>
  <nav class="menu-hamburguesa-nav">
    <ul>
      <li><a href="#top">Inicio</a></li>
      <li><a href="#images">Imagenes</a></li>
      <li><a href="#info">Información</a></li>
    </ul>
  </nav>
  `;

  document.querySelector(".contacto").innerHTML =`
  <img src="./logosConectar/logoConectarLab.png"  >
  <div class="contacto-info">
    <h1>¡Seguinos en nuestras redes sociales!</h1>
    <div>
      <a target="_blank" href="https://www.instagram.com/conectarlabmendoza/"><i class="rosado fa-brands fa-square-instagram"></i></a>
      <a target="_blank" href="https://www.facebook.com/conectarlabmendoza/"><i class="celeste fa-brands fa-square-facebook"></i></a>
    </div>
  </div>
  `;

  document.querySelector("footer").innerHTML = `
  <div>
    <img title="Ciencias" class="footer-logo" src="./logosConectar/logoCiencia.png" alt="Logo ciencia">
    <img title="Estudio" class="footer-logo" src="./logosConectar/logoEstudio.png" alt="Logo estudio">
    <img title="Espacio de escuelas" class="footer-logo" src="./logosConectar/logoExplo.png" alt="Logo explo">
    <img title="Fabricación" class="footer-logo" src="./logosConectar/logoFabricacion.png" alt="Logo fabricacion">
    <img title="Mini" class="footer-logo" src="./logosConectar/logoMini.png" alt="Logo mini">
    <img title="Multimedia" class="footer-logo" src="./logosConectar/logoMultimedia.png" alt="Logo logoMultimedia">
    <img title="Sonido" class="footer-logo" src="./logosConectar/logoSonido.png" alt="Logo sonido">
  </div>
  <a title="Conectar LAB" href="#top">
    <img class="header-logo" src="./logosConectar/logoConectarLab.png"  >
  </a>
`;
};

function precionarInterruptor() {
  document.querySelector(".menu-hamburguesa-nav").classList.toggle("visible");
  document.querySelector(".menu-hamburguesa-icono").classList.toggle("fa-bars-staggered");
}
