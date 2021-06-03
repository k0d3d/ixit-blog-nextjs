import React from 'react';

export default function SearchResult() {
  return (<div className="search-popup-area">
    <div className="search-option">
      <div className="search-box">
        <img src="assets/img/svg/search.svg" />
        <input id="search" name="search" type="text" data-list=".data-list" placeholder="Type your keywords..." />
      </div>
      <div className="data-list-wrapper">
        <ul className="data-list">
          <li>
            <a href="">
              <div className="search-content">
                <div className="search-title">
                  <h4>Ingredients to look for in skin care products <span>April 30, 2019</span></h4>
                </div>
                <p>Read our top seven health benefits of fishing to learn why, whether you're a match angler or a weekend hobbyist.</p>
              </div>
              <img src="assets/img/svg/arrow-left.svg" />
            </a>
          </li>
          <li>
            <a href="">
              <div className="search-content">
                <div className="search-title">
                  <h4>Sky Parachute Adventure <span>April 25, 2019</span></h4>
                </div>
                <p>Muay Thai (Thai boxing) is the most popular contact sport in Thailand, and a pillar of Thai culture, so much so that for years the Thai government has been asking, unsuccessfully, for it to be included as an Olympic sport. </p>
              </div>
              <img src="assets/img/svg/arrow-left.svg" />
            </a>
          </li>
          <li>
            <a href="">
              <div className="search-content">
                <div className="search-title">
                  <h4>Small boy and girl on road<span>April 18, 2019</span></h4>
                </div>
                <p>Many parents are tired of the pink and blue divide in the toy aisles. Just last month, the White House held a conference in toys and media, with many toy manufacturers and experts attending. After feedback, Target announced in 2015 that it would get rid of signs labeling toys for boys or for girls</p>
              </div>
              <img src="assets/img/svg/arrow-left.svg" />
            </a>
          </li>
          <li>
            <a href="">
              <div className="search-content">
                <div className="search-title">
                  <h4>Colorful women digital art face<span>April 21, 2019</span></h4>
                </div>
                <p>The first thing I do before starting an illustration is to browse through my folder of inspiration. Inside are plenty of sub-folders, containing images of lighting, faces, human figures, clothing, illustrations from my favourite artists, animals, caterpillars, flowers and plenty more besides.</p>
              </div>
              <img src="assets/img/svg/arrow-left.svg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="popup-close-icon">
      <img src="assets/img/svg/close-icon.svg" />
    </div>
  </div>);
}
