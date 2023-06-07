import express from "express";

const PORT = 4000;

const app = express();

// const logger = (req, res, next) => {
//   console.log("I'm in the middle");
//   // return res.send("lalala");
//   next();
// };

const logger = (req, res, next) => {
  // console.log(`Someone is going to: ${req.url}`);
  console.log(`${req.method} ${req.url}`);
  next();
};
const provateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleHome = (req, res) => {
  // return res.end();
  return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

// app.get("/", logger, handleHome);

// app.get("/", handleHome);
// app.use(logger);

app.use(logger);
app.use(provateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
