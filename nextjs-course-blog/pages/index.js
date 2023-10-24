import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import Head from "next/head";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Julian's Blog</title>
        <meta name="description" content="Foo bar" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
