import React from "react";
import PostList from "../../components/postspage/PostList";
import { sanityClient, urlFor } from "../../sanity";

const PostsListPage = ({ posts }) => {
  return <PostList posts={posts} />;
};

export default PostsListPage;

export async function getServerSideProps(context) {
  const query_post = `*[_type == 'post']{
    _id,
    title,
    date,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query_post);
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
