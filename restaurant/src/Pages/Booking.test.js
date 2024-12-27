import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Booking from "./Booking";

describe("Booking", () => {
  it("should render the form and handle form submission", () => {
    render(<Booking />);

 
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/confirm reservation/i);


    fireEvent.change(firstNameInput, { target: { value: "Aoi" } });
    fireEvent.change(lastNameInput, { target: { value: "Roy" } });
    fireEvent.change(emailInput, { target: { value: "aoiroy@example.com" } });
    fireEvent.change(dateInput, { target: { value: "2024-12-28" } });
    fireEvent.change(timeSelect, { target: { value: "3:14" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

   
    expect(firstNameInput.value).toBe("Aoi");
    expect(lastNameInput.value).toBe("Roy");
    expect(emailInput.value).toBe("aoiroy@example.com");
    expect(dateInput.value).toBe("2024-12-28");
    expect(timeSelect.value).toBe("3:14");
    expect(guestsInput.value).toBe("3");
    expect(occasionSelect.value).toBe("birthday");


    fireEvent.click(submitButton);
  });
});
