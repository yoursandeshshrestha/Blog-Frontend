import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../src/assets/images/avatar1.jpg";

function PostAuthor() {
  return (
    <Link to={`/posts/users/sdsd`} className="post__author">
      <div className="post_-author-avatar">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="post__author-details">
        <h5>By: Sandesh Shrestha</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
}

export default PostAuthor;
