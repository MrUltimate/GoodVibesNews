import React from "react";
import { removeWidows, defaultOpts, version } from "string-remove-widows";

function makeMarkup(string) {
  return {
    __html: string,
  };
}

function ArticleCard({ article, index }) {
  return (
    <a className="card" href={article.url} target="_blank" rel="noopener noreferrer">
      <div className="cardImageParent">
        <div
          className="cardImage"
          style={{
            backgroundImage: `url('${article.multimedia[0].url}')`,
          }}
        ></div>
      </div>
      <div className="cardInfo">
        <div className="tags">
          <span className="category">{article.section}</span>
          <span className="score positive">Positive: {article.positive}</span>
          <span className="score neutral">Neutral: {article.neutral}</span>
          <span className="score negative">Negative: {article.negative}</span>
        </div>
        <h1 dangerouslySetInnerHTML={makeMarkup(removeWidows(article.title).res)}></h1>
        <p dangerouslySetInnerHTML={makeMarkup(removeWidows(article.abstract).res)}></p>
      </div>
    </a>
  );
}

export default ArticleCard;
