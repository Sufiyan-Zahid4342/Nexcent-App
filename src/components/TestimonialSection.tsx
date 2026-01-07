import Image from 'next/image';
 // rename uploaded image to sp.png and place in /public

const TestimonialSection = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo or image */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <Image
            src="/assets/timsmith.png"
            alt="Tesla Logo"
            className="rounded-xl"
            width={400}
            height={400}
          />
        </div>

        {/* Text Content */}
        <div className="md:col-span-2">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
            elit at ligula molestie, nec molestie mi blandit. Suspendisse
            cursus tellus sed augue ultricies, quis tristique nulla sodales...
          </p>
          <p className="text-green-600 font-semibold">Tim Smith</p>
          <p className="text-sm text-gray-500">
            British Dragon Boat Racing Association
          </p>

          {/* Logos Row */}
          <div className="flex flex-wrap items-center gap-6 mt-6">
            {/* Replace these with your SVGs or logos */}
            <Image src="/assets/svgviewer-output (1).svg" alt="Logo1" width={32} height={32} />
            <Image src="/assets/svgviewer-output (2).svg" alt="Logo2" width={32} height={32} />
            <Image className='bg-black' src="/assets/svgviewer-output (7).svg" alt="Logo3" width={32} height={32} />
            <Image src="/assets/svgviewer-output (4).svg" alt="Logo4" width={32} height={32} />
            <Image src="/assets/svgviewer-output (5).svg" alt="Logo5" width={32} height={32} />
            <Image src="/assets/svgviewer-output (6).svg" alt="Logo5" width={32} height={32} />

            <a
              href="#"
              className="text-green-600 font-semibold ml-auto hover:underline"
            >
              Meet all customers &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
