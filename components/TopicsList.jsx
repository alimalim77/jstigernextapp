import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
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
    return res.json();
  } catch (error) {
    console.log("Error loading topics");
  }
};

// eslint-disable-next-line @next/next/no-async-client-component
const TopicsList = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((bankData) => (
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
      ))}
    </>
  );
};

export default TopicsList;
