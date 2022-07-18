interface NewsDescriptionProps {
  text: string;
}
const NewsDescription = ({ text }: NewsDescriptionProps) => {
  return <p>{text}</p>;
};

export default NewsDescription;
