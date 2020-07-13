import React from "react";
import axios from "axios";
import { LocalStorage } from "ttl-localstorage";

//News Card
import ArticleCard from "./ArticleCard";

const urls = [];

class TopStories extends React.Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    LocalStorage.get("articles").then((data) => {
      if (data) {
        this.setState({ articles: data, loading: false });
      } else {
        axios
          .get("http://127.0.0.1:8000/v0/goodvibes/")
          .then(async (res) => {
            //console.log(res.data);
            res.data.map((item) => {
              urls.push(item);
            });
            const articles = urls.filter((item) => item.status === "ok");
            this.setState({
              loading: true,
              articles: [],
            });
            console.log("Reset State", this.state.articles);
            this.setState({ articles: articles });
            console.log("After Reset State", this.state.articles);
          })
          .then(() => {
            this.setState({ loading: false });
            LocalStorage.put("articles", this.state.articles, 43200);
            // console.log(this.state.articles);
          });
      }
    });
  }

  render() {
    return (
      <div className={`container`}>
        <h1>Top Stories</h1>
        <h3>
          <span className="articles">{this.state.articles.length}</span> Articles from this week's top trending news.
        </h3>
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
