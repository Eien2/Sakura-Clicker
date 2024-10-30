import { currency } from "../data/coins.js";
import { rebirth } from "../data/rebirth.js";
import { getFromStorage, saveToStorage } from "../data/save.js";
import { globalVolumes } from "../data/sounds.js";
import { upgrades } from "../data/upgrade.js";
import { renderHeader } from "../html/header.js";
import { whichMain } from "../html/main.js";
import { renderSidebar } from "../html/sidebar.js";
import { renderSakuraTitle, resetLeafs, sakura } from "./sakura.js";
import { showSettings } from "./settings.js";
import { buyMultipliers } from "./upgrades.js";
import { validRebirthColors } from "./validCostColors.js";

export function rebirthBtn() {
  const rebirthBtn = document.querySelector(".rebirth-btn");

  rebirthBtn.addEventListener("click", () => {
    renderRebirthConfiramtion();
    clickRebirthSound();
    resetLeafs();
  });
}

function renderRebirthConfiramtion() {
  const bodyContainer = document.querySelector(".body-container");

  bodyContainer.style.opacity = "0.1";

  document.body.innerHTML += `
    <div class="rebirth-modal">
      <div class="benefits">
        <h1 class="benefits-title">
          Benefits
        </h1>
        
        <p class="rebirth-cost">Cost: ${numeral(rebirth.cost).format("0 a")}</p>
        <p class="rebirth-gain">You will gain 0.5 to multiplier each rebirth</p>
        <p class="rebirth-lose">Scpc, sakura coins and all upgrade stats will be cleared</p>
      </div>

      <p class="modal-text">
        Are you sure that you want to rebirth?
      </p>

      <div class="rebirth-btns">
        <button class="rebirth-yes">Yes</button>
        <button class="rebirth-no">no</button>  
      </div>
    </div>
  `;

  validRebirthColors();

  const rebirthYes = document.querySelector(".rebirth-yes");
  const rebirthNo = document.querySelector(".rebirth-no");
  const rebirthModal = document.querySelector(".rebirth-modal");

  rebirthYes.addEventListener("click", () => {
    const bodyContainer = document.querySelector(".body-container");

    if (currency.sakuraCoin >= rebirth.cost) {
      currency.sakuraCoin -= rebirth.cost;
      currency.multiplier += 0.5;

      currency.sakuraCoin = 0;
      currency.sakuraCoinPerClick = 1;

      upgrades.forEach(upgrade => {
        upgrade.count = 0;
        upgrade.scpc = 0;
        upgrade.cost = upgrade.baseCost;
      });

      rebirth.cost = rebirth.cost * 10;

      rebirthBtn();
      getFromStorage();
      saveToStorage();
      renderHeader();
      renderSidebar();
      whichMain();
      sakura();
      showSettings();

      validRebirthColors();
      rebirthYesSound();

      rebirthModal.remove();
      bodyContainer.style.opacity = "1";
    } else {
      falseRebirthYesSound();
      alert("You don't have enough sakura coins");
    }
  });

  rebirthNo.addEventListener("click", () => {
    const bodyContainer = document.querySelector(".body-container");

    bodyContainer.style.opacity = "1";
    rebirthModal.remove();

    renderHeader();
    renderSidebar();
    whichMain();
    sakura();
    showSettings();
    rebirthBtn();
    renderSakuraTitle();
    buyMultipliers();
    clickRebirthSound();
  });
}

/* SFX */
function rebirthYesSound() {
  getFromStorage();

  const yay = new Audio();
  yay.src = "./sounds/header/yay-sound.mp3";
  yay.volume = globalVolumes.yay;
  yay.play();
}

function falseRebirthYesSound() {
  getFromStorage();

  const wrong = new Audio();
  wrong.src = "./sounds/header/wrong.mp3";
  wrong.volume = globalVolumes.other;
  wrong.play();
}

function clickRebirthSound() {
  getFromStorage();

  const click = new Audio();
  click.src = "./sounds/header/click.mp3";
  click.volume = globalVolumes.other;
  click.play();
}
