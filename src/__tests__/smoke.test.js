import React from "react";
import {MemoryRouter, Link} from "react-router-dom";
import {renderToStaticMarkup} from "react-dom/server";

test("react-router v7 resolves under jest", () => {
  const html = renderToStaticMarkup(<MemoryRouter><Link to="/x">go</Link></MemoryRouter>);
  expect(html).toContain('href="/x"');
});
