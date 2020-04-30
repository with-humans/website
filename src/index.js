import "babel-polyfill";
import { renderFeeds } from "./feed-viewer/";

[...document.querySelectorAll("[data-target=activities]")].forEach((target) =>
  renderFeeds(target)
);
