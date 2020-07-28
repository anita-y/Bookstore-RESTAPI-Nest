import { Controller, Get, Param, Post, Delete, Body, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto} from './dto/create-book.dto';


@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {};

    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    @Get(':bookID')
    async getBook(@Param('bookID') bookID: number){
       const bookById =  await this.booksService.getBook(bookID);
       return bookById;
    }

    @Post()
    async addBook(@Body() createBookDto: CreateBookDto){
        const newbook = await this.booksService.addBook(createBookDto);
        return newbook;
    }

}
