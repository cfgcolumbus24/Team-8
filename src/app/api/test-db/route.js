console.log("Calling handler function");

export async function GET(req, res) {
  console.log("API route hit"); // Log to confirm the route is accessed

  const mongoose = require("mongoose");

  const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected to the database.");
      return;
    }
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };

  await connectDB();
  return Response.json({message: 'Connected to the database successfully'})
}

