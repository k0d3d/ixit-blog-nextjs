import React from 'react'


export default function FeaturedPost(props) {
  return (
    <section className="banner-area">
      <div className="container">
        <div className="banner-owl-area owl-carousel" data-carousel-loop="true" data-carousel-autoplay="false" data-carousel-mousedrag="true" data-carousel-items={1} data-carousel-nav="false">
          <div className="banner-single-wrapper">
            <div className="banner-img-area">
              <h4>featured stories</h4>
              <div className="banner-img">
                <img src="assets/img/homepage/banner-image.jpg" alt />
              </div>
            </div>
            <div className="banner-content-area">
              <h5>Travel</h5>
              <h1><a href="#">You got to cool that off. and hat's the double-truth</a></h1>
              <h4 className="date"><span>29.Nov.2018</span> -Eiad Basha</h4>
              <p>Hung that found of the from diesel to the venerable, you what you spare at cleaning in coming was sign introduced attempt, then would was try make brown on small careful cheek, and spirits build needed room so times from </p>
              <button className="btn btn-sm btn-radious-6 btn-black">Read More</button>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}