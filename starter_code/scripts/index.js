window.onload = function () {
  Game.init();
  document.getElementById("start-button").onclick = function (event) {
    event.preventDefault();
    Game.start();
  };
};
