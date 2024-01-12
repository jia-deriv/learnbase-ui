import{c as le,a as ie,t as ce,j as S}from"./index-Gp6L-NQN.js";import{R as i}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const c={primary:"text-primary",secondary:"text-secondary",error:"text-error",success:"text-success",warning:"text-warning",darkSlate:"text-darkSlate",lightSlate:"text-lightSlate",darkGray:"text-darkGray",lightGray:"text-lightGray",darkZinc:"text-darkZinc",lightZinc:"text-lightZinc",darkNeutral:"text-darkNeutral",lightNeutral:"text-lightNeutral",darkStone:"text-darkStone",lightStone:"text-lightStone",darkRed:"text-darkRed",lightRed:"text-lightRed",darkOrange:"text-darkOrange",lightOrange:"text-lightOrange",darkAmber:"text-darkAmber",lightAmber:"text-lightAmber",darkYellow:"text-darkYellow",lightYellow:"text-lightYellow",darkLime:"text-darkLime",lightLime:"text-lightLime",darkGreen:"text-darkGreen",lightGreen:"text-lightGreen",darkEmerald:"text-darkEmerald",lightEmerald:"text-lightEmerald",darkTeal:"text-darkTeal",lightTeal:"text-lightTeal",darkCyan:"text-darkCyan",lightCyan:"text-lightCyan",darkSky:"text-darkSky",lightSky:"text-lightSky",darkBlue:"text-darkBlue",lightBlue:"text-lightBlue",darkIndigo:"text-darkIndigo",lightIndigo:"text-lightIndigo",darkViolet:"text-darkViolet",lightViolet:"text-lightViolet",darkPurple:"text-darkPurple",lightPurple:"text-lightPurple",darkFuchsia:"text-darkFuchsia",lightFuchsia:"text-lightFuchsia",darkPink:"text-darkPink",lightPink:"text-lightPink",darkRose:"text-darkRose",lightRose:"text-lightRose"},de=le("flex items-center transition-all border",{variants:{variant:{outlined:" ",contained:""},color:c,size:{xs:"px-3 py-1 text-xs gap-1",sm:"px-3 py-1 text-sm gap-1",md:"px-4 py-1 text-md gap-1",lg:"px-5 py-2 text-lg gap-2",xl:"px-6 py-3 text-xl gap-2"},rounded:{none:"rounded-none",sm:"rounded",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},iconPosition:{start:"flex-row",end:"flex-row-reverse"},fullWidth:{true:"w-full"}},compoundVariants:[...Object.keys(c).map(e=>({variant:"contained",color:e,class:`text-white bg-${e} hover:text-${e} border-${e} hover:bg-transparent`})),...Object.keys(c).map(e=>({variant:"outlined",color:e,class:`hover:bg-${e} border-${e}`})),{variant:"outlined",color:Object.keys(c),class:"bg-transparent hover:text-white"}],defaultVariants:{variant:"outlined",color:"primary",size:"md",rounded:"md",iconPosition:"end",fullWidth:!1}}),ae=({children:e,className:r,label:t,variant:a,color:n,size:d,rounded:v,iconPosition:u,fullWidth:l,icon:O,...se})=>ie("button",{type:"button",className:ce(de({variant:a,color:n,size:d,rounded:v,iconPosition:u,fullWidth:l}),O?"justify-between":"justify-center",r),...se,children:[O,t]});ae.displayName="Button";var ne={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=i.createContext&&i.createContext(ne),s=function(){return s=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)},ue=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};function oe(e){return e&&e.map(function(r,t){return i.createElement(r.tag,s({key:t},r.attr),oe(r.child))})}function ge(e){return function(r){return i.createElement(me,s({attr:s({},e.attr)},r),oe(e.child))}}function me(e){var r=function(t){var a=e.attr,n=e.size,d=e.title,v=ue(e,["attr","size","title"]),u=n||t.size||"1em",l;return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),i.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,v,{className:l,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),d&&i.createElement("title",null,d),e.children)};return C!==void 0?i.createElement(C.Consumer,null,function(t){return r(t)}):r(ne)}function w(e){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}const P={icon:S(w,{}),none:null},ye={component:ae,title:"Button",tags:["autodocs"],argTypes:{className:{table:{disable:!0}},icon:{description:"`ReactNode`",options:Object.keys(P),mapping:P,control:{type:"radio"},table:{defaultValue:{summary:"none"}}},label:{description:"`string`"},variant:{description:"`outlined` | `contained`",options:["outlined","contained"],control:{type:"radio"},table:{defaultValue:{summary:"outlined"}}},color:{description:"`ColorVariant`",options:Object.keys(c),control:{type:"select"},table:{defaultValue:{summary:"primary"}}},size:{description:"`xs` | `sm` | `md` | `lg` | `xl`",options:["xs","sm","md","lg","xl"],control:{type:"radio"},table:{defaultValue:{summary:"md"}}},rounded:{description:"`none` | `sm` | `md` | `lg` | `full`",options:["none","sm","md","lg","full"],control:{type:"radio"},table:{defaultValue:{summary:"sm"}}},iconPosition:{description:"`start` | `end`",options:["start","end"],control:{type:"radio"},table:{defaultValue:{summary:"start"}}},fullWidth:{description:"`boolean`",control:{type:"boolean",expanded:!0},table:{defaultValue:{summary:"false"}}}}},o={args:{label:"Button"}},g={args:{...o.args,variant:"contained"}},m={args:{...o.args,color:"primary"}},p={args:{...o.args,color:"secondary"}},x={args:{...o.args,color:"error"}},h={args:{...o.args,color:"success"}},y={args:{...o.args,icon:S(w,{})}},f={args:{...o.args,fullWidth:!0}},k={args:{...o.args,rounded:"full"}},b={args:{icon:S(w,{}),rounded:"full",className:"p-3"}};var j,N,E;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(E=(N=o.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var B,R,I;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'contained'
  }
}`,...(I=(R=g.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var D,W,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'primary'
  }
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var z,F,G;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'secondary'
  }
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var V,A,L;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'error'
  }
}`,...(L=(A=x.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var T,$,Y;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success'
  }
}`,...(Y=($=h.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};var Z,M,q;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <FiAlertCircle />
  }
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var H,J,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rounded: 'full'
  }
}`,...(X=(U=k.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var ee,te,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    icon: <FiAlertCircle />,
    rounded: 'full',
    className: 'p-3'
  }
}`,...(re=(te=b.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const fe=["Default","Contained","Primary","Secondary","Error","Success","WithIcon","FullWidth","Rounded","IconButton"];export{g as Contained,o as Default,x as Error,f as FullWidth,b as IconButton,m as Primary,k as Rounded,p as Secondary,h as Success,y as WithIcon,fe as __namedExportsOrder,ye as default};
