export {};
const User = require("../models/User");
const generateToken = require("../managers/TokenManager");

module.exports = {
  async index(req, res) {
    return res.send("GET ALL");
  },

  async show(req, res) {
    let { email } = req.body;

    let user = await findUserByEmail(email);
  },

  async store(req, res) {
    try {
      const user = await createUser(req.body);

      return res.send({
        user,
        token_id: generateToken({ id: user.id })
      });
    } catch (error) {
      return res.status(400).send(error);
    }

    // let userRegistered = await findUserByEmail(email);

    // if (userRegistered) {
    //   // TODO Error message
    //   res.send("This email is already been used");
    // } else {
    //   // TODO Register USER
    //   res.send("User successfully registered ");
    // }
  },

  async update() {},

  async destroy() {}
};

async function findUserByEmail(email) {
  return await User.findOne({ email });
}

async function createUser(user) {
  return await User.create(user);
}
