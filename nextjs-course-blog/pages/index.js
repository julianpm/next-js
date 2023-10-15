import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    title: "Foo Bar",
    slug: "foo-bar",
    image: "scuba.jpeg",
    excerpt: "Foo Bar is the foobariest thing ever.",
		date: '2023-10-15'
  },
	{
    title: "Foo Bar 2",
    slug: "foo-bar-2",
    image: "scuba.jpeg",
    excerpt: "Foo Bar is the foobariest thing ever.",
		date: '2023-10-15'
  },
	{
    title: "Foo Bar 3",
    slug: "foo-bar-3",
    image: "scuba.jpeg",
    excerpt: "Foo Bar is the foobariest thing ever.",
		date: '2023-10-15'
  },
	{
    title: "Foo Bar 4",
    slug: "foo-bar-4",
    image: "scuba.jpeg",
    excerpt: "Foo Bar is the foobariest thing ever.",
		date: '2023-10-15'
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
