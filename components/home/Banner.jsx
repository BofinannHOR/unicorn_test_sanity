import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-white py-10 lg:py-0">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://res.cloudinary.com/siem-reap/image/upload/v1662526425/Test%20api/20220814_164015_p7nbxk.webp"
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <p className="text-3xl font-extrabold sm:text-5xl">
            Unicorn
            <strong className="font-extrabold text-purple-700 sm:block">
              Forever campion.
            </strong>
          </p>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
