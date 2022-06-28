import firstLoad from "./firstload";

function loadHome() {
  document.getElementById("content").textContent = "";
  firstLoad();
}

export default loadHome;
