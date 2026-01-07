import Image from 'next/image';

export default function Clients() {
  return (
    <div className="py-12 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Heading Section */}
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Clients</h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            We have been working with some Fortune 50+ clients
          </p>
        </div>

        {/* Logos Section */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center items-center mt-10">
  {[
    '/assets/svgviewer-output (1).svg',
    '/assets/svgviewer-output (2).svg',
    '/assets/svgviewer-output (7).svg',
    '/assets/svgviewer-output (4).svg',
    '/assets/svgviewer-output (5).svg',
    '/assets/svgviewer-output (6).svg',
    // '/assets/svgviewer-output (7).svg',
  ].map((logo, index) => (
    <div
      key={index}
      className={`p-2 rounded ${index === 2 || index === 6 ? 'bg-black' : ''}`}
    >
      <Image
        src={logo}
        alt={`Client Logo ${index + 1}`}
        width={60}
        height={60}
        className="md:w-20 w-16 object-contain"
      />
    </div>
  ))}
</div>


        {/* Middle Heading */}
        <div className="flex flex-col justify-center items-center text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 max-w-xl leading-snug">
            Manage your entire community in a single system
          </h2>
          <p className="text-gray-600 mt-2">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              img: '/assets/membership.png',
              title: 'Membership Organization',
              desc: 'Our membership management software provides full automation of membership rewards and payments.',
            },
            {
              img: '/assets/national.png',
              title: 'National Associations',
              desc: 'Our membership management software provides full automation of membership rewards and payments.',
            },
            {
              img: '/assets/clubs.png',
              title: 'Clubs and Groups',
              desc: 'Our membership management software provides full automation of membership rewards and payments.',
            },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={client.img}
                alt={client.title}
                width={100}
                height={100}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{client.title}</h3>
              <p className="text-gray-600 text-sm">{client.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Feature Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 p-6 bg-white ">
          <div>
            <Image
              src="/assets/pixelgrade.png"
              alt="Pixelgrade"
              width={400}
              height={400}
              className="md:w-100 w-full object-contain rounded"
            />
          </div>

          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              The unseen three years at Pixelgrade
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt sint labore atque, sequi debitis quaerat eaque saepe, maxime ratione, animi quas sapiente. Itaque possimus ex labore dolor vitae voluptas dicta, ratione a delectus libero quia quod sequi commodi temporibus.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
