import React from 'react';

const Mark = ({ reads }) => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-white bg-slate-400 p-4 mt-5">Book Mark</h2>
      {reads.length === 0 ? (
        <p>No favorite books added yet.</p>
      ) : (
        <div className="flex flex-wrap gap-4 w-full justify-center">
          {reads.map((book) => (
            <div key={book.primary_isbn10} className="w-64">
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={book.book_image}
                    alt={book.title}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{book.title}</h2>
                  <p>{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mark;