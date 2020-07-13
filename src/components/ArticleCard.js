import React from "react";
import { removeWidows } from "string-remove-widows";
import { parse } from "psl";
import fallback from "../images/fallback.png";

var probe = require("probe-image-size");

function makeMarkup(string) {
  return {
    __html: string,
  };
}

function preventFavicon(url) {
  if (url.indexOf("favicon") > 1) {
    return fallback;
  } else {
    return url;
  }
}

function ArticleCard({ article }) {
  return (
    <a className="card" href={article.article.url} target="_blank" rel="noopener noreferrer">
      <div className="cardImageParent">
        <div
          className="cardImage"
          style={{
            backgroundImage: `url('${
              article.article.top_image ? preventFavicon(article.article.top_image) : fallback
            }')`,
          }}
        ></div>
      </div>
      <div className="cardInfo">
        <div className="tags">
          <span className="category">{parse(article.article.source_url.replace("https://", "")).sld}</span>
          <span className="score positive">
            <span className="emoji" role="img" aria-label="Smile">
              😄
            </span>
            {article.article.positive}
          </span>
          <span className="score neutral">
            <span className="emoji" role="img" aria-label="Neutral">
              😐
            </span>
            {article.article.neutral}
          </span>
          <span className="score negative">
            <span className="emoji" role="img" aria-label="Sad">
              😔
            </span>
            {article.article.negative}
          </span>
        </div>
        <h3 dangerouslySetInnerHTML={makeMarkup(removeWidows(article.article.title).res)}></h3>
        <p dangerouslySetInnerHTML={makeMarkup(removeWidows(article.article.summary.replace("↵", "")).res)}></p>
      </div>
    </a>
  );
}

export default ArticleCard;
