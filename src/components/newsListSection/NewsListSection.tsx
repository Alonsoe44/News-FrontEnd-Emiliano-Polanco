import { useEffect, useState } from "react";
import NewsInterface from "../../interfaces/NewsInterface";
import { archiveNews, deleteNews, fetchNews } from "../../utils/newsUtils";
import NewsCard from "../newsCard/NewsCard";
import SectionButton from "./sectionButton/SectionButton";
import SectionTitle from "./sectionTitle/SectionTitle";

const NewsListSection = () => {
  const [allNews, setAllNews] = useState<NewsInterface[]>([]);
  const [archiveView, setArchiveView] = useState(false);

  useEffect(() => {
    fetchNews(setAllNews);
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
          <NewsCard
            newsData={news}
            key={news._id + (news.archiveDate as string)}
            archiveNews={() =>
              archiveNews(
                news._id as string,
                { archiveDate: new Date().toString() },
                setAllNews,
                allNews
              )
            }
            deleteNews={() =>
              deleteNews(news._id as string, setAllNews, allNews)
            }
          />
        ))}
    </article>
  );
};

export default NewsListSection;
