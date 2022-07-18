interface NewsTitleProps {
  text: string;
}
const NewsTitle = ({ text }: NewsTitleProps) => {
  return <h3 className="font-semibold">{text}</h3>;
};

export default NewsTitle;
