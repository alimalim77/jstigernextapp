"use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import React from "react";

// const EditTopicForm = ({ id, title, description }) => {
//   const [newTitle, setNewTitle] = useState(title);
//   const [newDescription, setNewDescription] = useState(description);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(
//         `http://localhost:3000/api/topics/${id}`,

//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             title: newTitle,
//             description: newDescription,
//           }),
//         }
//       );
//       console.log(
//         JSON.stringify({
//           title: newTitle,
//           description: newDescription,
//         })
//       );
//       if (!res.ok) {
//         throw new Error("Couldn't connect to server");
//       }
//       router.push("/");
//       router.refresh();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
//       <input
//         onChange={(e) => {
//           setNewTitle(e.target.value);
//           console.log(newTitle);
//         }}
//         value={newTitle}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Topic Title"
//       />
//       <input
//         onChange={(e) => {
//           setNewDescription(e.target.value);
//         }}
//         value={newDescription}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Topic Description"
//       />
//       <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
//         Update Topic
//       </button>
//     </form>
//   );
// };

// export default EditTopicForm;
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

const EditTopicForm = ({
  id,
  vendorName,
  bankName,
  bankAccount,
  addressLineOne,
  addressLineTwo,
  city,
  country,
  zipCode,
}) => {
  const [newVendorName, setNewVendorName] = useState(vendorName);
  const [newBankName, setNewBankName] = useState(bankName);
  const [newBankAccount, setNewBankAccount] = useState(bankAccount);
  const [newAddressLineOne, setNewAddressLineOne] = useState(addressLineOne);
  const [newAddressLineTwo, setNewAddressLineTwo] = useState(addressLineTwo);
  const [newCity, setNewCity] = useState(city);
  const [newCountry, setNewCountry] = useState(country);
  const [newZipCode, setNewZipCode] = useState(zipCode);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "vendorName") {
      setNewVendorName(value);
    } else if (name === "bankName") {
      setNewBankName(value);
    } else if (name === "bankAccount") {
      setNewBankAccount(value);
    } else if (name === "addressLineOne") {
      setNewAddressLineOne(value);
    } else if (name === "addressLineTwo") {
      setNewAddressLineTwo(value);
    } else if (name === "city") {
      setNewCity(value);
    } else if (name === "country") {
      setNewCountry(value);
    } else if (name === "zipCode") {
      setNewZipCode(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          VendorName: newVendorName,
          BankName: newBankName,
          BankAccount: newBankAccount,
          AddressLineOne: newAddressLineOne,
          AddressLineTwo: newAddressLineTwo,
          City: newCity,
          Country: newCountry,
          ZipCode: newZipCode,
        }),
      });
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
        name="vendorName"
        onChange={handleChange}
        value={newVendorName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Vendor Name"
      />
      <input
        name="bankName"
        onChange={handleChange}
        value={newBankName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Bank Name"
      />
      <input
        name="bankAccount"
        onChange={handleChange}
        value={newBankAccount}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Bank Account"
      />
      <input
        name="addressLineOne"
        onChange={handleChange}
        value={newAddressLineOne}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Address Line 1"
      />
      <input
        name="addressLineTwo"
        onChange={handleChange}
        value={newAddressLineTwo}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Address Line 2"
      />
      <input
        name="city"
        onChange={handleChange}
        value={newCity}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="City"
      />
      <input
        name="country"
        onChange={handleChange}
        value={newCountry}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Country"
      />
      <input
        name="zipCode"
        onChange={handleChange}
        value={newZipCode}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Zip Code"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
