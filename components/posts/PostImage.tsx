import React from "react";
import { IPostFeaturedImage } from "../../domains/Posts";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function PostImage({ featuredImage }: { featuredImage: IPostFeaturedImage; }) {
  if (featuredImage.url) {

    return <LazyLoadImage src={process.env.NEXT_PUBLIC_API_HOST + featuredImage.url} />;
  }
  return <LazyLoadImage src="/assets/img/single-blog/post-thum.jpg" />;

}
