import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Partners() {
  return (
    <>
      <div className="py-10 px-10 flex items-center space-x-6 justify-between md:w-1/2 mx-auto">
        <Link href="https://growwithusagency.medium.com/how-matt-shields-built-5-six-figure-marketing-agencies-at-just-19-5eb635a7dd59">
          <Image
            src="../partners/medium.svg"
            alt="Medium Article"
            width={150}
            height={150}
          />
        </Link>

        <Link href="#">
          <Image
            src="../partners/nbc.svg"
            alt="NBC Article"
            width={150}
            height={150}
          />
        </Link>
        <Link href="https://wealthinsidermag.com/3-secret-belief-shifts-that-made-matt-shields-a-millionaire-by-21/">
          <Image
            src="../partners/wealthinsider.svg"
            alt="Wealth Insider Article"
            width={150}
            height={150}
          />
        </Link>
      </div>
    </>
  );
}
