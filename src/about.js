import loadPage from "./header.js";

function aboutus() {
  const about = document.createElement("div");
  const textContainer = document.createElement("div");
  const pizzaimg = document.createElement("img");
  const textTitle = document.createElement("div");
  const text = document.createElement("div");

  about.classList = "about";
  about.dataset.tabTarget = "about-content";

  pizzaimg.classList = "";
  pizzaimg.dataset.tabContent = "";
  pizzaimg.src = "./assets/pizza.png";

  textTitle.classList = "text-title";
  textTitle.textContent = "About Us";

  text.classList = "text";
  text.textContent =
    "We are Santorinis at the Crossroads. Our passion is to make people feel at home in the Italian way. We have created a restaurant to create an atmosphere where people feel at home, while enjoying the speciality Italian dishes. We also provide a selection of Italian wines, to complement our menu. The restaurant is located on the corner of Crossroads and Ponto. All the dishes we serve have been carefully chosen to satisfy your taste buds. Enjoy a great tasting and unique Italian cuisine. We look forward to welcoming you in!";
  textContainer.classList = "text-container";
  textContainer.dataset.tabContent = "";
  textContainer.append(textTitle, text);
  about.append(textContainer, pizzaimg);

  return about;
}

function loadAbout() {
  //loadPage();
  content.appendChild(aboutus());
}
export default loadAbout;