import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormComponent from './index';

describe("Form", () => {
  render(<FormComponent />);
  const formElement = screen.getByTestId("form")

  it("should display required error when value is invalid", async () => {
    fireEvent.submit(formElement);

    expect(await screen.findAllByRole("alert")).toHaveLength(4);
  });

  it("should display matching error when email is invalid", async () => {
    render(<FormComponent />);
    const nameInput = screen.getByLabelText("Nome");
    const emailInput = screen.getByLabelText("E-mail");
    const ageInput = screen.getByLabelText("Idade");
    const formElement = screen.getByTestId("form")

    userEvent.type(emailInput, "email");
    userEvent.type(nameInput, "Beatriz");
    userEvent.type(ageInput, "28");

    fireEvent.submit(formElement);

    const emailError = await screen.findByTestId("email-error");

    expect(emailError).toBeInTheDocument();
  });

  it("should display minimum age required error when age is less than 18", async () => {
    render(<FormComponent />);

    const nameInput = screen.getByLabelText("Nome");
    const emailInput = screen.getByLabelText("E-mail");
    const ageInput = screen.getByLabelText("Idade");
    const formElement = screen.getByTestId("form")

    userEvent.type(emailInput, "email@gmail.com");
    userEvent.type(nameInput, "Beatriz");
    userEvent.type(ageInput, "17")

    fireEvent.submit(formElement);

    const ageError = await screen.findByTestId("age-error");
    expect(ageError).toBeInTheDocument();
  });

  it('should click radio buttons', () => {
    render(<FormComponent />);
    const radioYes = screen.getByLabelText("Sim");

    userEvent.click(radioYes);
    expect(radioYes).toBeChecked();
  });

  it('should render new input field when yes is checked', async () => {
    render(<FormComponent />);
    const radioYes = screen.getByLabelText("Sim");

    userEvent.click(radioYes);
    const conditionalInputField = await screen.findByLabelText('Nome do cônjuge')
    expect(conditionalInputField).toBeInTheDocument();

  });

});
