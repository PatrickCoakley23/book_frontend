import { render, screen, fireEvent, cleanup, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditForm from '../Forms/EditForm';
import BookContextProvider from '../../context/BookContext';

const handleUpdate = jest.fn()
const mockedHandleChange = jest.fn()
const mockedSetFormData = jest.fn()
const user = userEvent.setup()

afterEach(() => {
    cleanup();
});


describe('EditBook', () => {

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
})