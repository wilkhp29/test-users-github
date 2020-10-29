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
    const button = user.parentElement?.querySelector(":nth-child(n6)");
    fireEvent.click(button!);
    const usersRemovid = await findByText("usuarios removidos 1");
    expect(usersRemovid).toBeVisible();
  });

  it("addinng user in list again", async () => {
    const { findByText } = render(<App />);
    const user = await findByText(":mojombo");
    const button = user.parentElement?.querySelector(":nth-child(n6)");
    fireEvent.click(button!);
    const usersRemovid = await findByText("usuarios removidos 1");
    expect(usersRemovid).toBeVisible();
    const userRemoved = await findByText("mojombo");
  });

  it("test open github", async () => {
    const { findByText } = render(<App />);
    const user = await findByText(":mojombo");
    const button = user.parentElement?.querySelector(":nth-child(n5)");
    fireEvent.click(button!);
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      "https://github.com/mojombo",
      "_blank"
    );
  });
});
