import React from "react";
import { IPosts } from "../../domains/Posts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PostTitle } from "./PostTitle";

export function PostExcerpt(post: IPosts) {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <PostTitle {...post} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="post-thumb">
            {post.featuredImage ? (
              // @todo use cdn
            <LazyLoadImage src={process.env.NEXT_PUBLIC_API_HOST + post.featuredImage.url} />
            ) : (
              <LazyLoadImage src="/assets/img/single-blog/post-thum.jpg" />
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="post-full-content">{post.content}</div>
        </div>
      </div>
    </>
  );
}
