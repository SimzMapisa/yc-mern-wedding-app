const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    attended: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("guest", guestSchema);
