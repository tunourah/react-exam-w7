
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      const response = await axios.get(
       ` https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=R6TDYNkQho72K7Pg34LhWY01qIzX6CMt${id}`
      );
      // const book = response.data.results.books.find((b) => b.id === parseInt(id));
      setBook(response.data.results.books);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load book: {error.message}</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <img src={book.book_image} alt={book.title} />
      <h1>{book.title}</h1>
      <p>Description: {book.description}</p>
      <p>Author: {book.author}</p>
      <a href={book.amazon_product_url} target="_blank" >
        Buy this book
      </a>
  
    </div>
  );
};

export default BookDetails;
