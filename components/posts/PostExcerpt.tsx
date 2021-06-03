import React from "react";
import { IPosts } from "../../domains/Posts";
import { PostTitle } from "./PostTitle";
import { PostImage } from "./PostImage";


export function PostExcerpt(post: IPosts) {
  return (
    <>
    <div className="row">
        <div className="col-12">
          <div className="post-thumb">
            <PostImage featuredImage={post.featuredImage} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PostTitle {...post} />
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
