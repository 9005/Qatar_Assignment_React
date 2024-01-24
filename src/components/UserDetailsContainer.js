import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNavBar from "./SideNavBar";
import Dashboard from "./Dashboard";
import ContentSection from "./ContentSection";
import BlogEdit from "./BlogEdit";
import "../styles/userProfileBlog.css";

const UserDetailsContainer = () =>
  <div className="qatar-website-container">
    <div className="grid-container">
      <SideNavBar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="blogContent" element={<ContentSection />}></Route>
        <Route path="blogContent/details" element={<BlogEdit />}></Route>
      </Routes>
    </div>
  </div>

export default UserDetailsContainer