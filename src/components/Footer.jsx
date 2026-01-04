import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="lg:pb-16 sm:pb-10 pb-8">
      <div className="container">
        <div className="flex justify-between mb-24">
          <div className="space-y-6 w-[28%]">
            <a href="/" className="block">
              <Image
                src="/images/logo.svg"
                width={247}
                height={40}
                alt="logo"
              />
            </a>
            <p className="font-bold text-sm text-[#6B7280] ">
              Engineering efficiency for the world's most ambitious companies
              through custom AI and automation systems.
            </p>
            <Link
              href="https://www.linkedin.com/"
              className="w-10 h-10 block border border-[#FFFFFF1A] bg-[#FFFFFF08 rounded-full p-3"
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
          <div className="w-1/3">
            <h3 className="uppercase mb-6 text-white font-extrabold tracking-widest">
              JOIN A NEWSLETTER
            </h3>
            <form className="mb-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full font-bold text-sm placeholder:text-accent-gray bg-[#FFFFFF08] p-4 rounded-xl mb-3 border border-[#FFFFFF1A]"
              />
              <button
                type="submit"
                className="bg-white p-3 w-full rounded-xl font-black text-sm"
              >
                Subscribe
              </button>
            </form>
            <span className="font-bold text-[#4B5563] text-xs">
              Weekly insights on AI & Automation.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between   ">
            <span className="text-xs font-bold text-[#4B5563]">© 2024 Invent Tomorrow Agency. All rights reserved.</span>
            <ul className="flex gap-8 items-center">
                <li><Link href="/" className="text-xs text-[#4B5563] font-bold uppercase">privacy policy</Link></li>
                <li><Link href="/" className="text-xs text-[#4B5563] font-bold uppercase">terms of service</Link></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
