import{a as o,n as b,t as r,j as T}from"./index-81ac8b85.js";import{r as p}from"./index-f1f749bf.js";import{c as y}from"./emotion-react.browser.esm-b83822e8.js";import"./jsx-runtime-68f49b4e.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./colors-acd7d2dd.js";import"./_commonjsHelpers-042e6b4d.js";const d=p.createContext("primary"),s=({activeColor:t,children:e,...i})=>o(d.Provider,{value:t||"primary",children:o(g,{...i,children:e})}),g=b.ul`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;

  border-bottom: 2px solid ${r.colors.gray300};

  li {
    margin: 0 30px;
  }
`,C=s;try{s.displayName="Wrapper",s.__docgenInfo={description:"",displayName:"Wrapper",props:{activeColor:{defaultValue:null,description:"",name:"activeColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"gray"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'}]}}}}}catch{}const c=({isActive:t,children:e,...i})=>{const v=p.useContext(d);return o("li",{children:o(B,{type:"button",isActive:t,activeColor:v,...i,children:e})})},B=b.button`
  color: ${({isActive:t,activeColor:e})=>t?r.colors[e]:r.colors.gray300};
  font-weight: ${({isActive:t})=>t?600:400};
  padding: 0.5rem 0;
  margin-bottom: -2px;
  border-bottom: 2px solid transparent;

  transition: all 0.2s ease-in-out;

  ${({isActive:t,activeColor:e})=>t&&y`
      border-bottom: 2px solid ${r.colors[e]};
    `}

  :hover {
    border-bottom: 2px solid
      ${({activeColor:t})=>r.colors[t]};
  }
`,_=c;try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const x={Wrapper:C,Button:_},a=x,j={component:a.Wrapper,title:"Components/Tab",subcomponents:{Button:a.Button},parameters:{docs:{description:{component:"Tab 컴포넌트는 `Tab.Wrapper`, `Tab.Button`으로 구성됩니다. `Tab.Button` 컴포넌트의 `isActive` prop을 통해 활성화된 탭을 표시할 수 있습니다."}}}},n=()=>{const[t,e]=p.useState(1);return T(a.Wrapper,{children:[o(a.Button,{isActive:t===1,onClick:()=>e(1),children:"Tab1"}),o(a.Button,{isActive:t===2,onClick:()=>e(2),children:"Tab2"}),o(a.Button,{isActive:t===3,onClick:()=>e(3),children:"Tab3"})]})};var l,u,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(1);
  return <TabComponent.Wrapper>
      <TabComponent.Button isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
        Tab1
      </TabComponent.Button>
      <TabComponent.Button isActive={activeTab === 2} onClick={() => setActiveTab(2)}>
        Tab2
      </TabComponent.Button>
      <TabComponent.Button isActive={activeTab === 3} onClick={() => setActiveTab(3)}>
        Tab3
      </TabComponent.Button>
    </TabComponent.Wrapper>;
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const w=["Tab"];export{n as Tab,w as __namedExportsOrder,j as default};
//# sourceMappingURL=Tab.stories-c9f72edb.js.map
