import Image from "next/image";
import { Youtube, Twitter, Dribbble, Facebook, Share2 } from 'lucide-react';

const Footer = () => {
  const iconMap = {
    youtube: Youtube,
    twitter: Twitter,
    dribbble: Dribbble,
    facebook: Facebook,
    share: Share2,
  };

  const platforms = ['facebook','dribbble', 'twitter', 'youtube'];

  return (
    <footer className="w-full bg-[#1e2a38] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">

        {/* Logo + Info */}
        <div className="space-y-4 flex flex-col items-center md:items-start md:w-1/4">
          <div className="flex items-center space-x-2">
            <Image src="/assets/icon.svg" alt="Logo" width={24} height={24} />
            <span className="font-semibold text-lg">Nexcent</span>
          </div>
          <p className="text-xs text-white/70">© 2020 Landify UI Kit.</p>
          <p className="text-xs text-white/70">All rights reserved</p>

          <div className="flex space-x-3 pt-2">
            {platforms.map((platform) => {
              const Icon = iconMap[platform];
              return (
                <a
                  key={platform}
                  href="#"
                  className="bg-white/20 hover:bg-white/30 w-7 h-7 flex items-center justify-center rounded-md transition"
                  aria-label={platform}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links + Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:w-3/4">
          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            {["About us", "Blog", "Contact us", "Pricing", "Testimonials"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/70 hover:text-white transition block"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Support */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm mb-3">Support</h3>
            {["Help center", "Terms of service", "Legal", "Privacy policy", "Status"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/70 hover:text-white transition block"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm mb-3">Stay up to date</h3>
            <form className="relative w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#3a4a5a] text-white text-xs placeholder:text-white/50 rounded-md pr-10 pl-3 py-2 focus:outline-none"
                aria-label="Your email address"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-[#3a4a5a] hover:bg-[#4e5f70] transition flex items-center justify-center"
                aria-label="Submit email"
              >
                <Share2/>
                {/* <Image src="/assets/send.png" alt="Send" width={16} height={16} /> */}
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
