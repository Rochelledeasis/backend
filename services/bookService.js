import * as bookModel from '../models/bookModels.js';
import ValidationError from '../utils/ValidationError.js';

export const fetchAllBooks = async () => {
    const books = await bookModel.fetchAllBooks();
    return books;
};

const doesBookExist = async (book) =>{
    let existing;
    if(Object.hasOwn(book, "id")){
        existing = await bookModel.findBookById(book.id);
    }else{
        existing = await bookModel.findBookByNameAndAuthor(book);
    }

    if(existing.length > 0){
        return true;
    }
    return false;
}

export const createbook = async (book) => {
    if(!book.name || !book.author){
        throw new ValidationError(404, "Name and author is required");
    }
    
    const existing = await doesBookExist(book);
    
    if(existing){
        throw new ValidationError(409, 'Book already exists!');
    }

    const bookId = await bookModel.insert(book);
    return bookId;
};

export const updateBook = async (book) => {
    if(!book.name || !book.author){
        throw new ValidationError(404, "Name and author is required");
    }
    
    const existing = await doesBookExist(book);
    
    if(!existing){
        throw new ValidationError(404, 'does not exists!');
    }

    const updatedBook = await bookModel.update(book);
    return updatedBook;
}

export const deleteBook = async (id) => {
    const existing = await doesBookExist(id);
    
    if(!existing){
        throw new ValidationError(404, 'does not exists!');
    }

    const deletedBook = await bookModel.deleteBook(id);
    return deletedBook;
}   