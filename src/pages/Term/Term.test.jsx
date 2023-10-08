import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Term from "./Term";

describe("Term", () => {
  it("should render the Term component correctly", () => {
    render(
      <BrowserRouter>
        <Term />
      </BrowserRouter>,
    );
    expect(
      screen.getByText(/HOW LONG DO YOU NEED ACCESS TO EUKA?/i),
    ).toBeDefined();
  });

  it("should select a term item when clicked", () => {
    render(
      <BrowserRouter>
        <Term />
      </BrowserRouter>,
    );
    const gradeItems = screen.getAllByRole("button");

    // Simulate clicking the first term item
    fireEvent.click(gradeItems[0]);

    // Verify that the term item has been selected
    expect(
      gradeItems[0].parentElement.classList.toString().includes("_selected_"),
    ).toBeTruthy();
  });
});
