import React from "react";
import { IPostFeaturedImage } from "../../domains/Posts";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function PostImage({
  featuredImage,
  dimension =  { width: 784, height: 382 },
}: {
  featuredImage: IPostFeaturedImage;
  dimension?: { width: number; height: number };
}) {
  if (featuredImage.url) {
    return (
      <LazyLoadImage
        width={dimension.width}
        height={dimension.height}
        src={process.env.NEXT_PUBLIC_API_HOST + featuredImage.url}
        {...dimension}
      />
    );
  }
  return <LazyLoadImage src="/assets/img/single-blog/post-thum.jpg" />;
}
