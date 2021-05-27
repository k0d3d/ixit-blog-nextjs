import React from 'react'


export default function CtaPost(props) {
  return (
    <section className="premium-subscribe-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="premium-suscribe-content text-center">
              <div className="suscribe-content-wrapper">
                <h2>This post is for paying subscribers only</h2>
                <p>Sign up now and upgrade your account to read the post and get access to the full library of posts for paying subscribers only.</p>
                <button className="btn btn-sm btn-orange btn-radious-6">Sign up now</button>
                <div className="account-sign">
                  <p>Already have an account? <a href> Sign in</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}