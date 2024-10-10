import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Favorites from "../component/Favorites";
import Mark from "../component/Mark";


const Booksdisplay = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [read, setRead] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=R6TDYNkQho72K7Pg34LhWY01qIzX6CMt"
      );
      setBooks(response.data.results.books);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load books: {error.message}</p>;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToFavorites = (book) => {
    if (!favorites.some((fav) => fav.primary_isbn10 === book.primary_isbn10)) {
      setFavorites((prev) => [...prev, book]);
    }
  };
//   as mark 
    const markAsRead = (book) => {
        if (!read.some((fav) => fav.primary_isbn10 === book.primary_isbn10)) {
            setRead((prev) => [...prev, book]);
        }
    };


  return (
    <div>
      <Header />

      {/* Search */}
      <div className=" mt-5 flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-5 border-2 border-black p-2 w-1/2 text-black hover:rounded-full shadow-lg"
        />
      </div>

      {/* Books Display */}
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {filteredBooks.map((book) => (
          <div key={book.primary_isbn10} className="w-64  ">
            <div className="card bg-base-100 shadow-xl  ">
              <figure className="px-10 pt-10">
                <img
                  src={book.book_image}
                  alt={book.title}
                  className="rounded-xl w-50 max-h-50"
                />
              </figure>
              <div className="card-body items-center text-center  ">
                <div className="min-h-28">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.author}</p>
                <p>
                  Price: {book.price === "0.00" ? "Free" : `$${book.price}`}
                </p>
                </div>
              
             
                <div className="card-actions flex">
                  <Link to={`/bookdetails/${book.primary_isbn10}`}>
                    <button className="btn btn-primary">View More</button>
                  </Link>
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToFavorites(book)}
                      className="btn "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </button>
                    <button onClick={() => markAsRead(book)} className="btn ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" ">
        <Favorites favorites={favorites} />
      </div>
      <Mark reads={read} />
      <Footer />
    </div>
  );
};

export default Booksdisplay;
