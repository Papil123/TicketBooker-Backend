const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://papil1997:Papil123@cluster0.mgod2.mongodb.net/Seat_Reservation?retryWrites=true&w=majority";

// "mongodb+srv://tempData:tempdata12345@cluster0.zgpdcsv.mongodb.net/Seat_Reservation?retryWrites=true&w=majority";

// ;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });
