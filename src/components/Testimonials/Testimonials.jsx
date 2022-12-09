import "./testimonials.scss";
import New from "../News/New";
import axios from "axios";
import { useState, useEffect } from "react";
const Testimonials = () => {
  const [news, setnews] = useState([]);
  useEffect(() => {
    const getnews = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a460bb3c728e4234b844d5aab718e8e3"
      );
      setnews(res.data.articles);
      console.log(res);
    };
    getnews();
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <h1>Text news</h1>
      <div className="testimonials__list">
        {news.map((item, idx) => {
          return (
            <New
              title={item.title}
              description={item.description}
              url={item.url}
              urlToImage={item.urlToImage}
              key={idx}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Testimonials;
