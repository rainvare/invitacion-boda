const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionX = offset * -0.3 - 100 + "px";
});

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 3100;
  parallax1.style.backgroundPositionY = offset * 0.1 + "px";
});

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 4800;
  parallax2.style.backgroundPositionY = offset * -0.1 + "px";
});

function myFunction() {
  document.getElementById("check").checked = false;
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío real
  const nombre = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;

  if (nombre && email) {
    alert(`¡Gracias, ${nombre}! Tu confirmación ha sido recibida.`);
    this.reset(); // Limpia el formulario
  } else {
    alert("Por favor completa los campos obligatorios.");
  }
});

const music = document.getElementById("bg-music");

function toggleMusic() {
  if (music.paused) {
    music.play();
    document.getElementById("music-btn").textContent = "🔇";
  } else {
    music.pause();
    document.getElementById("music-btn").textContent = "🎵";
  }
}

const weddingDate = new Date("July 12, 2025 19:00:00").getTime();

const countdown = document.getElementById("countdown");

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdown.innerHTML = "¡Ya es el gran día! 💒";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Faltan <strong>${days}</strong> días, <strong>${hours}</strong> horas, <strong>${minutes}</strong> minutos y <strong>${seconds}</strong> segundos para la boda 💍`;
};

updateCountdown(); // Llama una vez al cargar
setInterval(updateCountdown, 1000); // Actualiza cada segundo

function enviarPorWhatsapp(event) {
  event.preventDefault();

  const nombre = document.querySelector('[name="nombre"]').value;
  const email = document.querySelector('[name="email"]').value;
  const mensaje = document.querySelector('[name="mensaje"]').value;
  const asistencia = document.querySelector(
    '[name="asistencia"]:checked'
  )?.value;

  const texto = `💌 *Confirmación para la boda de Gabriela e Ismael*\n\n👤 Nombre: ${nombre}\n📧 Email: ${email}\n🎉 Asistencia: ${asistencia}\n💬 Mensaje: ${mensaje}`;
  const telefono = "5219983029838";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}

window.addEventListener("scroll", reveal);
