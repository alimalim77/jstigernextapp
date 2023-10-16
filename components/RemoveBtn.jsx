import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id, setTopics }) => {
  const router = useRouter();

  const handleRemoveTopic = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this topic?"
    );

    if (confirmDelete) {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/topics?id=${id}`,
          {
            method: "DELETE",
          }
        );
        setTopics((topics) => topics.filter((topic) => topic._id !== id));
      } catch (error) {
        console.error("Error deleting topic", error);
      }
    }
  };

  return (
    <button onClick={handleRemoveTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
