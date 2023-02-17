import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Checkbox, theme } from "../";
import { act } from "react-dom/test-utils";

describe("Checkbox", () => {
  test("체크박스 컴포넌트 테스트", () => {
    const { getByText, container } = render(
      <Checkbox
        id="checkbox"
        label="testing checkbox"
        name="checkbox"
        onCheckboxClick={() => {}}
      />
    );

    const checkboxLabelElement = getByText(
      "testing checkbox"
    );
    const checkbox = container.querySelector(
      "input[type=checkbox]"
    );

    if (!checkbox) {
      throw new Error("checkbox is null");
    }

    expect(checkboxLabelElement).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(
      getComputedStyle(checkboxLabelElement).backgroundColor
    ).not.toBe(theme.colors.white);

    act(() => {
      checkboxLabelElement.click();
      expect(checkbox).toBeChecked();

      setTimeout(() => {
        expect(
          getComputedStyle(checkboxLabelElement)
            .backgroundColor
        ).toBe(theme.colors.white);
      }, 200);
    });
  });
});
