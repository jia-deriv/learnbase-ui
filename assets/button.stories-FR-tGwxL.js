import{c as X,a as ee,t as te,j as b}from"./index-Gp6L-NQN.js";import{R as i}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const d={primary:"text-primary",secondary:"text-secondary",error:"text-error",success:"text-success",warning:"text-warning",darkSlate:"text-darkSlate",lightSlate:"text-lightSlate",darkGray:"text-darkGray",lightGray:"text-lightGray",darkZinc:"text-darkZinc",lightZinc:"text-lightZinc",darkNeutral:"text-darkNeutral",lightNeutral:"text-lightNeutral",darkStone:"text-darkStone",lightStone:"text-lightStone",darkRed:"text-darkRed",lightRed:"text-lightRed",darkOrange:"text-darkOrange",lightOrange:"text-lightOrange",darkAmber:"text-darkAmber",lightAmber:"text-lightAmber",darkYellow:"text-darkYellow",lightYellow:"text-lightYellow",darkLime:"text-darkLime",lightLime:"text-lightLime",darkGreen:"text-darkGreen",lightGreen:"text-lightGreen",darkEmerald:"text-darkEmerald",lightEmerald:"text-lightEmerald",darkTeal:"text-darkTeal",lightTeal:"text-lightTeal",darkCyan:"text-darkCyan",lightCyan:"text-lightCyan",darkSky:"text-darkSky",lightSky:"text-lightSky",darkBlue:"text-darkBlue",lightBlue:"text-lightBlue",darkIndigo:"text-darkIndigo",lightIndigo:"text-lightIndigo",darkViolet:"text-darkViolet",lightViolet:"text-lightViolet",darkPurple:"text-darkPurple",lightPurple:"text-lightPurple",darkFuchsia:"text-darkFuchsia",lightFuchsia:"text-lightFuchsia",darkPink:"text-darkPink",lightPink:"text-lightPink",darkRose:"text-darkRose",lightRose:"text-lightRose"},re=X("flex items-center transition-all border",{variants:{variant:{outlined:" ",contained:""},color:d,size:{xs:"px-3 py-1 text-xs gap-1",sm:"px-3 py-1 text-sm gap-1",md:"px-4 py-1 text-md gap-1",lg:"px-5 py-2 text-lg gap-2",xl:"px-6 py-3 text-xl gap-2"},rounded:{none:"rounded-none",sm:"rounded",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},iconPosition:{start:"flex-row",end:"flex-row-reverse"},fullWidth:{true:"w-full"}},compoundVariants:[...Object.keys(d).map(e=>({variant:"contained",color:e,class:`text-white bg-${e} hover:text-${e} border-${e} hover:bg-transparent`})),...Object.keys(d).map(e=>({variant:"outlined",color:e,class:`hover:bg-${e} border-${e}`})),{variant:"outlined",color:Object.keys(d),class:"bg-transparent hover:text-white"}],defaultVariants:{variant:"outlined",color:"primary",size:"md",rounded:"md",iconPosition:"end",fullWidth:!1}}),J=({children:e,className:r,label:t,variant:a,color:n,size:c,rounded:k,iconPosition:u,fullWidth:s,icon:S,...U})=>ee("button",{type:"button",className:te(re({variant:a,color:n,size:c,rounded:k,iconPosition:u,fullWidth:s}),S?"justify-between":"justify-center",r),...U,children:[S,t]});J.displayName="Button";var K={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=i.createContext&&i.createContext(K),l=function(){return l=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)},ae=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};function Q(e){return e&&e.map(function(r,t){return i.createElement(r.tag,l({key:t},r.attr),Q(r.child))})}function ne(e){return function(r){return i.createElement(oe,l({attr:l({},e.attr)},r),Q(e.child))}}function oe(e){var r=function(t){var a=e.attr,n=e.size,c=e.title,k=ae(e,["attr","size","title"]),u=n||t.size||"1em",s;return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,k,{className:s,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),e.children)};return w!==void 0?i.createElement(w.Consumer,null,function(t){return r(t)}):r(K)}function v(e){return ne({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}const O={icon:b(v,{}),none:null},de={component:J,title:"Button",tags:["autodocs"],argTypes:{className:{table:{disable:!0}},icon:{description:"`ReactNode`",options:Object.keys(O),mapping:O,control:{type:"radio"},table:{defaultValue:{summary:"none"}}},label:{description:"`string`"},variant:{description:"`outlined` | `contained`",options:["outlined","contained"],control:{type:"radio"},table:{defaultValue:{summary:"outlined"}}},color:{description:"`ColorVariant`",options:Object.keys(d),control:{type:"select"},table:{defaultValue:{summary:"primary"}}},size:{description:"`xs` | `sm` | `md` | `lg` | `xl`",options:["xs","sm","md","lg","xl"],control:{type:"radio"},table:{defaultValue:{summary:"md"}}},rounded:{description:"`none` | `sm` | `md` | `lg` | `full`",options:["none","sm","md","lg","full"],control:{type:"radio"},table:{defaultValue:{summary:"sm"}}},iconPosition:{description:"`start` | `end`",options:["start","end"],control:{type:"radio"},table:{defaultValue:{summary:"start"}}},fullWidth:{description:"`boolean`",control:{type:"boolean",expanded:!0},table:{defaultValue:{summary:"false"}}}}},o={args:{label:"Button"}},g={args:{...o.args,variant:"contained"}},m={args:{...o.args,color:"error"}},p={args:{...o.args,color:"success"}},x={args:{...o.args,icon:b(v,{})}},h={args:{...o.args,fullWidth:!0}},f={args:{...o.args,rounded:"full"}},y={args:{icon:b(v,{}),rounded:"full",className:"p-3"}};var C,j,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var P,E,B;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'contained'
  }
}`,...(B=(E=g.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var R,I,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'error'
  }
}`,...(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var _,z,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success'
  }
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,G,V;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <FiAlertCircle />
  }
}`,...(V=(G=x.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var A,L,T;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...(T=(L=h.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var $,Y,Z;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rounded: 'full'
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var M,q,H;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    icon: <FiAlertCircle />,
    rounded: 'full',
    className: 'p-3'
  }
}`,...(H=(q=y.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const ce=["Default","Contained","Error","Success","WithIcon","FullWidth","Rounded","IconButton"];export{g as Contained,o as Default,m as Error,h as FullWidth,y as IconButton,f as Rounded,p as Success,x as WithIcon,ce as __namedExportsOrder,de as default};
