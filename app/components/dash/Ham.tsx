"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface NavicoProps {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (isMenuOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
    return () => {
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isMenuOpen]);

  return (
        <nav className="top-0 left-0 absolute lg:flex lg:justify-between lg:items-center w-10 h-10">
          <div className="flex justify-between items-center">
            <div className="block lg:hidden">
              <div className="pt-4 flex z-60">
                <button
                  onClick={toggleMenu}
                  className="block lg:hidden z-50 px-3 rounded-2xl focus:outline-none"
                >
                  <div className="relative">
                    <div
                      className={`w-8 h-0.5 bg-white mb-2 transition-all duration-300 ${
                        isMenuOpen ? "rotate-45 translate-y-4" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-8 h-0.5 bg-white mb-2 transition-all duration-300 ${
                        isMenuOpen ? "opacity-0 translate-x-full" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-8 h-0.5 bg-white transition-all duration-300 ${
                        isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                      }`}
                    ></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 block lg:hidden z-20 absolute">
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } bg-neutral-900 relative -top-20 w-44 h-full flex items-center justify-center`}
            >
              <div className="block lg:hidden bg-neutral-900 z-20 pt-28">
                <div >
                  <div className="pr-4 pb-2">
                    <div className="flex gap-4">
                      <Navico
                        href="#"
                        src="/icons/bell.png"
                        alt="#"
                        width={30}
                        height={30}
                      />
                      <span>Notification</span>
                    </div>
                    <div className="flex gap-4">
                      <Navico
                        href="#"
                        src="/icons/heart.png"
                        alt="#"
                        width={30}
                        height={30}
                      />
                      <span>Favourites</span>
                    </div>
                    <div className="flex gap-4">
                      <Navico
                        href="#"
                        src="/icons/whishlist.png"
                        alt="#"
                        width={30}
                        height={30}
                      />
                      <span>Wishlist</span>
                    </div>
                    <div className="flex gap-4">
                      <Navico
                        href="#"
                        src="/icons/tracking.png"
                        alt="#"
                        width={30}
                        height={30}
                      />
                      <span>Tracking</span>
                    </div>
                    <div className="flex gap-4">
                      <Navico
                        href="#"
                        src="/icons/trending.png"
                        alt="#"
                        width={30}
                        height={30}
                      />
                      <span>Trending</span>
                    </div>
                  </div>
                </div>
                <hr className="bg-teal-500" />
                <div className="flex items-center justify-center pt-6">
                  <div>
                    <div className="flex gap-4">
                      <Navico
                        href="/dashboard/dash/history"
                        src="/icons/history.png"
                        alt="#"
                        width={25}
                        height={25}
                      />
                      <span>History</span>
                    </div>

                    <div className="flex gap-4">
                      <Navico
                        href="#"
                        src="/icons/filter.png"
                        alt="#"
                        width={25}
                        height={25}
                      />
                      <span>Filter</span>
                    </div>
                    <div className="flex gap-4">
                      <Navico
                        href="#"
                        src="/icons/recommended.png"
                        alt="#"
                        width={25}
                        height={25}
                      />
                      <span>Recommended</span>
                    </div>
                  </div>
                </div>
                <hr className="bg-teal-500" />
                <div className="pr-4 pt-8">
                  <div>
                    <div className="flex gap-4">
                      <Navico
                        href="/dashboard/dash/account"
                        src="/icons/account.png"
                        alt="#"
                        width={30}
                        height={30}
                      />
                      <span>Account</span>
                    </div>
                    <div className="flex gap-4">
                      <Navico
                        href="#"
                        src="/icons/settings.png"
                        alt="#"
                        width={30}
                        height={30}
                      />
                      <span>Settings</span>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
  );
}
function Navico({ src, alt, width, height, href }: NavicoProps) {
  return (
    <div className="pb-6">
      <Link href={href}>
        <Image src={src} alt={alt} width={width} height={height} />
      </Link>
    </div>
  );
}
