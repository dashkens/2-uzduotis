import mongoose from "mongoose";

const boardgameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    numberOfPlayers: String,
    complexity: Number,
    playingTime: String,
    myRating: Number,
    myNote: String,
    genre: [String]
})

const Boardgame = mongoose.model('Boardgame', boardgameSchema)

export default Boardgame