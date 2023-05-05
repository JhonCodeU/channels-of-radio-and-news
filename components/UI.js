import { getAllData } from "../controller/channel.controller.js";
import * as Hls from '../library/hls.min.js';

async function renderCard () {
  const container = document.getElementById("container");
  const data = await getAllData();
  const row = document.createElement("div");
  row.className = "row";
  container.appendChild(row);
  data.forEach((item) => {
    // col-md-4
    const col = document.createElement("div");
    col.className = "col-md-6";
    row.appendChild(col);
    // Crear un elemento div para la tarjeta
    const card = document.createElement("div");
    card.className = "card mb-3";

    // Crear un elemento imagen y asignarle la imagen de fondo
    const background = document.createElement("img");
    background.src = item.Background;
    background.className = "card-img-top";

    // Crear un elemento div para el cuerpo de la tarjeta
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Crear un elemento imagen y asignarle la imagen de la portada
    const poster = document.createElement("img");
    poster.src = item.Poster;
    poster.className = "card-img-start float-start me-3";

    // Crear un elemento título y asignarle el título del objeto
    const title = document.createElement("h5");
    title.innerHTML = item.Title;
    title.className = "card-title";

    // Crear un elemento descripción y asignarle la descripción del objeto
    const description = document.createElement("p");

    if (item.Description.length > 90) {
      description.innerHTML = item.Description.substring(0, 100) + "...";
    } else {
      description.innerHTML = item.Description;
    }

    description.className = "card-text";

    // Crear un elemento botón y asignarle la URL del objeto
    const button = document.createElement("a");
    button.href = item.URL;
    button.innerHTML = "Escuchar ahora";
    button.className = "btn btn-primary";

    // Agregar evento de click al botón
    button.addEventListener("click", () => {
      playerVideo(item.URL);
    });

    // Agregar los elementos creados al cuerpo de la tarjeta
    cardBody.appendChild(poster);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(button);

    // Agregar el cuerpo de la tarjeta y la imagen de fondo a la tarjeta
    card.appendChild(background);
    card.appendChild(cardBody);

    // Agregar la tarjeta al contenedor
    col.appendChild(card);
  });
}

function playerVideo (url) {
  alert("Reproduciendo...");
  // Crear una instancia de Hls
  const video = document.createElement("video");
  const videoSrc = url;
  // Comprobar si el navegador esta basado en Chromium
  if (typeof window.chrome === 'object' && window.chrome) {
    // Comprobar si el navegador puede reproducir m3u8
    try {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
      }
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
      } else {
        alert("HLS no es soportado");
      }
    } catch (error) {
      // si error contiene Hls.isSupported entonces falta instalar la extensión
      if (error.toString().includes("Hls.isSupported")) {
        alert("Instalar extensión");
        window.open("https://chrome.google.com/webstore/detail/native-hls-playback/emnphkkblegpebimobpbekeedfgemhof");
      }
    }
  } else {
    alert("Este navegador no es compatible");
  }
}

export { renderCard };