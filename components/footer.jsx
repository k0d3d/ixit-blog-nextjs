import React from 'react'



export default function Footer(props) {
  return (
    <footer className="footer-area">
      <div className="footer-top-area">
        <div className="container">
          <div className="footer-top-wrapper d-flex justify-content-between">
            {/*header-logo*/}
            <div className="footer-logo-area">
              <div className="header-logo ">
                <a href="homepage.html">iXit</a>
              </div>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <div className="social-icon pt-40 pt-lg-15">
                <h4>Follow Us</h4>
                <ul className="d-flex align-items-center">
                  <li><a href="#"><img src="assets/img/svg/facebook.svg"  /></a></li>
                  <li><a href="#"><img src="assets/img/svg/instagram.svg"  /></a></li>
                  <li><a href="#"><img src="assets/img/svg/twitter.svg"  /></a></li>
                  <li><a href="#"><img src="assets/img/svg/youtube.svg"  /></a></li>
                </ul>
              </div>
            </div>
            {/* menu-bar */}
            <div className="footer-menu-bar community-area">
              <h4>Community</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="/author.html">Author</a></li>
                <li><a href="/membership.html">Membership</a></li>
                <li><a href="/style-guide.html">Style Guide</a></li>
                <li><a href="/tag.html">Tag</a></li>
                <li><a href="/single-blog.html">Blog</a></li>
                <li><a href="/contact.html">Contact</a></li>
              </ul>
            </div>
            <div className="footer-menu-bar usefull-link">
              <h4>Useful Link</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Team</a></li>
              </ul>
            </div>
            <div className="contact-area">
              <h4>Contact Us</h4>
              <div className="contact-address">
                <a href="#">blooria@gmail.com</a>
                <p>+123 456 - 789</p>
                <h4>Road - 13 , Block - B <span>Grand Canion , Arizona , USA</span></h4>
              </div>
              <div className="contact-app-link">
                <h4>See the Map</h4>
                <a href="#">https://www.google.com.bd/maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>Copyright © 2020 Blooria All Rights Reserved.</p>
            </div>
            <div className="col-lg-6">
              <ul className="footer-privacy-card">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}