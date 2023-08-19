import{j as t,a as e,B as o,b as h,M as p,I as x,c as f,r as d,L as m,R as u,d as g,F as y}from"./vendor.d370c4d9.js";const v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}};v();var N="/assets/hero.f0c2eaf1.png";const b=()=>t("section",{id:"home",className:"min-h-screen flex  py-[8rem] md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:N,alt:"",className:" hidden md:block md:w-[60%] h-[100%] p-3 object-cover bg-sky-500 rounded-xl"})}),e("div",{className:"flex-1",children:t("div",{className:"md:text-left text-center",children:[t("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[t("span",{className:"text-sky-500 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Krutheesh"})]}),e("div",{className:"w-max p-2",children:e("p",{className:"  animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3  md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-sky-400",children:"Frontend Developer"})}),e("button",{className:"btn-primary mt-8",children:"Contact Me"}),t("div",{className:"mt-8 text-3xl flex items-center md:justify-start md:pl-[1.8rem] justify-center gap-5",children:[e("div",{className:"text-gray-600 hover:text-white cursor-pointer ",children:e("a",{href:"https://www.linkedin.com/in/krutheesh-siripuram-791086215/",children:e(o,{})})}),e("div",{className:"text-gray-600 hover:text-white cursor-pointer ",children:e("a",{href:"https://github.com/Krutheesh",children:e(h,{})})})]})]})})]});var w="/assets/about.5df5c2f6.png";const k=()=>t("section",{id:"about",className:"py-10 text-white",children:[t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("h4",{className:"text-[1.5rem] p-1 px-[2rem]",children:"A dedicated Front-end Developer "}),t("div",{className:"flex md:flex-row flex-col-reverse mt-[3rem] items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-3 md:pr-[3rem]",children:e("div",{className:"text-gray-300 my-3",children:e("p",{className:"text-justify leading-7 w-10/10  mx-auto",children:"As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications."})})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:w,alt:"",className:"w-full object-cover bg-sky-500 rounded-xl"})})})]})]}),e("div",{className:"px-[6.5rem] py-[2rem",children:e("a",{href:"./src/assets/Krutheesh_Siripuram_8688191130 (1) (3).pdf",download:!0,children:e("button",{className:"btn-primary",children:"Resume"})})})]});var j="/assets/html.d20c9482.png",M="/assets/css.4040bdba.png",S="/assets/javascript.d04a05c4.png",C="/assets/react.e00184ba.png",A="/assets/node.f467a70a.png",I="/assets/firebase.658aa676.png",E="/assets/github.e59bf158.png",L="/assets/tailwind.47f3710a.png",_="/assets/mongo.6036d785.png";const O=()=>{const l=[j,M,S,C,A,I,E,L,_];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:t("div",{className:"mt-8 text-gray-100 text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-sky-500",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center gap-10 p-[2rem] px-[2rem] flex-wrap",children:l==null?void 0:l.map((r,i)=>e("div",{className:"border-2 group border-sky-500 relative min-w-[8rem] max-w-[7rem] md:min-w-[9rem]  bg-gray-900 p-5 rounded-xl",children:e("div",{className:"w-30 h-30 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-25 h-25 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-sky-500",children:e("img",{src:r,alt:""})})})},i))})]})})};var T="/assets/project-1.40126099.png",R="/assets/project-2.d43c0e24.png",F="/assets/project-3.7c5da408.png";const H=()=>t("section",{id:"projects",className:"py-10 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),e("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:e("div",{className:" w-full mx-[2rem]",children:[{img:T,name:"Ecommerce",github_link:"https://github.com/Krutheesh/Ecommerce",live_link:"https://ecomreactfrontend.netlify.app/",discription:" With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need"},{img:R,name:"Shopping Cart",github_link:"https://github.com/Krutheesh/Shopping_cart",live_link:"https://shopping-cart-app-kruth.netlify.app/",discription:"Shopping Cart, Where user can view the products add products to cart it has beautiful user interface and for data Fake store api is used "},{img:F,name:"Movie app",github_link:"https://github.com/Krutheesh/Movie_App",live_link:"https://krutheeshimdb.netlify.app/",discription:"It has Beautiful user interface, user can search any movie with movie name, then user can see all information. TMDB API is used "}].map((r,i)=>t("div",{className:"md:flex justify-between items-center h-full w-full p-4 space-y-3 my-[4rem] bg-slate-700 rounded-xl",children:[e("div",{className:"md:w-[55%]",children:e("img",{src:r.img,alt:"",className:"w-full rounded-lg"})}),t("div",{className:"md:w-[40%] text-center",children:[e("h3",{className:"text-xl text-center text-sky-500 mb-[1rem]",children:r.name}),e("p",{children:r.discription}),t("div",{className:"space-x-3 mt-[1rem]",children:[e("span",{className:" bg-gray-800 text-white px-2 py-1",children:"React"}),e("span",{className:" bg-gray-800 text-white px-2 py-1",children:"Tailwind Css"})]}),t("div",{className:"flex gap-3 justify-around mt-[1rem] ",children:[e("a",{href:r.github_link,target:"_blank",className:"text-sky-500 hover:opacity-50 px-2 py-1 inline-block",children:"Github"}),e("a",{href:r.live_link,target:"_blank",className:"text-sky-500 hover:opacity-50 px-2 py-1 inline-block",children:"Live Demo"})]})]})]}))})})]}),K=()=>e("section",{id:"contact",className:"py-10 px-3 text-white mx-[2rem] md:mx-[1rem]",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-sky-500",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),t("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[t("form",{className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",placeholder:"Your Name"}),e("input",{type:"Email",placeholder:"Your Email Address"}),e("textarea",{placeholder:"Your Message",rows:10}),e("button",{className:"btn-primary w-fit",children:"Send Message"})]}),t("div",{className:"flex flex-col  gap-7 ",children:[t("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-sky-500 rounded-full",children:e(p,{})}),e("p",{className:"md:text-base text-sm  break-words",children:"krutheeshsiripuram@gmail.com"})]}),t("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-sky-500 rounded-full",children:e(x,{})}),e("p",{className:"md:text-base text-sm  break-words",children:"8688191130"})]}),t("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-sky-500 rounded-full",children:e(f,{})}),e("p",{className:"md:text-base text-sm  break-words",children:"Location"})]})]})]})]})}),B=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2023 krutheesh.All Rights reserved."}),D=()=>{const[l,r]=d.exports.useState(!1),[i,c]=d.exports.useState(!1),a=[{name:"HOME",link:"home"},{name:"ABOUT",link:"about"},{name:"SKILLS",link:"skills"},{name:"PROJECTS",link:"projects"},{name:"CONTACT",link:"contact"}];return e("nav",{className:"fixed w-full left-0 top-0 z-[999] ",children:t("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:t("h4",{className:"text-4xl uppercase font-bold",children:["KRU",e("span",{className:"text-sky-500",children:"THE"}),"ESH"]})}),e("div",{className:` ${l?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:a==null?void 0:a.map((s,n)=>e("li",{className:"px-6 hover:text-sky-500",children:e(m,{to:s==null?void 0:s.link,spy:!0,smooth:!0,offset:-20,duration:100,children:s==null?void 0:s.name})},n))})}),e("div",{onClick:()=>c(!i),className:`z-[999]  ${i?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e(u,{})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${i?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:a==null?void 0:a.map((s,n)=>e("li",{className:"px-6 hover:text-sky-500",children:e(m,{to:s==null?void 0:s.link,spy:!0,smooth:!0,offset:-20,duration:500,onClick:()=>c(!1),children:s==null?void 0:s.name})},n))})})]})})},P=()=>t("div",{children:[e(D,{}),e(b,{}),e(k,{}),e(O,{}),e(H,{}),e(K,{}),e(B,{})]});g.render(e(y,{children:e(P,{})}),document.getElementById("root"));