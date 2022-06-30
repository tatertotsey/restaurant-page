function home() {
  const lettuce = document.createElement("img");
  const parsley = document.createElement("img");
  const tomato = document.createElement("img");
  const garlic = document.createElement("img");
  const carolina = document.createElement("img");
  const beans = document.createElement("img");

  const pizzacontainer = document.createElement("div");
  const dough = document.createElement("img");
  const selection = document.createElement("img");
  const homecontainer = document.createElement("div");
  const tabContent = document.createElement("div");

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



  pizzacontainer.classList = "pizzacontainer";
  pizzacontainer.append(dough, selection);

  dough.classList = "dough";
  dough.src = "./assets/pizza-structure/dough.png";

  selection.classList = "selection";
  selection.src = "./assets/pizza-structure/selection.png";

  homecontainer.id = "home";
  homecontainer.classList = "active";
  homecontainer.dataset.tabContent = "";
  homecontainer.append(
    lettuce,
    parsley,
    tomato,
    garlic,
    carolina,
    beans,
    pizzacontainer
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
