import{S as v,M as b}from"./Searchbar.f627a3ad.js";import{u as m,c as N,d as S}from"./card.c5f94685.js";import{r as u,a as t,F as x,j as a,b as F}from"./index.0b02d859.js";const I=()=>{var l;const[s,n]=u.exports.useState(void 0),c=u.exports.useRef(1),o=m({queryKey:["getData"],...{queryFn:N,refetchOnWindowFocus:!1,staleTime:1/0}});console.log(o);const r=m({queryKey:["searchData",s],...{queryFn:()=>S(s),refetchOnWindowFocus:!1,staleTime:1/0},enabled:!!s}),h=e=>{n(e.target.value)},g=e=>{c.current.value=e,n(e)},y=()=>{c.current.value="",n("")},p=(e,i)=>{let d;return(...f)=>{clearTimeout(d),d=setTimeout(()=>{e(...f)},i)}},C=o.isLoading||r.isLoading;return t(x,{children:[t("section",{className:"top-bar",children:[a(v,{onChange:p(h,400),ref:c}),a("button",{onClick:y,children:"Clear"})]}),C?a(F,{}):r.isFetched?r.data.data.meals===null?a("main",{className:"card-holder",children:"Search Result Not found"}):a("main",{className:"card-holder",children:r.data.data.meals.map(e=>a("div",{className:"card-container",children:a(b,{meal:e,short:!0})}))}):a("main",{className:"card-holder",children:(l=o.data.data.categories)==null?void 0:l.map((e,i)=>a("div",{className:"card-container",children:t("div",{className:"card clickable",tabIndex:0,onClick:()=>g(e.strCategory),children:[a("img",{src:e.strCategoryThumb,alt:"Image not available",loading:"lazy"}),t("div",{children:[a("div",{className:"meal-name center",children:e.strCategory}),a("div",{className:"col1 line-clamp",children:a("div",{children:e.strCategoryDescription})})]})]})}))})]})};export{I as default};
