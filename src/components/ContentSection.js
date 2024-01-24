import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageComponent from "../images/sample.jpg";
import { useNavigate } from "react-router-dom";

/*
  Content Section which is towards right side of grid with blog posts
*/
const ContentSection = () => {

  const navigate = useNavigate();
  const [postsList, setPostsList] = useState([])

  const navigateToEditSection = listDetail => {
    navigate("/blogContent/details", {
      state: {
        listDetailObject: listDetail
      }
    })
  };

  const fetchUserposts = async (url) => {
    const response = await axios.get(url);
    return response;
  };

  useEffect(() => {
    fetchUserposts(process.env.REACT_APP_FETCH_USER_POSTS).then(resp => setPostsList(resp.data)).catch(() => { })
  }, [])


  const displayListsOfPosts = () => postsList.map((list, index) =>
    <li className="list-section" key={index}>
      <button className="list-button" onClick={() => navigateToEditSection(list)}>
        <div className="blog-list-section">
          <div style={{ width: '20%' }}>
            <img src={ImageComponent} alt="user-blog-details" height="80px" />
          </div>
          <div style={{ width: '80%', textAlign: 'left' }}>
            <div style={{ marginBottom: '8px' }}>{list.title}</div>
            <div>{list.body}</div>
          </div>
        </div>
      </button>
    </li>






  )

  return (
    <div className="content-section">
      <h2 className="user-details-label">Content Section</h2>
      {
        postsList.length > 0 &&
        <ul>
          {displayListsOfPosts()}
        </ul>
      }
    </div>
  )
};

export default ContentSection;
