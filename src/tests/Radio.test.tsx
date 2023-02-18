import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Radio, theme } from "../";
import { act } from "react-dom/test-utils";

describe("Checkbox", () => {
  test("체크박스 컴포넌트 테스트", () => {
    const { getAllByText, container } = render(
      <fieldset>
        <Radio
          id="radio1"
          name="radio"
          label="testing radio"
        />
        <Radio
          id="radio2"
          name="radio"
          label="testing radio"
        />
        <Radio
          id="radio3"
          name="radio"
          label="testing radio"
        />
      </fieldset>
    );

    const radioLabelElements =
      getAllByText("testing radio");

    // 렌더링 체크
    radioLabelElements.forEach((radioLabelElement) => {
      expect(radioLabelElement).toBeInTheDocument();
    });

    const radio1 =
      container.querySelector<HTMLInputElement>(
        "input[type=radio][id=radio1]"
      );
    const radio2 =
      container.querySelector<HTMLInputElement>(
        "input[type=radio][id=radio2]"
      );
    const radio3 =
      container.querySelector<HTMLInputElement>(
        "input[type=radio][id=radio3]"
      );

    if (!radio1 || !radio2 || !radio3) {
      throw new Error("radio is null");
    }

    // 체크 시뮬레이션
    act(() => {
      radioLabelElements[0].click();
      expect(radio1).toBeChecked();
      expect(radio2).not.toBeChecked();
      expect(radio3).not.toBeChecked();

      radioLabelElements[1].click();
      expect(radio1).not.toBeChecked();
      expect(radio2).toBeChecked();
      expect(radio3).not.toBeChecked();

      radioLabelElements[2].click();
      expect(radio1).not.toBeChecked();
      expect(radio2).not.toBeChecked();
      expect(radio3).toBeChecked();
    });
  });
});
