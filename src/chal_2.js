import express from "express";

const PORT = 4000;
const date = new Date();

const app = express();

const urlLogger = (req, res, next) => {
  console.log(`Path: ${req.url}`);
  next();
};

const timeLogger = (req, res, next) => {
  console.log(
    `Time: ${date.getFullYear()}.${date.getMonth()}.${date.getDay()}`
  );
  next();
};

const securityLogger = (req, res, next) => {
  const protocol = req.protocol;
  if (protocol === "https") {
    console.log(`Secure`);
  }
  console.log(`Insecure`);
  next();
};

const protectorMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectorMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// import express from "express";

// const app = express();

// const URLLogger = (req, res, next) => {
//   console.log("Path: ", req.path);
//   next();
// };

// const timeLogger = (req, res, next) => {
//   const now = new Date();
//   console.log(`Time: ${now.getFullYear()}.${now.getMonth()}.${now.getDate()}`);
//   next();
// };

// const protectorLogger = (req, res, next) => {
//   if (req.path === "/protected") {
//     return res.send("<h1>Forbidden</h1>");
//   }
//   next();
// };

// const secureLogger = (req, res, next) => {
//   if (req.protocol === "https") {
//     console.log("Secure ✅");
//   } else {
//     console.log("Insecure ❌");
//   }
//   next();
// };

// app.use(URLLogger, timeLogger, secureLogger, protectorLogger);
// app.get("/", (req, res) => res.send("<h1>Home!</h1>"));
// app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// app.listen(() => `Listening!✅`);
