import { render, screen, fireEvent, cleanup, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from '../List/List';
import BookContextProvider from '../../context/BookContext';
import { MemoryRouter } from "react-router-dom"


afterEach(() => {
    cleanup();
});

describe('BookList', () => {
    test('should render booklist', async () => {
        const book = {id:1, title: "Pride and Prejudice", author: "Jane Austen", isbn: "9780141439518",status: "Unread"}

        render(<MemoryRouter><List book={book}/></MemoryRouter>);
        const bookTitle = screen.getByTestId("book-1");
        expect(bookTitle).toBeInTheDocument();
    });



})