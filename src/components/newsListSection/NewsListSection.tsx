import NewsInterface from "../../interfaces/NewsInterface";
import NewsCard from "../newsCard/NewsCard";
import SectionButton from "./sectionButton/SectionButton";
import SectionTitle from "./sectionTitle/SectionTitle";

const myAmazingNew: NewsInterface = {
  title:
    "Here today we bought all the bitcon in the market, Allfunds it's goinc all in with cryptocurrency",
  description:
    "Cryptocurrency may be a good investment if you are willing to accept it is a high risk gamble which could pay off – but also that there is a strong chance you could lose all of your money. Prices of cryptocurrencies including bitcoin have been falling in 2022 amid a worldwide crypto price crash.",
  date: "2020-01-01",
  author: "John Doe",
  content: "Lorem ipsum",
};

const NewsListSection = () => {
  return (
    <article className="h-screen p-6 ">
      <SectionTitle text="Look at our latest news" />
      <SectionButton
        action={() => {
          console.log("elpepe");
        }}
      />
      <NewsCard newsData={myAmazingNew} />
    </article>
  );
};

export default NewsListSection;
