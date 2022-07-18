interface NewsButtonProps {
  text: string;
  action: () => void;
}
const NewsButton = ({ text, action }: NewsButtonProps) => {
  return (
    <button
      onClick={() => {
        action();
      }}
    >
      {text}
    </button>
  );
};

export default NewsButton;
