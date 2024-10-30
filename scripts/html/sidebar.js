import { whichGeneralInfo } from "./renderGeneralInfo.js";
import { whichUpgrade } from "./renderUpgrade.js";

export function renderSidebar() {
  const sidebar = document.querySelector(".sidebar");

  sidebar.innerHTML = `
    <div class="general-info">
      ${whichGeneralInfo()}
    </div>

    <div class="buy-multipliers">
      <input class="buy-switch" id="switch-1" type="radio" name="buy-switch" value="1" checked>
      <label class="label-switch-1 label-switch" for="switch-1">1x</label>

      <input class="buy-switch" id="switch-10" type="radio" name="buy-switch" value="10">
      <label class="label-switch-10 label-switch" for="switch-10">10x</label>

      <input class="buy-switch" id="switch-100" type="radio" name="buy-switch" value="100">
      <label class="label-switch-100 label-switch" for="switch-100">100x</label>
    </div>
    
    <div class="upgrades-container">
      ${whichUpgrade()}
    </div>
  `;
}

