import * as bookService from '../services/bookService.js';

export const fetchAllBooks = async (request, response) => {
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
    
};
