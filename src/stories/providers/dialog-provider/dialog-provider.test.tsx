import { expect, test, vi, SpyInstance } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { DialogProvider, useDialog } from "./dialog-provider";
import userEvent from "@testing-library/user-event";
import Button from "../../../stories/components/button";

test("DialogProvider should render", () => {
  const { getByText } = render(() => <DialogProvider>Test content</DialogProvider>);
  const text = getByText("Test content");

  expect(text).toBeTruthy();
});

// test("useDialog should show modal when used outside of DialogProvider", async () => {
//   let a: SpyInstance;
//   const buttonClick = () => {
//     const dialog = useDialog();
//     a = vi.spyOn(dialog, "show");
//     dialog.show({ title: "Test title", description: "test description", open: true });
//   }
//
//   const { getByTestId } = render(() => <DialogProvider>
//     <Button testId={"btn"} onClick={buttonClick}>Show modal</Button>
//   </DialogProvider>);
//
//   const button = getByTestId("btn");
//   const user = userEvent.setup();
//
//   await user.click(button);
//
//   expect(a!).toHaveBeenCalled();
//
//   const modal = await screen.findByText("Test title");
//
//   expect(modal).toBeTruthy();
// });
