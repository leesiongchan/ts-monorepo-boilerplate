import * as React from "react";
import { render } from "react-testing-library";

import HelloWorld from "./HelloWorld";

it("renders without crashing", () => {
  const { container, getByText } = render(<HelloWorld />);

  expect(getByText("Hello World!")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Hello World!
    </h1>
  `);
});
