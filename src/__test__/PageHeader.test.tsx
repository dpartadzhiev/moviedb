import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import PageHeader from '../Movies/PageHeader';

test("page logo should be loaded", () => {
    const {getByRole} = render(<PageHeader />);
    const image = getByRole("img");
    expect(image).toBeInTheDocument();
});