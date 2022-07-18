interface NewsDateProps {
  text: string;
}
const NewsDate = ({ text }: NewsDateProps) => {
  return <time className="">{text}</time>;
};

export default NewsDate;
