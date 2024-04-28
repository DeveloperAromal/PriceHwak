"use client";
// pages/index.js
import React, { useState, useEffect } from "react";
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
  const [addedProducts, setAddedProducts] = useState<
    Array<{
      title: string;
      price: string | null;
      image: string | null;
    }>
  >([]);

  // Retrieve added products from local storage when component mounts
  useEffect(() => {
    const storedProducts = localStorage.getItem("addedProducts");
    if (storedProducts) {
      setAddedProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Update local storage whenever addedProducts changes
  useEffect(() => {
    localStorage.setItem("addedProducts", JSON.stringify(addedProducts));
  }, [addedProducts]);

  const fetchData = async () => {
    if (url) {
      try {
        const response = await axios.post("/api/scrape", { url });
        const newData = {
          title: response.data.title,
          price: response.data.price,
          image: response.data.image,
        };
        setData(newData);
        setError(null);
        // Update addedProducts with new data
        setAddedProducts([...addedProducts, newData]);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                className="w-full md:w-96 h-12 rounded-lg pl-2 mr-2 md:mr-0 text-neutral-900"
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
        <hr className="shad" />
        <div className="flex flex-wrap gap-10 pt-10">
          {addedProducts.map((data, index) => (
            <div key={index} className="flex  py-2">
              <div>
                {data.image && (
                  <div className="flex items-center justify-center">
                    <div className="w-64 h-64">
                      <Image
                        src={data.image}
                        alt="Product"
                        width={150}
                        height={150}
                        className="w-full h-full rounded-md shad"
                      />
                    </div>
                  </div>
                )}
                <div className="text-black text-center pt-4">
                  <p className="text-cust text-justify max-w-72 text-neutral-300">
                    {data.title}
                  </p>
                  {data.price && (
                    <p className="text-lg font-bold text-neutral-300">
                      <span className="text-teal-500">Price:</span> {data.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
