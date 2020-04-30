const renderIntoDiv = (article, div) => {
  const typeEmoji = ({
    "blogpost": "📖",
    "podcast": "🎧"
  })[article.type]


  div.innerHTML = `
        <div class="row pb-3 px-md-6 px-3" itemtype="https://schema.org/CreativeWork">
          <div class="col-md-3">
            <p class="font-serif font-italic d-md-block d-inline"><time itemprop="datePublished" datetime="${article.published}">${new Date(article.published).toLocaleDateString()}</p>
            <span class="d-md-none">-</span>
            <div class="d-inline-block d-md-block text-md-center">
              <img class="d-none d-md-inline w-50 rounded-circle fade-to-gray" itemscope="author" itemprop="image" src="${article.author_image}">
              <p class="font-weight-light"><span itemprop="name" itemscope="author">${article.author}</span></p>
            </div>
          </div>
          <div class="col-md-9">
            <p>
              <a itemscope itemprop="url" href="${article.link}">
                  <span class="indicator" alt="${article.type}">${typeEmoji}</span> ${article.source} - <span itemscope itemprop="name">${article.title}</span></a>
            </p>
            <p itemprop="abstract">${article.summary}</p>
          </div>
        </div>
  `;


}

module.exports = { renderIntoDiv };
