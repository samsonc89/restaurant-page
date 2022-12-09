import galbijjimPic from "../galbijjim.png";
import galbitangPic from "../galbitang.jpeg";

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
  galbijjimImage.style.width = "50%";

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

  const galbitang = document.createElement("div");
  galbitang.id = "galbitang-wrapper";
  galbitang.classList.add("menu-section-wrapper");

  const galbitangImage = new Image();
  galbitangImage.src = galbitangPic;
  galbitangImage.style.width = "50%";

  const galbitangText = document.createElement("div");
  galbitangText.innerHTML = `<h3 class='menu-section-header'>GALBI TANG</h3>
  <ol>
<li>Galbi Tang (Beef Rib Soup) 갈비탕</li>
<li>Spicy Kalbi Tang (Spicy Beef Rib Soup) 매운 갈비탕</li>
<li>Ttoek Kalbi Tang (Beef Rib Soup with Rice cake & Egg) 떡갈비탕</li>
<li>Ttoek Kalbi Tang (Beef Rib Soup with Rice cake & Egg) 떡갈비탕</li>
  </ol>
  `;

  galbitang.appendChild(galbitangText);
  galbitang.appendChild(galbitangImage);

  menuWrapper.appendChild(galbijjim);
  menuWrapper.appendChild(galbitang);

  mainWrapper.appendChild(menuWrapper);
}

export { loadMenu };
