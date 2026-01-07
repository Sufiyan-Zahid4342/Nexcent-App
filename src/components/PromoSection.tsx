import Image from 'next/image';
import React from 'react';

const PromoSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/howtodesign.png"
            alt="Design illustration"
            width={512}
            height={512}
            className="w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            How to design your site footer like we did
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultricies mollis.
            Vivamus vehicula leo dui, at porta mi facilisis finibus.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
