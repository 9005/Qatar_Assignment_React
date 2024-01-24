import React from "react";
import NavLinks from "./NavLinks";
import { useFetchUserDetails } from "./useFetchUserDetails";

/*
  SideNavBar which is fixed towards left side of Grid
*/
const SideNavBar = () => {
  // useFetchUserDetails(re-usable) custom hook for fetching user details
  const [data] = useFetchUserDetails(process.env.REACT_APP_FETCH_USER_DETAILS);

  const renderUserProfileDetails = (label, value) =>
    <div className="user-details-section">
      <div className="label-name">{label}</div>
      <div className="value-name">{value}</div>
    </div>

  if (data) {
    const { name, email, phone, company } = data;
    return (
      <div className="side-bar">
        <h2 className="user-details-label">User Details Section</h2>
        {renderUserProfileDetails("Name", name)}
        {renderUserProfileDetails("Email id", email)}
        {renderUserProfileDetails("Phone Number", phone)}
        {renderUserProfileDetails("Company Name", company.name)}
        <div style={{ marginTop: "2rem" }} />
        <h2 className="user-details-label">Navigation Menu</h2>
        <NavLinks />
      </div>
    )
  }
  return <div className="side-bar" />
}

export default SideNavBar;