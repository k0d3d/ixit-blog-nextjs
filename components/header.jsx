import React from 'react'


export default function Header(props) {
  return (
    <header className="header-area default-header">
      <div className="container">
        <div className="header-wrapper d-flex align-items-center justify-content-between">
          {/*header-logo*/}
          <div className="header-logo">
            <a href="/">iXit</a>
          </div>
          {/* menu-bar */}
          <div className="menu-bar">
            <ul className="d-flex align-items-center justify-content-between">
              <li><a href="#">Good morning</a>
              </li>
              <li><a href="author.html">Posts</a></li>
              <li><a href="#">Draws</a>
              </li>
            </ul>
          </div>
          {/* sign-in area */}
          <div className="sign-in-area">
            <ul className="d-flex align-items-center justify-content-between">
              <li className="popup"><img src="assets/img/svg/search.svg" alt /></li>
              <li className="dark-light"><img src="assets/img/svg/dark-light.svg" alt /></li>
              <li className="sign-click relative">Sign in
            {/* sign-in dropdawn */}
                <div className="sign-in-card">
                  <h3>Welcome back.</h3>
                  <p>Sign in to get personalized story recommendations, ollow authors and topics you love, and interact with stories.</p>
                  <div className="input-group-icon radious-6 mb-30">
                    <input type="email" placeholder="Type your email..." />
                    <img src="assets/img/svg/mail-sign.svg" alt />
                  </div>
                  <div className="sign-link">
                    <p>Don't have an account?</p>
                    <a href="#">Sign Up</a>
                  </div>
                </div>
              </li>
              <li>
                {/*mobile menu icon*/}
                <div className="menu-toggole">
                  <span className="menu-show comon-tab">
                    <img src="assets/img/svg/toggle.svg" alt />
                  </span>
                  <span className="menu-close comon-tab">
                    <img src="assets/img/svg/close.svg" alt />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* menu search popup */}
      <div className="search-popup-area">
        <div className="search-option">
          <div className="search-box">
            <img src="assets/img/svg/search.svg" alt />
            <input id="search" name="search" type="text" data-list=".data-list" placeholder="Type your keywords..." />
          </div>
          <div className="data-list-wrapper">
            <ul className="data-list">
              <li>
                <a href>
                  <div className="search-content">
                    <div className="search-title">
                      <h4>Ingredients to look for in skin care products <span>April 30, 2019</span></h4>
                    </div>
                    <p>Read our top seven health benefits of fishing to learn why, whether you're a match angler or a weekend hobbyist.</p>
                  </div>
                  <img src="assets/img/svg/arrow-left.svg" alt />
                </a>
              </li>
              <li>
                <a href>
                  <div className="search-content">
                    <div className="search-title">
                      <h4>Sky Parachute Adventure <span>April 25, 2019</span></h4>
                    </div>
                    <p>Muay Thai (Thai boxing) is the most popular contact sport in Thailand, and a pillar of Thai culture, so much so that for years the Thai government has been asking, unsuccessfully, for it to be included as an Olympic sport. </p>
                  </div>
                  <img src="assets/img/svg/arrow-left.svg" alt />
                </a>
              </li>
              <li>
                <a href>
                  <div className="search-content">
                    <div className="search-title">
                      <h4>Small boy and girl on road<span>April 18, 2019</span></h4>
                    </div>
                    <p>Many parents are tired of the pink and blue divide in the toy aisles. Just last month, the White House held a conference in toys and media, with many toy manufacturers and experts attending. After feedback, Target announced in 2015 that it would get rid of signs labeling toys for boys or for girls</p>
                  </div>
                  <img src="assets/img/svg/arrow-left.svg" alt />
                </a>
              </li>
              <li>
                <a href>
                  <div className="search-content">
                    <div className="search-title">
                      <h4>Colorful women digital art face<span>April 21, 2019</span></h4>
                    </div>
                    <p>The first thing I do before starting an illustration is to browse through my folder of inspiration. Inside are plenty of sub-folders, containing images of lighting, faces, human figures, clothing, illustrations from my favourite artists, animals, caterpillars, flowers and plenty more besides.</p>
                  </div>
                  <img src="assets/img/svg/arrow-left.svg" alt />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="popup-close-icon">
          <img src="assets/img/svg/close-icon.svg" alt />
        </div>
      </div>
    </header>

  )
}