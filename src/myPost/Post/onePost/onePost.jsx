import React, { useState } from "react";
import "./onePost.css";

const OnePost = ({ onSubmit, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [showImage, setShowImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setShowImage(false);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFormSubmit = () => {
    const post = { subject, image: selectedImage, content };
    onSubmit(post);
    setSubject("");
    setContent("");
    setSelectedImage(null);
    onClose();
  };

  return (
    <div className="newBackground">
      <div className="newContent">
        <div id="post">Create your Post</div>

        <div className="name">Subject</div>
        <div className="postName">
          <input type="text" placeholder="Enter Subject" value={subject} onChange={handleSubjectChange} />
        </div>

        <div className="pimage">
          <input type="file" accept="image/*" onChange={handleImageChange} placeholder="Add Your Image" />
        </div>

        <div className="name">What is in your mind</div>
        <div className="postName">
          <input type="text" value={content} onChange={handleContentChange} />
        </div>

        <div className="bt">
          <button onClick={handleFormSubmit} className="btn">
            Submit
          </button>
          {showImage && selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
      </div>
    </div>
  );
};

export default OnePost;
