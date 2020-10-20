var i = 0;
var txt = 'Developer';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("subtitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter(), 5000);