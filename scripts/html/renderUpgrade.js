import { options } from "../data/settings.js";
import { upgrades } from "../data/upgrade.js";
import { buyUpgrade } from "../interactive/upgrades.js";

export function renderDefaultUpgrade() {
  setTimeout(() => {
    const upgradesContainer = document.querySelector(".upgrades-container");
    let upgradesHTML = "";

    upgrades.forEach((upgrade) => {
      upgradesHTML += `
        <div class="upgrade upgrade-${upgrade.id}">
          <div class="upgrade-icon-container">
            <img src="./images/icons/${upgrade.image}" class="upgrade-icon" alt="upgrade-icon"/>
          </div>
          
          <div class="upgrade-info">
            <button class="buy-btn" data-upgrade-id="${upgrade.id}">
              <p class="upgrade-name">${upgrade.name}</p>
              <p class="upgrade-cost"
                 data-upgrade-id="${upgrade.id}">
                ${numeral(upgrade.cost).format("0.0 a")} SC
              </p>
            </button>

            <div class="stats-container">
              <p class="upgrade-count">Count: ${numeral(upgrade.count).format("0 a")}</p>
              <p class="upgrade-scpc">SCPC: ${numeral(upgrade.scpc).format("0.0 a")}</p>
            </div>
          </div>
        </div>
      `;

      upgradesContainer.innerHTML = upgradesHTML;
    });
    buyUpgrade();
  }, 1);
}

export function renderShortNumUpgrade() {
  setTimeout(() => {
    const upgradesContainer = document.querySelector(".upgrades-container");
    let upgradesHTML = "";

    upgrades.forEach((upgrade) => {
      upgradesHTML += `
        <div class="upgrade upgrade-${upgrade.id}">
          <div class="upgrade-icon-container">
            <img src="./images/icons/${upgrade.image}" class="upgrade-icon" alt="upgrade-icon"/>
          </div>
          
          <div class="upgrade-info">
            <button class="buy-btn" data-upgrade-id="${upgrade.id}">
              <p class="upgrade-name">${upgrade.name}</p>
              <p class="upgrade-cost"
                 data-upgrade-id="${upgrade.id}">
                ${upgrade.cost.toFixed(1)} SC
              </p>
            </button>

            <div class="stats-container">
              <p class="upgrade-count">Count: ${upgrade.count}</p>
              <p class="upgrade-scpc">SCPC: ${upgrade.scpc.toFixed(1)}</p>
            </div>
          </div>
        </div>
      `;

      upgradesContainer.innerHTML = upgradesHTML;
    });
    buyUpgrade();
  }, 1);
}

export function whichUpgrade() {
  if (options.shortNumbers) {
    renderDefaultUpgrade();
  } else if (!options.shortNumbers) {
    renderShortNumUpgrade();
  }
}
