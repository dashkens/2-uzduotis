import { render, screen, fireEvent} from '@testing-library/react';
import CreateForm from '../CreateForm';

describe('CreateForm', () => {
    it('should update input fields correctly', async () => {
        //mocking updateCreateFormField function, which does nothing in this case
        const updateCreateFormField = jest.fn();
        render(
        <CreateForm
            createForm={{
            title: '',
            body: '',
            numberOfPlayers: '',
            playingTime: '',
            complexity: 'null',
            genre: [],
            myNote: '',
            myRating: null,
            }}
            updateCreateFormField={updateCreateFormField}
        />
        );

    const titleInput = screen.getByLabelText('Title:');
    const bodyTextarea = screen.getByLabelText('Description:');
    const playersInput = screen.getByLabelText('Number of players:')
    const playingTime = screen.getByLabelText('Playing time:')
    const complexityInput = screen.getByLabelText('Complexity:')
    const myRatingInput = screen.getByLabelText('My rating:')
    const myNoteInput = screen.getByLabelText('My comment')

    const fantasyCheckbox = screen.getByLabelText('Fantasy');


    fireEvent.change(titleInput, { target: { value: 'Testing Title' } });
    fireEvent.change(bodyTextarea, { target: { value: 'Some description' } });
    fireEvent.change(playersInput, { target: { value: '4-6' } });
    fireEvent.change(playingTime, { target: { value: '30min' } });
    fireEvent.change(complexityInput, { target: { value: 2 } });
    fireEvent.change(myNoteInput, { target: { value: 'Some my comments' } });
    fireEvent.change(myRatingInput, { target: { value: 5 } });

    fireEvent.click(fantasyCheckbox);


    //since the value is not immediatly updated, it needs setTime out and done()

    //komentaras destytojui - nezinau kodel, bet testai veikia net jei irasau neteisingus value, nesu tikra kodel taip yra 
    setTimeout(() => {
        expect(titleInput.value).toBe('Testing Title');
        expect(bodyTextarea.value).toBe('Some description');
        expect(playersInput.value).toBe('4-6');
        expect(playingTime.value).toBe('30min');
        expect(complexityInput.value).toBe(2);
        expect(myRatingInput.value).toBe(5);
        expect(myNoteInput.value).toBe('Some my comments');
        expect(updateCreateFormField).toHaveBeenCalledWith({
            target: { name: 'genre', value: 'Fantasy', type: 'checkbox', checked: true },
        })
        done();
    }, 0);
    
    });
});