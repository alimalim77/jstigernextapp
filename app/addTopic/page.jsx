"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [formData, setFormData] = useState({
    VendorName: "",
    BankAccount: "",
    BankName: "",
    AddressLineOne: "",
    AddressLineTwo: "",
    City: "",
    Country: "",
    ZipCode: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure that the required fields are not empty.
    if (!formData.VendorName || !formData.BankAccount) {
      alert("Please enter Vendor Name and Bank Account");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Couldn't create a new topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit} action="">
      <input
        name="VendorName"
        onChange={handleChange}
        value={formData.VendorName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Vendor Name"
      />
      <input
        name="BankAccount"
        onChange={handleChange}
        value={formData.BankAccount}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Bank Account"
      />
      <input
        name="BankName"
        onChange={handleChange}
        value={formData.BankName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Bank Name"
      />
      <input
        name="AddressLineOne"
        onChange={handleChange}
        value={formData.AddressLineOne}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Address Line 1"
      />
      <input
        name="AddressLineTwo"
        onChange={handleChange}
        value={formData.AddressLineTwo}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Address Line 2"
      />
      <input
        name="City"
        onChange={handleChange}
        value={formData.City}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="City"
      />
      <input
        name="Country"
        onChange={handleChange}
        value={formData.Country}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Country"
      />
      <input
        name="ZipCode"
        onChange={handleChange}
        value={formData.ZipCode}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Zip Code"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
