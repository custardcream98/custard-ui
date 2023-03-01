import type { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Tab as TabComponent } from "../..";

export default {
  component: TabComponent.Wrapper,
  title: "Components/Tab",
  subcomponents: { Button: TabComponent.Button },
  parameters: {
    docs: {
      description: {
        component: `Tab 컴포넌트는 \`Tab.Wrapper\`, \`Tab.Button\`으로 구성됩니다. \`Tab.Button\` 컴포넌트의 \`isActive\` prop을 통해 활성화된 탭을 표시할 수 있습니다.`,
      },
    },
  },
} as ComponentMeta<typeof TabComponent.Wrapper>;

export const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabComponent.Wrapper>
      <TabComponent.Button
        isActive={activeTab === 1}
        onClick={() => setActiveTab(1)}
      >
        Tab1
      </TabComponent.Button>
      <TabComponent.Button
        isActive={activeTab === 2}
        onClick={() => setActiveTab(2)}
      >
        Tab2
      </TabComponent.Button>
      <TabComponent.Button
        isActive={activeTab === 3}
        onClick={() => setActiveTab(3)}
      >
        Tab3
      </TabComponent.Button>
    </TabComponent.Wrapper>
  );
};
