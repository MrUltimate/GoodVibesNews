import React from "react";
import axios from "axios";
//News Card
import ArticleCard from "./ArticleCard";

var Sentiment = require("sentiment");
var sentiment = new Sentiment();

const urls = [];
// const articles = null;
const azure = [];
const positiveArticles = [];

class TopStories extends React.Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    // fetchSubreddit("UpliftingNews").then((res) => console.log(res));

    //Front Page
    await axios
      .get("http://127.0.0.1:5000/v0/goodvibes")
      .then(async (res) => {
        //console.log(res.data);
        res.data.map((item) => {
          urls.push(item);
        });
        const articles = urls.filter((item) => item.status === "ok");
        this.setState({ articles: articles });
        // articles.map((item, index) => {
        //   var score = sentiment.analyze(item.article.title + item.article.summary);
        //   if (score.score > 0) {
        //     const newItem = {
        //       score: score.score,
        //       ...item,
        //     };
        //     positiveArticles.push(newItem);
        //   }
        // });
      })
      .then(() => {
        // console.log(positiveArticles);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className={`container`}>
        <h1>Top Stories</h1>
        <h3>Lorem ipsum dolor sit amet.</h3>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div className="articleGrid">
            {this.state.articles.map((
              item,
              index // console.log(item.title);
            ) => (
              <ArticleCard key={index} article={item} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TopStories;
