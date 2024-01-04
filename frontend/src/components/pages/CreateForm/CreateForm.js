import React from "react"
import Header from "../../Header/Header"

export default function CreateForm({createBoardgame, updateCreateFormField, createForm}){
    return(
        <div className="content-wrapper form create-form">
            <Header title='Create a Board Game'/>  
            <form onSubmit={createBoardgame}>
            <label htmlFor="title">Title: </label>
        <input 
            id = 'title'
            onChange={updateCreateFormField}
            value={createForm.title}
            name="title"
            type="text"
            />
        <label htmlFor="body">Description:</label>
        <textarea 
            id='body'
            onChange={updateCreateFormField}
            value = {createForm.body} 
            name ="body"
            rows="6" cols="60">
        </textarea>
        <label htmlFor="numberOfPlayers">Number of players: </label>
            <input 
            id='numberOfPlayers'
            onChange={updateCreateFormField}
            value={createForm.numberOfPlayers}
            type="text"
            name="numberOfPlayers"
            />
        <label htmlFor="playingTime">Playing time: </label>
            <input type="text"
            name="playingTime"
            id="playingTime"
            value={createForm.playingTime}
            onChange={updateCreateFormField}
            />    
        <label htmlFor="complexity">Complexity: </label>
        <input type="number" name="complexity" id='complexity' min="1" max="5" step="1" onChange={updateCreateFormField} value = {createForm.complexity}/>

        {/* genre */}
        <label htmlFor="genre">Choose genre: </label>
        <div className="genre-wrapper">
            {['Fantasy', 'Strategy', 'Cooperative', 'Euro', 'Party', 'Engine Building', 'Action / Dexterity', 'Card Game', 'Deck builder', 'Dungeon Crawler', 'Engine building', 'Area control'].map(genre => (
            <React.Fragment key={genre}>
                <input
                type="checkbox"
                name="genre"
                id="genre"
                value={genre}
                //return true or false
                //updateForm.genre - has the current state of updateForm values
                checked={createForm.genre.includes(genre)}
                onChange={updateCreateFormField}
                />
                <label htmlFor="genre"> {genre} </label>
            </React.Fragment>
            ))}
        </div>

        {/* ----- */}

        <label htmlFor="myRating">My rating: </label>
        <input type="number" id = 'myRating' name="myRating" min="1" max="5" step="1" onChange={updateCreateFormField} value = {createForm.myRating} />

        <label htmlFor="myNote">My comment</label>
        <textarea 
            id="myNote"
            onChange={updateCreateFormField}
            value = {createForm.myNote} 
            name ="myNote"
            rows="6" cols="60">
        </textarea>

        <button type="submit">Create boardgame</button>

        </form>
        </div>
    )
}