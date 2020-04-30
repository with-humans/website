const { renderIntoDiv } = require("./renderer");
const { parseYmmv, parseCtoCoffeePodcast } = require("./parsers");

const fetchFeeds = async (feeds) => {
  const articles = [];

  for (let { feed, parser } of feeds) {
    const response = await fetch(feed);
    const body = await response.text();
    const xml = new DOMParser().parseFromString(body, "text/xml");

    articles.push(...parser(xml));
  }

  return articles
    .slice()
    .sort(
      (a, b) =>
        new Date(b.published).getTime() - new Date(a.published).getTime()
    );
};

const renderFeeds = async (target) => {
  const activities = await fetchFeeds([
    {
      feed: "https://draft--ymmvcraftswerkio.netlify.app/feed.xml",
      parser: parseYmmv,
    },
    //{ feed: "https://cto.coffee/feed.xml", parser: parseCtoCoffeePodcast },
  ]);

  for (let activity of activities) {
    const element = document.createElement("div");
    renderIntoDiv(activity, element);
    target.appendChild(element.firstElementChild);
  }
};

module.exports = {
  fetchFeeds,
  renderFeeds,
};
