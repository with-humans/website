const { fetchFeeds } = require("./");
const { parseYmmv, parseCtoCoffeePodcast } = require("./parsers");

describe("FeedParser", () => {
  beforeAll(() => {
    window.fetch = global.fetch = async (url) => ({
      text: async () => {
        if (url === "https://ymmv.craftswerk.io/feed.xml") {
          return ymmv;
        }
        if (url === "https://cto.coffee/feed.xml") {
          return ctocoffeepodcast;
        }
        throw new Error("Unknown URL: " + url);
      },
    });
  });

  const ctocoffeepodcast = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xml:lang="en">
  <channel>
    <atom:link href="https://cto.coffee/feed.xml" rel="self" type="application/rss+xml" />
    <title>cto.coffee - Let's talk people &amp; tech</title>
    <description>cto.coffee is a podcast and blog about people in technology. It features short conversations where we talk about the people side of technology and developing software.</description>
    <link>https://cto.coffee</link>
    <language>en</language>
    <managingEditor>benjamin@cto.coffee (Benjamin Reitzammer)</managingEditor>
    <webMaster>benjamin@cto.coffee (Benjamin Reitzammer)</webMaster>
    <copyright>&#x2117; &amp; &#xA9; 2017-2020</copyright>
    <pubDate>Thu, 30 Apr 2020 07:15:26 +0000</pubDate>
    <lastBuildDate>Thu, 30 Apr 2020 07:15:26 +0000</lastBuildDate>
    <image>
      <link>https://cto.coffee</link>
      <url>https://cto.coffee/static/img/itunes.png</url>
      <title>cto.coffee - Let's talk people &amp; tech</title>
    </image>
    <itunes:author>Benjamin Reitzammer</itunes:author>
    <itunes:summary>cto.coffee is a podcast and blog about people in technology. It features short conversations where we talk about the people side of technology and developing software.</itunes:summary>
    <itunes:subtitle>The podcast &amp; blog for people in tech who care about people.</itunes:subtitle>
    <itunes:keywords>technology,cto,leadership,management,people,techlead,agile,softwaredevelopment</itunes:keywords>
    <itunes:owner>
      <itunes:name>Benjamin Reitzammer</itunes:name>
      <itunes:email>benjamin@cto.coffee</itunes:email>
    </itunes:owner>
    <itunes:image href="https://cto.coffee/static/img/itunes.png" />
    <itunes:category text="Technology">
      <itunes:category text="Podcasting" />
    </itunes:category>
    <itunes:explicit>yes</itunes:explicit>
    
      <item>
        <title>Episode 12 - About Inclusive Events with Joanna and Beren</title>
        <link>https://cto.coffee/episodes/ep12-inclusive-events-with-joanna-and-beren/</link>
        <pubDate>Thu, 23 Apr 2020 00:00:00 +0000</pubDate>
        <description>In this episode I spoke with Joanna Moćko-Łazarewicz and Beren Van Daele, from Isle of IT, a human centric company rooted in the testing community in Europe and the organizers of the ITMatters conference series.</description>
        <guid isPermaLink="true">https://cto.coffee/episodes/ep12-inclusive-events-with-joanna-and-beren/</guid>
        <enclosure url="http://files.cto.coffee/ep12-inclusive-events-with-joanna-and-beren/cto.coffee-ep12-inclusive-events-with-joanna-and-beren.mp3" length="66583093" type="audio/mp3"/>
        <itunes:author>Benjamin Reitzammer</itunes:author>
        <itunes:subtitle>cto.coffee - Let's talk people &amp; tech: Episode 12 - About Inclusive Events with Joanna and Beren</itunes:subtitle>
        <itunes:summary>In this episode I spoke with Joanna Moćko-Łazarewicz and Beren Van Daele, from Isle of IT, a human centric company rooted in the testing community in Europe and the organizers of the ITMatters conference series.</itunes:summary>
        <itunes:duration>46:12</itunes:duration>
        <itunes:keywords>technology,cto,events,eventorganizing,diversity,inclusion,coronavirus,covid19</itunes:keywords>
        <itunes:image href="https://cto.coffee/images/itunes.png" />
        <itunes:explicit>no</itunes:explicit>
        <itunes:block>no</itunes:block>
      </item>
		</channel>
	</rss>
`;

  const ymmv = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <generator uri="https://jekyllrb.com/" version="4.0.0">Jekyll</generator>
    <link href="https://ymmv.craftswerk.io/feed.xml" rel="self" type="application/atom+xml" />
    <link href="https://ymmv.craftswerk.io/" rel="alternate" type="text/html" />
    <updated>2020-02-25T13:29:00+00:00</updated>
    <id>https://ymmv.craftswerk.io/feed.xml</id>
    <title type="html">YMMV</title>
    <subtitle></subtitle>
    <author>
        <name>Raimo Radczewski</name>
    </author>
    <entry>
        <title type="html">From The Community Toolbox: No Photos, Bitte.</title>
        <link href="https://ymmv.craftswerk.io/2020/02/ftct-no-photos-bitte" rel="alternate" type="text/html" title="From The Community Toolbox: No Photos, Bitte." />
        <published>2020-04-25T00:00:00+00:00</published>
        <updated>2020-04-25T00:00:00+00:00</updated>
        <id>https://ymmv.craftswerk.io/2020/02/ftct-no-photos-bitte</id>
        <content type="html" xml:base="https://ymmv.craftswerk.io/2020/02/ftct-no-photos-bitte">
        </content>
        <author>
            <name>Raimo Radczewski</name>
        </author>
        <category term="From The Community Toolbox" />
        <summary type="html">There’s two things I make sure to bring attention to at the start of an event: the photo policy and the common language in the room. I don’t want to expose anyone who’s deviating from the majority though. Here’s an easy way to do that.</summary>
        <media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="https://ymmv.craftswerk.io/assets/ftct-no-photos-bitte.jpg" />
        <media:content medium="image" url="https://ymmv.craftswerk.io/assets/ftct-no-photos-bitte.jpg" 
            xmlns:media="http://search.yahoo.com/mrss/" />
    </entry>
    <entry>
        <title type="html">Something With HTML in it</title>
        <link href="https://ymmv.craftswerk.io/2020/02/ftct-no-photos-bitte" rel="alternate" type="text/html" title="From The Community Toolbox: No Photos, Bitte." />
        <published>2020-04-22T00:00:00+00:00</published>
        <updated>2020-04-22T00:00:00+00:00</updated>
        <id>https://ymmv.craftswerk.io/2020/02/ftct-no-photos-bitte</id>
        <content type="html" xml:base="https://ymmv.craftswerk.io/2020/02/ftct-no-photos-bitte">
        </content>
        <author>
            <name>Raimo Radczewski</name>
        </author>
        <summary type="html">&lt;p&gt;WrappedInP (&lt;span&gt;andInSpan&lt;/span&gt;)&lt;/p&gt;</summary>
    </entry>
</feed>
`;

  describe("retrieving them and putting them in order", () => {
    it("should sort incoming feeds by .published", async () => {
      const articles = await fetchFeeds([
        { feed: "https://ymmv.craftswerk.io/feed.xml", parser: parseYmmv },
        { feed: "https://cto.coffee/feed.xml", parser: parseCtoCoffeePodcast },
      ]);

      let previousDate = new Date().getTime();

      for (let article of articles) {
        expect(previousDate).toBeGreaterThan(
          new Date(article.published).getTime()
        );
        previousDate = new Date(article.published).getTime();
      }
    });
  });

  describe("YMMV parser", () => {
    let articles;
    beforeEach(async () => {
      articles = await fetchFeeds([
        { feed: "https://ymmv.craftswerk.io/feed.xml", parser: parseYmmv },
      ]);
    });

    it("should add hardcoded informations", () => {
      for (let article of articles) {
        expect(article.author).toEqual("Raimo");
        expect(article.author_image).toEqual("/img/humans/raimo_square.jpg");
        expect(article.source).toEqual("YMMV");
        expect(article.type).toEqual("blogpost");
      }
    });

    it("should map article values", () => {
      const firstArticle = articles[0];

      expect(firstArticle.title).toEqual(
        "From The Community Toolbox: No Photos, Bitte."
      );
      expect(firstArticle.link).toEqual(
        "https://ymmv.craftswerk.io/2020/02/ftct-no-photos-bitte"
      );
      expect(firstArticle.summary).toEqual(
        `There’s two things I make sure to bring attention to at the start of an event: the photo policy and the common language in the room. I don’t want to expose anyone who’s deviating from the majority though. Here’s an easy way to do that.`
      );
    });

    it("should strip HTML if a node's values is HTML", () => {
      const secondArticle = articles[1];

      expect(secondArticle.summary).toEqual(
        `WrappedInP (andInSpan)`
      );
    });
  });
});
