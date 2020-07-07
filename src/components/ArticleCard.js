import React from "react";

function ArticleCard({ article, index }) {
  return (
    <a className="card" href={article.short_url} target="_blank" rel="noopener noreferrer">
      <div
        className="cardImage"
        style={{
          backgroundImage: `url('${article.multimedia[0].url}')`,
        }}
      ></div>
      <div className="cardInfo">
        <div className="tags">
          <span className="category">{article.section}</span>
          <span className="score">Confidence: {article.score}</span>
        </div>
        <h1>{article.title}</h1>
        <p>{article.abstract}</p>
      </div>
    </a>
  );
}

export default ArticleCard;
