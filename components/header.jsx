import React, { useState } from 'react'
import Link from 'next/link'
import { SignInCard } from './SignInCard';




export default function Header(props) {
  const [darkMode, setDarkMode] = useState('light')
  const toggleDarkMode = () => {
    if (darkMode === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDarkMode('dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      setDarkMode('light')
    }
  }

  function toggleAuthMenu($e) {
    const body = document.querySelector('body');
    const except = document.querySelector('.sign-in-card');

    body.addEventListener("click", function () {
      except.classList.toggle('active')
    }, { once: true });
    except.addEventListener("click", function (ev) {
      ev.stopPropagation(); //this is important! If removed, you'll get both alerts
    }, false);
    $e.stopPropagation()
    except.classList.toggle('active')
  }

  return (
    <header className="header-area default-header">
      <div className="container">
        <div className="header-wrapper d-flex align-items-center justify-content-between">
          {/*header-logo*/}
          <div className="header-logo">
            <a href="/">iXit</a>
            <span className="ml-3">Good morning</span>

          </div>
          {/* menu-bar */}

          {/* sign-in area */}
          <div className="sign-in-area">
            <ul className="d-flex align-items-center justify-content-between">
              <li className="popup"><img src="assets/img/svg/search.svg" /></li>
              <li className="dark-light" onClick={() => toggleDarkMode()}><img src="assets/img/svg/dark-light.svg" /></li>
              <li className="sign-click relative" onClick={(e) => toggleAuthMenu(e)}>Sign in
            {/* sign-in dropdawn */}
                <SignInCard></SignInCard>
              </li>
              <li>
                {/*mobile menu icon*/}
                <div className="menu-toggole">
                  <span className="menu-show comon-tab">
                    <img src="assets/img/svg/toggle.svg" />
                  </span>
                  <span className="menu-close comon-tab">
                    <img src="assets/img/svg/close.svg" />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* menu search popup */}
    </header>

  )


}