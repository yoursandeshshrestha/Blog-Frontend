import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

function PostItem({
  postID,
  category,
  title,
  description,
  authorID,
  thumbnail,
}) {
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post__content">
        <Link to={`/posts/${postID}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className="post__footer">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`}>{category}</Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
