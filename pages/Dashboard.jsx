import React, { useState } from "react";
import { DUMMY_POSTS } from "../src/data";
import { Link } from "react-router-dom";

function Dashboard() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard__container">
          {posts.map((posts) => {
            return (
              <article key={posts.id} className="dashboard__post">
                <div className="dashboard__posts-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={posts.thumbnail} alt="avatar" />
                  </div>
                  <h5>{posts.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${posts.id}`} className="btn sm">
                    view
                  </Link>
                  <Link to={`/posts/${posts.id}`} className="btn sm primary">
                    edit
                  </Link>
                  <Link to={`/posts/${posts.id}`} className="btn sm danger">
                    delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You have no posts yet</h2>
      )}
    </section>
  );
}

export default Dashboard;
