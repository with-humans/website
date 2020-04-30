const extractText = (node) => {
  if (node.getAttribute("type") !== "html") {
    return node.textContent;
  }
  const htmlDoc = new DOMParser().parseFromString(
    node.textContent,
    "text/html"
  );
  return htmlDoc.body.textContent;
};

const parseCtoCoffeePodcast = (feed) => {
  const items = Array.from(feed.getElementsByTagName("item"));

  return items.map((item) => ({
    published: item.getElementsByTagName("pubDate")[0].textContent,
  }));
};

const parseYmmv = (feed) => {
  const entries = Array.from(feed.getElementsByTagName("entry"));
  return entries.map((entry) => ({
    author: "Raimo",
    author_image: "/img/humans/raimo-square.jpg",
    type: "blogpost",
    source: "YMMV",
    link: entry.getElementsByTagName("link")[0].getAttribute("href"),
    published: entry.getElementsByTagName("published")[0].textContent,
    title: extractText(entry.getElementsByTagName("title")[0]),
    summary: extractText(entry.getElementsByTagName("summary")[0]),
  }));
};

module.exports = {
  parseCtoCoffeePodcast,
  parseYmmv,
};
