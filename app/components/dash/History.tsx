"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

import Image from "next/image";

const supabase = createClientComponentClient();

const History: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [addedProducts, setAddedProducts] = useState<
    Array<{
      title: string;
      price: string | null;
      image: string | null;
    }>
  >([]);
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const userEmail = session.user.email || null;
        setEmail(userEmail);
      } else {
        setEmail(null);
      }
    });
  
    // Trigger fetchUserHistory whenever email changes
    if (email !== null) { // Check if email is not null
      fetchUserHistory(email);
    }
  
    return () => {
      if (subscription.data) {
        subscription.data.subscription.unsubscribe();
      }
    };
  }, [email]); // Dependency on email
   // Dependency on email

  const fetchUserHistory = async (email: string | null) => {
    if (email) {
      try {
        setLoading(true);
        const { data, error }: PostgrestSingleResponse<any[]> = await supabase
          .from("Pricehawk_Database")
          .select("*")
          .eq("email", email);

        if (error) {
          throw error;
        }

        if (data) {
          setAddedProducts(data);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="py-8 px-8">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
                <p
                  className="text-cust text-justify max-w-64 text-neutral-300"
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
    </section>
  );
};

export default History;
