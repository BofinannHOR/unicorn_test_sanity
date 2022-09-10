import Head from "next/head";
import Banner from "../components/home/Banner";
import Players from "../components/home/Players";
import Posts from "../components/home/Posts";
import { sanityClient, urlFor } from "../sanity";

export default function Home({ posts, players }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Unicorn.KH TEST</title>
        <link rel="stylesheet" href="" />
      </Head>
      <Banner />
      <Posts posts={posts} />
      <Players players={players} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const query_player = `*[_type == 'player']{
    _id,
   name,
  number,
  position,
  mainImage
  }
`;
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
  const players = await sanityClient.fetch(query_player);
  return {
    props: {
      posts,
      players,
    }, // will be passed to the page component as props
  };
}
