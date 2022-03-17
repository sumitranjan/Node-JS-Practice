const express = require("express");

const usersController = require("./controllers/user.controllers");
const postsController = require("./controllers/post.controllers");
const commentsController = require("./controllers/comment.controllers");



const connect = require("./configs/db")


const app = express();

app.use(express.json()); //json dont


app.use("/users",usersController);// /users/abcd/fkhsdkfh/fkhsdk
app.use("/posts",postsController);
app.use("/comments",commentsController);


app.listen(5000, async () => {
  try {
    await connect();
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port 5000");
});
