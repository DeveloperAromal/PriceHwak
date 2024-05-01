"use client";
import Image from "next/image";
import Navbar from "../includes/Navbar";
import Button from "../includes/Button";
import "@fontsource/dancing-script";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-4">
      <div className="top">
        <Navbar />
      </div>
      <section className="top relative py-20 sm:py-10 md:py-10 lg:py-10">
        <div className="w-20 md:w-40 h-20 md:h-40 absolute top-0 md:right-1/4 rounded-full bg-cyan-600 blur">
          .
        </div>
        <div className="w-20 md:w-40 h-20 md:h-40 absolute top-0 md:right-1/4 bg-emerald-6900 blur">
          .
        </div>
        <div className="w-20 md:w-40 h-20 md:h-40 absolute top-0 md:left-1/4 rounded-full bg-teal-400 blur">
          .
        </div>
        <div className="w-20 md:w-40 h-20 md:h-40 absolute top-0 md:left-1/4 bg-teal-900 blur">
          .
        </div>
        <div className="top text-center pt-6 pb-5">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-5 text-3xl lg:text-7xl md:text-6xl sm:text-5xl"
          >
            Your Money's Important
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-2 lg:mt-6 md:mt-6 text-2xl lg:text-6xl md:text-4xl sm:text-3xl"
            style={{ fontFamily: "Dancing Script" }}
          >
            so don't waste time
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-center text-xs lg:text-2xl md:text-2xl sm:text-2xl mb-3"
          >
            with pricewise, you can track e-commerce product prices <br />
            and plan perfectly when to buy them
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="pt-4"
          >
            <Button href="/auth/v1/signup" title="Try a demo" />
          </motion.div>
        </div>
        <div className="flex items-center justify-center pt-20 ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="max-w-full box-shad-teal rounded-2xl"
          >
            <Image
              src="/assets/images/github.png"
              alt="github"
              width={1300}
              height={25}
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
}
