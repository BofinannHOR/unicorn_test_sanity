import React from "react";
import Link from "next/Link";
import { urlFor } from "../../sanity";

const Players = ({ players }) => {
  return (
    <div className="bg-gray-100 p-6 md:p-6">
      <h1 className=" text-slate-800 uppercase mb-8 md:w-5/6 w-1/2 mt-5">
        Team's Players
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-5 ">
        {/* div */}
        {players.map((player) => (
          <Link key={player._id} href="/">
            <a class="relative block bg-black group" href="">
              <img
                class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50"
                src={urlFor(player.mainImage).url()}
                alt={player.name}
              />
              <div class="relative p-8">
                <p class="text-sm font-medium tracking-widest text-purple-500 uppercase">
                  {player.position}
                </p>

                <p class="text-2xl font-bold text-white">{player.name}</p>

                <div class="mt-64">
                  <div class="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0">
                    <p class=" text-white text-xl">{player.number}</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Players;
