import { FaArchive } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";
interface SectionButtonProps {
  action: () => void;
  archiveView: boolean;
}
const SectionButton = ({ action, archiveView }: SectionButtonProps) => {
  return (
    <button
      onClick={() => {
        action();
      }}
      className="inline my-5 text-SecondaryText"
    >
      {archiveView ? (
        <>
          <IoMdReturnLeft className="text-3xl inline" />
        </>
      ) : (
        <>
          <FaArchive className="inline mr-1 text-sm mb-1 text-SecondaryText" />
          Archived
        </>
      )}
    </button>
  );
};

export default SectionButton;
