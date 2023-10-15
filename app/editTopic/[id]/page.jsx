import EditTopicForm from "@/components/EditTopicForm";

const EditTopic = ({ params }) => {
  const { id } = params;
  console.log(id);
  return <EditTopicForm />;
};

export default EditTopic;
