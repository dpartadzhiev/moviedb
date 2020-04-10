import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import Movies from '../Movies/Movies';

test("search form should be loaded", () => {
    const {getByRole} = render(<Movies />);
    const searchForm = getByRole("form");
    expect(searchForm).toBeInTheDocument();
});