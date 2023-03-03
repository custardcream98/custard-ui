import{c as $}from"./emotion-react.browser.esm-b83822e8.js";const e=r=>{if(typeof r=="number")return`${r}px`;if(!r.match(/px$|rem$|em$|%$|vh$|vw$|vmin$|vmax$|pt$|pc$|in$|cm$|mm$|ex$|ch$|fr$/)){if(!isNaN(Number(r)))return`${r}px`;throw new Error(`값 ${r}은 유효한 CSS 단위가 아닙니다. 유효한 단위는 px, rem, em, %, vh, vw, vmin, vmax, pt, pc, in, cm, mm, ex, ch, fr 입니다.`)}return r},c=e,s=({width:r,height:m})=>$`
    ${r&&$`
      width: ${c(r)};
    `}
    ${m&&$`
      height: ${c(m)};
    `}
  `;export{s as c,c as r};
//# sourceMappingURL=size-97d59bbe.js.map
