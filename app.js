import { renderCard } from "./components/CardComponent.js";
import { getAllData } from "../controller/channel.controller.js";
import { filterSelect, filterSearch } from "./components/FilterComponent.js";

async function main () {
  const data = await getAllData();

  // Render the select and filter the data
  filterSelect(data);
  const containerEl = document.getElementById("container");
  // Render for filter and search
  filterSearch(data, containerEl);

  // Render all cards by default
  renderCard(data, containerEl);
}

main();