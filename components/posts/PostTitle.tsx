import Link from "next/link";
import React from "react";
import { IPosts } from "../../domains/Posts";
import { SocialShare } from "../SocialShare";
import Moment from "react-moment";

export const PostTitle = ({
  category,
  title,
  subTitle,
  author,
  published_at,
  postSlug,
  id
}: IPosts) => (
  <div className="single-blog-banner-wrapper">
    <h5>{category.name}</h5>
    <h1>
      <Link
        href={{
          pathname: "posts/[post-slug]",
          query: { "post-slug": postSlug, id },
        }}
      >
        {title}
      </Link>
    </h1>
    {subTitle && <p>{subTitle}</p>}
    <div className="single-blog-social d-flex align-items-center justify-content-between">
      <p>
        <Moment format="YYYY/MM/DD">{published_at}</Moment>. X min read . Written by{" "}
        {author.displayName}
      </p>
      <SocialShare url="" />
    </div>
  </div>
);
