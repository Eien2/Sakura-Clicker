export const defaultUpgrades = [
  {
    name: "Watering Can",
    image: "watering-can-icon.png",
    id: "0",
    cost: 10,
    scpc: 0,
    count: 0,
    baseScpc: 0.1,
    baseCost: 10,
  },
  {
    name: "Fertilizer",
    image: "fertilizer-icon.png",
    id: "1",
    cost: 2500,
    scpc: 0,
    count: 0,
    baseScpc: 5,
    baseCost: 2500,
  },
  {
    name: "Sprinkler",
    image: "sprinkler-icon.png",
    id: "2",
    cost: 20000,
    scpc: 0,
    count: 0,
    baseScpc: 50,
    baseCost: 20000,
  },
];

export let upgrades = JSON.parse(localStorage.getItem("upgrades")) || defaultUpgrades; 
