import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FiArrowUpCircle } from "react-icons/fi";

import { Button, IconButton } from "../";

describe("Button", () => {
  test("버튼 컴포넌트 테스트", () => {
    const { getByText } = render(
      <Button
        level="primary"
        boxShadow="heavy"
        borderRadius="rounded"
        onClick={() => {}}
      >
        testing button
      </Button>
    );

    const buttonElement = getByText(
      "testing button"
    ).parentElement;

    expect(buttonElement).toBeInTheDocument();
  });

  test("아이콘 버튼 컴포넌트 테스트", () => {
    render(
      <IconButton
        icon={FiArrowUpCircle}
        iconTitle="icon-title"
        iconSize={30}
        level="primary"
        boxShadow="heavy"
        borderRadius="rounded"
        onClick={() => {}}
      >
        testing icon button
      </IconButton>
    );

    const iconButtonElement = screen.getByText(
      "testing icon button"
    ).parentElement; // 텍스트는 span 태그로 감싸져 있음
    const iconElement =
      iconButtonElement?.querySelector("svg");

    expect(iconButtonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("width", "30px");
    expect(iconElement).toHaveAttribute("height", "30px");
  });
});
