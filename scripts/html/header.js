export function renderHeader() {
  const header = document.querySelector(".header");

  header.innerHTML = `
    <button class="rebirth-btn">
      <img 
        src="./images/icons/reset-icon.png" 
        class="reset-icon" 
        alt="reset-icon"
      />
    </button>

    <ul class="social-links">
      <li class="github-link">
        <a 
          class="link" 
          target="_blank"
          href="https://github.com/Eien2">
          <img 
            class="github-icon"
            src="./images/icons/github-icon.png"
            alt="github-button"
          >
        </a>
      </li>

      <li class="youtube-link">
        <a 
          class="link"
          target="_blank"
          href="https://www.youtube.com/channel/UCHmoZ8l-j-NWNqSnUzcld-A">
          <img 
            class="youtube-icon"
            src="./images/icons/youtube-icon.png"
            alt="youtube-button"
          >
        </a>
      </li>
    </ul>

    <button class="settings-btn">
      <img 
        class="settings-icon"
        src="./images/icons/settings-icon.png"
        alt="settings-button"
      >
    </button>
  `;
}
