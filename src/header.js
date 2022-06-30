function createHeader() {
  const header = document.createElement("header");
  const restname = document.createElement("h1");
  const navContainer = document.createElement("div");

  const home = document.createElement("button");
  const about = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");
  const buy = document.createElement("button");
  const buyimg = document.createElement("img");

  restname.textContent = "SANTORINIS";
  restname.classList = "rest-name";

  navContainer.classList = "nav-container";

  home.classList = "nav-item";
  home.dataset.tabTarget = "#home";
  home.textContent = "Home";

  about.classList = "nav-item";
  about.dataset.tabTarget = "#about";
  about.textContent = "About Us";

  menu.classList = "nav-item";
  menu.dataset.tabTarget = "#menu";
  menu.textContent = "Our Menu";

  contact.classList = "nav-item";
  contact.dataset.tabTarget = "#contact";
  contact.textContent = "Contact Us";

  buy.classList = "buy";
  buyimg.src = "./assets/bg-items/header-btn.svg";
  buy.appendChild(buyimg);

  navContainer.appendChild(home);
  navContainer.appendChild(about);
  navContainer.appendChild(menu);
  navContainer.appendChild(contact);

  header.appendChild(restname);
  header.appendChild(navContainer);
  header.appendChild(buy);

  return header;
}

function loadHeader() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
}

export default loadHeader;
