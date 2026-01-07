import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="lg:pb-16 sm:pb-10 py-8">
      <div className="container-lg">
        <div className="flex max-md:flex-col max-sm:gap-8 justify-between sm:mb-24 mb-16">
          <div className="sm:space-y-6 space-y-4 lg:w-[28%] md:w-1/2 w-full max-w-100">
            <a href="/" className="block">
              <Image
                src="/images/logo.svg"
                width={247}
                height={40}
                className="max-sm:w-50"
                alt="logo"
              />
            </a>
            <p className="font-bold sm:text-sm text-xs text-[#6B7280] ">
              Engineering efficiency for the world's most ambitious companies
              through custom AI and automation systems.
            </p>
            <Link
              href="https://www.linkedin.com/"
              className="w-10 h-10 block border hover:border-accent-blue hover:bg-accent-blue/20 transition duration-300 border-[#FFFFFF1A] bg-[#FFFFFF08 rounded-full p-3"
            >
              <Image
                className="w-full h-full"
                width={40}
                height={40}
                src="/images/in.svg"
                alt="linkedin url"
              />
            </Link>
          </div>
          <div className="md:w-1/3 w-full">
            <h3 className="uppercase max-sm:text-sm sm:mb-6 mb-4 text-white font-extrabold tracking-widest">
              JOIN A NEWSLETTER
            </h3>
            <form className="mb-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full font-bold text-sm placeholder:text-accent-gray/60 text-accent-gray bg-[#FFFFFF08] p-4 rounded-xl mb-3 border border-[#FFFFFF1A]"
              />
              <button
                type="submit"
                className="bg-white p-3 w-full rounded-xl font-black text-sm transition hover:bg-accent-blue hover:text-white"
              >
                Subscribe
              </button>
            </form>
            <span className="font-bold text-[#4B5563] text-xs">
              Weekly insights on AI & Automation.
            </span>
          </div>
        </div>
        <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-3 items-center justify-between   ">
            <span className="text-xs font-bold text-[#4B5563]">© 2024 Invent Tomorrow Agency. All rights reserved.</span>
            <ul className="flex gap-4 items-center">
                <li><Link href="/" className="text-xs text-[#4B5563] font-bold uppercase">privacy policy</Link></li>
                <li><Link href="/" className="text-xs text-[#4B5563] font-bold uppercase">terms of service</Link></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
