const Guest = require("../models/guest");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const guest = await new Guest(req.body).save();
        res.send(guest);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const guests = await Guest.find();
        res.send(guests);
    } catch (error) {
        res.send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const guest = await Guest.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(guest);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const guest = await Guest.findByIdAndDelete(req.params.id);
        res.send(guest);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
