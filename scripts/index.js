import { renderHeader } from "./html/header.js";
import { whichMain } from "./html/main.js";
import { renderSidebar } from "./html/sidebar.js"
import { rebirthBtn } from "./interactive/rebirth.js";
import { renderSakuraTitle, sakura } from "./interactive/sakura.js";
import { showSettings } from "./interactive/settings.js";
import { buyMultipliers } from "./interactive/upgrades.js";

renderSakuraTitle();
renderHeader();
renderSidebar();
whichMain();
sakura();
showSettings();
rebirthBtn();
buyMultipliers();
