import React, {act} from "react";
import {createRoot} from "react-dom/client";
import {MemoryRouter} from "react-router-dom";

// Mounts a page inside a real MemoryRouter; `hash` ("#some-id") selects an entry like the app does.
export async function mountPage(Component, hash = "") {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  const errors = [];
  const spy = jest.spyOn(console, "error").mockImplementation((...args) => errors.push(String(args[0])));
  let thrown = null;
  try {
    await act(async () => {
      root.render(<MemoryRouter initialEntries={["/" + hash]}><Component/></MemoryRouter>);
    });
    await act(async () => {});
  } catch (e) {
    thrown = e;
  }
  spy.mockRestore();
  return {
    container,
    errors,
    thrown,
    text: () => container.textContent.replace(/\s+/g, " "),
    unmount: async () => { await act(async () => root.unmount()); container.remove(); },
  };
}
