// import RemoveBtn from "./RemoveBtn";
// import Link from "next/link";
// import { HiPencilAlt } from "react-icons/hi";

// const getTopics = async () => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/topics`,
//       {
//         cache: "no-store",
//       }
//     );
//     if (!res.ok) {
//       throw new Error("Couldn't connect");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics");
//   }
// };

// // eslint-disable-next-line @next/next/no-async-client-component
// const TopicsList = async () => {
//   const { topics } = await getTopics();

//   return (
//     <>
//       {topics.map((bankData) => (
//         <div
//           key={bankData._id}
//           className="p-4 border border-slate-500 my-3 flex justify-between gap-5 items-start"
//         >
//           <div>
//             <h2 className="font-bold text-2xl">Bank Details</h2>
//             <p>
//               <strong>Vendor Name:</strong> {bankData.VendorName}
//             </p>
//             <p>
//               <strong>Bank Account:</strong> {bankData.BankAccount}
//             </p>
//             <p>
//               <strong>Bank Name:</strong> {bankData.BankName}
//             </p>
//             <p>
//               <strong>Address Line One:</strong> {bankData.AddressLineOne}
//             </p>
//             <p>
//               <strong>Address Line Two:</strong> {bankData.AddressLineTwo}
//             </p>
//             <p>
//               <strong>City:</strong> {bankData.City}
//             </p>
//             <p>
//               <strong>Country:</strong> {bankData.Country}
//             </p>
//             <p>
//               <strong>Zip Code:</strong> {bankData.ZipCode}
//             </p>
//           </div>
//           <div className="flex gap-2">
//             <RemoveBtn id={bankData._id} />
//             <Link href={`/editTopic/${bankData._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default TopicsList;
import React, { useState, useEffect } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicsList = () => {
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/topics`,
          {
            cache: "no-store",
          }
        );
        if (!res.ok) {
          throw new Error("Couldn't connect");
        }
        const data = await res.json();
        setTopics(data.topics);
        console.log(data.topics);
      } catch (error) {
        console.error("Error loading topics", error);
        setTopics([]); // Set an empty array or handle the error as appropriate
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount

  return (
    <div>
      {topics === null ? (
        // Data is still loading
        <p>Loading...</p>
      ) : topics.length === 0 ? (
        // There was an error loading data
        <p>Error loading topics</p>
      ) : (
        // Data has been loaded, render it
        topics.map((bankData) => (
          <div
            key={bankData._id}
            className="p-4 border border-slate-500 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">Bank Details</h2>
              <p>
                <strong>Vendor Name:</strong> {bankData.VendorName}
              </p>
              <p>
                <strong>Bank Account:</strong> {bankData.BankAccount}
              </p>
              <p>
                <strong>Bank Name:</strong> {bankData.BankName}
              </p>
              <p>
                <strong>Address Line One:</strong> {bankData.AddressLineOne}
              </p>
              <p>
                <strong>Address Line Two:</strong> {bankData.AddressLineTwo}
              </p>
              <p>
                <strong>City:</strong> {bankData.City}
              </p>
              <p>
                <strong>Country:</strong> {bankData.Country}
              </p>
              <p>
                <strong>Zip Code:</strong> {bankData.ZipCode}
              </p>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={bankData._id} />
              <Link href={`/editTopic/${bankData._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TopicsList;
