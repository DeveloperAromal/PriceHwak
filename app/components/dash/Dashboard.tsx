"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "next/image";
import "@fontsource/dancing-script";
import { ScaleLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import SidebarComponent from "./dash_components/Sidebar";
import Hamburger from "./dash_components/Ham";

const supabase = createClientComponentClient();

const Dashboard: React.FC = () => {
  const router = useRouter();

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
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
  const [showSignOut, setShowSignOut] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const userEmail = session.user.email || null;
        setEmail(userEmail);
      } else {
        setEmail(null);
      }
    });

    return () => {
      subscription.data.subscription.unsubscribe();
    };
  }, []);

  const fetchData = async () => {
    if (url) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:8000/api/scrape",
          { url },
          { timeout: 60000 }
        );

        const newData = {
          title: response.data.title,
          price: response.data.price,
          image: response.data.image,
          url: url,
          email: email,
        };

        const { data: insertedData, error } = await supabase
          .from("Pricehawk_Database")
          .insert([newData]);

        if (error) {
          throw error;
        }

        setData(newData);
        setError(null);
        setAddedProducts([newData]);
      } catch (error: any) {
        setError(
          `Error fetching data: ${
            (error.response?.data.message || error.message) as string
          }`
        );
        setData(null);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please enter a URL.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  const toggleSignOut = () => {
    setShowSignOut(!showSignOut);
  };

  return (
    <section className="flex">
      <SidebarComponent />
      <Hamburger />
      <div className="w-full">
        <div>
          <div className="pt-20">
            <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl pt-10">
              Paste the link
            </h1>
            <p
              className="text-center text-2xl md:text-3xl lg:text-5xl pt-4"
              style={{ fontFamily: "Dancing Script" }}
            >
              and see the magic
            </p>
          </div>
          <div className="flex items-center justify-center py-10">
            <form className="w-full md:w-auto" onSubmit={handleSubmit}>
              <div className="flex px-4">
                <input
                  type="text"
                  placeholder="Enter a new product url to track...."
                  className="w-full md:w-96 h-12 rounded-tl-md rounded-bl-md pl-2 border-2 text-neutral-300 bg-transparent border-white"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white rounded-tr-md rounded-br-md text-black text-md font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
          {loading && (
            <div className="flex justify-center py-4">
              <ScaleLoader color="gray" />
            </div>
          )}
          {error && <p className="text-center text-red-700">{error}</p>}
          <div className="flex items-center justify-center px-8 sm:px-20">
            {addedProducts.slice(0, 1).map((data, index) => (
              <div key={index} className="py-4">
                <div className="border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row">
                  {data.image && (
                    <div className="flex-none">
                      <Image
                        src={data.image}
                        alt="Product"
                        width={400}
                        height={400}
                        className="rounded-lg md:rounded-l-lg md:rounded-r-none"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center p-4 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                      {data.title}
                    </h2>
                    {Array.isArray(data.price) ? (
                      <div>
                        <p className="text-base md:text-lg font-bold text-gray-700 mt-2">
                          <span className="text-teal-500">Prices:</span>
                        </p>
                        {data.price.map((price, index) => (
                          <p
                            key={index}
                            className="text-base md:text-lg font-bold text-gray-700"
                          >
                            {price}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-base md:text-lg font-bold text-gray-700">
                        <span className="text-teal-500">Price:</span>{" "}
                        {data.price}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
