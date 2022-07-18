import { useEffect, useState } from "react";
import NewsInterface from "../../interfaces/NewsInterface";
import NewsCard from "../newsCard/NewsCard";
import SectionButton from "./sectionButton/SectionButton";
import SectionTitle from "./sectionTitle/SectionTitle";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const NewsListSection = () => {
  const [news, setNews] = useState<NewsInterface[]>([]);
  useEffect(() => {
    axios.get((apiUrl + "/news") as string).then((res) => {
      setNews(res.data);
    });
  }, []);
  return (
    <article className="p-6 ">
      <SectionTitle text="Look at our latest news" />
      <SectionButton
        action={() => {
          console.log("elpepe");
        }}
      />
      {news.map((news) => (
        <NewsCard newsData={news} key={news._id} />
      ))}
    </article>
  );
};

export default NewsListSection;
