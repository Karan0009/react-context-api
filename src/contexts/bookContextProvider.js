import React, { useState, createContext } from "react";
import regeneratorRuntime from "regenerator-runtime"; // must import this wherever using async/await
export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([]);

  const fetchBooksFromApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      setBooks(data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookContext.Provider value={{ books, fetchBooksFromApi }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
