function home() {
  const lettuce = document.createElement("img");
  const parsley = document.createElement("img");
  const tomato = document.createElement("img");
  const garlic = document.createElement("img");
  const carolina = document.createElement("img");
  const beans = document.createElement("img");

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

  lettuce.classList = "bg-item-lettuce";
  lettuce.src = "./assets/bg-items/bg-lettuce.png";

  parsley.classList = "bg-item-parsley";
  parsley.src = "./assets/bg-items/bg-parsley.png";

  tomato.classList = "bg-item-tomato";
  tomato.src = "./assets/bg-items/bg-tomato.png";

  garlic.classList = "bg-item-garlic";
  garlic.src = "./assets/bg-items/bg-garlic.png";

  carolina.classList = "bg-item-carolina";
  carolina.src = "./assets/bg-items/bg-redpepper.png";

  beans.classList = "bg-item-beans";
  beans.src = "./assets/bg-items/bg-beans.png";

  homecontainer.id = "home";
  homecontainer.classList = "active";
  homecontainer.dataset.tabContent = "";
  homecontainer.append(
    // lettuce,
    // parsley,
    // tomato,
    // garlic,
    // carolina,
    // beans,
    textContainer
  );

  tabContent.classList = "tab-content";
  tabContent.append(homecontainer);

  return tabContent;
}

function loadHome() {
  const content = document.getElementById("content");
  content.appendChild(home());
}

export default loadHome;
