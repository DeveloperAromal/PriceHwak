"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

import BottomHero from "./BottomHero";

export default function Hero() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = () => {
    if (url) {
      axios
        .get(url)
        .then((response) => {
          const html = response.data;
          const $ = cheerio.load(html);
          const headingText = $("h1").first().text();
          setData(headingText);
          setError(null);
        })
        .catch((error) => {
          if (error.response) {
            setError(`Error fetching data: ${error.response.statusText}`);
          } else if (error.request) {
            setError(`Error fetching data: ${error.message}`);
          } else {
            setError(`Error fetching data: ${error.message}`);
          }
          setData(null);
        });
    } else {
      setError("Please enter a URL.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <section>
      <div className="px-4 md:px-8 lg:px-4 xl:px-4">
        <div className="flex items-end justify-end pt-2">
          <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center">
            <h1 className="font-extralight text-2xl text-white">A</h1>
          </div>
        </div>
        <div>
          <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl pt-10">
            Paste & See the Magic 🪄
          </h1>
          <p className="text-center text-xl pt-4">Track products, save money</p>
        </div>
        <div className="flex items-center justify-center py-10">
          <form className="w-full md:w-auto" onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter a new product url to track..."
                className="w-full md:w-96 h-12 rounded-lg pl-2 mr-2 md:mr-0"
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="px-8 py-3 bg-purple rounded-lg text-white text-md font-bold"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        {/* Display the scraped data */}
        {data && <div className="text-center">{data}</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
      </div>
      <BottomHero />
    </section>
  );
}
