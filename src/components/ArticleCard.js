import React from "react";
import { removeWidows } from "string-remove-widows";
import { parse } from "psl";

function makeMarkup(string) {
  return {
    __html: string,
  };
}

function ArticleCard({ article }) {
  console.log(article.article.source_url);
  console.log(parse(article.article.source_url));
  return (
    <a className="card" href={article.article.url} target="_blank" rel="noopener noreferrer">
      <div className="cardImageParent">
        <div
          className="cardImage"
          style={{
            backgroundImage: `url('${article.article.top_image}')`,
          }}
        ></div>
      </div>
      <div className="cardInfo">
        <div className="tags">
          <span className="category">{parse(article.article.source_url).sld}</span>
          <span className="score positive">😄 {article.article.positive}</span>
          <span className="score neutral">😐 {article.article.neutral}</span>
          <span className="score negative">☹️ {article.article.negative}</span>
        </div>
        <h1 dangerouslySetInnerHTML={makeMarkup(removeWidows(article.article.title).res)}></h1>
        <p dangerouslySetInnerHTML={makeMarkup(removeWidows(article.article.summary.replace("↵", "")).res)}></p>
      </div>
    </a>
  );
}

export default ArticleCard;
