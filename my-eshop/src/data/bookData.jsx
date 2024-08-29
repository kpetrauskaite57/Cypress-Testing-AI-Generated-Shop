const bookData = [
  {
      category: "Fiction Books",
      books: [
          { 
              id: 1, 
              title: "The Great Gatsby", 
              author: "F. Scott Fitzgerald", 
              genre: "Fiction", 
              year: 1925, 
              description: "A classic novel of the Jazz Age.",
              image: "https://example.com/great-gatsby.jpg",
              fullPrice: 15.99,
              discountedPrice: 12.99
          },
          { 
              id: 2, 
              title: "To Kill a Mockingbird", 
              author: "Harper Lee", 
              genre: "Fiction", 
              year: 1960, 
              description: "A novel about racial injustice.",
              image: "https://example.com/to-kill-a-mockingbird.jpg",
              fullPrice: 18.99,
              discountedPrice: 14.99
          },
          // Add more books here if needed
      ]
  },
  {
      category: "Kids' Books",
      books: [
          { 
              id: 3, 
              title: "Harry Potter and the Sorcerer's Stone", 
              author: "J.K. Rowling", 
              genre: "Fantasy", 
              year: 1997, 
              description: "A young wizard's journey begins.",
              image: "https://example.com/harry-potter.jpg",
              fullPrice: 20.00,
              discountedPrice: 16.00
          },
          // Add more books here if needed
      ]
  },
  {
      category: "Science Fiction",
      books: [
          { 
              id: 11, 
              title: "Dune", 
              author: "Frank Herbert", 
              genre: "Science Fiction", 
              year: 1965, 
              description: "A science fiction epic set on a desert planet.",
              image: "https://example.com/dune.jpg",
              fullPrice: 25.00,
              discountedPrice: 20.00
          },
          // Add more books here if needed
      ]
  },
  {
      category: "Non-Fiction",
      books: [
          { 
              id: 16, 
              title: "Sapiens", 
              author: "Yuval Noah Harari", 
              genre: "History", 
              year: 2011, 
              description: "A brief history of humankind.",
              image: "https://example.com/sapiens.jpg",
              fullPrice: 22.00,
              discountedPrice: 18.00
          },
          // Add more books here if needed
      ]
  }
];

export default bookData;
