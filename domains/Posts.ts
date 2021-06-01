export interface IPosts extends IQueryResult {
  content: string;
  featuredImage: IPostFeaturedImage
  title: string;
  category: IPostsCategory;
  created_at: string;
  id: number;
  published_at: string;
  updated_at: string;
  author: IPostAuthor;
  subTitle: string;
  postSlug: string
}

export interface IPostsCategory {
  id: number;
  name: string;
  published_at: string;
  updated_at: string;
  created_at: string;
}

interface IQueryResult {
  nextCursor: unknown;
  prevCursor: unknown;
}

export interface IPostAuthor {
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

export interface IPostFeaturedImage {
  url: string
  height: number
  width: number
};