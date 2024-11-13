const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectDatabase = require("./utils/connectDB");
const cors = require("cors");
const fileUpload = require("express-fileupload");

PORT = 8080;
const app = express();
app.use(fileUpload({ useTempFiles: true }));
const corsOpts = {
  origin: "https://data-wiz-client.vercel.app",
  methods: ["POST"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOpts));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
  connectDatabase();
});
