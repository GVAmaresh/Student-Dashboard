"use client";
import AibotCard from "@/components/Card/AIbot/AibotCard";
import SearchBar from "@/components/Card/AIbot/SearchBar";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (newPrompt: string) => {
    setPrompt(newPrompt);
  };

  useEffect(() => {
    console.log(content);
    const fetchData = async () => {
      setLoading(true);
      if (prompt === "") return;
      try {
        const response = await fetch("http://127.0.0.1:8000/input", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: prompt }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContent(data.bot);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    setPrompt("");
    setContent("");
  }, [prompt]);

  return (
    <div className=" p-24">
      <div className="flex justify-center items-center -mt-2 mb-2 ">
        <h1 className=" font-bold text-4xl">
          An AI Based Student <span className="text-indigo-700">Bot</span>
        </h1>
      </div>
      <div className="w-full">
        {loading ? (
          <AibotCard answer={content} />
        ) : (
          <>
            {content.length === 0 ? (
              <AibotCard answer={content} />
            ) : (
              <AibotCard answer={content} />
            )}
          </>
        )}
        <div className="w-full">
          <div className="mt-12">
            <SearchBar handleSubmit={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
