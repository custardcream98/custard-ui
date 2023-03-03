import{M as w,C as i,S as h}from"./chunk-G4YQS2SV-a2fac0a6.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as d,a as e,F}from"./jsx-runtime-68f49b4e.js";import{F as t}from"./Flex-80eb5885.js";import{j as _,a as k,F as q,n as p,t as r}from"./index-81ac8b85.js";import{c as V}from"./emotion-react.browser.esm-b83822e8.js";import{r as j}from"./index-f1f749bf.js";import{c as M}from"./sr-86a32c0e.js";import{u as y}from"./index-4fb8b842.js";import"./iframe-a61f6b3c.js";import"../sb-preview/runtime.mjs";import"./index-1b6725e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./index-356e4a49.js";import"./size-97d59bbe.js";import"./colors-acd7d2dd.js";const s=j.forwardRef(function({id:l,label:n,name:o,value:x,defaultChecked:g=!1,checkedTextColor:C,checkedBackgroundColor:v,uncheckedTextColor:f,uncheckedBackgroundColor:B,className:T,onCheckboxClick:S},$){return _(q,{children:[k(N,{ref:$,id:l,name:o,defaultChecked:g,type:"checkbox",value:x,onChange:S}),k(D,{htmlFor:l,className:T,checkedTextColor:C,checkedBackgroundColor:v,uncheckedTextColor:f,uncheckedBackgroundColor:B,children:n})]})}),N=p.input`
  ${M}
`,D=p.label`
  display: inline-block;

  ${({checkedTextColor:c,checkedBackgroundColor:l,uncheckedTextColor:n,uncheckedBackgroundColor:o})=>V`
      background-color: ${r.colors[o??"white"]};
      color: ${r.colors[n??"black"]};
      outline: 1px solid
        ${r.colors[n??"black"]};

      input[type="checkbox"]:checked + & {
        background-color: ${r.colors[l??"primary"]};
        color: ${r.colors[c??"white"]};
        outline: none;
      }
    `}

  padding: ${r.spacing.xsmall};
  border-radius: ${r.shape.borderRadius.large};
  box-shadow: ${r.shape.shadows.default};

  transition: all 0.2s ease;
  :hover {
    scale: 1.03;
  }
  :active {
    scale: 0.9;
  }
  cursor: pointer;
`,a=s;try{s.displayName="Checkbox",s.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},onCheckboxClick:{defaultValue:null,description:"",name:"onCheckboxClick",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},checkedTextColor:{defaultValue:null,description:"",name:"checkedTextColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"gray"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'}]}},checkedBackgroundColor:{defaultValue:null,description:"",name:"checkedBackgroundColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"gray"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'}]}},uncheckedTextColor:{defaultValue:null,description:"",name:"uncheckedTextColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"gray"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'}]}},uncheckedBackgroundColor:{defaultValue:null,description:"",name:"uncheckedBackgroundColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"gray"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function E(c={}){const{wrapper:l}=Object.assign({},y(),c.components);return l?e(l,{...c,children:e(n,{})}):n();function n(){const o=Object.assign({h1:"h1",p:"p",code:"code"},y(),c.components);return d(F,{children:[e(w,{title:"Components/Inputs/Checkbox",component:a}),`
`,e(o.h1,{children:"Checkbox"}),`
`,d(o.p,{children:[e(o.code,{children:'input[type="checkbox"]'}),"를 나타내는 컴포넌트입니다."]}),`
`,e(i,{children:e(h,{name:"Default",children:d(t,{gap:"10px",children:[e(a,{id:"checkbox1",label:"Checkbox"}),e(a,{id:"checkbox2",label:"Checkbox"}),e(a,{id:"checkbox3",label:"Checkbox"})]})})}),`
`,d(o.p,{children:[e(o.code,{children:"checkedTextColor"}),", ",e(o.code,{children:"checkedBackgroundColor"}),", ",e(o.code,{children:"uncheckedTextColor"}),", ",e(o.code,{children:"uncheckedBackgroundColor"})," 네가지 prop을 통해 색을 변경할 수 있습니다."]}),`
`,e(i,{children:e(h,{name:"Secondary",children:d(t,{gap:"10px",children:[e(a,{id:"checkbox-secondary1",label:"Checkbox",checkedBackgroundColor:"secondary",uncheckedTextColor:"secondary"}),e(a,{id:"checkbox-secondary2",label:"Checkbox",checkedBackgroundColor:"secondary",uncheckedTextColor:"secondary"}),e(a,{id:"checkbox-secondary3",label:"Checkbox",checkedBackgroundColor:"secondary",uncheckedTextColor:"secondary"})]})})})]})}}const b=()=>d(t,{gap:"10px",children:[e(a,{id:"checkbox1",label:"Checkbox"}),e(a,{id:"checkbox2",label:"Checkbox"}),e(a,{id:"checkbox3",label:"Checkbox"})]});b.storyName="Default";b.parameters={storySource:{source:'<Flex gap="10px"><Checkbox id="checkbox1" label="Checkbox" /><Checkbox id="checkbox2" label="Checkbox" /><Checkbox id="checkbox3" label="Checkbox" /></Flex>'}};const m=()=>d(t,{gap:"10px",children:[e(a,{id:"checkbox-secondary1",label:"Checkbox",checkedBackgroundColor:"secondary",uncheckedTextColor:"secondary"}),e(a,{id:"checkbox-secondary2",label:"Checkbox",checkedBackgroundColor:"secondary",uncheckedTextColor:"secondary"}),e(a,{id:"checkbox-secondary3",label:"Checkbox",checkedBackgroundColor:"secondary",uncheckedTextColor:"secondary"})]});m.storyName="Secondary";m.parameters={storySource:{source:'<Flex gap="10px"><Checkbox id="checkbox-secondary1" label="Checkbox" checkedBackgroundColor="secondary" uncheckedTextColor="secondary" /><Checkbox id="checkbox-secondary2" label="Checkbox" checkedBackgroundColor="secondary" uncheckedTextColor="secondary" /><Checkbox id="checkbox-secondary3" label="Checkbox" checkedBackgroundColor="secondary" uncheckedTextColor="secondary" /></Flex>'}};const u={title:"Components/Inputs/Checkbox",component:a,tags:["stories-mdx"],includeStories:["defaultStory","secondary"]};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:E};const re=["defaultStory","secondary"];export{re as __namedExportsOrder,u as default,b as defaultStory,m as secondary};
//# sourceMappingURL=Checkbox.stories-8640c646.js.map
