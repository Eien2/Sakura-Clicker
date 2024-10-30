import { getFromStorage } from "../data/save.js";
import { options } from "../data/settings.js";

export function renderDetailedMain() {
  const main = document.querySelector(".main");

  main.innerHTML = `
    <div class="background">
      <div class="sakura-tree-container">
        <p class="sakura-tree-btn">
          <img src="./images/assets/sakura-tree.png" class="sakura-tree-image" alt="sakura-tree"/>
        </p>
      </div>

      <div class="grass-container">
        <img src="./images/assets/island.png" class="island-image" alt="island"/>
      </div>
    </div>
  `;
}

export function renderLowDetailMain() {
  const main = document.querySelector(".main");

  main.innerHTML = `
    <div class="background">
      <div class="sakura-tree-container">
        <p class="sakura-tree-btn">
          <img src="./images/assets/low-detail/sakura-tree.png" class="sakura-tree-image" alt="sakura-tree"/>
        </p>
      </div>

      <div class="grass-container">
        <img src="./images/assets/low-detail/island.png" class="island-image" alt="island"/>
      </div>
    </div>
  `;
}

export function whichMain() {
  getFromStorage();

  if (options.details) {
    renderDetailedMain();
  } else if (!options.details) {
    renderLowDetailMain();
  }
}
