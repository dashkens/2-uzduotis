//dependencies, elemenets
import { useEffect, useState } from "react";
import axios from "axios"
import {Routes, Route, BrowserRouter} from "react-router-dom";
import '../index.css'

//layout
import RootLayout from '../components/layouts/RootLayout'


//pages/comp
import NotFound from "../components/pages/NotFound";
import BoardgamesList from "./pages/BoardgameList/BoardgamesList";
import UpdateForm from "../components/pages/UpdateForm";
import CreateForm from "./pages/CreateForm/CreateForm";
import Home from '../components/pages/Home'


//functions
import { fetchBoardgames } from "../utils/functions";


function BoardgamesComp() {

    //states
    const [boardgames, setBoardgames] = useState(null)
    const [createForm, setCreateForm] = useState({title: "", body: "", numberOfPlayers: "", complexity: null, genre: [], myNote:"", myRating: null})
    const [updateForm, setUpdateForm] = useState({_id: null, title: "", body: "", numberOfPlayers: "", complexity: null, genre: [], myNote:"", myRating: null})

    //use effects
    //using fetchBoardgames from utils
    useEffect(() => {
        const fetchData = async() => {
            try {
                const fetchedBoardgames = await fetchBoardgames()
                setBoardgames(fetchedBoardgames)
            } catch (error) {
                console.log('Error fetching board games')
            }
        }
        fetchData()
    }, [])

    // functions
    
    const updateCreateFormField = (e) => {
    // Will get name, value, type, and checked from inputs
    const { name, value, type, checked } = e.target;
    // Update state based on input type
    setCreateForm((prevCreateForm) => {
        if (type === 'checkbox' && name === 'genre') {
            // Handle changes to the genre field (array)
            if (checked) {
                // If checked, add the genre to the array
                return {
                    ...prevCreateForm,
                    genre: [...prevCreateForm.genre, value],
                };
            } else {
                // If unchecked, remove the genre from the array
                return {
                    ...prevCreateForm,
                    genre: prevCreateForm.genre.filter(
                        (selectedGenre) => selectedGenre !== value
                    ),
                };
            }
        } else {
            // Handle changes to other fields
            return {
                ...prevCreateForm,
                [name]: value,
            };
        }
    });
    };



    const createBoardgame = async(e) => {
    e.preventDefault()

        try {
            //create a game and send createForm 
            const res = await axios.post("http://localhost:3006/boardgames", createForm)

            //update state. is needed, so the game will automatically update on the page
            setBoardgames([...boardgames, res.data.boardgame])
            
            //clear form state, so after adding the text from input would disappear
            setCreateForm({title: "", body: "", playingTime: "", complexity: null, genre: [], myNote:"", myRating: null})

            window.location.href = "/boardgames";

            
        } catch (err) {
            console.error('Error creating game');
        }
    }


    const handleDelete = async(_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this boardgame?")
    if(confirmDelete) {
        try {
        // Delete
        await axios.delete(`http://localhost:3006/boardgames/${_id}`);
        console.log('Game was deleted');

        //Update state 
        setBoardgames((prevBoardgames) =>
            prevBoardgames.filter((boardgame) => boardgame._id !== _id)
        );
        } catch (error) {
        console.error('Error deleting game:', error);
        }
    }

}


    const toggleUpdate = (boardgame) => {
    // set state on update form 
    setUpdateForm({
        _id: boardgame._id,
        body: boardgame.body,
        title: boardgame.title,
        numberOfPlayers: boardgame.numberOfPlayers,
        playingTime: boardgame.playingTime,
        complexity: boardgame.complexity,
        genre: boardgame.genre,
        myNote: boardgame.myNote,
        myRating: boardgame.myRating
    })

    }

    const handleUpdateFieldChange = (e) => {
    const { name, value, type, checked } = e.target;

    // handle changes to checkbox
    if (type === 'checkbox' && name === 'genre') {
        setUpdateForm((prevUpdateForm) => {
        if (checked) {
            return {
            //...prevUpdateForm - array of the current updateForm state
            ...prevUpdateForm,
            //value appends a new value to the genre array
            genre: [...prevUpdateForm.genre, value],
            };
        } else {
            // remove a value from the genre array
            return {
            ...prevUpdateForm,
            genre: prevUpdateForm.genre.filter(
                (selectedGenre) => selectedGenre !== value
            ),
            };
        }
        });
    } else {
        // handle changes to other fields
        setUpdateForm((prevUpdateForm) => ({
        ...prevUpdateForm,
        [name]: value,
        }));
    }
    };

    const handleUpdate = async(e) => {
    e.preventDefault()
    const {title, body, numberOfPlayers, playingTime, complexity, genre, myNote, myRating} = updateForm
    //update request

    console.log('Before Update:', updateForm);

    try {
        // Update request
        const res = await axios.put(`http://localhost:3006/boardgames/${updateForm._id}`, { title, body, numberOfPlayers, playingTime, complexity, genre, myNote, myRating });
        // Update state
        setBoardgames((prevBoardgames) =>
        prevBoardgames.map((boardgame) =>
            boardgame._id === updateForm._id ? res.data : boardgame //res.data - updated data
        )
        );
        // Reset the update form
        setUpdateForm({ _id: null, title: "", body: "", numberOfPlayers: "", playingTime: "", complexity: null, genre: [], myNote:"" });

        console.log('Update Response:', res.data);
        window.location.href = "/boardgames";

        
    } catch (error) {
        console.error('Error updating game');
    }

   
    }

    return (

    <div className="boardgame-comp">

    {/* router */}
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<RootLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/boardgames'>
                <Route index element={<BoardgamesList 
                    boardgames={boardgames}
                    handleDelete={handleDelete}
                    toggleUpdate={toggleUpdate}
                />}
                />
            {/* galimai reikes / */}
                <Route path='edit-boardgame/:id' element={<UpdateForm updateForm={updateForm} handleUpdate={handleUpdate} handleUpdateFieldChange={handleUpdateFieldChange}/>}/> 
                <Route path='create-boardgame' element={
                <CreateForm
                    createForm={createForm}
                    updateCreateFormField={updateCreateFormField}
                    createBoardgame={createBoardgame}
                />}/>
            </Route>
            
            <Route path='*' element={<NotFound/>}/>
        </Route>
    </Routes>
    </BrowserRouter>


    </div>
    );
}

export default BoardgamesComp;
