"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";

interface Nav {
  href: string;
  children: string;
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
    <section className="pb-4">
      <div>
        <nav className="backdrop-blur-md backdrop-brightness-40 h-20 w-full top-0 left-0 right-0 lg:flex lg:justify-between lg:items-center fixed z-50">
          <div className="flex justify-between items-center">
            <Link href="/home">
              <div className="cursor-pointer ">
                <div className="">
                  <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={78}
                    height={78}
                    className="hidden lg:block pt-4"
                  />
                </div>
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={90}
                  height={90}
                  className="block lg:hidden pl-5"
                />
              </div>
            </Link>
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
          <div className="hidden lg:block">
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:flex lg:items-center lg:justify-center lg:gap-10`}
            >
              <div className="flex gap-10 pr-36 pt-2">
                <NavItem href="/home">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/blog">Pricing</NavItem>
                <NavItem href="/blog">Service</NavItem>
                <NavItem href="/contact">Contact</NavItem>
                <div className="absolute right-8 top-4">
                  <div className="flex">
                  <div>
                    <Button
                      href="/auth/v1/login"
                      title="LOGIN"
                      className="bg-transparent py-3 px-5 text-lg"
                    />
                  </div>
                  <div>
                    <Button href="/auth/v1/signup" title="SIGN UP" />
                  </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className=" bg-black z-20">
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } bg-black relative -top-20 w-full h-screen flex items-center justify-center`}
            >
              <div className=" block lg:hidden bg-black z-20">
                <div className="flex items-center justify-center pb-2">
                  <div>
                    <NavItem href="/home">Home</NavItem>
                    <NavItem href="/about">About Us</NavItem>
                    <NavItem href="/blog">Blog</NavItem>
                    <NavItem href="/gallery">Gallery</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="pb-4 ">
                  <div>
                    <Button href="/auth/v1/login" title="Login" />
                  </div>
                  </div>
                  <div className="pb-4 ">
                  <div>
                    <Button href="/auth/v1/signup" title="Sign up" />
                  </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

function NavItem({ href, children }: Nav) {
  return (
    <li className="text-lg md:text-lg text-white hover:text-emerald-600 cursor-pointer">
      <Link href={href}>{children}</Link>
    </li>
  );
}
