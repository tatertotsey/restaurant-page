import loadAbout from "./about.js";
import loadHome from "./home.js";
import firstLoad from "./firstload.js";

init();
//get evenet listeners
function getListeners() {
  const home = document.getElementById("home");
  const about = document.getElementById("about");

  home.addEventListener("click", () => {
    loadHome();
  });

  about.addEventListener("click", () => {
    loadAbout();
  });
}

function init() {
  firstLoad();
  getListeners();
}
