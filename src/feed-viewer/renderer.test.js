const { renderIntoDiv } = require("./renderer");

describe("Rendering our feeds", () => {
  const article = {
    title: "From The Community Toolbox: No Photos, Bitte.",
    type: "blogpost",
    source: "YMMV",
    published: "2020-02-24T00:00:00+00:00",
    link: "https://ymmv.craftswerk.io/2020/02/ftct-no-photos-bitte",
    author: "Raimo",
    author_image: "/img/humans/raimo-square.jpg",
    summary:
      "There’s two things I make sure to bring attention to at the start of an event: the photo policy and the common language in the room. I don’t want to expose anyone who’s deviating from the majority though. Here’s an easy way to do that.",
    //thumbnail: "https://ymmv.craftswerk.io/assets/ftct-no-photos-bitte.jpg",
  };

  let div;
  beforeEach(() => {
    div = document.createElement("div");
    renderIntoDiv(article, div);
  });

  it("should render the author", () => {
    expect(
      div.querySelector("[itemscope=author][itemprop=name]").innerHTML
    ).toEqual("Raimo");
  });

  it("should contain the summary", () => {
    expect(div.querySelector("[itemprop=abstract]").innerHTML).toEqual(
      article.summary
    );
  });

  it("should contain the date, formatted", () => {
    expect(div.querySelector("time[itemprop=datePublished]").innerHTML).toEqual(
      new Date(article.published).toLocaleDateString()
    );
  });

  it("should contain the author image", () => {
    expect(
      div.querySelector("img[itemscope=author][itemprop=image]").src
    ).toMatch(article.author_image);
  });

  it("should contain the title", () => {
    expect(
      div.querySelector("[itemscope=''][itemprop=name]").innerHTML
    ).toEqual(article.title);
  });

  it("should contain the link to the activity", () => {
    expect(div.querySelector("a[itemprop=url]").href).toEqual(article.link);
  });

  it("should prefix the title with the source", () => {
    expect(
      div.querySelector("[itemscope=''][itemprop=name]").parentNode.innerHTML
    ).toMatch(article.source);
  });

  it("should indicate what kind of activity it is", () => {
    const indicator = div
      .querySelector("[itemscope=''][itemprop=name]")
      .parentNode.querySelector(".indicator");

    expect(indicator.getAttribute("alt")).toEqual(article.type);
    expect(indicator.innerHTML).toEqual("📖");
  });
});
