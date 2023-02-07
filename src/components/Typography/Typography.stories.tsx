import type {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: `Heading Element, \`span\`, \`p\` 요소로 넣을 수 있는 텍스트 컴포넌트입니다. \n\n기본적으로 각 요소별 스타일이 정해져 있으나, \`fontSize\`와 \`marginTop\`, \`marginBottom\`, \`fontWeight\` 등을 활용해 커스터마이징 할 수 있습니다.`,
      },
      stories: {},
    },
  },
  argTypes: {
    component: {
      description:
        "텍스트를 담을 요소의 종류를 선택할 수 있습니다.",
    },
    textAlign: {
      control: {
        type: "select",
        options: [
          "left",
          "center",
          "right",
          "justify",
          "end",
          "match-parent",
          "start",
        ],
      },
    },
    textTransform: {
      control: {
        type: "select",
        options: [
          "capitalize",
          "lowercase",
          "uppercase",
          "full-size-kana",
          "full-width",
          "none",
        ],
      },
    },
    fontSize: {
      description: "폰트 사이즈를 선택할 수 있습니다.",
      control: {
        type: "select",
        options: [
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
          "xxlarge",
        ],
      },
    },
    fontWeight: {
      description: "폰트 두께를 선택할 수 있습니다.",
      control: {
        type: "select",
        options: [
          "light",
          "regular",
          "semiBold",
          "extraBold",
        ],
      },
    },
    marginTop: {
      control: "select",
    },
    marginBottom: {
      control: "select",
    },
    backgroundColor: {
      control: "select",
    },
    textColor: {
      control: "select",
    },
    width: {
      control: "text",
    },
    height: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (
  args
) => <Typography {...args} />;

export const Span = Template.bind({});
Span.args = {
  children: "Welcome to Custard UI, 리액트 라이브러리!",
};

export const H1 = Template.bind({});
H1.args = {
  component: "h1",
  children: "Welcome to Custard UI, 리액트 라이브러리!",
};
export const H2 = Template.bind({});
H2.args = {
  component: "h2",
  children: "Welcome to Custard UI, 리액트 라이브러리!",
};
export const H3 = Template.bind({});
H3.args = {
  component: "h3",
  children: "Welcome to Custard UI, 리액트 라이브러리!",
};
export const H4 = Template.bind({});
H4.args = {
  component: "h4",
  children: "Welcome to Custard UI, 리액트 라이브러리!",
};
export const H5 = Template.bind({});
H5.args = {
  component: "h5",
  children: "Welcome to Custard UI, 리액트 라이브러리!",
};
export const H6 = Template.bind({});
H6.args = {
  component: "h6",
  children: "Welcome to Custard UI, 리액트 라이브러리!",
};
export const P = Template.bind({});
P.args = {
  component: "p",
  children: "Welcome to Custard UI, 리액트 라이브러리!",
};
