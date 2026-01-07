import Image from 'next/image';

const blogCards = [
  {
    img: '/assets/oneren.png',
    alt: 'Person in blue hat sitting near window',
    text: 'Creating Streamlined Safeguarding Processes with OneRen',
  },
  {
    img: '/assets/responsibilities.png',
    alt: 'Laptop with charts and coffee',
    text: 'What are your safeguarding responsibilities and how can you manage them?',
  },
  {
    img: '/assets/rewamping.png',
    alt: 'Laptop with yellow screen and plant',
    text: 'Revamping the Membership Model with Triathlon Australia',
  },
];

export default function MarketingSection() {
  return (
    <section className="w-full px-4 py-10 text-center bg-gray-50">
      <h2 className="text-gray-800 font-semibold text-xl md:text-3xl">
        Caring is the new marketing
      </h2>
      <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">
        The Nextcent blog is the best place to read about the latest membership insights, trends and more.
        See who&apos;s joining the community, read about how our community is increasing their membership income, and lots more.
      </p>

      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
        {blogCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-md overflow-hidden mx-auto w-full max-w-sm md:max-w-none flex flex-col"
          >
            <Image
              width={500}
              height={300}
              src={card.img}
              alt={card.alt}
              className="w-full h-52 object-cover"
            />

            {/* Repositioned text inside a normal div below image */}
            <div className="p-4 text-left">
              <p className="text-sm text-gray-700">{card.text}</p>
              <a href="#" className="text-green-600 font-medium text-xs inline-block mt-2">
                Read more <i className="fas fa-arrow-right text-[8px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
