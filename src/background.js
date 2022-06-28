function loadImages() {
  const lettuce = document.createElement("img");
  const parsley = document.createElement("img");
  const tomato = document.createElement("img");
  const garlic = document.createElement("img");
  const carolina = document.createElement("img");
  const beans = document.createElement("img");

  lettuce.classList = "bg-item-lettuce";
  lettuce.src = "./assets/bg-items/bg-lettuce.png";
  lettuce.dataset.tabContent = "";

  parsley.classList = "bg-item-parsley";
  parsley.src = "./assets/bg-items/bg-parsley.png";
  parsley.dataset.tabContent = "";

  tomato.classList = "bg-item-tomato";
  tomato.src = "./assets/bg-items/bg-tomato.png";
  tomato.dataset.tabContent = "";

  garlic.classList = "bg-item-garlic";
  garlic.src = "./assets/bg-items/bg-garlic.png";
  garlic.dataset.tabContent = "";

  carolina.classList = "bg-item-carolina";
  carolina.src = "./assets/bg-items/bg-redpepper.png";
  carolina.dataset.tabContent = "";

  beans.classList = "bg-item-beans";
  beans.src = "./assets/bg-items/bg-beans.png";
  beans.dataset.tabContent = "";

  return [lettuce, parsley, tomato, garlic, carolina, beans];
}

function loadPizza() {
  const pizzacontainer = document.createElement("div");
  const dough = document.createElement("img");
  const selection = document.createElement("img");

  pizzacontainer.classList = "pizzacontainer";
  pizzacontainer.dataset.tabContent = "";
  pizzacontainer.append(dough, selection);

  dough.classList = "dough";
  dough.dataset.tabContent = "";
  dough.src = "./assets/pizza-structure/dough.png";

  selection.classList = "selection";
  selection.dataset.tabContent = "";
  selection.src = "./assets/pizza-structure/selection.png";

  return [pizzacontainer];
}

function loadBgImages() {
  loadImages().forEach((img) => content.append(img));
  loadPizza().forEach((img) => content.append(img));
}

export default loadBgImages;
