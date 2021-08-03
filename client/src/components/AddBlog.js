import React, { useState } from "react";

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    name: "",
    title: "",
    creator: "",
    content: "",
    selectedFile: "",
  });
  const clear = () => {
    setBlogData({
      name: "",
      title: "",
      creator: "",
      content: "",
      selectedFile: "",
    });
  };

  const addBlog = async () => {
    const result = await fetch(`/api/blog/add-blog`, {
      method: "post",
      body: JSON.stringify(blogData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    console.log(body);
    alert("Blog Created");
    clear();
  };

  return (
    <form className="shadow rounded px-8 pt-6 pb-8 mb-4" onSubmit={addBlog}>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Add a Comment</h3>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name :
      </label>
      <input
        type="text"
        name="name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={blogData.name}
        onChange={(e) => setBlogData({ ...blogData, name: e.target.value })}
      />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Title :
      </label>
      <input
        type="text"
        name="title"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={blogData.title}
        onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
      />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Creator :
      </label>
      <input
        type="text"
        name="creator"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={blogData.creator}
        onChange={(e) => setBlogData({ ...blogData, creator: e.target.value })}
      />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        content :
      </label>
      <textarea
        rows="4"
        cols="50"
        name="content"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={blogData.content}
        onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Blog
      </button>
    </form>
  );
};

export default AddBlog;
