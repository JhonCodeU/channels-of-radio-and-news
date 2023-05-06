import { renderCard } from "./components/CardComponent.js";
import { getAllData } from "../controller/channel.controller.js";
import { filterSelect } from "./components/FilterComponent.js";

async function main () {
  const data = await getAllData();

  filterSelect(data);
  const containerEl = document.getElementById("container");
  // Render all cards by default
  renderCard(data, containerEl);
}

main();