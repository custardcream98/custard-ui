import{a as o,n as m,t as n}from"./index-81ac8b85.js";import{c as a}from"./emotion-react.browser.esm-b83822e8.js";import{T as p,a as c,b as f}from"./Typography-5630d55a.js";const r=({level:e="primary",borderRadius:u="medium",boxShadow:d="default",children:t,onClick:l,...i})=>o(v,{level:e,borderRadius:u,boxShadow:d,onClick:s=>{if(e==="disabled"){s.preventDefault();return}l==null||l(s)},...i,children:typeof t=="string"?o(p,{component:"span",children:t}):t}),v=m.button`
  max-width: 300px;
  display: flex;
  align-items: center;

  span {
    transform: translateY(0.1em);
  }

  ${({level:e})=>a`
    background-color: ${n.palette[e].main};
    color: ${n.palette[e].text};
  `}
  ${({level:e})=>e==="outline"&&a`
      border: 1px solid ${n.palette.outline.text};
    `}
  ${({level:e})=>e==="disabled"&&a`
      pointer-events: none;
    `}

  ${c}
  ${f}

  padding: 10px 15px;
  transition: all 0.2s ease;

  ${({level:e})=>e!=="disabled"&&a`
      :hover {
        transform: scale(1.05);
      }
    `}
`,$=r;try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},level:{defaultValue:{value:"primary"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"disabled"'},{value:'"outline"'}]}},boxShadow:{defaultValue:{value:"default"},description:"",name:"boxShadow",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"light"'},{value:'"default"'},{value:'"outlined"'},{value:'"heavy"'},{value:'"inset"'}]}},borderRadius:{defaultValue:{value:"medium"},description:"",name:"borderRadius",required:!1,type:{name:'number | "small" | "xsmall" | "medium" | "large" | "xlarge" | "rounded"'}}}}}catch{}export{$ as B};
//# sourceMappingURL=Button-f237eb0c.js.map
