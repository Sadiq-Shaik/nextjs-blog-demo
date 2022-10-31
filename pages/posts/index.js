import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

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

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta
          name="description"
          content="A list of all programming related tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export default AllPostsPage;

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
