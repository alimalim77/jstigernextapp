import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// export async function PUT(request, { params }) {
//   const { id } = params;
//   console.log(id);
//   const { title, description } = await request.json();
//   await connectMongoDB();
//   await Topic.findByIdAndUpdate(id, { title, description });
//   return NextResponse.json(
//     { message: "Topic updated successfully" },
//     { status: 200 }
//   );
// }
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    await connectMongoDB(); // Connect to your MongoDB

    // Assuming you have a Topic model that matches the new schema
    const updatedData = {
      VendorName: data.VendorName,
      BankName: data.BankName,
      BankAccount: data.BankAccount,
      AddressLineOne: data.AddressLineOne,
      AddressLineTwo: data.AddressLineTwo,
      City: data.City,
      Country: data.Country,
      ZipCode: data.ZipCode,
    };
    console.log("Final PUT Req", id, updatedData);
    // Update the topic with the new data
    await Topic.findByIdAndUpdate(id, updatedData);

    return new Response(
      JSON.stringify({ message: "Topic updated successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error updating topic" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
