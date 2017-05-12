const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

function determinePosition(data) {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.error(err);
};

navigator.geolocation.watchPosition(determinePosition);