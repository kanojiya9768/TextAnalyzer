(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,c){},24:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),s=c(17),l=c.n(s),i=(c(24),c(12),c(8)),o=c(0);function r(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-success",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:[e.home," "]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link active",to:"/About",children:e.about})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link active",to:"/Contact",children:e.contact})})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Search"})]})]})]})})})}var d=c(10);function b(e){var t=Object(a.useState)("Enter Text here....."),c=Object(d.a)(t,2),n=c[0],s=c[1],l=Object(a.useState)("eg.My Details.."),i=Object(d.a)(l,2),r=i[0],b=i[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"body",children:[Object(o.jsxs)("div",{class:"form-check",id:"darkbtn",children:[Object(o.jsx)("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",onClick:function(){document.getElementById("body").style.backgroundColor="black",document.getElementById("body").style.color="#fff",document.body.style.backgroundColor="black",document.body.style.color="white",document.getElementById("textareaone").style.backgroundColor="black",document.getElementById("textareaone").style.color="white",document.getElementById("textarea").style.backgroundColor="black",document.getElementById("textarea").style.color="white",document.title="On Dark Mode",alert("Dark Mode Enabled")}}),Object(o.jsx)("label",{class:"form-check-label",htmlFor:"exampleRadios1",id:"labelone",children:"Switch To Dark Mode"})]}),Object(o.jsxs)("div",{class:"form-check",id:"lightbtn",children:[Object(o.jsx)("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"option2",onClick:function(){document.getElementById("body").style.backgroundColor="#fff",document.getElementById("body").style.color="black",document.body.style.backgroundColor="white",document.body.style.color="black",document.getElementById("textareaone").style.backgroundColor="white",document.getElementById("textareaone").style.color="black",document.getElementById("textarea").style.backgroundColor="white",document.getElementById("textarea").style.color="black",document.title="On Light Mode",alert("Light Mode Enabled")},checked:!0}),Object(o.jsx)("label",{class:"form-check-label",htmlFor:"exampleRadios2",id:"labeltwo",children:"Switch To Light Mode"})]}),Object(o.jsxs)("div",{class:"form-check",id:"lightbtn",children:[Object(o.jsx)("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios3",value:"option3",onClick:function(){document.getElementById("body").style.backgroundColor="rgb(252, 251, 228)",document.getElementById("body").style.color="black",document.body.style.backgroundColor="rgb(252, 251, 228)",document.body.style.color="black",document.getElementById("textareaone").style.backgroundColor="rgb(210, 230, 220)",document.getElementById("textareaone").style.color="black",document.getElementById("textarea").style.backgroundColor="rgb(210, 230, 220)",document.getElementById("textarea").style.color="black",document.title="On Night Mode",alert("Night Mode Enabled")}}),Object(o.jsx)("label",{class:"form-check-label",htmlFor:"exampleRadios3",id:"labelthree",children:"Switch To Night Mode"})]}),Object(o.jsx)("div",{className:"container",id:"alert",children:Object(o.jsxs)("div",{class:"alert alert-danger",role:"alert",children:["You have Hidden the Notes Keeper ",Object(o.jsx)("a",{href:"../App.js",class:"alert-link",children:"For Again displaying"}),".Please Click On Show Button."]})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("center",{children:Object(o.jsx)("button",{type:"btn",className:"button is-link is-danger",onClick:function(){console.log("show btn was clicked"),document.getElementById("container").style.display="block",document.getElementById("showbtn").style.display="none",document.getElementById("alert").style.display="none",document.title="Text Shown"},id:"showbtn",children:"Show"})})})}),Object(o.jsxs)("div",{id:"container",children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("center",{children:Object(o.jsx)("h1",{className:"Apphead",children:"Text Analyzing "})}),Object(o.jsxs)("div",{className:"control",children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("textarea",{className:"textarea",rows:"1",value:r,onChange:function(e){console.log("Heading Changing"),b(e.target.value),document.title="Text Changing"},id:"textareaone"})]}),Object(o.jsxs)("div",{className:"control",children:[Object(o.jsx)("h1",{children:e.txtHeading}),Object(o.jsx)("textarea",{className:"textarea",rows:"10",value:n,onChange:function(e){console.log("Changing text"),s(e.target.value),document.title="Text Changing"},id:"textarea"})]})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("div",{className:"control",id:"form_item",children:Object(o.jsx)("button",{type:"button",className:"button is-dark",onMouseEnter:function e(){var t=new Date;document.getElementById("time").innerHTML=t.toLocaleDateString()+" "+t.toLocaleTimeString(),setInterval((function(){e()}),1e3)},id:"time",children:"Get Time"})}),Object(o.jsx)("div",{className:"control",id:"form_item",children:Object(o.jsx)("button",{type:"button",className:"button is-success",onClick:function(){console.log("Uppercase btn Was Clicked!"),s(n.toUpperCase()),b(r.toUpperCase()),document.title="Text UpperCase"},children:"toUpperCase"})}),Object(o.jsx)("div",{className:"control",id:"form_item",children:Object(o.jsx)("button",{type:"button",className:"button is-success",onClick:function(){console.log("Lowercase Btn was Clicked"),s(n.toLowerCase()),b(r.toLowerCase()),document.title="Text LowerCase"},children:"toLowerCase"})}),Object(o.jsx)("div",{className:"control",id:"form_item",children:Object(o.jsx)("button",{type:"button",className:"button is-link is-link",onClick:function(){var e=n.split(/[ ]+/);console.log(e),console.log("remove Spaces btn clicked"),s(e.join(" ")),document.title="Text Spaces Removed"},children:"Remove Spaces"})}),Object(o.jsx)("div",{className:"control",id:"form_item",children:Object(o.jsx)("button",{type:"button",className:"button is-link is-link",onClick:function(){console.log("text copying");var e=document.getElementById("textarea");e.select(),navigator.clipboard.writeText(e.value),document.title="Text Copying"},children:"Copy Text"})}),Object(o.jsx)("div",{className:"control",id:"form_item",children:Object(o.jsx)("button",{type:"button",className:"button is-link is-warning",onClick:function(){b(" "),s(" "),alert("All text Has Cleared!"),document.title="Text cleared"},children:"Clear all"})}),Object(o.jsx)("div",{className:"control",id:"form_item",children:Object(o.jsx)("button",{type:"reset",className:"button is-link is-danger",onClick:function(){console.log("reset btn clicked"),s("Enter Text here....."),b("eg.My Details.."),alert("Text Has Reseted!"),document.title="Text Reset"},children:"Reset"})}),Object(o.jsx)("div",{className:"control",id:"form_item",children:Object(o.jsx)("button",{type:"reset",className:"button is-link is-primary",onClick:function(){console.log("close btn Was Clicked"),document.getElementById("container").style.display="none",document.getElementById("showbtn").style.display="block",document.getElementById("alert").style.display="block",document.title="Text Closed"},children:"Hide"})})]})]})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Your Heading Summary: -"}),Object(o.jsxs)("p",{children:["You Have Typed ",r.length,"  Character and  ",r.split(" ").length," Words"]}),Object(o.jsx)("h1",{children:"Your Text Summary: -"}),Object(o.jsxs)("p",{children:["You Have Typed ",n.length," Character and  ",n.split(" ").length,"  Words"]}),Object(o.jsx)("h1",{children:"Preview"}),Object(o.jsx)("p",{className:"previewHead",children:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"preview",children:n}),Object(o.jsx)("hr",{})]})]})]})})}function j(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("footer",{className:"container",id:"footer",children:Object(o.jsx)("center",{children:Object(o.jsxs)("p",{children:["\xa9 2017\u20132021 Company, Inc. \xb7 ",Object(o.jsx)("a",{href:"/",children:"Privacy"})," \xb7 ",Object(o.jsx)("a",{href:"/",children:"Terms"})]})})})})}function m(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:"Welcome To Our Website!"}),e.alerttxt,Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})}function h(){var e=Object(a.useState)("Enter Full Name"),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("example@gmail.com"),l=Object(d.a)(s,2),i=l[0],r=l[1],b=Object(a.useState)("Enter Your Query"),j=Object(d.a)(b,2),m=j[0],h=j[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{id:"container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("form",{action:"./TextForm.js",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Name"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{className:"input is-success",type:"text",value:c,onChange:function(e){console.log("name IS Changing"),n(e.target.value)}})})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Email"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{className:"input is-success",type:"email",value:i,onChange:function(e){console.log("email IS Changing"),r(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),Object(o.jsx)("span",{className:"icon is-small is-right",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Subject"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("div",{className:"select is-success",children:Object(o.jsxs)("select",{children:[Object(o.jsx)("option",{children:"Text Converting"}),Object(o.jsx)("option",{children:"Text analyzing issue"}),Object(o.jsx)("option",{children:"Website issue"}),Object(o.jsx)("option",{children:"Something Else"})]})})})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Message"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{className:"textarea is-success",value:m,onChange:function(e){console.log("massage IS Changing"),h(e.target.value)}})})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:"button is-success",children:"Submit"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"reset",className:"button is-link is-danger",onClick:function(){console.log("clearall btn clicked"),n(" "),r(" "),h(" ")},children:"Clearall"})})]})]})})})})}var u=c.p+"static/media/vishal.1b34c18f.jpg";function x(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",id:"container",children:Object(o.jsxs)("div",{class:"card mb-3",children:[Object(o.jsx)("div",{className:"img",id:"img_box",children:Object(o.jsx)("img",{id:"Aboutme",src:u,class:"card-img-top img-fluid",alt:"vishal.jpg"})}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h1",{class:"card-title",children:"Vishal Brijesh Kanojiya"}),Object(o.jsx)("p",{class:"card-text",children:"Hello guys How are u..I Hope U all Are Good..and Thanks for Visiting and using our Website!!!!!!!"}),Object(o.jsx)("p",{class:"card-text",children:"My Name Is Vishal Brijesh Kanojiya And I am The Owner Of This Website actuall i am a full Stack Developer it mean I can Do Front end Web Development as Well As Backend Development Which is Known As Server side Development and This Website On which U are Reading About me This Website is Also Created By Me. So That Something About me...!"}),Object(o.jsx)("p",{class:"card-text",children:"And Once Again Thanks U So Much For Visiting Our Website..!"})]})]})})})}var g=c(2);var O=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(i.a,{children:[Object(o.jsx)(r,{title:"Text Analyzer",home:"Home",about:"About Us",service:"Services",contact:"Contact US"}),Object(o.jsx)(m,{alerttxt:" try our services at once and if you have any issue just contact us."}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(g.c,{children:[Object(o.jsx)(g.a,{exact:!0,path:"/About",children:Object(o.jsx)(x,{})}),Object(o.jsx)(g.a,{exact:!0,path:"/Contact",children:Object(o.jsx)(h,{})}),Object(o.jsx)(g.a,{exact:!0,path:"/",children:Object(o.jsx)(b,{heading:"Add Heading :-",txtHeading:"Add Notes Here:-"})})]})})]}),Object(o.jsx)(j,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.9b4fb9ac.chunk.js.map