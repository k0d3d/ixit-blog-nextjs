import React from 'react'
import useInfinitePosts from '../../hooks/useInfinitePosts';


function SocialShare() {
  return (<div class="social-icon">
    <ul class="d-flex align-items-center justify-content-between">
      <li><a href=""><img src="assets/img/svg/facebook.svg" alt="" /></a></li>
      <li><a href=""><img src="assets/img/svg/instagram.svg" alt="" /></a></li>
      <li><a href=""><img src="assets/img/svg/twitter.svg" alt="" /></a></li>
      <li><a href=""><img src="assets/img/svg/youtube.svg" alt="" /></a></li>
    </ul>
  </div>);
}


const PostTitle = () => (
  <div class="single-blog-banner-wrapper">
    <h5>Travel</h5>
    <h1>You got to cool that off. and hat's the double-truth</h1>
    <p>Hung that found of the from diesel to the venerable, you what you spare at cleaning in coming was sign introduced attempt, then would was try make brown.</p>
    <div class="single-blog-social d-flex align-items-center justify-content-between">
      <p>29.Nov.2018 . 4 min read . Written by Eiad Basha</p>
      <SocialShare></SocialShare>
    </div>
  </div>
)


function PostExcerpt(post) {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <PostTitle />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="post-thumb">
            <img src="assets/img/single-blog/post-thum.jpg" alt />
            <a href>Featured Stories</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="post-full-content">

          </div>
        </div>
      </div>

    </>
  )
}


export default function PostArchive() {

  const {
    status,
    data: postPages,
    error,
    isFetching,
    isFetchingMore,
    canFetchMore,
    fetchMore,
  } = useInfinitePosts()

  debugger
  return (
    <div className="single-blog-full-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-100 mb-md-50">
            {postPages && postPages.pages.map((post, index) => (
              <React.Fragment key={index}>
                  <PostExcerpt key={post.id}>
                  </PostExcerpt>
                
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
                        <img src="assets/img/sidebar-img/post-img1.png" alt />
                      </div>
                      <div className="latest-single-content">
                        <div className="latext-scontent-title">
                          <h5>Technology</h5>
                          <span>Apr 30, 2019</span>
                        </div>
                        <div className="latext-scontent">
                          <h4><a href="#">Video games playing lorem ipsum dolor . . .</a></h4>
                        </div>
                      </div>
                    </div>
                    <div className="latest-single-post">
                      <div className="latest-single-img">
                        <img src="assets/img/sidebar-img/post-img2.png" alt />
                      </div>
                      <div className="latest-single-content">
                        <div className="latext-scontent-title">
                          <h5>Travel</h5>
                          <span>Apr 30, 2019</span>
                        </div>
                        <div className="latext-scontent">
                          <h4><a href="#">Travel lorem sit dolor is with imagination . . .</a></h4>
                        </div>
                      </div>
                    </div>
                    <div className="latest-single-post">
                      <div className="latest-single-img">
                        <img src="assets/img/sidebar-img/post-img3.png" alt />
                      </div>
                      <div className="latest-single-content">
                        <div className="latext-scontent-title">
                          <h5>Food</h5>
                          <span>Apr 30, 2019</span>
                        </div>
                        <div className="latext-scontent">
                          <h4><a href="#">Fresh food give health body with imagination . . .</a></h4>
                        </div>
                      </div>
                    </div>
                    <div className="latest-single-post">
                      <div className="latest-single-img">
                        <img src="assets/img/sidebar-img/post-img2.png" alt />
                      </div>
                      <div className="latest-single-content">
                        <div className="latext-scontent-title">
                          <h5>Lifestyle</h5>
                          <span>Apr 30, 2019</span>
                        </div>
                        <div className="latext-scontent">
                          <h4><a href="#">Fashion mind lifestyle is amet good life lorem ipsum . . .</a></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-add" style={{ backgroundImage: 'url(assets/img/sidebar-img/promotion-add.jpg)' }}>
                    <button className="btn btn-white btn-radious-6">Promotional Ad</button>
                    <img src="assets/img/svg/circle-shape.svg" alt />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-5">
                  <div className="categories-area">
                    <h4>Categories</h4>
                    <ul>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Traveling</a></li>
                      <li><a href="#">Education</a></li>
                      <li><a href="#">Sports</a></li>
                      <li><a href="#">Food</a></li>
                      <li><a href="#">Lifestyle</a></li>
                    </ul>
                  </div>
                  <div className="instagram-area">
                    <h4>Instagram</h4>
                    <div className="instra-wrap">
                      <ul>
                        <li><img src="assets/img/sidebar-img/instra1.png" alt /></li>
                        <li><img src="assets/img/sidebar-img/instra2.png" alt /></li>
                        <li><img src="assets/img/sidebar-img/instra3.png" alt /></li>
                        <li><img src="assets/img/sidebar-img/instra4.png" alt /></li>
                        <li><img src="assets/img/sidebar-img/instra5.png" alt /></li>
                        <li><img src="assets/img/sidebar-img/instra6.png" alt /></li>
                      </ul>
                      <a href="#" className="btn btn-orange"><img src="assets/img/svg/instra.svg" alt />instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="profile-area">
              <div className="profile-img">
                <img src="assets/img/single-blog/profile-img.jpg" alt />
              </div>
              <div className="blog-profile-content">
                <h3>Eiad Basha</h3>
                <p>Designer News is where the design community meets, apparently. On the platform, you can share and discover interesting content as well as start discussions and upvote good content.</p>
                <h4>Follow me :</h4>
                <div className="social-icon">
                  <ul className="d-flex align-items-center">
                    <li><a href><img src="assets/img/svg/facebook.svg" alt /></a></li>
                    <li><a href><img src="assets/img/svg/instagram.svg" alt /></a></li>
                    <li><a href><img src="assets/img/svg/twitter.svg" alt /></a></li>
                    <li><a href><img src="assets/img/svg/youtube.svg" alt /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
