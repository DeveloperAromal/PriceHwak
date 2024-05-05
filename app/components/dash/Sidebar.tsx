import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavicoProps {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="">
      <div
        className="container bg-black w-14 absolute z-50 h-screen lg:block hidden border-r border-gray-500 hover:w-44 transition-transform duration-1000"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
        <h1>
          {" "}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={55}
              height={55}
              className="hidden lg:block pt-4"
            />
          </div>
        </h1>
        <div className="px-4 pt-10">
          <div>
            <NavicoBlock
              href="#"
              src="/icons/bell.png"
              alt="#"
              width={25}
              height={25}
              label="Notification"
              hovered={hovered}
            />
            <NavicoBlock
              href="#"
              src="/icons/heart.png"
              alt="#"
              width={25}
              height={25}
              label="Favourite"
              hovered={hovered}
            />
            <NavicoBlock
              href="#"
              src="/icons/whishlist.png"
              alt="#"
              width={25}
              height={25}
              label="Wishlist"
              hovered={hovered}
            />
            <NavicoBlock
              href="#"
              src="/icons/tracking.png"
              alt="#"
              width={25}
              height={25}
              label="Tracking"
              hovered={hovered}
            />
            <NavicoBlock
              href="#"
              src="/icons/trending.png"
              alt="#"
              width={25}
              height={25}
              label="Trending"
              hovered={hovered}
            />
          </div>
        </div>
        <hr className="bg-teal-500" />
        <div className="flex items-center justify-center pt-6">
          <div>
            <NavicoBlock
              href="/dashboard/dash/history"
              src="/icons/history.png"
              alt="#"
              width={25}
              height={25}
              label="History"
              hovered={hovered}
            />
            <NavicoBlock
              href="#"
              src="/icons/filter.png"
              alt="#"
              width={25}
              height={25}
              label="Filter"
              hovered={hovered}
            />
            <NavicoBlock
              href="#"
              src="/icons/recommended.png"
              alt="#"
              width={25}
              height={25}
              label="Recommended"
              hovered={hovered}
            />
          </div>
        </div>
        <hr className="bg-teal-500" />
        <div className="px-4 pt-14">
          <div>
            <NavicoBlock
              href="/dashboard/dash/account"
              src="/icons/account.png"
              alt="#"
              width={25}
              height={25}
              label="Account"
              hovered={hovered}
            />
            <NavicoBlock
              href="#"
              src="/icons/settings.png"
              alt="#"
              width={25}
              height={25}
              label="Settings"
              hovered={hovered}
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function NavicoBlock({
  href,
  src,
  alt,
  width,
  height,
  label,
  hovered,
}: NavicoProps & { label: string; hovered: boolean }) {
  return (
    <div>
      <Link href={href}>
        <div className="flex gap-2"><Navico src={src} alt={alt} width={width} height={height} href={""} />
        {hovered && <span className="hover:text-teal-500">{label}</span>}</div>
      </Link>
    </div>
  );
}

function Navico({ src, alt, width, height }: NavicoProps) {
  return (
    <div className="pb-6">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
