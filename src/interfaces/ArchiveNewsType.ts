import NewsInterface from "./NewsInterface";

type ArchiveNewsType = (
  newsId: string,
  archiveDate: any,
  setAllNews: (news: NewsInterface[]) => void,
  allNews: NewsInterface[]
) => void;

export default ArchiveNewsType;
