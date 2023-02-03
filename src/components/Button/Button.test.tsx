import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("버튼 컴포넌트 테스트", () => {
    render(<Button level="primary" />);
  });
});
