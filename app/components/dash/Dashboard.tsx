"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "next/image";
import "@fontsource/dancing-script";
import { ScaleLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import SidebarComponent from "./Sidebar";
import Hamburger from "./Ham";

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
          "/api/scrape",
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
          <div className="pt-20 pr-10">
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
          <div className="flex items-center justify-center py-10 pr-10">
            <form className="w-full md:w-auto" onSubmit={handleSubmit}>
              <div className="flex">
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
            <div className="flex justify-center py-4 pr-10">
              <ScaleLoader color="cyan" />
            </div>
          )}
          {error && <p className="text-center text-red-700 pr-1o">{error}</p>}
          <div className="flex items-center justify-center gap-10 pt-10 pr-10">
          {addedProducts.slice(0, 1).map((data, index) => (
  <div key={index} className="flex py-2">
    <div>
      {data.image && (
        <div className="flex items-center justify-center pr-14">
          <div className="w-64 h-64">
            <Image
              src={data.image}
              alt="Product"
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
      <div className="text-black text-center pt-4">
        <p
          className="text-cust text-justify max-w-72 text-neutral-300"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {data.title}
        </p>
        {Array.isArray(data.price) ? (
          <div>
            <p className="text-lg font-bold text-neutral-300">
              <span className="text-teal-500">Prices:</span>
            </p>
            {data.price.map((price, index) => (
              <p key={index} className="text-lg font-bold text-neutral-300">
                {price}
              </p>
            ))}
          </div>
        ) : (
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
      </div>
    </section>
  );
};

export default Dashboard;
