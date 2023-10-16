import mongoose, { Schema } from "mongoose";
const topicSchema = new Schema(
  {
    VendorName: String,
    BankAccount: String,
    BankName: String,
    AddressLineOne: String,
    AddressLineTwo: String,
    City: String,
    Country: String,
    ZipCode: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic;
