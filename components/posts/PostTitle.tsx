import React from "react";
import { IPosts } from "../../domains/Posts";
import { SocialShare } from "../SocialShare";

export const PostTitle = ({ category, title, subTitle, author, published_at }: IPosts) => (
  <div className="single-blog-banner-wrapper">
    <h5>{category.name}</h5>
    <h1>{title}</h1>
    <p>
      {subTitle}
    </p>
    <div className="single-blog-social d-flex align-items-center justify-content-between">
      <p>{published_at} . X min read . Written by {author.displayName}</p>
      <SocialShare url="" />
    </div>
  </div>
);
