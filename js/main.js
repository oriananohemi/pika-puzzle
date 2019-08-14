var piezas = document.getElementsByClassName("movil");

var tamWidh = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];

for (var i = 0; i < piezas.length; i++) {
  piezas[i].setAttribute("width", tamWidh[i]);
  piezas[i].setAttribute("height", tamHeight[i]);
  piezas[i].setAttribute("x", Math.floor(Math.random() * 10 + 1));
  piezas[i].setAttribute("y", Math.floor(Math.random() * 409 + 1));
}
