import React from "react";
import Link from "next/link";
import { urlFor } from "../../sanity";

const Posts = ({ posts }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-6">
      <h1 className=" text-white uppercase mb-8 md:w-5/6 w-1/2">Team's News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-5 ">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer  overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()}
                alt={post.title}
              />
              <div className="flex justify-between p-5 bg-slate-900">
                <div>
                  <h4 className="text-red-600 font-light">{post.title}</h4>
                  <p className="text-white text-sm py-2">
                    {post.description} by {post.author.name}
                  </p>
                  <small className="text-white">{post.date}</small>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className=" px-8 py-3 text-sm font-medium text-white bg-purple-600  hover:bg-white hover:text-purple-800 active:bg-white focus:outline-none focus:ring">
          <Link href="/posts">
            <a> See more</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Posts;
