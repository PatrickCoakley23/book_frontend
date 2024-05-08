import { render, screen, fireEvent, cleanup, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddForm from '../Forms/AddForm';
import BookContextProvider from '../../context/BookContext';

const handleSubmit = jest.fn()
const mockedHandleChange = jest.fn()
const mockedSetFormData = jest.fn()
const user = userEvent.setup()

afterEach(() => {
    cleanup();
});


describe('AddBook', () => {

    test('should render form elements', () => {
        render(
            <BookContextProvider>
            <AddForm/>
            </BookContextProvider>
            );
        const title = screen.getByPlaceholderText(/Title/i);
        const author = screen.getByPlaceholderText(/Author/i);
        const isbn = screen.getByPlaceholderText(/ISBN/i);
        const buttonElement = screen.getByTestId("submit-button")
        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(isbn).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();

    });

    test('should be able to type into form input and value change', () => {
        render( 
            <BookContextProvider>
            <AddForm />
            </BookContextProvider>
            );
        const title = screen.getByPlaceholderText(/Title/i);
        const author = screen.getByPlaceholderText(/Author/i);
        const isbn = screen.getByPlaceholderText(/ISBN/i);
        const status = screen.getByTestId("select")
        
        fireEvent.change(title, {target: {value: "The Great Gatsby" }})
        fireEvent.change(author, {target: {value: "F. Scott Fitzgerald" }})
        fireEvent.change(isbn, {target: {value: "1234" }})
        fireEvent.change(status, {target: {value: "Unread" }})
        
        expect(title.value).toBe("The Great Gatsby");
        expect(author.value).toBe("F. Scott Fitzgerald");
        expect(isbn.value).toBe("1234");
        expect(status.value).toBe("Unread");
    });

    test('Testing if onSubmit was clicked', async () => {
        render( 
            <BookContextProvider>
            <AddForm handleSubmit={handleSubmit}/>
            </BookContextProvider>
        );
        
        const title = screen.getByPlaceholderText(/Title/i);
        const author = screen.getByPlaceholderText(/Author/i);
        const isbn = screen.getByPlaceholderText(/ISBN/i);
        const buttonElement = screen.getByTestId("submit-button")
        
        fireEvent.change(title, {target: {value: "The Great Gatsby" }})
        fireEvent.change(author, {target: {value: "F. Scott Fitzgerald" }})
        fireEvent.change(isbn, {target: {value: "1234" }})

        await waitFor(() => {
            fireEvent.submit(buttonElement)
        })
        expect(handleSubmit).toHaveBeenCalled();
    });
})

// Had issue testing form submissions further because of this bug
// https://github.com/testing-library/user-event/issues/1196