import React from "react";

const Portfolio = () => {
  const image = [
    "https://i.pinimg.com/736x/f6/d5/ac/f6d5ac3b337f8f118960e31d66fa30d2.jpg",
    "https://i.pinimg.com/1200x/a2/f3/51/a2f35177f42ebb16a75ae73719567982.jpg",
    "https://i.pinimg.com/736x/60/fb/4f/60fb4fb270f7ca4a9a647e4c300e3a0f.jpg",
    "https://i.pinimg.com/736x/80/9d/e6/809de6388b9a39a49fafa47ea68cb7f6.jpg",
    "https://i.pinimg.com/736x/80/9d/e6/809de6388b9a39a49fafa47ea68cb7f6.jpg",
    // "https://i.pinimg.com/1200x/56/75/99/5675997ec04031b3538db6a9c615ae92.jpg",
    // "https://i.pinimg.com/736x/f1/73/d8/f173d8f880b3b51a06497e42ec52ec90.jpg",
    // "https://i.pinimg.com/1200x/3c/2e/df/3c2edf64144b59caa3f484eedb7c3d19.jpg",
    // "https://i.pinimg.com/736x/ac/84/83/ac8483d15de7def50b26c505fdcf0878.jpg",
  ];

  return (
    <section className="mt-10 bg-gray-100 rounded-lg p-2 md:p-5 lg:p-10">
      <div className="flex justify-between items-end mb-5">
        <div className="">
          <span className="text-secondary">our portfolio</span>
          <h1 className="mt-2">Featured Projects</h1>
        </div>
        <button className=" text-primary px-4 py-2 rounded hover:cursor-pointer hidden md:block ">
          view all Projects
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {image.map((img, index) => (
          <div
            key={index}
            className={`
        overflow-hidden rounded-2xl
        ${
          index === 0
            ? "md:col-span-2 md:row-span-2"
            : index === 3
              ? "md:col-span-1 md:row-end-2"
              : ""
        }
      `}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-300 ease-in"
            />
          </div>
        ))}
      </div>
      <button className=" text-primary px-4 py-2 rounded hover:cursor-pointer flex items-end text-end w-full mt-5 justify-end md:hidden  ">
        view all Projects
      </button>
    </section>
  );
};

export default Portfolio;
