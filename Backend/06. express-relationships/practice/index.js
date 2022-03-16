const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");

const app = express();

app.use(express.json()); //json dont

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sumit:sumit1234@cluster0.wdhhx.mongodb.net/myDBAtlas?authSource=admin&replicaSet=atlas-10rf3t-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
  );
};

//USER SCHEMA
//Step1: create the schema

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

//step 2: create the model
const User = mongoose.model("user", userSchema); // user => users

//POST SCHEMA
//Step: create the schema
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamp: true, //createdAt, updatedAt
  }
);

//step: create the model
const Post = mongoose.model("post", postSchema);

// COMMENT Schema
// Step 1 :- create the schema
const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
// Step 2 :- create the model
const Comment = mongoose.model("comment", commentSchema); // comment => comments

// CRUD OPERATIONS
// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server

//USERS CRUD
app.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send({ users: users }); //[]
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// body => req.body
// url => req.params
// query string => req.query

app.get("/users/:id", async (req, res) => {
  try {
    // console.log(req.params)
    const user = await User.findById(req.params.id).lean().exec();
    // db.users.update({_id: Object('6231a06cc4ca0386282c5349')}, {$set: {req.body}})

    return res.status(200).send({ user: user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    // db.users.update({_id: Object('6231a06cc4ca0386282c5349')}, {$set: {req.body}})

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

//When yoyu use populate(), something like this happen
// const post = db.posts.findOne({_id: object("djfbhjfdsb")})
// const user = db.users.findOne({_id:  post.userId})
//post.userId = user;
// POSTS CRUD
app.get("/posts", async (req, res) => {
  try {
    // const posts = await Post.find().populate({path:"userId", select:["firstName"]}).lean().exec();
    const posts = await Post.find()
      .populate({
        path: "userId",
        select: { firstName: 1, _id: 0 },
      })
      .lean()
      .exec();

    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);

    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).lean().exec();

    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
//Check once
app.patch("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(post);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Comment CURD

app.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate({
        path: "postId",
        select: ["title"],
        populate: { path: "userId", select: ["FirstName"] },
      })
      .populate({ path: "userId", select: ["FirstName"] })
      .lean()
      .exec();

    return res.status(200).send(comments);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.post("/comments", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);

    return res.status(200).send(comment);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.get("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
      .populate({
        path: "postId",
        select: ["title", "body"],
        populate: { path: "userId", select: ["password"] },
      })
      .populate({ path: "userId", select: ["firstName"] })
      .lean()
      .exec();

    return res.status(200).send(comment);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.patch("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate({
        path: "postId",
        select: ["title"],
        populate: { path: "userId", select: ["firstName"] },
      })
      .populate({
        path: "userId",
        select: ["email"],
      })
      .lean()
      .exec();

    return res.status(200).send(comment);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.delete("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(comment);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.listen(5000, async () => {
  try {
    await connect();
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port 5000");
});
