const router = require("express").Router();
const Booking = require("../models/bookingModel");

router.post("/addbooking", async (req, res, body) => {
  try {
    let buyer_id = await Booking.findOne({ _id: req.body.buyerId });
    let space_id = await Booking.findOne({ _id: req.body.spaceId });
    const booking = {
      date: req.body.date,
    };

    const newBooking = new Booking({
      buyer_id: req.body.buyer_id,
      space_id: req.body.space_id,
      date: req.body.date,
    });

    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get bookings according to user id
router.post("/buyerbookings/:id", async (req, res, body) => {
  try {
    let Bookings = await Booking.find({ buyer_id: req.params.id });

    res.status(200).json(Bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// //get bookings according to seller id
// router.post("/sellerbookings/:id", async (req, res, body) => {
//   try {
//     let bookings = await Booking.find().populate({ path: 'space_id.seller_id', model: 'User'})

//     res.status(200).json(Bookings);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
