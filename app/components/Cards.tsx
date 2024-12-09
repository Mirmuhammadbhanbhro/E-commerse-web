import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[90%] max-w-7xl">
          {/* Top side */}
          <div className="mb-5">
            <span className="border-l-4 pl-2 text-red-500 text-lg font-bold">
              Weekly
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              One Week Selling
            </h2>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
            {/* Card 1 */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[170px] bg-gray-300 flex justify-center items-center">
                <Image
                  src="/images/ten.png"
                  width={150}
                  height={100}
                  alt="game-image"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-lg font-bold block">New MG ZS</span>
                <span className="font-bold block">$120</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[170px] bg-gray-300 flex justify-center items-center">
                <Image
                  src="/images/eleven.png"
                  width={150}
                  height={100}
                  alt="game-image"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-lg font-bold block">MG ZX Excite</span>
                <span className="font-bold block">$120</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[170px] bg-gray-300 flex justify-center items-center">
                <Image
                  src="/images/one.png"
                  width={150}
                  height={100}
                  alt="game-image"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-lg font-bold block">New MG ZS</span>
                <span className="font-bold block">$120</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[170px] bg-gray-300 flex justify-center items-center">
                <Image
                  src="/images/six.png"
                  width={150}
                  height={100}
                  alt="game-image"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-lg font-bold block">
                  MG ZX Exclusive
                </span>
                <span className="font-bold block">$120</span>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-10">
            <button className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cards;
