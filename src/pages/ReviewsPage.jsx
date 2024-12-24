import React from 'react';

const ReviewsPage = () => {
  const reviews = [
    {
      name: 'John Doe',
      review: 'FreshHarvest has the best organic vegetables I’ve ever had! Highly recommend.',
    },
    {
      name: 'Jane Smith',
      review: 'Amazing service! The veggies are always fresh and delivered on time.',
    },
    {
      name: 'Michael Brown',
      review: 'Great quality and affordable prices. I am a loyal customer!',
    },
    {
      name: 'Emily Davis',
      review: 'Love their commitment to organic farming. The taste is unmatched!',
    },
    {
      name: 'David Wilson',
      review: 'The AI chatbot is super helpful for placing quick orders. Great job!',
    },
  ];

  return (
    <div className="font-sans bg-green-50 text-gray-800 min-h-screen">
      <header className="bg-green-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Customer Reviews</h1>
      </header>
      <main className="max-w-4xl mx-auto py-12 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="mb-6 p-6 bg-white rounded-lg shadow-md border-t-4 border-green-600"
          >
            <h3 className="text-xl font-semibold text-green-700">{review.name}</h3>
            <p className="text-gray-600 mt-2">{review.review}</p>
          </div>
        ))}
      </main>
      <footer className="bg-green-700 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Fresh Veggies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ReviewsPage;
