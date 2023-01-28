import type {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      name: "Type",
    },
    children: {
      name: "Label",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "Primary",
  children: "Primary",
};

export const Secoundary = Template.bind({});
Secoundary.args = {
  variant: "Secondary",
  children: "Secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "Tertiary",
  children: "Tertiary",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "Danger",
  children: "Danger",
};

export const Success = Template.bind({});
Success.args = {
  variant: "Success",
  children: "Success",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "Warning",
  children: "Warning",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "Outline",
  children: "Outline",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "Disabled",
  children: "Disabled",
};
