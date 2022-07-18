interface SectionTitleProps {
  text: string;
}
function SectionTitle({ text }: SectionTitleProps) {
  return (
    <h2 className="text-6xl font-semibold mt-4 sm:top-0 sm:mb-6">{text}</h2>
  );
}

export default SectionTitle;
