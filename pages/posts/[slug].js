import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
}

export default PostDetailPage;

export async function getStaticProps(context) {
  const { params } = context;

  // console.log("params gsProps :>> ", params);

  const { slug } = params;

  const postData = getPostData(slug);

  // console.log("postData gsProps :>> ", postData);

  return {
    props: {
      post: postData,
    },
    revalidate: 6000,
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostFiles();

  // console.log("postFileNames gsPaths :>> ", postFileNames);

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  // console.log("slugs gsPaths :>> ", slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
