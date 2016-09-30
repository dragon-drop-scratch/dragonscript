document.onkeypress = function(evt) {
  code = document.getElementById("code_area").innerHTML;
  canvas = document.querySelector("canvas");

  canvas.innerHTML = code;
};
