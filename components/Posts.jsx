import React, { useState } from "react";
import PostItem from "./PostItem";

import Thumbnail1 from "../src/assets/images/blog1.jpg";
import Thumbnail2 from "../src/assets/images/blog2.jpg";
import Thumbnail3 from "../src/assets/images/blog3.jpg";
import Thumbnail4 from "../src/assets/images/blog4.jpg";

const DUMMY_POSTS = [
  {
    id: 1,
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the title of the very first post on this blog",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    authorID: 3,
  },
  {
    id: 2,
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is the title of the very second post on this blog",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    authorID: 1,
  },
  {
    id: 3,
    thumbnail: Thumbnail3,
    category: "weather",
    title: "This is the title of the very third post on this blog",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    authorID: 13,
  },
  {
    id: 4,
    thumbnail: Thumbnail4,
    category: "farming",
    title: "This is the title of the very fourth post on this blog",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    authorID: 11,
  },
];

function Posts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.map(
          ({ id, thumbnail, category, title, description, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorID={authorID}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Posts;
