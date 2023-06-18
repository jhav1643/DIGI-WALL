import React, { useState } from "react";
import Card from "../Post/Cards/cards";
import OnePost from "../Post/onePost/onePost";
import "./empty.css";
import image from "./folder.png";

const Empty = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedPost, setSubmittedPost] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (post) => {
    setSubmittedPost(post);
  };

  return (
    <>
      <div className="post">
        <h1>Your Posts</h1>

        <span>
          <button onClick={openModal}>✚ Create New Post</button>
        </span>
      </div>
      {modalOpen && <OnePost onSubmit={handleFormSubmit} onClose={closeModal} />}
      <div className="postPage">
        {submittedPost ? (
          <Card subject={submittedPost.subject} image={submittedPost.image} content={submittedPost.content} />
        ) : (
          <>
            <div className="img">
              <img src={image} alt="/" />
            </div>
            <div className="lineOne">Empty Page</div>
            <div className="line2">Click on ✚ or Drag and Drop</div>
          </>
        )}

        <br />
        <br />
      </div>
    </>
  );
};

export default Empty;
