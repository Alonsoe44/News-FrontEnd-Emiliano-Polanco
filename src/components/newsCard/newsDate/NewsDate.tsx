interface NewsDateProps {
  text: string;
}
const NewsDate = ({ text }: NewsDateProps) => {
  return <time className="text-sm">{text}</time>;
};

export default NewsDate;
