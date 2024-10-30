import { currency } from "./data/coins.js";
import { getFromStorage } from "./data/save.js";
import { options } from "./data/settings.js";

export function renderDefaultGeneralInfo() {
  setTimeout(() => {
    const generalInfo = document.querySelector(".general-info");
    generalInfo.innerHTML = `
      <div class="coin-container">
        <p class="sakura-coin">
          ${numeral(currency.sakuraCoin).format("0.0 a")}
        </p>
        <img 
          src="./images/assets/coin-icon.png"
          class="sakura-coin-icon"
          alt="sakura-coin"
        />
      </div>

      <div class="scpc-container">
        <p class="scpc">
          ${numeral(currency.sakuraCoinPerClick).format("0.0 a")}
        </p>
        <img src="./images/icons/scpc-icon.png" class="sakura-coin-icon" alt="sakura-coin"/>
      </div>

      <div class="multiplier-container">
        <p class="multiplier">
          ${numeral(currency.multiplier).format("0.0 a")}x
        </p>
      </div>
    `;
  }, 1)
}

export function renderShortNumGeneralInfo() {
  setTimeout(() => {
    const generalInfo = document.querySelector(".general-info");
    generalInfo.innerHTML = `
      <div class="coin-container">
        <p class="sakura-coin">
          ${currency.sakuraCoin.toFixed(1)}
        </p>
        <img 
          src="./images/assets/coin-icon.png"
          class="sakura-coin-icon"
          alt="sakura-coin"
        />
      </div>

      <div class="scpc-container">
        <p class="scpc">
          ${currency.sakuraCoinPerClick.toFixed(1)}
        </p>
        <img src="./images/icons/scpc-icon.png" class="sakura-coin-icon" alt="sakura-coin"/>
      </div>

      <div class="multiplier-container">
        <p class="multiplier">
          ${currency.multiplier.toFixed(1)} x
        </p>
      </div>
    `;
  }, 1)
}

export function whichGeneralInfo() {
  getFromStorage();

  if (options.shortNumbers) {
    renderDefaultGeneralInfo();
  } else if (!options.shortNumbers) {
    renderShortNumGeneralInfo();
  }
}
