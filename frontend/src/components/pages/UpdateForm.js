import React from "react"
import { Link } from "react-router-dom"
import Header from "../Header/Header"


export default function UpdateForm({handleUpdate, updateForm, handleUpdateFieldChange}) {
    return(
    <div className='content-wrapper form'>
        <Header title='Update the Board Game'/>  
        <form onSubmit={handleUpdate}>
        <label htmlFor="title">Title: </label>
        <input 
            onChange={handleUpdateFieldChange}
            value={updateForm.title}
            name="title"
            type="text" />
        <label htmlFor="body">Description:</label>
        <textarea 
            onChange={handleUpdateFieldChange}
            value = {updateForm.body} 
            name ="body"
            rows="6" cols="60">
        </textarea>
        <label htmlFor="numberOfPlayers">Number of players: </label>
            <input 
            onChange={handleUpdateFieldChange}
            value={updateForm.numberOfPlayers}
            type="text"
            name="numberOfPlayers"
            />
        <label htmlFor="playingTime">Playing time: </label>
            <input type="text"
            name="playingTime"
            value={updateForm.playingTime}
            onChange={handleUpdateFieldChange}
            />    
        <label htmlFor="complexity">Complexity: </label>
        <input type="number" name="complexity" min="1" max="5" step="1" onChange={handleUpdateFieldChange} value = {updateForm.complexity}/>

        {/* genre */}
        <label htmlFor="genre">Choose genre: </label>
        <div className="genre-wrapper">
            {['Fantasy', 'Strategy', 'Cooperative', 'Euro', 'Party', 'Engine Building', 'Action / Dexterity', 'Card Game', 'Deck builder', 'Dungeon Crawler', 'Engine building', 'Area control'].map(genre => (
            <React.Fragment key={genre}>
                <input
                type="checkbox"
                name="genre"
                value={genre}
                //return true or false
                //updateForm.genre - has the current state of updateForm values
                checked={updateForm.genre.includes(genre)}
                onChange={handleUpdateFieldChange}
                />
                <label htmlFor="genre"> {genre} </label>
            </React.Fragment>
            ))}
        </div>

        {/* ----- */}

        <label htmlFor="myRating">My rating: </label>
        <input type="number" name="myRating" min="1" max="5" step="1" onChange={handleUpdateFieldChange} value = {updateForm.myRating} />

        <label htmlFor="myNote">My comment</label>
        <textarea 
            onChange={handleUpdateFieldChange}
            value = {updateForm.myNote} 
            name ="myNote"
            rows="6" cols="60">
        </textarea>
        <button type="submit">Update boardgame</button>
        <Link to={`/boardgames`}>
        <button>Back to board games</button>
        </Link>
        </form>
    </div>
    )
}