import React from "react";
import useInfinitePosts from "../../hooks/useInfinitePosts";
import { PostExcerpt } from "./PostExcerpt";

function AdSpace() {
  return (
    <div
      className="pro-add"
      style={{
        backgroundImage: "url(assets/img/sidebar-img/promotion-add.jpg)",
      }}
    >
      <button className="btn btn-white btn-radious-6">Promotional Ad</button>
      <img src="assets/img/svg/circle-shape.svg" />
    </div>
  );
}

function TermsList() {
  return (
    <div className="categories-area">
      <h4>Categories</h4>
      <ul>
        <li>
          <a href="#">Technology</a>
        </li>
        <li>
          <a href="#">Traveling</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">Lifestyle</a>
        </li>
      </ul>
    </div>
  );
}

export default function PostArchive() {
  const { status, data: postPages, error, isFetching } = useInfinitePosts();

  return (
    <div className="single-blog-full-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-100 mb-md-50">
            {postPages &&
              postPages.pages.map((posts, index) => (
                <React.Fragment key={index}>
                  {Object.values(posts).map((post) => (
                    <PostExcerpt {...post} />
                  ))}
                </React.Fragment>
              ))}
          </div>
          <div className="col-lg-3 offset-md-1 mb-50">
            <div className="side-bar-wrapper">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-5">
                  <TermsList></TermsList>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-7">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
