# custard-ui

- React Component Library using Emotion
- Supports Various Types: Developed using TypeScript

[Storybook으로 문서화](https://custardcream98.github.io/custard-ui)됩니다.

## 사용하기

custard-ui는 [node package로 배포](https://www.npmjs.com/package/custard-ui)되었습니다.

```shell
npm i custard-ui
# or yarn i custard-ui
```

본 라이브러리를 사용하려면 아래의 dependency가 필요합니다.

```json
{
  "@emotion/react": "^11.10.5",
  "@emotion/styled": "^11.10.5",
  "react": ">=17.0.0",
  "react-dom": ">=17.0.0",
  "react-icons": "^4.7.1"
}
```

### 사용하기 전에

본 라이브러리는 Global Style을 적용해야 제대로 동작합니다.

```jsx
// App.jsx

import { globalStyle } from "custard-ui";
import { Global } from "@emotion/react";

const App = () => (
  <>
    <Global styles={globalStyle} />
    {/* ... */}
  </>
);
```

> `globalStyle`에는 Reset CSS 코드가 포함돼 있습니다.

필요한 경우 아래와 같이 커스터마이즈 할 수 있습니다.

```jsx
import { globalStyle as cuiGlobalStyle } from "custard-ui";
import { css } from "@emotion/react";

const globalStyle = css`
  /* Custom Global Styles */

  ${cuiGlobalStyle}
`;

const App = () => (
  <>
    <Global styles={globalStyle} />
    {/* ... */}
  </>
);
```

## 로컬 환경에서 라이브러리 테스트하기

`Jest`, `testing-library`를 활용해 테스트 환경이 구축돼 있습니다.

```shell
yarn test
```

`Storybook`을 활용해 렌더링된 컴포넌트의 모습을 쉽게 확인할 수 있습니다.

```shell
yarn storybook
```
