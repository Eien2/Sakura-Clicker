import { saveToStorage } from "./save.js";
import { upgrades } from "./upgrade.js";

export const defaultCurrency = {
  sakuraCoin: 0,
  multiplier: 1,
  sakuraCoinPerClick: 1,
};

export const currency = JSON.parse(localStorage.getItem("currency"))  || defaultCurrency; 

export function updateScpc() {
  let accumulator = 0;

  upgrades.forEach((upgrade) => {
    upgrade.scpc = (upgrade.count * upgrade.baseScpc);
    accumulator += upgrade.scpc;
    currency.sakuraCoinPerClick = accumulator + 1;
    saveToStorage();
  });
}
