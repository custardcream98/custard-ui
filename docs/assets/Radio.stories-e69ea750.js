import{M as x,C as p,S as y}from"./chunk-G4YQS2SV-a2fac0a6.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as i,F as m,a as e}from"./jsx-runtime-68f49b4e.js";import{t as n,j as S,a as s,F as $,n as u}from"./index-81ac8b85.js";import{r as _}from"./index-f1f749bf.js";import{c as w}from"./sr-86a32c0e.js";import{u as f}from"./index-4fb8b842.js";import"./iframe-a61f6b3c.js";import"../sb-preview/runtime.mjs";import"./index-1b6725e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./index-356e4a49.js";import"./emotion-react.browser.esm-b83822e8.js";import"./colors-acd7d2dd.js";const j=(r,o)=>{if(o<0||o>255)throw new Error("transparency must be between 0 and 255.");const t=o.toString(16).padStart(2,"0");return n.colors[r]+t},M=j,c=_.forwardRef(function({id:o,name:t,label:d,value:g,defaultChecked:R=!1,radioColor:C="primary",onRadioClick:v},k){return S($,{children:[s(q,{ref:k,id:o,name:t,value:g,type:"radio",defaultChecked:R,onChange:v}),s(V,{htmlFor:o,radioColor:C,children:s(F,{children:d})})]})}),q=u.input`
  ${w}
`,V=u.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  transition: all 0.2s ease;

  border-radius: ${n.shape.borderRadius.rounded};
  padding: ${n.spacing.xxsmall} ${n.spacing.xsmall};

  ::before {
    content: "";
    display: inline-block;

    margin-right: 0.3rem;
    border-radius: 50%;
    box-sizing: border-box;
    width: 1rem;
    height: 1rem;
    background-color: ${n.colors.white};

    transition: all 0.2s ease;

    border: 2px solid
      ${({radioColor:r})=>n.colors[r]};
  }

  input[type="radio"]:checked + &::before {
    border: 0.3rem solid
      ${({radioColor:r})=>n.colors[r]};
  }
  input[type="radio"]:checked + & {
    background-color: ${({radioColor:r})=>M(r,30)};
  }
`,F=u.span`
  display: inline-block;

  transform: translateY(0.1rem);
`,a=c;try{c.displayName="Radio",c.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},onRadioClick:{defaultValue:null,description:"",name:"onRadioClick",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},radioColor:{defaultValue:{value:"primary"},description:"",name:"radioColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"gray"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'}]}}}}}catch{}function D(r={}){const{wrapper:o}=Object.assign({},f(),r.components);return o?e(o,{...r,children:e(t,{})}):t();function t(){const d=Object.assign({h1:"h1",p:"p",code:"code"},f(),r.components);return i(m,{children:[e(x,{title:"Components/Inputs/Radio",component:a}),`
`,e(d.h1,{children:"Checkbox"}),`
`,i(d.p,{children:[e(d.code,{children:'input[type="radio"]'}),"를 나타내는 컴포넌트입니다."]}),`
`,e(p,{children:i(y,{name:"Default",children:[e(a,{id:"radio1",name:"radio",label:"Radio 1",defaultChecked:!0}),e(a,{id:"radio2",name:"radio",label:"Radio 2"}),e(a,{id:"radio3",name:"radio",label:"Radio 3"})]})}),`
`,i(d.p,{children:[e(d.code,{children:"radioColor"}),"로 색상을 변경할 수 있습니다."]}),`
`,e(p,{children:i(y,{name:"Secondary",children:[e(a,{id:"radio-secondary1",name:"radio-secondary",label:"Radio 1",radioColor:"secondary",defaultChecked:!0}),e(a,{id:"radio-secondary2",name:"radio-secondary",label:"Radio 2",radioColor:"secondary"}),e(a,{id:"radio-secondary3",name:"radio-secondary",label:"Radio 3",radioColor:"secondary"})]})})]})}}const b=()=>i(m,{children:[e(a,{id:"radio1",name:"radio",label:"Radio 1",defaultChecked:!0}),e(a,{id:"radio2",name:"radio",label:"Radio 2"}),e(a,{id:"radio3",name:"radio",label:"Radio 3"})]});b.storyName="Default";b.parameters={storySource:{source:`<Radio id="radio1" name="radio" label="Radio 1" defaultChecked />
<Radio id="radio2" name="radio" label="Radio 2" />
<Radio id="radio3" name="radio" label="Radio 3" />`}};const h=()=>i(m,{children:[e(a,{id:"radio-secondary1",name:"radio-secondary",label:"Radio 1",radioColor:"secondary",defaultChecked:!0}),e(a,{id:"radio-secondary2",name:"radio-secondary",label:"Radio 2",radioColor:"secondary"}),e(a,{id:"radio-secondary3",name:"radio-secondary",label:"Radio 3",radioColor:"secondary"})]});h.storyName="Secondary";h.parameters={storySource:{source:`<Radio id="radio-secondary1" name="radio-secondary" label="Radio 1" radioColor="secondary" defaultChecked />
<Radio id="radio-secondary2" name="radio-secondary" label="Radio 2" radioColor="secondary" />
<Radio id="radio-secondary3" name="radio-secondary" label="Radio 3" radioColor="secondary" />`}};const l={title:"Components/Inputs/Radio",component:a,tags:["stories-mdx"],includeStories:["defaultStory","secondary"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:D};const W=["defaultStory","secondary"];export{W as __namedExportsOrder,l as default,b as defaultStory,h as secondary};
//# sourceMappingURL=Radio.stories-e69ea750.js.map
