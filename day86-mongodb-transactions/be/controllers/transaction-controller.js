const User = require("../models/User");
const ShippingAddress = require("../models/ShippingAddress");
const Product = require("../models/Product");

exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();
    const product = await Product.updateOne(
      { _id: "64224e2b4a59191c29a4f316" },
      { quantity: 4 },
      { session }
    );
    const user = await User.create(req.body.user, { session });
    const shippingAddress = await ShippingAddress.create(
      req.body.shippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();

    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.createTransactionWithOutSession = async (req, res) => {
  try {
    const product = await Product.updateOne(
      { _id: "64224e2b4a59191c29a4f316" },
      { quantity: 5 }
    );

    const user = await User.create(req.body.user);
    const shippingAddress = await ShippingAddress.create({
      address: req.body.shippingAddress,
      user_id: user._id,
    });

    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};
