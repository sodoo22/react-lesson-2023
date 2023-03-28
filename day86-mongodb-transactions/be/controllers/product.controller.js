const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();
    const user = await User.create(req.body.user, { session });
    const shippingAddress = await ShippingAddress.create(
      req.body.shippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();

    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ status: true, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};
