import Header from "../Header";
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react'

describe("header", () =>  {
    it('header should render the text that passed into title prop', async () => {
        render(<Header title = "My Header"/>)
        const headingElement = screen.getByText(/my header/i)
        expect(headingElement).toBeInTheDocument()
    })
    
    it('testing heading by role to be heading', async () => {
        render(<Header title = "My Header"/>)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toBeInTheDocument()
    })
})

