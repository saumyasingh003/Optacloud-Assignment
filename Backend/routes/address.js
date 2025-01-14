const express = require("express");
const Address = require("../models/Address");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Save address
router.post("/save", authMiddleware, async (req, res) => {
  const { houseNo, apartment, category, fullAddress } = req.body;
  try {
    const address = new Address({
      user: req.user.id,
      houseNo,
      apartment,
      category,
      fullAddress: fullAddress
    });
    await address.save();

    console.log("rea : ", req.body);

    res.json({ msg: "Address saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete address
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) return res.status(404).json({ msg: "Address not found" });

    if (address.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    console.log("address : ", address);

    await address.deleteOne();
    res.json({ msg: "Address deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get all addresses for user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const addresses = await Address.find({ user: req.user.id });
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
