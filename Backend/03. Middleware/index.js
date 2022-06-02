const express = require("express");

const app = express();

//logger is middleware

app.use(logger); // logger() logger

//app.use() function automatically call  middleware, no need to call explicitly

app.get("/users", logger, logger, logger, (req, res) => {
  return res.send({ route: "/users", role: req.role });
});

app.get("/students", (req, res) => {
  return res.send({ route: "/students", role: req.role });
});

app.get("/admin", (req, res) => {
  return res.send({ route: "/admin", role: req.role });
});

app.get("/products", loggedIn("seller"), (req, res) => {
  return res.send("Yes you can get the product");
});

function loggedIn(role) {
  return function logger(req, res, next) {
    if (role === "seller") {
      return next();
    }
    return res.send("Not allowed");
  };
}

function logger(req, res, next) {
  if (req.path === "/users") {
    req.role = "user";
  } else if (req.path === "/admin") {
    req.role = "admin";
  } else {
    req.role = "somebody";
  }
  console.log("called");
  next(); // next() fun tells that now the middleware code is over
  //It will take from where middleware is called (i.app.use())
}

app.listen(5000, () => {
  console.log("listening on port 5000");
});

/*
  Middleware is something which works before the request reaches the route handler 
  and also after the response leaves the route handler
*/
