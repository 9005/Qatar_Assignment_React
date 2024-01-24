import React, { useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

/*
 This component is available for edit blogs title and description and saving modified data using PUT api 
*/
const BlogEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [disableValue, setDisable] = useState(true);
  const [titleText, setTitle] = useState("");
  const [descriptionText, setDescription] = useState("");
  const listObject = location.state?.listDetailObject;

  const postFormData = () => {
    // prepare new payload
    const payload = {
      ...listObject,
      title: titleText !== "" ? titleText : listObject.title,
      body: descriptionText !== "" ? descriptionText : listObject.body
    };
    axios.put(process.env.REACT_APP_POST_USER_BLOG, payload)
      .then(() => {
        // Handle the response
        navigate(-1);
      })
      .catch(error => {
        // Handle errors
      });
  };

  return (
    <div className="content-section">
      <h2 className="user-details-label">Content Edit Section</h2>
      <div className="detail-blogs-section">
        <label for="title">Title:</label>
        <textarea id="title" name="title" rows="4" cols="200" className="edit-form" disabled={disableValue} onChange={(e) => setTitle(e.target.value)}>{listObject.title}</textarea>
      </div>

      <div className="detail-blogs-section">
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" cols="200"
          style={{ marginLeft: "1rem" }} className="edit-form" disabled={disableValue} onChange={(e) => setDescription(e.target.value)}>{listObject.body}</textarea>
      </div>

      <div className="action-buttons">
        <button className="edit-button" onClick={() => setDisable(false)}>Edit</button>
        <button className="edit-button" style={{ marginLeft: "1rem" }} onClick={() => setDisable(true)}>Delete</button>
      </div>

      <div className="action-buttons" style={{ marginTop: "2rem" }}>
        <button className="edit-button" onClick={postFormData} disabled={disableValue}>Save</button>
      </div>
    </div>
  )
};

export default BlogEdit;