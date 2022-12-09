import aboutImage from "../about-image.jpg";

function loadHome() {
  //clear current content
  const mainWrapper = document.querySelector("#main-wrapper");
  mainWrapper.innerHTML = "";

  const homeContent = document.createElement("div");
  homeContent.id = "home-content";

  const homeImage = new Image();
  homeImage.id = "home-image";
  homeImage.src = aboutImage;

  const homeText = document.createElement("p");
  homeText.id = "home-text";
  homeText.textContent = `Galbijjim (braised beef short ribs) is one of the most popular Korean dishes. It's made with beef short ribs and is often prepared for special occasions.\r\n\r\n`;
  homeText.textContent += `It's kind of a challenging recipe but the result is amazing: the meat falling off the rib bones and is tender, sweet, savory, and irresistible.
  \r\n\r\n`;
  homeText.textContent += `No one does Galbijjim the way we do. One taste and you'll see why we've got so many people hooked.`;

  homeContent.appendChild(homeImage);
  homeContent.appendChild(homeText);
  mainWrapper.appendChild(homeContent);
}

export { loadHome };
