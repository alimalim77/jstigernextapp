// import EditTopicForm from "@/components/EditTopicForm";

// const getTopicById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Couldn't get topic");
//     }
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const EditTopic = async ({ params }) => {
//   const { id } = params;
//   const { topic } = await getTopicById(id);
//   const { title, description } = topic;
//   console.log("Current is", title, description);
//   return <EditTopicForm id={id} title={title} description={description} />;
// };

// export default EditTopic;
import EditTopicForm from "@/components/EditTopicForm";

const getBankNameById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Couldn't get bankName");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const EditTopic = async ({ params }) => {
  const { id } = params;
  const bankData = await getBankNameById(id);
  console.log("Current bankData is", bankData);

  // Unpack the values
  const {
    vendorName,
    bankName,
    bankAccount,
    addressLineOne,
    addressLineTwo,
    city,
    country,
    zipCode,
  } = bankData;

  return (
    <EditTopicForm
      id={id}
      vendorName={vendorName}
      bankName={bankName}
      bankAccount={bankAccount}
      addressLineOne={addressLineOne}
      addressLineTwo={addressLineTwo}
      city={city}
      country={country}
      zipCode={zipCode}
    />
  );
};

export default EditTopic;
