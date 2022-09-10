import React from "react";
import { sanityClient, urlFor } from "../../sanity";
import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <img
        className="w-full md:h-full h-80 object-cover"
        src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2019/04/13/2565213-53202975-2560-1440.jpg"
        alt="unsplash"
      />
      <h1 className="uppercase text-2xl p-5">all posts</h1>

      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <a className="block p-10" href="">
            <img
              class="object-cover w-full h-56 shadow-xl rounded-xl"
              src={urlFor(post.mainImage).url()}
              alt=""
            />

            <div className="p-4">
              <h5 className="text-xl font-bold text-gray-900">{post.title}</h5>
              <p className="mt-2 text-gray-500">{post.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
