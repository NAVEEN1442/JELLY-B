const express = require("express")
const app = express();
const database = require("./config/database")
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const imageRouter = require("./routes/index");
const CORS = require("cors");

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000','http://192.168.254.230:3000'];

app.use(CORS({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.use("/api/v1/image",imageRouter);


app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
