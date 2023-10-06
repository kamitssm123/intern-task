require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(bodyparser.json({ limit: "10mb" }));
app.use(bodyparser.urlencoded({ limit: "10mb", extended: false }));
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.get("/api/data", (req, res) => {
  try {
    const company = {
      name: "Acme Corporation",
      industry: "Technology",
      headquarters: {
        city: "San Francisco",
        state: "California",
        country: "USA",
      },
      departments: {
        name: "Engineering",
        manager: "John Doe",
        employees: {
          name: "Bob",
          position: "Front-end Developer",
          experience: 3,
        },
      },
    };
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/", (req, res) => {
  res.json("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
