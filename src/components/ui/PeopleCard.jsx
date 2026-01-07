import Image from "next/image";
import Link from "next/link";
import React from "react";

const PeopleCard = ({
  imgUrl = "",
  title = "",
  designation = "",
  inUrl = "",
}) => {
  return (
    <div>
      {imgUrl && (
        <Image
          className="lg:mb-7 mb-5 lg:w-75 lg:h-75 sm:w-55 sm:h-55 max-sm:w-75 max-sm:h-75 aspect-square"
          width={300}
          height={300}
          src={imgUrl}
          alt="display picture"
        />
      )}
      <h2 className="font-bold text-white mb-2 lg:text-2xl text-xl">{title}</h2>
      <p className="text-accent-gray font-bold mb-2">{designation}</p>
      <Link
        href={inUrl}
        className="w-10 h-10 block hover:border-accent-blue hover:bg-accent-blue/20 transition duration-300 border border-[#FFFFFF1A] bg-[#FFFFFF08] rounded-full p-3"
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
  );
};

export default PeopleCard;
