import React, { useContext, useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime"; // must import this wherever using async/await
import BookCard from "./bookCard";
import { BookContext } from "../contexts/bookContextProvider";

function Books() {
  const { books, fetchBooksFromApi } = useContext(BookContext);

  useEffect(() => {
    fetchBooksFromApi();
  }, []);

  return (
    <div className="books-list">
      {books.map((book) => (
        <BookCard key={book.id} title={book.title} image={book.thumbnailUrl} />
      ))}
    </div>
  );
}

export default Books;
