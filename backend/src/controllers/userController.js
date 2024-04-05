const userModel = require("../models/userModel");

const userController = {
  getAlluser: (req, res, next) => {
    userModel
      .findAll()
      .then(([user]) => res.status(200).send(user))
      .catch((err) => next(err));
  },
  // getuserByType: (req, res, next) => {
  //   const { id } = req.params;
  //   userModel
  //     .findByType(id)
  //     .then((type) => res.send(type))

  //     .catch((err) => next(err));
  // },
};

module.exports = userController;