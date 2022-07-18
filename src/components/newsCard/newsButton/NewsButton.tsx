interface NewsButtonProps {
  text: string;
  action: () => void;
  isDeleteButton?: boolean;
}
const NewsButton = ({ text, action, isDeleteButton }: NewsButtonProps) => {
  return (
    <button
      onClick={() => {
        action();
      }}
      className={
        isDeleteButton
          ? " inline  text-deleteText font-semibold rounded-lg bg-archiveBackgroundDark px-5 py-2"
          : "inline"
      }
    >
      {text}
    </button>
  );
};

export default NewsButton;
