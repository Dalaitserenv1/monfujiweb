import React from "react";
import { getPosts, getPostDetails } from "../../services";
import { PostDetail, PostWidget, Author, Louder } from "../../components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
const router = useRouter();
if(router.isFallback){
  return <Louder/>
}
  return (

    <div className="container mx-auto mb-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
        </div>
        <div className="col-span-1 lg:col-span-4 mb-10">
          <div className="relative lg:sticky top-8">
            <PostWidget />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default PostDetails;
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
