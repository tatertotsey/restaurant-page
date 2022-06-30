function contact() {
  const tabContent = document.createElement("div");
  const contactcontainer = document.createElement("div");
  const textcontainer = document.createElement("div");
  const textTitle = document.createElement("div");
  const text = document.createElement("p");
  const hours = document.createElement("p");
  const hourstitle = document.createElement("div");
  const hourscontainer = document.createElement("div");
  const textwrapper = document.createElement("div");

  textTitle.classList = "text-title";
  textTitle.textContent = "Contact Us";

  textcontainer.classList = "text-container";
  textcontainer.append(textTitle, text, hourscontainer);

  text.classList = "text";
  text.textContent =
    "4814 Glenwood Avenue Cleveland\r\nOH, Ohio\r\n44114\r\n\r\nTel: 216-374-3908";

  hours.classList = "hours";
  hourstitle.classList = "hours-title";
  hourstitle.textContent = "Opening Hours";
  hours.textContent =
    "Monday:\r\nClosed\r\n\r\nTue-Sun:\r\n12 - 14pm,\r\n17.30 - 23:30pm";
  hourscontainer.append(hourstitle, hours);
  hourscontainer.classList = "hourscontainer";

  textwrapper.classList = "text-wrapper";
  textwrapper.append(textcontainer, hourscontainer);

  contactcontainer.id = "contact";
  contactcontainer.dataset.tabContent = "";
  contactcontainer.append(textwrapper);

  tabContent.classList = "tab-content";
  tabContent.append(contactcontainer);

  return tabContent;
}

function loadContact() {
  const content = document.getElementById("content");
  content.appendChild(contact());
}

export default loadContact;
