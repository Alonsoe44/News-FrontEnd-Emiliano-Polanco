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
    <div>
      <NewsDate text={date} />
      <NewsTitle text={title} />
      <NewsDescription text={description} />
      <NewsButton
        text="Archive"
        action={() => {
          console.log("Hi bro");
        }}
      />
    </div>
  );
};

export default NewsCard;
