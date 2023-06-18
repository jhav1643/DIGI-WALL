import React, { useState } from 'react';
import './box.css';
import Modal from './forNew/forNew';

const Box = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const [cards, setCards] = useState([
    { title: 'Earth changes and Journeys', topic: 'Environment' },
    { title: 'Eating Right', topic: 'Health' },
  ]);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);

    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    setDeleteIndex(-1); 
  };

  return (
    <>
      <div className="flex-container">
        <div className="flex-box">
          {cards.map((card, index) => (
            <div key={index} className={`card ${deleteIndex !== index ? 'cards' : ''}`}>
              <h2>{card.title}</h2>
              <div className="topic">{card.topic}</div>
              {deleteIndex !== index && (
                <div className="delete-buttons">
                  <button onClick={() => handleDelete(index)}>🗑️</button>
                  <button>✎</button>
                </div>
              )}
            </div>
          ))}

          <div className={`card ${deleteIndex !== cards.length ? 'cards' : ''}`} onClick={openModal}>
            <h2>+</h2>
            <div className="more">Add More</div>
          </div>

          {modalOpen && <Modal onClose={closeModal} />}
        </div>
      </div>
    </>
  );
};

export default Box;

