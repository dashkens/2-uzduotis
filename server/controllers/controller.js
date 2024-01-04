// import { send } from 'process'

import Boardgame from "../models/boardgame.js"

export const bg_get = async(req, res) => {
    //find all games
    const boardgames = await Boardgame.find()
        .then(boardgames => res.json(boardgames))
        .catch(err => console.log(err))
}

// fetching one boardgame by ID
export const bg_get_one = async(req,res) =>{
    const game = await Boardgame.findById(req.params.id)
        .then(game => res.json(game))
        .catch(err => console.log(err))
}

export const bg_post = async(req, res) => {
    //get the sent data off request body
    const {title, body, numberOfPlayers, complexity, playingTime, myRating, myNote, genre} = req.body

    try {
         //create a game with it
        const boardgame = await Boardgame.create({title, body, numberOfPlayers, complexity, playingTime, myRating, myNote, genre})
        // res.json({boardgame})
        res.status(201).json({boardgame})
    } catch(err) {
        res.status(400).json({ error: err.message });
        
    }
}

export const bg_put = (req,res) => {
    Boardgame.findByIdAndUpdate({_id: req.params.id}, req.body)
    //respond with the game
    .then(() => {
        Boardgame.findOne({_id: req.params.id}) 
            .then(game => res.json(game))
    })
    .catch(err => {
        console.log(err)
        req.status(500).json({error: 'Internal server error'})
    })
    
}


export const bg_delete = (req, res) => {
    Boardgame.findByIdAndDelete({_id: req.params.id})
        .then((deletedBoardgame) => {
        if (deletedBoardgame) {
            res.json({ success: "Game was deleted successfully" });
        } else {
            res.status(404).json({ error: "Game was not found" });
        }
        })
        .catch((err) => {
        console.error('Error deleting game:', err);
        res.status(500).json({ error: 'Internal server error' });
        });
    };