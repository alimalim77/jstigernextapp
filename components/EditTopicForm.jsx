"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3000/api/topics/${id}`,

        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );
      if (!res.ok) {
        throw new Error("Couldn't connect to server");
      }
      router.push("/");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
      <input
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
