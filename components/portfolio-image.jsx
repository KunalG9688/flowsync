"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const PortfolioImage = () => {
  return (
    <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      <Image
        src="/logoKgbg.png"
        alt="Kg Logo"
        width={150}
        height={30}
        className="h-6 sm:h-20 w-auto object-contain logo-shadow logo-effect"
      />
    </Link>
  );
};

export default PortfolioImage;
