import loadHeader from "./header.js";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function firstLoad() {
  loadHeader();
  loadHome();
  loadAbout();
  loadMenu();
  loadContact();
}

export default firstLoad;
