import Markdown from 'react-markdown';

import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import React from 'react';

const DUMMY_POST = {
  title: "Foo Bar",
  slug: "foo-bar",
  image: "scuba.jpeg",
  date: "2023-10-15",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <Markdown>{DUMMY_POST.content}</Markdown>
    </article>
  );
}

export default PostContent;
