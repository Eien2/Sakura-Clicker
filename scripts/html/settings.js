export function renderSettings() {
  const settingsHtml = `
    <div class="settings-wrapper">
      <div class="settings-modal">
        <div class="modal-header">
          <p class="modal-title">Settings</p>
    
          <button class="close-btn settings-close-btn">
            <img class="close-img" src="./images/icons/close-icon.png">
          </button>
        </div>

        <div class="modal-body">
          <div class="short-numbers check-container">
            <label for="check-input" class="check-label">Short Numbers</label>
            <input type="checkbox" class="check-input short-numbers-input" checked>
          </div>

          <div class="details check-container">
            <label for="check-input" class="check-label">Details</label>
            <input type="checkbox" class="check-input details-input" checked>
          </div>

          <div class="mute-sfx check-container">
            <label for="check-input" class="check-label">Mute SFX</label>
            <input type="checkbox" class="check-input mute-sfx-input" checked>
          </div>

          <button class="reset-save-btn">Reset Save</button>
        </div>
      </div>
    </div>
  `;

  document.querySelector(".body-container").style.opacity = "0.1";
  document.body.innerHTML += settingsHtml;
}
