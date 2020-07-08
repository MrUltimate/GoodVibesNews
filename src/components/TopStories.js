import React from "react";
import axios from "axios";
import { fetchSubreddit } from "fetch-subreddit";

//News Card
import ArticleCard from "./ArticleCard";

const articleAbstracts = [];
const positiveArticles = [];

class TopStories extends React.Component {
  state = {
    frontpageLoading: true,
  };

  async componentDidMount() {
    fetchSubreddit("UpliftingNews").then((res) => console.log(res));

    //Front Page
    axios({
      method: "GET",
      url:
        "https://api.newsriver.io/v2/search?query=language%3AEN%20AND%20website.domainName%3A(%22reuters.com%22%20OR%20%22nytimes.com%22%20OR%20%22cnn.com%22%20OR%20%22washingtonpost.com%22%20OR%20%22bostonglobe.com%22%20OR%20%22bbc.com%22)&sortBy=_score&sortOrder=DESC&limit=100",
      headers: {
        Authorization: "sBBqsGXiYgF0Db5OV5tAwyGwxf2Rb74EcW6O3No_tmYSsGJRhmEyQJRxA_y4dvhXn2pHZrSf1gT2PUujH1YaQA",
      },
      json: true,
    })
      .then((res) => {
        console.log(res.data);
        res.data.map((item, index) => {
          // console.log(item.title);
          // console.log(sentiment.analyze(item.abstract));
          articleAbstracts.push({
            id: index,
            language: "en",
            text: item.title + item.text,
            ...item,
            // title: item.title,
            // abstract: item.abstract,
          });
          // const sentiAnalysis = sentiment.analyze(item.title + item.asbtract, { extras: { Trump: -5 } }).score;
          // if (sentiAnalysis > 0) {
          //   const newItem = {
          //     ...item,
          //     score: sentiAnalysis,
          //   };
          //   frontpage.push(newItem);
          //   // console.log(item.title);
          // }
        });
        axios({
          method: "POST",
          url: "https://microsoft-azure-text-analytics-v1.p.rapidapi.com/sentiment",
          data: {
            documents: articleAbstracts,
          },
          headers: {
            "X-RapidAPI-Host": "microsoft-text-analytics1.p.rapidapi.com",
            "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          },
          json: true,
        })
          .then((res) => {
            console.log(res.data);
            res.data.documents.map((item, index) => {
              if (item.sentiment === "positive") {
                positiveArticles.push({
                  ...articleAbstracts[index],
                  positive: item.documentScores.positive,
                  neutral: item.documentScores.neutral,
                  negative: item.documentScores.negative,
                });
              }
            });
          })
          .then(() => {
            console.log(positiveArticles);
            this.setState({ frontpageLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => {
        //console.log(goodVibes_World.length);
        // this.setState({ frontpageLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className={`container ${positiveArticles.length < 1 && `hide`}`}>
        <h1>Top Stories</h1>
        <h3>Lorem ipsum dolor sit amet.</h3>
        {this.state.frontpageLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="articleGrid">
            {positiveArticles.map((
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
