// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [quote, setQuote] = useState(null);
//   const [error, setError] = useState('');

//   const getRandomQuote = () => {
//     axios
//       .get(`https://dummyjson.com/quotes/random`)
//       .then((response) => {
//         setQuote(response.data);
//         setError('');
//       })
//       .catch((err) => {
//         setQuote(null);
//         setError('Quote not found!');
//       });
//   };

//   useEffect(() => {
//     getRandomQuote();
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       {quote ? (
//         <div className="shadow-lg rounded-lg p-6 max-w-sm text-center">
//           <p className="text-xl font-semibold">"{quote.quote}"</p>
//           <p className="mt-4">- {quote.author}</p>
//         </div>
//       ) : (
//         <p>{error || 'Loading...'}</p>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');

  const getRandomQuote = () => {
    axios
      .get(`https://dummyjson.com/quotes/random`)
      .then((response) => {
        setQuote(response.data);
        setError('');
      })
      .catch((err) => {
        setQuote(null);
        setError('Quote not found!');
      });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      {quote ? (
        <div className='shadow-lg dark:shadow-gray-600 rounded-lg p-6 max-w-sm text-center'>
          <p className='text-xl font-semibold'>"{quote.quote}"</p>
          <p className='mt-4 text-gray-500'>- {quote.author}</p>
        </div>
      ) : (
        <p className='text-red-500'>{error || 'Loading...'}</p>
      )}
    </div>
  );
};

export default Home;
