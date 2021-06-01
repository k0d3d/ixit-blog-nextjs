export interface IPosts extends QueryResult {
  content: string;
  featuredImage: {
    url: string
    height: number
    width: number
  };
  title: string;
  category: IPostsCategory;
  created_at: string;
  id: number;
  published_at: string;
  updated_at: string;
  author: PostAuthor;
  subTitle: string;
}

export interface IPostsCategory {
  id: number;
  name: string;
  published_at: string;
  updated_at: string;
  created_at: string;
}

interface QueryResult {
  nextCursor: unknown;
  prevCursor: unknown;
}

export interface PostAuthor {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: string;
  blocked: string;
  role: string;
  displayName: string;
  firstName: string;
  lastName: string;
  created_at: string;
  updated_at: string;
}
