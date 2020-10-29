import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

window.open = jest.fn();

describe("testing remover user", () => {
  it("verify user in list", async () => {
    const { findByText } = render(<App />);
    const user = await findByText(":mojombo");
    expect(user).toBeVisible();
  });

  it("get button remove and set action remove user", async () => {
    const { findByText } = render(<App />);
    const user = await findByText(":mojombo");
    const button = user.parentElement?.querySelector(".buttons :nth-child(n2)");
    fireEvent.click(button!);
    const usersRemovid = await findByText("usuarios removidos 1");
    expect(usersRemovid).toBeVisible();
  });

  it("test open github", async () => {
    const { findByText } = render(<App />);
    const user = await findByText(":mojombo");
    const button = user.parentElement?.querySelector(".buttons :nth-child(n1)");
    fireEvent.click(button!);
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      "https://github.com/mojombo",
      "_blank"
    );
  });

  it("test filter with input", async () => {
    const { baseElement } = render(<App />);

    const input = baseElement.querySelector(".app input");
    fireEvent.input(input!, "defunkt");
  });
});
