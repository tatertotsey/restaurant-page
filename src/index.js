import loadAbout from "./about.js";
import loadHome from "./home.js";
import firstLoad from "./firstload.js";
import loadHeader from "./header";
import loadBgImages from "./background";

init();
//get evenet listeners
function getListeners() {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      console.log(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      target.classList.add("active");
      console.log(target.classList);
    });
  });
}
// const home = document.getElementById("home");
// const about = document.getElementById("about");

//   home.addEventListener("click", () => {
//     loadHome();
//   });

//   about.addEventListener("click", () => {
//     loadAbout();
//   });
// }

function init() {
  firstLoad();
  getListeners();
}
