import Link from "next/link";
import React from "react";
import { IPosts } from "../../domains/Posts";
import { SocialShare } from "../SocialShare";
import Moment from "react-moment";
import { useRouter } from "next/router";

export const PostTitle = ({
  category,
  title,
  subTitle,
  author,
  published_at,
  postSlug,
  id,
}: IPosts) => {
  const {query} = useRouter()

  const currentPageSlug = query['post-slug']
  const currentPageId = Number(query.id)

  return (
    <div className="single-blog-banner-wrapper">
      <h5>{category.name}</h5>
      <h1 className="post-title">
      {
        currentPageId != id && currentPageSlug != postSlug 
        ?
        <Link
          href={{
            pathname: "posts/[post-slug]",
            query: { "post-slug": postSlug, id },
          }}
        >
          {title}
        </Link>
        :
        <>{title}</>
      }
      </h1>
      {subTitle && <p className="post-subtitle">{subTitle}</p>}
      <div className="single-blog-social d-flex align-items-center justify-content-between">
        <p>
          <Moment format="YYYY/MM/DD">{published_at}</Moment>. X min read .
          Written by {author.displayName}
        </p>
        <SocialShare url="" />
      </div>
    </div>
  );
};
