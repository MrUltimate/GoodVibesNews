import React from "react";
import axios from "axios";

//News Card
import ArticleCard from "./ArticleCard";

const articleAbstracts = [];
const positiveArticles = [];

class Business extends React.Component {
  state = {
    frontpageLoading: true,
  };

  async componentDidMount() {
    //Front Page
    axios
      .get(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        console.log(res.data);
        res.data.results.map((item, index) => {
          // console.log(item.title);
          // console.log(sentiment.analyze(item.abstract));
          articleAbstracts.push({
            id: index,
            language: "en",
            text: item.title + item.abstract,
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
                positiveArticles.push({ ...articleAbstracts[index], score: item.documentScores.positive });
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
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <h1>Business</h1>
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

export default Business;
