import{c as L,a as Q,j as U,b as X,d as u}from"./index-_6_lQ4xg.js";import{t as Y}from"./bundle-mjs-bUXMz-O3.js";/* empty css               */import{F as i}from"./index.esm-R2O5XNOC.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const o=Q("text"),Z=L("flex items-center transition-all border",{variants:{variant:{outlined:" ",contained:""},color:o,size:{xs:"px-3 py-1 text-xs gap-1",sm:"px-3 py-1 text-sm gap-1",md:"px-4 py-1 text-md gap-1",lg:"px-5 py-2 text-lg gap-2",xl:"px-6 py-3 text-xl gap-2"},rounded:{none:"rounded-none",sm:"rounded",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},iconPosition:{start:"flex-row",end:"flex-row-reverse"},fullWidth:{true:"w-full"}},compoundVariants:[...Object.keys(o).map(r=>({variant:"contained",color:r,class:`text-white bg-${r} hover:text-${r} border-${r} hover:bg-transparent`})),...Object.keys(o).map(r=>({variant:"outlined",color:r,class:`hover:bg-${r} border-${r}`})),{variant:"outlined",color:Object.keys(o),class:"bg-transparent hover:text-white"}],defaultVariants:{variant:"outlined",color:"primary",size:"md",rounded:"md",iconPosition:"end",fullWidth:!1}}),E=({children:r,className:P,label:R,variant:_,color:M,size:T,rounded:q,iconPosition:H,fullWidth:J,icon:p,...K})=>U("button",{type:"button",className:Y(Z({variant:_,color:M,size:T,rounded:q,iconPosition:H,fullWidth:J}),p?"justify-between":"justify-center",P),...K,children:[p,R]});E.displayName="ButtonGroup";const m={icon:u(i,{}),none:null},ne={component:E,title:"Button/Button/ButtonGroup",tags:["autodocs"],argTypes:{className:{table:{disable:!0}},icon:{description:"`ReactNode`",options:Object.keys(m),mapping:m,control:{type:"radio"},table:{defaultValue:{summary:"none"}}},label:{description:"`string`"},variant:{description:"`outlined` | `contained`",options:["outlined","contained"],control:{type:"radio"},table:{defaultValue:{summary:"outlined"}}},color:{description:"`ColorVariant`",options:Object.keys(X),control:{type:"select"},table:{defaultValue:{summary:"primary"}}},size:{description:"`xs` | `sm` | `md` | `lg` | `xl`",options:["xs","sm","md","lg","xl"],control:{type:"radio"},table:{defaultValue:{summary:"md"}}},rounded:{description:"`none` | `sm` | `md` | `lg` | `full`",options:["none","sm","md","lg","full"],control:{type:"radio"},table:{defaultValue:{summary:"sm"}}},iconPosition:{description:"`start` | `end`",options:["start","end"],control:{type:"radio"},table:{defaultValue:{summary:"start"}}},fullWidth:{description:"`boolean`",control:{type:"boolean",expanded:!0},table:{defaultValue:{summary:"false"}}}}},e={args:{label:"Button"}},t={args:{...e.args,variant:"contained"}},a={args:{...e.args,color:"error"}},s={args:{...e.args,color:"success"}},n={args:{...e.args,icon:u(i,{})}},l={args:{...e.args,fullWidth:!0}},c={args:{...e.args,rounded:"full"}},d={args:{icon:u(i,{}),rounded:"full",className:"p-3"}};var g,f,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,x,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'contained'
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,S,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'error'
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var W,B,C;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success'
  }
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,w,F;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <FiAlertCircle />
  }
}`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var N,O,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...(k=(O=l.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var V,$,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rounded: 'full'
  }
}`,...(G=($=c.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var I,z,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: <FiAlertCircle />,
    rounded: 'full',
    className: 'p-3'
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const le=["Default","Contained","Error","Success","WithIcon","FullWidth","Rounded","IconButton"];export{t as Contained,e as Default,a as Error,l as FullWidth,d as IconButton,c as Rounded,s as Success,n as WithIcon,le as __namedExportsOrder,ne as default};
