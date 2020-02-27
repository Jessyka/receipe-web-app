import {render} from "@testing-library/react";
import Home from "../Home";
import React from "react";

test('Home - renders header', () => {
    const {getByTestId} = render(<Home />);
    expect(getByTestId(/header/i)).toBeTruthy();
    //expect(headerComponent).toBeTruthy();
});
