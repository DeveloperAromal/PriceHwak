"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const YourComponent: React.FC = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<{
    title: string;
    price: string | null;
    image: string | null;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (url) {
      try {
        const response = await axios.post("/api/scrape", { url });
        setData({
          title: response.data.title,
          price: response.data.price,
          image: response.data.image,
        });
        setError(null);
      } catch (error: any) {
        setError(
          `Error fetching data: ${
            (error.response?.data.message || error.message) as string
          }`
        );
        setData(null);
      }
    } else {
      setError("Please enter a URL.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

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
                placeholder="Enter a new product url to track...."
                className="w-full md:w-96 h-12 rounded-lg pl-2 mr-2 md:mr-0"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
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
        {error && <p className="text-center text-red-700">{error}</p>}
        {data && (
          <div className="pt-4 flex items-center justify-center">
            <div className="flex flex-col items-center">
              {data.image && (
                <div className="flex items-center justify-center">
                  {" "}
                  <div className="w-full md:w-40 h-40 md:h-160 mb-4">
                    <Image
                      src={data.image}
                      alt="Product"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              )}
              <div className="text-black text-center">
                <p>
                  <span className="font-bold text-teal-700">Details: </span>
                  {data.title}
                </p>
                {data.price && (
                  <p>
                    <span className="font-bold text-teal-700">Price: </span>
                    {data.price}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YourComponent;
