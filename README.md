# custard-ui

React 디자인 시스템 개발중!

[Storybook](https://custardcream98.github.io/custard-ui)으로 문서화됩니다.

## 사용하기

custard-ui는 node package로 배포되었습니다.

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

## 로컬 환경에서 라이브러리 테스트하기

`Jest`, `testing-library`를 활용해 테스트 환경이 구축돼 있습니다.

```shell
yarn test
```

`Storybook`을 활용해 렌더링된 컴포넌트의 모습을 쉽게 확인할 수 있습니다.

```shell
yarn storybook
```
