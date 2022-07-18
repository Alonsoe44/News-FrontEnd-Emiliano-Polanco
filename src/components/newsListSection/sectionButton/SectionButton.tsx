import { FaArchive } from "react-icons/fa";
interface SectionButtonProps {
  action: () => void;
}
const SectionButton = ({ action }: SectionButtonProps) => {
  return (
    <button
      onClick={() => {
        action();
      }}
      className="inline my-5 text-SecondaryText"
    >
      <FaArchive className="inline mr-1 text-sm mb-1 text-SecondaryText" />{" "}
      Archived
    </button>
  );
};

export default SectionButton;
