import React from 'react'

export default function LatestPost (props) {
  return (
    <section className="premium-banner-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 m-auto">
        <div className="single-blog-banner-wrapper">
          <h5>Lifestyle</h5>
          <h1>A muscial gift on bangla noboborsha from Armeen Musa</h1>
          <p>Hung that found of the from diesel to the venerable, you what you spare at cleaning in coming was sign introduced attempt, then would was try make brown.</p>
          <div className="single-blog-social d-flex align-items-center justify-content-between">
            <div className="published-dtls-area d-flex align-items-center">
              <div className="published-date d-flex align-items-center mr-25">
                <img className="icon-svg svg-orange mr-5" src="assets/img/svg/calendar.svg" alt />
                <p>29.Nov.2018 </p>
              </div>
              <div className="published-person d-flex align-items-center">
                <img className="icon-svg svg-orange mr-5" src="assets/img/svg/profile-user.svg" alt />
                <p>Eiad Basha</p>
              </div>
            </div>
            <div className="social-icon">
              <ul className="d-flex align-items-center justify-content-between">
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
    <div className="row">
      <div className="col-lg-10 m-auto">
        <div className="post-thumb">
          <img src="assets/img/premium-img.jpg" alt />
          <a href>Premium</a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}