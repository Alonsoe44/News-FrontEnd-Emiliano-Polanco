import NewsInterface from "./NewsInterface";

type DeleteNewsType = (
  newsId: string,
  setAllNews: (news: NewsInterface[]) => void,
  allNews: NewsInterface[]
) => void;

export default DeleteNewsType;
