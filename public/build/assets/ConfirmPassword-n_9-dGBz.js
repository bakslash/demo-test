import{W as n,r as l,b as i}from"../.vite/manifest.json";import{G as p}from"./GuestLayout-4jv1-XhE.js";import{T as u,I as d}from"./TextInput-vlU9-SVL.js";import{I as f}from"./InputLabel-oFyDtt4C.js";import{P as w}from"./PrimaryButton-OXz73J0-.js";function x(){const{data:t,setData:a,post:s,processing:r,errors:o,reset:m}=n({password:""});l.useEffect(()=>()=>{m("password")},[]);const c=e=>{e.preventDefault(),s(route("password.confirm"))};return React.createElement(p,null,React.createElement(i,{title:"Confirm Password"}),React.createElement("div",{className:"mb-4 text-sm text-gray-600"},"This is a secure area of the application. Please confirm your password before continuing."),React.createElement("form",{onSubmit:c},React.createElement("div",{className:"mt-4"},React.createElement(f,{htmlFor:"password",value:"Password"}),React.createElement(u,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",isFocused:!0,onChange:e=>a("password",e.target.value)}),React.createElement(d,{message:o.password,className:"mt-2"})),React.createElement("div",{className:"flex items-center justify-end mt-4"},React.createElement(w,{className:"ms-4",disabled:r},"Confirm"))))}export{x as default};
