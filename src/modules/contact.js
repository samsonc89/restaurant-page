function loadContact() {
  //clear current content

  const mainWrapper = document.querySelector("#main-wrapper");
  mainWrapper.textContent = "";

  const contactContent = document.createElement("div");
  contactContent.id = "contact-content";

  contactContent.innerHTML = `
  <p>📞: 123-456-7890</p>
  <p>📧: bestgalbijjim@fake.com</p>
  <p>📍: 123 Fake St, San Francisco, CA 12345</p>`;

  mainWrapper.appendChild(contactContent);
}

export { loadContact };
