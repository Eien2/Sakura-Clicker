import { getFromStorage, resetStorage, saveToStorage } from "../data/save.js";
import { options } from "../data/settings.js";
import {
  renderLowDetailMain,
  renderDetailedMain,
  whichMain,
} from "../html/main.js";
import { renderSettings } from "../html/settings.js";
import { renderSidebar } from "../html/sidebar.js";
import { renderHeader } from "../html/header.js";
import { renderSakuraTitle, resetLeafs, sakura } from "./sakura.js";
import {
  renderDefaultGeneralInfo,
  renderShortNumGeneralInfo,
} from "../html/renderGeneralInfo.js";
import {
  renderDefaultUpgrade,
  renderShortNumUpgrade,
} from "../html/renderUpgrade.js";
import { rebirthBtn } from "./rebirth.js";
import { globalVolumes } from "../data/sounds.js";
import { buyMultipliers } from "./upgrades.js";

/* Show Settings */
export function showSettings() {
  const settingsBtn = document.querySelector(".settings-btn");

  settingsBtn.addEventListener("click", () => {
    renderSettings();
    clickSettingsSound();
    closeSettings();
    settingsDetails();
    shortNumbers();
    muteSoundEffect();
    getChecked();
    resetSave();
    resetLeafs();
  });
}

/* Close Settings */
function closeSettings() {
  const settingsCloseBtn = document.querySelector(".settings-close-btn");
  const settingsModal = document.querySelector(".settings-wrapper");

  settingsCloseBtn.addEventListener("click", () => {
    document.querySelector(".body-container").style.opacity = "1";
    settingsModal.remove();
    getFromStorage();

    renderSakuraTitle();
    renderHeader();
    renderSidebar();
    whichMain();
    sakura();
    showSettings();
    rebirthBtn();
    buyMultipliers();
  });
}

/* Reset Save */
function resetSave() {
  const resetSaveBtn = document.querySelector(".reset-save-btn");
  const modalBody = document.querySelector(".modal-body");

  resetSaveBtn.addEventListener("click", () => {
    modalBody.innerHTML += `
      <div class="reset-confirmation">
        <p class="confirmation-text">
          Are you sure you want to reset a whole save?
        </p>

        <button class="yes-btn">Yes</button>
        <button class="no-btn">No</button>
      </div>
    `;

    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
      resetStorage();
    });

    noBtn.addEventListener("click", () => {
      document.querySelector(".reset-confirmation").remove();
      resetSave();
      settingsDetails();
      shortNumbers();
      getChecked();
    });
  });
}

function getChecked() {
  getFromStorage();
  const detailsInput = document.querySelector(".details-input");
  const shortNumbersInput = document.querySelector(".short-numbers-input");
  const muteSfxInput = document.querySelector(".mute-sfx-input");

  /* Details */
  if (options.details) {
    detailsInput.checked = true;
  } else if (!options.details) {
    detailsInput.checked = false;
  }

  /* Short Num */
  if (options.shortNumbers) {
    shortNumbersInput.checked = true;
  } else if (!options.shortNumbers) {
    shortNumbersInput.checked = false;
  }

  /* Mute Sound Effects */
  if (options.muteSfx) {
    muteSfxInput.checked = true;
  } else if (!options.muteSfx) {
    muteSfxInput.checked = false;
  }
}

/*  Options  */

/*  Details Option  */
function settingsDetails() {
  const detailsInput = document.querySelector(".details-input");

  detailsInput.addEventListener("click", () => {
    if (detailsInput.checked) {
      options.details = true;
      renderDetailedMain();
      saveToStorage();
    } else if (!detailsInput.checked) {
      options.details = false;
      renderLowDetailMain();
      saveToStorage();
    }
  });
}

/*  Short Number Option  */
function shortNumbers() {
  const shortNumbersInput = document.querySelector(".short-numbers-input");

  shortNumbersInput.addEventListener("click", () => {
    if (shortNumbersInput.checked) {
      options.shortNumbers = true;
      renderDefaultGeneralInfo();
      renderDefaultUpgrade();
      saveToStorage();
    } else if (!shortNumbersInput.checked) {
      options.shortNumbers = false;
      renderShortNumGeneralInfo();
      renderShortNumUpgrade();
      saveToStorage();
    }
  });
}

/*  Mute Sound Effect Option  */
function muteSoundEffect() {
  const muteSfxInput = document.querySelector(".mute-sfx-input");

  muteSfxInput.addEventListener("click", () => {
    if (muteSfxInput.checked) {
      options.muteSfx = true;
      globalVolumes.yay = 0;
      globalVolumes.other = 0;
      saveToStorage();
    } else if (!muteSfxInput.checked) {
      options.muteSfx = false;
      globalVolumes.yay = 0.4;
      globalVolumes.other = 0.2;
      saveToStorage();
    }
  });
}

/* SFX */
function clickSettingsSound() {
  getFromStorage();

  const click = new Audio();
  click.src = "../sounds/header/click.mp3";
  click.volume = globalVolumes.other;
  click.play();
}
