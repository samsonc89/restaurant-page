import galbijjimPic from "../galbijjim.png";

function loadMenu() {
  //clear current content

  const mainWrapper = document.querySelector("#main-wrapper");
  mainWrapper.innerHTML = "";

  const menuWrapper = document.createElement("div");
  menuWrapper.id = "menu-wrapper";

  const galbijjim = document.createElement("div");
  galbijjim.id = "galbijjim-wrapper";
  galbijjim.classList.add("menu-section-wrapper");

  const galbijjimImage = new Image();
  galbijjimImage.src = galbijjimPic;
  galbijjimImage.style.width = "40%";

  const galbijjimText = document.createElement("div");
  galbijjimText.innerHTML = `<h3 class='menu-section-header'>PREMIUM  GALBIJJIM</h3>
  <ol>
<li>Galbijjim (Braised Beef Rib) 갈비찜</li>
<li>Kko Gal Jjim (Braised Beef Rib with Oxtail) 꼬갈찜</li>
<li>Doh Gal Jjim (Braised Beef Rib with Ox Cartilage/Tendon) 도갈찜</li>
  </ol>
  `;

  galbijjim.appendChild(galbijjimImage);
  galbijjim.appendChild(galbijjimText);

  menuWrapper.appendChild(galbijjim);

  mainWrapper.appendChild(menuWrapper);
}

export { loadMenu };
