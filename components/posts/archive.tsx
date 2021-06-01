import React from "react";
import useInfinitePosts from "../../hooks/useInfinitePosts";
import { PostExcerpt } from "./PostExcerpt";

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
          <div className="col-lg-4 mb-50">
            <div className="side-bar-wrapper">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-7">
                  <div className="latest-post">
                    <h4>Latest Post</h4>
                    <div className="latest-single-post">
                      <div className="latest-single-img">
                        <img src="assets/img/sidebar-img/post-img1.png" />
                      </div>
                      <div className="latest-single-content">
                        <div className="latext-scontent-title">
                          <h5>Technology</h5>
                          <span>Apr 30, 2019</span>
                        </div>
                        <div className="latext-scontent">
                          <h4>
                            <a href="#">
                              Video games playing lorem ipsum dolor . . .
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="latest-single-post">
                      <div className="latest-single-img">
                        <img src="assets/img/sidebar-img/post-img2.png" />
                      </div>
                      <div className="latest-single-content">
                        <div className="latext-scontent-title">
                          <h5>Travel</h5>
                          <span>Apr 30, 2019</span>
                        </div>
                        <div className="latext-scontent">
                          <h4>
                            <a href="#">
                              Travel lorem sit dolor is with imagination . . .
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="latest-single-post">
                      <div className="latest-single-img">
                        <img src="assets/img/sidebar-img/post-img3.png" />
                      </div>
                      <div className="latest-single-content">
                        <div className="latext-scontent-title">
                          <h5>Food</h5>
                          <span>Apr 30, 2019</span>
                        </div>
                        <div className="latext-scontent">
                          <h4>
                            <a href="#">
                              Fresh food give heh body with imagination . . .
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="latest-single-post">
                      <div className="latest-single-img">
                        <img src="assets/img/sidebar-img/post-img2.png" />
                      </div>
                      <div className="latest-single-content">
                        <div className="latext-scontent-title">
                          <h5>Lifestyle</h5>
                          <span>Apr 30, 2019</span>
                        </div>
                        <div className="latext-scontent">
                          <h4>
                            <a href="#">
                              Fashion mind lifestyle is amet good life lorem
                              ipsum . . .
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pro-add"
                    style={{
                      backgroundImage:
                        "url(assets/img/sidebar-img/promotion-add.jpg)",
                    }}
                  >
                    <button className="btn btn-white btn-radious-6">
                      Promotional Ad
                    </button>
                    <img src="assets/img/svg/circle-shape.svg" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-5">
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
                  <div className="instagram-area">
                    <h4>Instagram</h4>
                    <div className="instra-wrap">
                      <ul>
                        <li>
                          <img src="assets/img/sidebar-img/instra1.png" />
                        </li>
                        <li>
                          <img src="assets/img/sidebar-img/instra2.png" />
                        </li>
                        <li>
                          <img src="assets/img/sidebar-img/instra3.png" />
                        </li>
                        <li>
                          <img src="assets/img/sidebar-img/instra4.png" />
                        </li>
                        <li>
                          <img src="assets/img/sidebar-img/instra5.png" />
                        </li>
                        <li>
                          <img src="assets/img/sidebar-img/instra6.png" />
                        </li>
                      </ul>
                      <a href="#" className="btn btn-orange">
                        <img src="assets/img/svg/instra.svg" />
                        instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
