interface NewsTitleProps {
  text: string;
}
const NewsTitle = ({ text }: NewsTitleProps) => {
  return <h3>{text}</h3>;
};

export default NewsTitle;
