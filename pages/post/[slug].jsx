import React from "react";
import { sanityClient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";

function Post({ post }) {
  console.log(post);
  return (
    <main>
      <img
        className="w-full h-80 object-cover"
        src={urlFor(post.mainImage).url()}
        alt={post.title}
      />
      <article className="max-w-3xl m-auto p-5">
        <h1 className=" text-4xl mt-10 mb-3">{post.title}</h1>
        <div className="my-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={{
              h1: (props) => (
                <h1 className="text-2xl font-bold my-5" {...props} />
              ),
              h2: (props) => (
                <h1 className="text-xl font-bold my-5" {...props} />
              ),
              li: ({ children }) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }) => {
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>;
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
        _id,
        slug{
        current
        }
      }`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export async function getStaticProps({ params }) {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    date,
    author ->{
    name,
    image
  },
  description,
  mainImage,
  slug,
  body
  }`;
  const post = await sanityClient.fetch(query, {
    slug: params.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post },
    revalidate: 60, //after 60 seconds it will update the old cached version
  };
}
