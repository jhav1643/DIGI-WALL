import React, { useState } from "react";
import "./card.css";

const Card = ({ subject, image, content }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const handleShareClick = () => {
    console.log("Share button clicked");
  };

  const handleBookmarkClick = () => {
    console.log("Bookmark button clicked");
  };

  return (
    <div className="card">
      <div className="cardTitle">{subject}</div>
      {image && <img src={image} alt="Selected" className="cardImage" />}
      <div className="cardContent">{content}</div>
      <div className="cardActions">
        <div
          className={`likeButton ${isLiked ? "active" : ""}`}
          onClick={handleLikeClick}
        >
          {isLiked ? "❤️" : "🤍"}
        </div>
        <div className="shareButton" onClick={handleShareClick}>
        Share
        </div>
        <div className="bookmarkButton" onClick={handleBookmarkClick}>
        🔖
        </div>
      </div>
    </div>
  );
};

export default Card;
