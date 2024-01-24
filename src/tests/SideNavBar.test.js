import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";

/*
 Unit Test to mock get Api call for user details and display in fixed Sidebar using jest and RTL
*/
const mock = [{
  name: "",
  email: "",
  phone: "",
  company: { name: "" }
}];
jest.mock("../components/useFetchUserDetails", () => ({
  useFetchUserDetails: () => {
    return mock;
  }
}));

describe("SideNavBar Component", () => {
  test("renders SideNavBar Component with user details", () => {
    mock[0].name = "Leanne Graham";
    mock[0].email = "Sincere@april.biz";
    mock[0].phone = "1-770-736-8031 x56442",
    mock[0].company.name = "Romaguera-Crono";

    render(
      <BrowserRouter>
        <SideNavBar />
      </BrowserRouter>
    )
    expect(screen.queryByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.queryByText("Sincere@april.biz")).toBeInTheDocument();
    expect(screen.queryByText("1-770-736-8031 x56442")).toBeInTheDocument();
    expect(screen.queryByText("Romaguera-Crono")).toBeInTheDocument();
  });
});