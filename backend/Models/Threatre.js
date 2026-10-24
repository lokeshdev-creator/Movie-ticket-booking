const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
    theaterName: {
        type: String,
        required: true,
    },
    theaterId: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
    },
    balconySeatPrice: { type: Number, required: true },
    middleSeatPrice: { type: Number, required: true },
    lowerSeatPrice: { type: Number, required: true },


    balconyLayout: {
        rows: { type: Number, required: true },
        seatsPerRow: { type: Number, required: true }
    },
    middleLayout: {
        rows: { type: Number, required: true },
        seatsPerRow: { type: Number, required: true }
    },
    lowerLayout: {
        rows: { type: Number, required: true },
        seatsPerRow: { type: Number, required: true }
    }
}, { timestamps: true });

module.exports = mongoose.model("Theater", theatreSchema);
