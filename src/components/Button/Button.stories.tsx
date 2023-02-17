import type {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `\`<button>\` 요소를 의미하는 버튼 컴포넌트입니다. \`hover\`시에 살짝 커지는 효과가 적용됩니다.\n\n\`disabled\` level을 선택하면 \`onClick\` 이벤트의 동작을 막습니다.`,
      },
      stories: {},
    },
  },
  argTypes: {
    level: {
      description:
        "다양한 버튼 스타일을 선택할 수 있습니다.",
      control: {
        type: "select",
      },
    },
    children: {
      description:
        "버튼에 표시할 텍스트 혹은 자식 컴포넌트를 의미합니다.",
    },
    shadow: {
      description: "기본적으로 `default` 값이 적용됩니다.",
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  level: "primary",
  children: "Primary",
};

export const Secoundary = Template.bind({});
Secoundary.args = {
  level: "secondary",
  children: "Secondary",
};

export const Outline = Template.bind({});
Outline.args = {
  level: "outline",
  children: "Outline",
};

export const Disabled = Template.bind({});
Disabled.args = {
  level: "disabled",
  children: "Disabled",
};
