import { upgrades } from "./upgrade.js";
import { currency } from "./coins.js";
import { options } from "./settings.js";
import { rebirth } from "./rebirth.js";
import { globalVolumes } from "./sounds.js";

export function saveToStorage() {
  localStorage.setItem("currency", JSON.stringify(currency));
  localStorage.setItem("upgrades", JSON.stringify(upgrades));
  localStorage.setItem("options", JSON.stringify(options));
  localStorage.setItem("rebirth", JSON.stringify(rebirth));
  localStorage.setItem("sounds", JSON.stringify(globalVolumes));
}

export function getFromStorage() {
  JSON.parse(localStorage.getItem("currency"));
  JSON.parse(localStorage.getItem("upgrades"));
  JSON.parse(localStorage.getItem("options"));
  JSON.parse(localStorage.getItem("rebirth"));
  JSON.parse(localStorage.getItem("sounds"));
}

export function resetStorage() {
  localStorage.removeItem("currency");
  localStorage.removeItem("upgrades");
  localStorage.removeItem("options");
  localStorage.removeItem("rebirth");
  localStorage.removeItem("sounds");

  window.location.reload();
}
