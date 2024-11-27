import { Resolver, Query, Args } from '@nestjs/graphql';
@Resolver('Book')
export class BookResolver {
  private books = [
    { id: 1, title: 'Harry Potter and the Chamber of Secrets', price: 33 },
    { id: 2, title: 'Jurassic Park', price: 22 },
    { id: 3, title: 'Jurassic Park', price: 22 },
    { id: 4, title: 'Jurassic Park', price: 22 },
  ];
  @Query('books')
  getAllBook() {
    console.log(this);
    console.log('...................');
    console.log(this.books);

    return this.books;
  }
  @Query('book')
  getBook(@Args('id') id: any) {
    console.log(this.books);
    return this.books.find((book) => book.id == id);
  }
}
