const rocket = document.querySelector('.rocket');
const bullet = document.querySelector('.bullet');
var nar = document.querySelector('.nar img');
let finished = false;
let xAxis = 0;
let yAxis = 0;

document.body.addEventListener('keydown', (e) => {
  if(e.code == "ArrowRight") {
    xAxis++;
    rocket.style.left = `${xAxis * 2 + 50}%`;
    bullet.style.left = `${xAxis * 2 + 50}%`;
  } else if(e.code == "ArrowLeft") {
    xAxis--;
    rocket.style.left = `${xAxis * 2 + 50}%`;
    bullet.style.left = `${xAxis * 2 + 50}%`;
  } else if(e.code == "ArrowUp") {
    if(bullet.style.bottom === "100%") {
      bullet.style.transition = "0s";
      bullet.style.bottom = "15%";
    } else {
      bullet.style.transition = "5s ease-out";
    }
    yAxis++;
    rocket.style.bottom = `${yAxis * 2 + 2}rem`;
    bullet.style.bottom = `${yAxis * 2 + 6}rem`;
  } else if(e.code == "ArrowDown") {
    if(bullet.style.bottom === "100%") {
      bullet.style.transition = "0s";
      bullet.style.bottom = "15%";
    } else {
      bullet.style.transition = "5s ease-out";
    }
    yAxis--;
    rocket.style.bottom = `${yAxis * 2 + 2}rem`;
    bullet.style.bottom = `${yAxis * 2 + 6}rem`;
  } else if(e.code == "Space") {
    if(bullet.style.bottom === "100%") {
      bullet.style.transition = "0s";
      bullet.style.bottom = `${yAxis * 2 + 6}rem`;
    } else {
      bullet.style.transition = "5s ease-out";
      bullet.style.bottom = "100%";
    }
  }

});

document.addEventListener('mousemove' ,function(e) {
  nar.style.left = e.clientX+'px';
  nar.style.top = e.clientY+'px';
})