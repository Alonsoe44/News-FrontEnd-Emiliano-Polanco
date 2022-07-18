interface NewsDescriptionProps {
  text: string;
}
const NewsDescription = ({ text }: NewsDescriptionProps) => {
  return <p className="text-primaryContrastTextLight mt-[1px]">{text}</p>;
};

export default NewsDescription;
