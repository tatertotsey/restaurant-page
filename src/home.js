function home() {
  const homecontainer = document.createElement("div");
  const tabContent = document.createElement("div");

  const textContainer = document.createElement("div");
  const textTitle = document.createElement("p");
  const text = document.createElement("p");

  const pizzaimg = document.createElement("img");

  pizzaimg.classList = "pizzaimg";
  pizzaimg.src = "./assets/pizza3.jpg";

  textContainer.append(textTitle, text, pizzaimg);
  textContainer.classList = "text-container";

  textTitle.classList = "text-title";
  textTitle.textContent = "Welcome to Santorinis";

  text.classList = "text";
  text.textContent = " We brought Italy to you!\r\n\r\n Come visit us!";

  homecontainer.id = "home";
  homecontainer.classList = "active";
  homecontainer.dataset.tabContent = "";
  homecontainer.append(textContainer);

  tabContent.classList = "tab-content";
  tabContent.append(homecontainer);

  return tabContent;
}

function loadHome() {
  const content = document.getElementById("content");
  content.appendChild(home());
}

export default loadHome;
