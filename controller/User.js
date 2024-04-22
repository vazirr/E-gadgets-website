const { Category } = require("../model/Category");
const { User } = require("../model/User");

exports.fetchUserById = async (req, res) => {
  const { id } = req.user;
  console.log(id);
  try {
    const user = await User.findById(id);

    res.status(200).json({
      id: user.id,
      addresses: user.addresses,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
