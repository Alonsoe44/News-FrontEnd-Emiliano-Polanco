interface SectionTitleProps {
  archiveView: boolean;
}
function SectionTitle({ archiveView }: SectionTitleProps) {
  return (
    <h2 className="text-6xl font-semibold mt-4 sm:top-0 sm:mb-6">
      {archiveView ? "The archived news" : "Look at our latest news"}
    </h2>
  );
}

export default SectionTitle;
