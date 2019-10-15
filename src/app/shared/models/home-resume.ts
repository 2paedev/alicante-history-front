import { Tag } from './tag';

export interface ArticleResumeData {
  id: string;
  title: string;
  tags: string[];
  publicationImage: string;
  publicationDate: string;
  // img: string;
  // content: string;
  // likesNumber: number;
}

export interface ArticleResume {
  id: string;
  title: string;
  tags: Tag[];
  data: ArticleResumeData[];
}

export interface HomeResume {
  list: ArticleResume[];
}
