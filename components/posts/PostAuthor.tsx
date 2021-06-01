import React from "react";
import { SocialShare } from "../SocialShare";

export const PostAuthor = () => (<div className="row">
  <div className="col-md-8 m-auto">
    <div className="profile-area">
      <div className="profile-img">
        <img src="assets/img/single-blog/profile-img.jpg" />
      </div>
      <div className="blog-profile-content">
        <h3>Eiad Basha</h3>
        <p>
          News is where the design community meets, apparently.
          you can share and discover interesting
          content as well as start discussions and upvote good content.
        </p>
        <h4>Follow me :</h4>
        <SocialShare url="" />
      </div>
    </div>
  </div>
</div>
);
