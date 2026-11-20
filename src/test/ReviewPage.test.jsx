import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { Review } from "../components/ReviewPage";

describe("Review form", () => {
  it("1. renders the form and checks inputs and forms", async () => {
    const user = userEvent.setup();
    render(<Review />);
    const titleInpt = screen.getByPlaceholderText("Movie Title");
    const nameInpt = screen.getByPlaceholderText("Name");
    const emailInpt = screen.getByPlaceholderText("example@email.com");
    const rateBtn3 = screen.getAllByRole("button", { name: "" })[2];
    const sub = screen.getByRole("button", { name: "Submit" });
    await user.type(titleInpt, "Pirates");
    await user.type(nameInpt, "Coco ");
    await user.type(emailInpt, "test@email.com");
    await user.click(rateBtn3);
    await user.click(sub);
    expect(screen.getByText("Pirates")).toBeInTheDocument();
  });
  it("2. renders the form and checks inputs errors", async () => {
    const user = userEvent.setup();
    render(<Review />);
    const titleInpt = screen.getByPlaceholderText("Movie Title");
    const nameInpt = screen.getByPlaceholderText("Name");
    const rateBtn3 = screen.getAllByRole("button", { name: "" })[2];
    const sub = screen.getByRole("button", { name: /submit/i });
    await user.type(titleInpt, "Pirates");
    await user.type(nameInpt, "Coco ");
    await user.click(rateBtn3);
    await user.click(sub);
    expect(screen.getByText("Must add valid email")).toBeInTheDocument();
  });
});
