const express = require("express")
const app = express();
const database = require("./config/database")
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");


const imageRouter = require("./routes/index");
const userRouter = require("./routes/User");

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);


const allowedOrigins = [
  'http://localhost:3000', // your local development
  'https://jelly-b.vercel.app' // add the Vercel domain here
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, etc.) or from the allowed list
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // include this if you need cookies or authorization headers
}));



app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.use("/api/v1/image",imageRouter);
app.use("/api/v1/auth",userRouter);

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
