const Space = require("../models/spaceModel");
const router = require("express").Router();

//test

router.post("/addspace", async (req, res, body) => {
  try {
    let sellerOb = await User.findOne({_id:req.body.sellerId});
    const space ={
        spacetype:req.body.type,
        capacity:req.body.capacity,
        price:req.body.price,
        facilities:req.body.facilities,
    }

    const newSpace= new Space({
        seller_id:sellerOb,
        type:space.spacetype,
        capacity:space.capacity,
        price:space.price,
        facilities:space.facilities

    });

    const savedSpace = await newSpace.save();
    res.status(200).json(savedSpace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.route("/getallspaces").get((req, res) => {
  Space.find()
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/getallspaces/:id").get((req, res) => {
  Space.find({seller_id : req.params.id})
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
