 
import './App.css'
import { useState , useEffect } from 'react'
import Home from './Pages/Home'
function App() {
 
// const [books, setBooks] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
 

// useEffect(() => {
//   fetch('https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=R6TDYNkQho72K7Pg34LhWY01qIzX6CMt')
//     .then((response) => response.json())
//     .then((data) => {
//       setBooks(data.results);
//       setLoading(false);
//     })
//     .catch((error) => {
//       setError(error);
//       setLoading(false);
//     });
// }
// , []);
// if (loading) return <p>Loading...</p>;
  return (
    <>
      <Home/>
     {/* {books.map((book) => (
        <div key={book.book_title} className="book">
          <h2>{book.book_title}</h2>
          <p>{book.summary}</p>
        </div>
      ))} */}

    </>
  )
}

export default App
// R6TDYNkQho72K7Pg34LhWY01qIzX6CMt key

// api https://api.nytimes.com/svc/books/v3/lists.json
