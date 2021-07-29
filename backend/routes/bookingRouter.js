const router = require("express").Router();
const Booking =require('../models/bookingModel');


router.post("/addspace", async (req, res, body) => {
    try {
      const booking ={
          buyerid:req.body.buyerid,
          buyerid:req.body.spaceid,
          date:req.body.date
      }
  
      const newBooking= new Booking({
        buyer_id:booking.buyerid,
        space_id:booking.buyerid,
        date:booking.date
  
      });
  
      const savedBooking = await newBooking.save();
      res.status(200).json(savedBooking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });




module.exports=router;