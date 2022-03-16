const post = (model) => async (req, res) =>{
    try {
      const user = await model.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }

  };

  module.exports = (model) =>{
      return {
          post: post(model)
      }
  }