import { Typography, Center, Div, Flex } from "../../";

export default {
  title: "Components/Boxes",
  component: Div,
  subcomponents: { Center, Flex },
  parameters: {
    docs: {
      description: {
        component: `\`div\` 요소를 위한 \`Div\`컴포넌트가 있으며, 자식 컴포넌트들의 정렬을 위해 \`Center\`와 \`Flex\` 컴포넌트를 제공합니다.\n\n\`Show Code\`를 눌러 예시 코드를 확인해보세요.`,
      },
      stories: {},
    },
  },
};

export const DivBox = () => (
  <Div
    width="100px"
    height="100px"
    backgroundColor="primary"
    textColor="white"
    borderRadius="medium"
    boxShadow="default"
  >
    Div
  </Div>
);

export const CenterBox = () => (
  <Center width="100%" height="100px">
    <Typography
      component="p"
      width="150px"
      backgroundColor="secondary"
      textColor="white"
      padding="medium"
      borderRadius="medium"
    >
      Center 컴포넌트는 정렬만을 위한 컴포넌트로, 자식
      컴포넌트를 감싸는 역할만 합니다.
    </Typography>
  </Center>
);

export const FlexBox = () => (
  <Flex width="100%" height="100px" gap="10px">
    <Typography
      component="p"
      backgroundColor="primary"
      borderRadius="medium"
    >
      Flex 컴포넌트도 정렬만을 위한 컴포넌트로,
    </Typography>
    <Typography
      component="p"
      backgroundColor="primary"
      borderRadius="medium"
    >
      자식 컴포넌트를 감싸는 역할만 합니다.
    </Typography>
  </Flex>
);
