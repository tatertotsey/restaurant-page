function createmenu() {
  const tabContent = document.createElement("div");
  const menuContainer = document.createElement("div");
  const menuTitle = document.createElement("div");
  const pizzawrapper = document.createElement("div");

  menuTitle.classList = "menu-title";
  menuTitle.textContent = "Menu";
  menuContainer.id = "menu";
  menuContainer.dataset.tabContent = "";

  pizzawrapper.classList = "wrapper";

  pizzawrapper.appendChild(
    createMenuItem("Eatalian", "Dough, Mozzarella, Olives, Salami", "22£")
  );

  pizzawrapper.appendChild(
    createMenuItem(
      "Sicillian",
      "Dough, Mozzarella, Onion, Chicken, Parsley, Garlic",
      "25£"
    )
  );

  pizzawrapper.appendChild(
    createMenuItem(
      "Speedy",
      "Dough, Mozzarella, Olives, Bacon, Sausage, Paprika",
      "25£"
    )
  );

  pizzawrapper.appendChild(
    createMenuItem(
      "Lappetitosa",
      "Dough, Mozzarella, Meatballs, Bacon, Onion",
      "27£"
    )
  );

  pizzawrapper.appendChild(
    createMenuItem("Pepperoni", "Dough, Mozzarella, Pepperoni", "18£")
  );

  pizzawrapper.appendChild(
    createMenuItem(
      "Squisita",
      "Dough, Mozzarella, Paprika, Salami, Sweetcorn",
      "23£"
    )
  );

  menuContainer.append(menuTitle, pizzawrapper);
  tabContent.classList = "tab-content";
  tabContent.append(menuContainer);
  return tabContent;
}

function createMenuItem(name, ingr, price) {
  const menuItem = document.createElement("div");
  menuItem.classList = "menu-item";

  const pizzaName = document.createElement("h2");
  pizzaName.textContent = name;

  const pizzaIngr = document.createElement("p");
  pizzaIngr.textContent = ingr;

  const pizzaPrice = document.createElement("p");
  pizzaPrice.textContent = price;

  const pizzaImg = document.createElement("img");
  pizzaImg.src = `assets/pizza/${name}.png`;
  pizzaImg.alt = `${name}`;

  menuItem.append(pizzaImg, pizzaName, pizzaIngr, pizzaPrice);

  return menuItem;
}

function loadMenu() {
  const content = document.getElementById("content");
  content.appendChild(createmenu());
}

export default loadMenu;
