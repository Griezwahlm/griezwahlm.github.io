var colorArr = [
  "#001f3f",
  "#39CCCC",
  "#3D9970",
  "#85144b",
  "#01FF70",
  "#7FDBFF",
  "#DE354C",
  "#3C1874"
];

function color() {
  var items = document.getElementsByClassName("random-colored");
  var i;
  var randomColor = colorArr[Math.floor(Math.random()*colorArr.length)];

  for (i = 0; i < items.length; i++) {
    items[i].style.color = randomColor;
  }
}
