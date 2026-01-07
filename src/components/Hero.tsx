  import Image from "next/image";

  const Hero = () => {
    return (
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-around px-4 md:px-10 py-20 bg-gray-50">
        {/* Text Content */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
            Lessons and insights <br />
            <span className="text-green-600">from 8 years</span>
          </h1>
          <p className="text-gray-500">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
            Register
          </button>
        
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src="/assets/hero.png"
            alt="Hero"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    );
  };

  export default Hero;
