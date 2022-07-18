import NewsInterface from "../../interfaces/NewsInterface";
import NewsButton from "./newsButton/NewsButton";
import NewsDate from "./newsDate/NewsDate";
import NewsDescription from "./newsDescription/NewsDescription";
import NewsTitle from "./newsTitle/NewsTitle";
interface NewsCardProps {
  newsData: NewsInterface;
}
const NewsCard = ({
  newsData: { date, title, description },
}: NewsCardProps) => {
  return (
    <li className="bg-primaryContrast text-primaryContrastText p-5 rounded-lg list-none mb-8">
      <NewsDate text={date} />
      <NewsTitle text={title} />
      <NewsDescription text={description} />
      <div
        className="flex justify-end pr-5 pt-2
      "
      >
        <NewsButton
          text="Archive"
          action={() => {
            console.log("Hi bro");
          }}
        />
      </div>
    </li>
  );
};

export default NewsCard;
