import { render, screen} from '@testing-library/react';
import Boardgames from '../BoardgamesList';
import { BrowserRouter } from 'react-router-dom';

const MockBoardgamesList = () => {
    return (
        <BrowserRouter>
            <Boardgames/>
        </BrowserRouter>
    )
}

describe('BoardgamesList', () => {
    it('the component is rendering', ()=> {
        render(
            <Boardgames boardgames={[]}/>
        )
    })
    
    
    // it('should render first boardgame', async () => {
    //     render(<MockBoardgamesList />);
    //     const boardgamesDivElement = await screen.findByTestId("boardgame-item-0");
    //     expect(boardgamesDivElement).toBeInTheDocument();
    // });
});