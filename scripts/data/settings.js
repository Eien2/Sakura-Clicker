export const options = JSON.parse(localStorage.getItem("options")) || {
  details: true,
  shortNumbers: true,
  buyMultiplier: {
    "1": true,
    "10": false,
    "100": false,
  },
  muteSfx: false,
};
