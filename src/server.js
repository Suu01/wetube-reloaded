import express from "express";
// const express = require("express");

const PORT = 4000;

const app = express();

// const handleHome = (req, res) => console.log("Somebody is trying to go home.");
const handleHome = (req, res) => {
  //   console.log(req);
  //   console.log(res);
  //   return res.end();
  return res.send("<h1>I still love you.</h1>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// app.listen(4000, console.log("Server listening on port 4000"));
