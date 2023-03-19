import Head from "next/head";
import Image from "next/image";
import { PostCard, PostWidget } from "../../components";
import { getPosts } from "../../services";
import { motion } from "framer-motion";
export default function Home({ posts }) {
  return (
    <div className="container mx-auto w-screen mb-8 ">
      <Head>
        <title>BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <motion.div
          className="lg:col-span-4 col-span-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="lg:sticky relative top-8">
            <PostWidget />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts: posts },
  };
}
