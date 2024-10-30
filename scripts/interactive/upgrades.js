import { currency, updateScpc } from "./data/coins.js";
import { getFromStorage, saveToStorage } from "./data/save.js";
import { globalVolumes } from "./data/sounds.js";
import { upgrades } from "./data/upgrade.js";
import { whichGeneralInfo } from "./html/renderGeneralInfo.js";
import { whichUpgrade } from "./html/renderUpgrade.js";
import { renderSakuraTitle } from "./sakura.js";
import { validColors } from "./validCostColors.js";

export function buyUpgrade() {
  const buyBtn = document.querySelectorAll(".buy-btn");
  const buySwitches = document.querySelectorAll(".buy-switch");

  buyBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      upgrades.forEach((upgrade) => {
        const upgradeId = btn.dataset.upgradeId;

        if (currency.sakuraCoin >= upgrade.cost && upgradeId === upgrade.id) {
          buySwitches.forEach((buySwitch) => {
            const switchValue = buySwitch.value;
            const isSwitchChecked = buySwitch.checked;

            if (switchValue === "1" && isSwitchChecked) {
              upgrade.count++;
              currency.sakuraCoin -= upgrade.cost;
              upgrade.cost = upgrade.cost * 1.25;
              upgrade.baseCost = upgrade.cost;
              updateScpc();
              whichGeneralInfo();
              whichUpgrade();
              saveToStorage();
            } else if (switchValue === "10" && isSwitchChecked) {
              upgrade.count += 10;
              currency.sakuraCoin -= upgrade.cost;
              for (let i = 0; i < 10; i++) {
                upgrade.cost = upgrade.cost * 1.25;
              }
              upgrade.baseCost = upgrade.cost;
              updateScpc();
              whichGeneralInfo();
              whichUpgrade();
              saveToStorage();
            } else if (switchValue === "100" && isSwitchChecked) {
              upgrade.count += 100;
              currency.sakuraCoin -= upgrade.cost;
              for (let i = 0; i < 100; i++) {
                upgrade.cost = upgrade.cost * 1.25;
              }
              upgrade.baseCost = upgrade.cost;
              updateScpc();
              whichGeneralInfo();
              whichUpgrade();
              saveToStorage();
            }
          });

          buyBtnSound();
          renderSakuraTitle();
        } else if (
          currency.sakuraCoin < upgrade.cost &&
          upgradeId === upgrade.id
        ) {
          falseBuyBtnSound();
        }
      });
    });
    validColors();
  });
}

/* Buy Multipliers */
export function buyMultipliers() {
  getFromStorage();
  upgrades.forEach((upgrade) => { upgrade.cost = upgrade.baseCost; upgrade.cost = upgrade.cost * 1; });
  const buySwitches = document.querySelectorAll(".buy-switch");

  buySwitches.forEach((buySwitch) => {
    buySwitch.addEventListener("click", () => {
      if (buySwitch.checked) {
        const switchValue = buySwitch.value;

        upgrades.forEach((upgrade) => {
          if (switchValue == "1") {
            upgrade.cost = upgrade.baseCost;
            upgrade.cost = upgrade.cost * 1;
          } else if (switchValue == "10") {
            upgrade.cost = upgrade.baseCost;
            upgrade.cost = upgrade.cost * 10;
          } else if (switchValue == "100") {
            upgrade.cost = upgrade.baseCost;
            upgrade.cost = upgrade.cost * 100;
          }
        });

        saveToStorage();
        whichUpgrade();
      }
    });
  });
}

/* SFX */
function buyBtnSound() {
  getFromStorage();

  const buy = new Audio();
  buy.src = "./sounds/upgrades/click.mp3";
  buy.volume = globalVolumes.other;
  buy.play();
}

function falseBuyBtnSound() {
  getFromStorage();

  const wrong = new Audio();
  wrong.src = "./sounds/upgrades/wrong.mp3";
  wrong.volume = globalVolumes.other;
  wrong.play();
}
