import{c as Q,a as P,j as U,d as i}from"./index-_6_lQ4xg.js";import{t as X}from"./bundle-mjs-bUXMz-O3.js";/* empty css               */import{F as u}from"./index.esm-R2O5XNOC.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const t=P("text"),Y=Q("flex items-center transition-all border",{variants:{variant:{outlined:" ",contained:""},color:t,size:{xs:"px-3 py-1 text-xs gap-1",sm:"px-3 py-1 text-sm gap-1",md:"px-4 py-1 text-md gap-1",lg:"px-5 py-2 text-lg gap-2",xl:"px-6 py-3 text-xl gap-2"},rounded:{none:"rounded-none",sm:"rounded",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},iconPosition:{start:"flex-row",end:"flex-row-reverse"},fullWidth:{true:"w-full"}},compoundVariants:[...Object.keys(t).map(r=>({variant:"contained",color:r,class:`text-white bg-${r} hover:text-${r} border-${r} hover:bg-transparent`})),...Object.keys(t).map(r=>({variant:"outlined",color:r,class:`hover:bg-${r} border-${r}`})),{variant:"outlined",color:Object.keys(t),class:"bg-transparent hover:text-white"}],defaultVariants:{variant:"outlined",color:"primary",size:"md",rounded:"md",iconPosition:"end",fullWidth:!1}}),R=({children:r,className:_,label:M,variant:T,color:q,size:G,rounded:H,iconPosition:J,fullWidth:K,icon:p,...L})=>U("button",{type:"button",className:X(Y({variant:T,color:q,size:G,rounded:H,iconPosition:J,fullWidth:K}),p?"justify-between":"justify-center",_),...L,children:[p,M]});R.displayName="Button";const m={icon:i(u,{}),none:null},se={component:R,title:"Button/Button/FloatingActionButton",tags:["autodocs"],argTypes:{className:{table:{disable:!0}},icon:{description:"`ReactNode`",options:Object.keys(m),mapping:m,control:{type:"radio"},table:{defaultValue:{summary:"none"}}},label:{description:"`string`"},variant:{description:"`outlined` | `contained`",options:["outlined","contained"],control:{type:"radio"},table:{defaultValue:{summary:"outlined"}}},color:{description:"`ColorVariant`",options:Object.keys(P("text")),control:{type:"select"},table:{defaultValue:{summary:"primary"}}},size:{description:"`xs` | `sm` | `md` | `lg` | `xl`",options:["xs","sm","md","lg","xl"],control:{type:"radio"},table:{defaultValue:{summary:"md"}}},rounded:{description:"`none` | `sm` | `md` | `lg` | `full`",options:["none","sm","md","lg","full"],control:{type:"radio"},table:{defaultValue:{summary:"sm"}}},iconPosition:{description:"`start` | `end`",options:["start","end"],control:{type:"radio"},table:{defaultValue:{summary:"start"}}},fullWidth:{description:"`boolean`",control:{type:"boolean",expanded:!0},table:{defaultValue:{summary:"false"}}}}},e={args:{label:"Button"}},o={args:{...e.args,variant:"contained"}},a={args:{...e.args,color:"error"}},s={args:{...e.args,color:"success"}},n={args:{...e.args,icon:i(u,{})}},l={args:{...e.args,fullWidth:!0}},c={args:{...e.args,rounded:"full"}},d={args:{icon:i(u,{}),rounded:"full",className:"p-3"}};var g,f,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,b,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'contained'
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,S,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'error'
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var B,W,D;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success'
  }
}`,...(D=(W=s.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var F,w,C;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <FiAlertCircle />
  }
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var A,N,O;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var k,V,$;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rounded: 'full'
  }
}`,...($=(V=c.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var I,z,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: <FiAlertCircle />,
    rounded: 'full',
    className: 'p-3'
  }
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const ne=["Default","Contained","Error","Success","WithIcon","FullWidth","Rounded","IconButton"];export{o as Contained,e as Default,a as Error,l as FullWidth,d as IconButton,c as Rounded,s as Success,n as WithIcon,ne as __namedExportsOrder,se as default};
