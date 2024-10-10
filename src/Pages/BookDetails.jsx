
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
    <div className='container flex flex-col '>
      <div>
      <img src={book.book_image} alt={book.title} />
      </div>
      
      <h1>{book.title}</h1>
      <div>
      <p>Description: {book.description}</p>
      </div>
  <div>
  <p>Author: {book.author}</p>
  </div>
   
      <a className='border-b-2 flex items-center justify-center'  href={book.amazon_product_url} target="_blank" >
        Buy this book <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
</svg>

      </a>
  
    </div>
  );
};

export default BookDetails;
