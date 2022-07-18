import NewsInterface from "../../interfaces/NewsInterface";
import NewsButton from "./newsButton/NewsButton";
import NewsDate from "./newsDate/NewsDate";
import NewsDescription from "./newsDescription/NewsDescription";
import NewsTitle from "./newsTitle/NewsTitle";
interface NewsCardProps {
  newsData: NewsInterface;
  archiveNews: () => void;
  deleteNews: () => void;
}

const NewsCard = ({
  newsData: { date, title, description, archiveDate },
  archiveNews,
  deleteNews,
}: NewsCardProps) => {
  return (
    <li
      className={`text-primaryContrastText p-5 rounded-lg list-none mb-8 ${
        archiveDate ? "bg-archiveBackground" : "bg-primaryContrast"
      }`}
    >
      <NewsDate text={date} />
      <NewsTitle text={title} />
      <NewsDescription text={description} />
      <div
        className="flex justify-end pr-5 pt-2
      "
      >
        <NewsButton
          text={archiveDate ? "Delete" : "Archive"}
          action={() => {
            archiveDate ? deleteNews() : archiveNews();
          }}
          isDeleteButton={archiveDate ? true : false}
        />
      </div>
    </li>
  );
};

export default NewsCard;
