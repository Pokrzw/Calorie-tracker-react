import React, { FC, useState } from 'react';
import { render, screen, fireEvent, cleanup, getByText, act, waitFor } from '@testing-library/react';
import { Field } from 'formik';
import LoginForm from '../LoginForm'
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router'
import userEvent from '@testing-library/user-event';




const MockLoginFormComponent: FC = () => {
  return (
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  )
}

beforeEach(() => {
  render(<MockLoginFormComponent/>)
})


afterEach(cleanup)


describe("Text input fields", () => {


  test('Can put text into login input field', () => {

    const LoginInputField = screen.getByLabelText('Login');

    fireEvent.change(LoginInputField, { target: { innerText: "Lorem" } })
    expect(LoginInputField.innerText).toBe("Lorem")

  })

  test('Can put text into password input field', () => {

    const PasswordInputField = screen.getByLabelText('Password');

    fireEvent.change(PasswordInputField, { target: { innerText: "Ipsum" } })
    expect(PasswordInputField.innerText).toBe("Ipsum")

  })
})

describe('Validation of login data', () => {

  test('Displays an error message with incorrect data', async () => {
    const LoginInputField = screen.getByLabelText('Login');
    const PasswordInputField = screen.getByLabelText('Password');

    fireEvent.change(LoginInputField, { target: { innerText: "Lorem" } })
    fireEvent.change(PasswordInputField, { target: { innerText: "Ipsum" } })

    const button = screen.getByRole("button", { name: /Log In/i })

    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText(/Your login data was incorrect./i)).toBeInTheDocument();
    });

  })

  test('Redirect to Home Page with valid data', async () => {

    const LoginInputField = screen.getByLabelText('Login');
    const PasswordInputField = screen.getByLabelText('Password');

    userEvent.type(LoginInputField, "Jane Doe")
    userEvent.type(PasswordInputField, "adm1n")
    
    const button = screen.getByRole("button", { name: /Log In/i })
    userEvent.click(button)
 
      await waitFor(()=>{
        expect(() => screen.getByText(/Your login data was incorrect./i)).toThrow('Unable to find an element');
      })
  
  })

})

