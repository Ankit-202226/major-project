const mongoose = require("mongoose");
const { data } = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const ownerid = "68a959f3804678c0164be046";
  const updatedData = data.map((obj) => ({
    ...obj,
    owner: ownerid,
  }));
  await Listing.insertMany(updatedData);
  console.log("data was initialized");
};

initDB();
