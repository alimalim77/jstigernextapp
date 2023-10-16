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
  const { topic } = await getBankNameById(id);

  console.log(topic);

  // Unpack the values
  const {
    VendorName,
    BankAccount,
    BankName,
    AddressLineOne,
    AddressLineTwo,
    City,
    Country,
    ZipCode,
  } = topic;

  return (
    <EditTopicForm
      id={id}
      vendorName={VendorName}
      bankName={BankName}
      bankAccount={BankAccount}
      addressLineOne={AddressLineOne}
      addressLineTwo={AddressLineTwo}
      city={City}
      country={Country}
      zipCode={ZipCode}
    />
  );
};

export default EditTopic;
