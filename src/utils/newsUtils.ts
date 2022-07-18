import axios from "axios";
import ArchiveNewsType from "../interfaces/ArchiveNewsType";
import DeleteNewsType from "../interfaces/DeleteNewsType";
import NewsInterface from "../interfaces/NewsInterface";

const apiUrl = process.env.REACT_APP_API_URL;

const archiveNews: ArchiveNewsType = (
  newsId,
  archiveDate,
  setAllNews,
  allNews
) => {
  console.log(archiveDate);
  axios.patch(`${apiUrl}/news/${newsId}`, archiveDate).then((res: any) => {
    console.log(res);
    setAllNews(allNews.map((news) => (news._id === newsId ? res.data : news)));
  });
};

const deleteNews: DeleteNewsType = (newsId, setAllNews, news) => {
  axios.delete(`${apiUrl}/news/${newsId}`).then(() => {
    setAllNews(news.filter((news) => news._id !== newsId));
  });
};

const fetchNews = (setAllNews: (news: NewsInterface[]) => void) => {
  axios.get((apiUrl + "/news") as string).then((res) => {
    setAllNews(res.data);
  });
};

export { archiveNews, deleteNews, fetchNews };
