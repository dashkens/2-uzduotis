import { Link } from "react-router-dom";
import Header from "../../Header/Header";

export default function Boardgames({boardgames, handleDelete, toggleUpdate}) {
    return (
      <div className="content-wrapper boardgames">

      <Header title='Board Games list'/>


      {boardgames &&
        boardgames.map((boardgame, index) => {
          return (
            <div 
              className="boardgame-wrapper"
              data-testid={`boardgame-item-${index}`}
            >
              <div key={boardgame._id}>
                <h2><strong>{boardgame.title}</strong></h2>
                <p><strong>{boardgame.body}</strong></p>
                <p><strong>Number of players:</strong> {boardgame.numberOfPlayers}</p>
                <p><strong>Playing time:</strong> {boardgame.playingTime}</p>
                <p><strong>Complexity:</strong> {boardgame.complexity} / 5</p>
                <p><strong>Genre:</strong> {boardgame.genre.join(', ')}</p>
                <p><strong>My rating:</strong> {boardgame.myRating} / 10</p>
                <p><strong>My comment:</strong> {boardgame.myNote}</p>
                <Link to = {`/boardgames/edit-boardgame/${boardgame._id}`}>
                  <div className="btn-edit" onClick={() => toggleUpdate(boardgame)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M761.1 288.3L687.8 215 325.1 577.6l-15.6 89 88.9-15.7z"></path><path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z"></path></svg></div>
                </Link>
                  <div className="btn-delete" onClick={() => handleDelete(boardgame._id)}><svg stroke="currentColor" fill="#734545" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg></div>
                
              </div>
            </div>
          );
        })}
    </div>
    )
}

