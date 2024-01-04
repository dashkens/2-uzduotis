import axios from "axios";

//get
export const fetchBoardgames = async () => {
    try {
        const res = await axios.get('http://localhost:3006/boardgames');
        const fetchedBoardgames = res.data.map(boardgame => ({
            title: boardgame.title,
            body: boardgame.body,
            _id: boardgame._id,
            numberOfPlayers: boardgame.numberOfPlayers,
            complexity: boardgame.complexity,
            playingTime: boardgame.playingTime,
            myRating: boardgame.myRating,
            myNote: boardgame.myNote,
            genre: boardgame.genre
        }));
        return fetchedBoardgames;
    } catch (error) {
        console.error("Error fetching boardgames:", error);
        throw error; // Re-throw the error for the calling function to handle
    }
};

//post
// export const createBoardgame = async (createForm, setBoardgames, toast) => {
//     try {
//         //create a game and send createForm 
//         const res = await axios.post("http://localhost:3006/boardgames", createForm)

//         //update state. is needed, so the game will automatically update on the page
//         setBoardgames(prevBoardgames => [...prevBoardgames, res.data.boardgame]);

//         return toast.success('The game was created!');
//     } catch (err) {
//         console.error('Error creating game:', err);
//     }
// };