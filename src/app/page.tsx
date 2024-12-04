import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <>
      {/* Nav Section */}
      <div className="bg-gray-100 p-8"></div>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-white min-h-screen">
        {/* Left Content */}
        <div className="flex-1 max-w-lg space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Welcome To Our Website
          </h1>
          <p className="text-gray-600 text-base md:text-lg font-inter leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dummy has been the industry&apos;s standard.
          </p>
          <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition">
            Contact US
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative mt-10 lg:mt-0 lg:ml-12 flex justify-center">
          <Image
            src="/images/pic-1.png"
            alt="Design Image"
            width={400}
            height={400}
            className="object-cover shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
