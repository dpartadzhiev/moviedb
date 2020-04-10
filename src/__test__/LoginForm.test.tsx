import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import LoginForm from '../Forms/LoginForm';

test("Is logo loaded", () => {
    const {getByRole} = render(<LoginForm />);
    const image = getByRole("img");
    expect(image).toBeInTheDocument();
});

test("Are inputs loaded", () => {
    const {getAllByRole} = render(<LoginForm />);
    const inputs = getAllByRole("textbox");
    inputs.forEach(input => expect(input).toBeInTheDocument());
});

test("should submit", () => {
    const {getByRole} = render(<LoginForm />);
    
    const handleSubmit = jest.fn();
    const form = getByRole("form");
    form.onsubmit = handleSubmit;
    const button = getByRole("button");
    
    fireEvent(button, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }));

    expect(handleSubmit).toBeCalled()
})