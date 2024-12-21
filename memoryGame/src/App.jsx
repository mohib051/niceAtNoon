import React, { useState, useEffect } from 'react';

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); // Holds IDs of two flipped cards

  // Initialize and shuffle cards
  useEffect(() => {
    const emojis = ['❤️', '😊', '😭', '🤔', '😂', '⚠️'];
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || flippedCards.includes(id)) return; // Prevent flipping more than two cards

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);
    setFlippedCards((prev) => [...prev, id]);

    if (flippedCards.length === 1) {
      const firstCard = cards.find((card) => card.id === flippedCards[0]);
      const secondCard = cards.find((card) => card.id === id);

      if (firstCard.emoji === secondCard.emoji) {
        // Match found: Remove matched cards
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.filter(
              (card) => card.id !== firstCard.id && card.id !== secondCard.id
            )
          );
        }, 500);
        setFlippedCards([]);
      } else {
        // No match: flip back after a delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Check for end game
  // useEffect(() => {
  //   if (cards.length === 0) {
  //     alert('You won!');
  //   }
  // }, [cards]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Memory Game</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`w-24 h-24 flex items-center justify-center text-2xl font-bold border rounded-lg cursor-pointer transform transition-all duration-300 ${
              card.flipped ? 'bg-white text-black scale-105' : 'bg-gray-800 text-gray-800'
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.flipped ? card.emoji : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
