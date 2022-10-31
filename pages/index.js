import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const DUMMYPOSTS = [
  {
    slug: "getting-started-with-next-js1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next-js2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next-js3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next-js4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering.",
    date: "2022-02-10",
  },
];

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Max's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

// 1.hero section
// 2.featured posts section
