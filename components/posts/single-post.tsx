import React from "react";
import { useRouter } from "next/router";

import { IPosts } from "../../domains/Posts";
import usePost from "../../hooks/usePost";
import { PostAuthor } from "./PostAuthor";
import { PostImage } from "./PostImage";
import { PostTitle } from "./PostTitle";
import { PostContent } from "./PostContent";

export default function SinglePost(props) {
  const router = useRouter();
  const { id } = router.query;
  const { status, data: post, error, isFetching } = usePost(id);

  return post ? (
    <div className="single-blog-full-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <PostTitle {...post} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="post-thumb">
              <PostImage featuredImage={post.featuredImage} />
              <a>Featured Stories</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 m-auto">
            <PostContent content={post.content}></PostContent>
          </div>
        </div>
        <PostAuthor />
      </div>
    </div>
  ) : (
    <p>NOthing</p>
  );
}
