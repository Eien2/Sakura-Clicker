import { currency } from "./data/coins.js";
import { rebirth } from "./data/rebirth.js";
import { upgrades } from "./data/upgrade.js";


export function validColors() {
  const upgradeCostHTML = document.querySelectorAll(".upgrade-cost");
  const sakuraCoin = currency.sakuraCoin;

  upgradeCostHTML.forEach((cost) => {
    upgrades.forEach((upgrade) => {
      const upgradeId = cost.dataset.upgradeId;

      if (sakuraCoin >= upgrade.cost && upgradeId === upgrade.id) {
        cost.style.color = "var(--green)";
      }
    });
  });
}

export function validRebirthColors() {
  const rebirthCostHTML = document.querySelector(".rebirth-cost");
  const sakuraCoin = currency.sakuraCoin;

  if (sakuraCoin >= rebirth.cost) {
    rebirthCostHTML.style.color = "var(--green)";
  } else {
    rebirthCostHTML.style.color = "var(--red)";
  }
}
