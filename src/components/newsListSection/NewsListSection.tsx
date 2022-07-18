import { useEffect, useState } from "react";
import NewsInterface from "../../interfaces/NewsInterface";
import NewsCard from "../newsCard/NewsCard";
import SectionButton from "./sectionButton/SectionButton";
import SectionTitle from "./sectionTitle/SectionTitle";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const NewsListSection = () => {
  const [allNews, setAllNews] = useState<NewsInterface[]>([]);
  const [archiveView, setArchiveView] = useState(false);

  useEffect(() => {
    axios.get((apiUrl + "/news") as string).then((res) => {
      setAllNews(res.data);
    });
  }, []);

  return (
    <article className="p-6 ">
      <SectionTitle archiveView={archiveView} />
      <SectionButton
        action={() => {
          setArchiveView(!archiveView);
        }}
        archiveView={archiveView}
      />
      {allNews
        .filter((news: NewsInterface) =>
          archiveView ? news.archiveDate : !news.archiveDate
        )
        .map((news) => (
          <NewsCard newsData={news} key={news._id} />
        ))}
    </article>
  );
};

export default NewsListSection;
