import React, { useState, useEffect } from "react";
import articleContent from "./article-content";

import Articles from "../components/Articles";

const ArticlesList = () => {
  const [blog, setBlog] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setBlog({ data: blog.data });
        const result = await fetch(`/api/blog/get-blog`);
        const body = await result.json();

        setBlog({ data: body });
        // console.log(body);
      } catch (e) {
        console.log(e);
        setBlog({ data: blog.data });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={blog.data} />
        </div>
      </div>
    </>
  );
};

export default ArticlesList;
