// @ts-types="npm:express@4.21.2"
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const logger = function (req, res, next) {
  console.log(`LOG ${req.method} ${req.path}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/login", (req, res) => {
  res.set("Cache-Control", "no-store");
  const { userId } = req.query;
  if (userId && userId > 0) {
    setTimeout(() => {
      res.json({
        token: "token-0xEE95DC-" + userId,
      });
    }, 1000);
  } else {
    console.log("login error, no userId parameter");
    res.status(400).json({ error: "no userId parameter" });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
