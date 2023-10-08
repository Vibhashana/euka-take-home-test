import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Grade from "./Grade";

describe("Grade", () => {
  it("should render the Grade component correctly", () => {
    render(
      <BrowserRouter>
        <Grade />
      </BrowserRouter>,
    );
    expect(screen.getByText(/CONFIRM YOUR CHILD'S GRADE LEVEL/i)).toBeDefined();
  });

  it("should select a grade item when clicked", () => {
    render(
      <BrowserRouter>
        <Grade />
      </BrowserRouter>,
    );
    const gradeItems = screen.getAllByRole("button");

    // Simulate clicking the first grade item
    fireEvent.click(gradeItems[0]);

    // Verify that the grade item has been selected
    expect(
      gradeItems[0].parentElement.classList.toString().includes("_selected_"),
    ).toBeTruthy();
  });
});
