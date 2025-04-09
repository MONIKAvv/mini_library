const express = require("express");
const connectDB = require('./config/db')
const routes = require('./routes/book')
const cors = require("cors")
const bodyParser = require("body-parser");
const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(upload());

connectDB();
//routes
app.use("/books", routes);

app.listen(8000, () => {
  console.log("Server is running in PORT 8000");
})