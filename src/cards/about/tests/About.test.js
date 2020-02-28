import {render} from "@testing-library/react";
import About from "../About";
import React from "react";

test('About - renders header', () => {
    const {getByTestId} = render(<About />);
    expect(getByTestId(/header/i)).toBeTruthy();
});

test('About - renders about content', () => {
    const {getByTestId} = render(<About />);
    expect(getByTestId(/about-content/i)).toBeTruthy();
});
