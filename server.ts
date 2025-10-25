import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Express is working!");
});

app.get("/ping", (req, res) => {
  res.send({ success: true, message: "Pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
