import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Express is working!");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
