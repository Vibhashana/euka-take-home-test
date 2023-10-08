import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";

describe("Welcome component", () => {
  it("renders the component without errors", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>,
    );

    // Check if the component renders without errors
    expect(screen.getByText(/WELCOME TO THE EUKA FAMILY/i)).toBeDefined();
  });

  it("disables the Next button initially", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>,
    );

    // Check if the Next button is initially disabled
    expect(screen.getByText("Next").disabled).toBeDefined();
  });

  it("enables the Next button when a valid email is entered", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>,
    );
    const emailInput = screen.getByLabelText("Email Address");

    // Enter a valid email
    fireEvent.change(emailInput, { target: { value: "example@gmail.com" } });

    // Check if the Next button is enabled
    expect(screen.getByText("Next").disabled).toBeFalsy();
  });

  it("displays an error message for an invalid email", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>,
    );
    const emailInput = screen.getByLabelText("Email Address");

    // Enter an invalid email
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    // Check if the error message is displayed
    expect(
      screen.getByText("Please enter a valid email address"),
    ).toBeDefined();
  });
});
