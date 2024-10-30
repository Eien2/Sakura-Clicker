import { currency } from "../data/coins.js";
import { getFromStorage, saveToStorage } from "../data/save.js";
import { globalVolumes } from "../data/sounds.js";
import { renderHeader } from "../html/header.js";
import { whichMain } from "../html/main.js";
import { whichGeneralInfo } from "../html/renderGeneralInfo.js";
import { whichUpgrade } from "../html/renderUpgrade.js";
import { rebirthBtn } from "./rebirth.js";
import { showSettings } from "./settings.js";
import { validColors } from "./validCostColors.js";

export const sakura = () => {
  const sakuraTreeBtn = document.querySelector(".sakura-tree-btn");

  sakuraTreeBtn.addEventListener("click", (event) => {
    currency.sakuraCoin += currency.sakuraCoinPerClick * currency.multiplier;
    validColors();
    whichGeneralInfo();
    sakuraSound();
    saveToStorage();
    sakuraTreeAnimation(event);

    document.title = `${currency.sakuraCoin.toFixed(1)} SC - Sakura Clicker`;
  });
};

function sakuraTreeAnimation(event) {
  const randomLeaf = Math.random() * 10;

  const mousePosY = event.clientY;
  const mousePosX = event.clientX;

  const leafContainer = document.createElement("div");
  leafContainer.className = "inner-leaf-container";
  leafContainer.style.top = `${mousePosY + 15}px`;
  leafContainer.style.left = `${mousePosX + 15}px`;

  const leafImage = document.createElement("img");
  leafImage.className = "sakura-leaf";
  leafImage.src = `./images/assets/${randomLeaf <= 5 ? "sakura-leaf-1.png" : "sakura-leaf-2.png"}`;

  if (leafImage.src === "./images/assets/sakura-leaf-2.png") {
    leafContainer.style.left = `${mousePosX - 30}px`;
  }

  leafContainer.appendChild(leafImage);
  document.body.append(leafContainer);

  leafContainer.animate([
    {
      transform: "translateY(0px)",
      opacity: 1,
    },
    {
      transform: "translateY(150px) rotate(120deg)",
      opacity: 0.25,
    },
  ], {
    duration: 800,
    fill: "forwards",
  });

  setTimeout(() => {
    leafContainer.remove();
  }, 800);
  renderHeader();
  whichMain();
  whichUpgrade();
  whichGeneralInfo();
  rebirthBtn();
  showSettings();
  sakura();
}

export function resetLeafs() {
  document.querySelectorAll(".inner-leaf-container").forEach(leaf => {
    leaf.remove();
  });
}

function sakuraSound() {
  getFromStorage();

  const leaf = new Audio();
  leaf.src = "./sounds/sakura/leafs.mp3";
  leaf.volume = globalVolumes.other;
  leaf.play();
}

export function renderSakuraTitle() {
  document.title = `${currency.sakuraCoin.toFixed(1)} SC - Sakura Clicker`;
}
