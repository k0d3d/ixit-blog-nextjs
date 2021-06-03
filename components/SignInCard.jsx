import React from 'react';

export function SignInCard() {
  return (<div className={`sign-in-card`}>
    <h3>Welcome back.</h3>
    <p>Get an iXit account to upload and mint NFT files. You can also opt-in to our mailing list.</p>
    <div className="input-group-icon radious-6 mb-30">
      <input type="email" placeholder="Email" />
    </div>
    <div className="input-group-icon radious-6 mb-30">
      <input type="password" placeholder="Password" />
      <img src="assets/img/svg/mail-sign.svg" />
    </div>
    <div className="sign-link">
      <p>Don't have an account?</p>
      <a href="/signup">Sign Up</a>
    </div>
  </div>);
}
