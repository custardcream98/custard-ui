import{M as k,C as z,S as j}from"./chunk-G4YQS2SV-a2fac0a6.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{a as o,j as b,F}from"./jsx-runtime-68f49b4e.js";import{j as $,a as E,n as h,t as H}from"./index-81ac8b85.js";import{r as t}from"./index-f1f749bf.js";import{c as I}from"./emotion-react.browser.esm-b83822e8.js";import{u as T}from"./index-4fb8b842.js";import"./iframe-a61f6b3c.js";import"../sb-preview/runtime.mjs";import"./index-1b6725e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./index-356e4a49.js";import"./colors-acd7d2dd.js";const D=(e,c=null)=>{const a=t.useRef(c);return t.useEffect(()=>{e&&(typeof e=="function"?e(a.current):e.current=a.current)},[e]),a},N=D,O=200,f=t.forwardRef(({minHeight:e=O,className:c,...a},s)=>{const i=N(s),L=t.useRef(null),[S,_]=t.useState(e),[x,g]=t.useState(!1),[C,w]=t.useState(!1),v=t.useCallback(()=>{g(!0)},[]),d=t.useCallback(()=>{g(!1)},[]),p=t.useCallback(()=>{w(!0)},[]),m=t.useCallback(()=>{w(!1)},[]),y=t.useCallback(r=>n=>{if(!x)return;const M=(n instanceof MouseEvent?n.pageY:n.touches[0].pageY)-r.offsetTop-e;_(Math.max(M,e)),n.preventDefault()},[i,x,e]);return t.useEffect(()=>{const r=i.current;if(!r)return;const n=y(r);return window.addEventListener("mouseup",d),window.addEventListener("touchend",d),window.addEventListener("mousemove",n),window.addEventListener("touchmove",n,{passive:!1}),()=>{window.removeEventListener("mouseup",d),window.removeEventListener("touchend",d),window.removeEventListener("mousemove",n),window.removeEventListener("touchmove",n)}},[d,y,i]),t.useEffect(()=>{const r=i.current;if(r)return r.addEventListener("focusin",p),r.addEventListener("focusout",m),()=>{r.removeEventListener("focusin",p),r.removeEventListener("focusout",m)}},[i,p,m]),$(Y,{className:c,isFocused:C,children:[E(W,{ref:i,textareaHeight:S,...a}),E(X,{ref:L,onMouseDown:v,onTouchStart:v,"aria-label":"입력란 크기 조절 핸들"})]})}),Y=h.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;

  overflow: hidden;

  ${({isFocused:e})=>e&&I`
      outline: 2px solid ${H.colors.primary};
      outline-offset: 2px;
    `}
`,X=h.button`
  display: block;

  width: 100%;
  height: 10px;
  background-color: #f0f0f0;

  cursor: ns-resize;

  ::before {
    content: "";
    width: 30px;
    height: 3px;
    border-radius: 9999px;
    background-color: #ccc;
    display: block;
    margin: 0 auto;
  }
`,W=h.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  border: none;

  padding: 0.6rem;

  font-size: 1rem;
  resize: none;

  height: ${({textareaHeight:e})=>e}px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #ccc;
    font-weight: 300;
  }
`,u=f;try{f.displayName="Textarea",f.__docgenInfo={description:"",displayName:"Textarea",props:{minHeight:{defaultValue:{value:"200"},description:"",name:"minHeight",required:!1,type:{name:"number"}}}}}catch{}function q(e={}){const{wrapper:c}=Object.assign({},T(),e.components);return c?o(c,{...e,children:o(a,{})}):a();function a(){const s=Object.assign({h1:"h1",p:"p",code:"code"},T(),e.components);return b(F,{children:[o(k,{title:"Components/Textarea",component:u}),`
`,o(s.h1,{children:"Textarea"}),`
`,b(s.p,{children:[o(s.code,{children:"Textarea"})," 컴포넌트는 수직으로 사이즈를 조절할 수 있으며, ",o(s.code,{children:"minHeight"})," prop을 통해 최소 높이를 지정할 수 있습니다."]}),`
`,o(z,{children:o(j,{name:"Textarea",children:o(u,{placeholder:"Type anything..."})})}),`
`,o(s.p,{children:"모바일 환경에서도 잘 지원됩니다."})]})}}const R=()=>o(u,{placeholder:"Type anything..."});R.storyName="Textarea";R.parameters={storySource:{source:'<Textarea placeholder="Type anything..." />'}};const l={title:"Components/Textarea",component:u,tags:["stories-mdx"],includeStories:["textarea"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:q};const ie=["textarea"];export{ie as __namedExportsOrder,l as default,R as textarea};
//# sourceMappingURL=Textarea.stories-95049db7.js.map
