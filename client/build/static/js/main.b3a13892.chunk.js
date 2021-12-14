(this["webpackJsonpbasic-banking-system"]=this["webpackJsonpbasic-banking-system"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},54:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(39),a=c.n(s),r=(c(45),c(46),c(28),c(47),c(10)),i=c(14),o=c.n(i),l=c(1),j=function(){function e(){var e=o()("#navbarSupportedContent").find(".active"),t=e.innerHeight(),c=e.innerWidth(),n=e.position(),s=e.position();o()(".hori-selector").css({top:n.top+"px",left:s.left+"px",height:t+"px",width:c+"px"}),o()("#navbarSupportedContent").on("click","li",(function(e){o()("#navbarSupportedContent ul li").removeClass("active"),o()(this).addClass("active");var t=o()(this).innerHeight(),c=o()(this).innerWidth(),n=o()(this).position(),s=o()(this).position();o()(".hori-selector").css({top:n.top+"px",left:s.left+"px",height:t+"px",width:c+"px"})}))}return Object(n.useEffect)((function(){e(),o()(window).on("resize",(function(){setTimeout((function(){e()}),500)}))}),[]),Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-mainbg",children:[Object(l.jsx)(r.b,{className:"navbar-brand navbar-logo",to:"/",exact:!0,children:"TSF Bank"}),Object(l.jsx)("button",{className:"navbar-toggler",onClick:function(){setTimeout((function(){e()}))},type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("i",{className:"fas fa-bars text-white"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(l.jsxs)("div",{className:"hori-selector",children:[Object(l.jsx)("div",{className:"left"}),Object(l.jsx)("div",{className:"right"})]}),Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsxs)(r.b,{className:"nav-link",to:"/",exact:!0,children:[Object(l.jsx)("i",{className:"fas fa-tachometer-alt"}),"Home"]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(r.b,{className:"nav-link",to:"/users",exact:!0,children:[Object(l.jsx)("i",{className:"far fa-address-book"}),"Users"]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(r.b,{className:"nav-link",to:"/transactions",exact:!0,children:[Object(l.jsx)("i",{className:"far fa-clone"}),"Transactions"]})})]})})]})},d=c(17),b=c(22),h=c(19),u=(c(54),c(18)),m=c.n(u),x=c(6),O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){m.a.get("/customers").then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}));var a=Object(x.f)();return Object(l.jsxs)("div",{className:"User-details-table",children:[Object(l.jsx)("h3",{className:"Heading",children:"Customer Details"}),Object(l.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"bordered",size:"sm",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"User-ID"}),Object(l.jsx)("th",{children:"First Name"}),Object(l.jsx)("th",{children:"Last Name"}),Object(l.jsx)("th",{children:"Email-ID"}),Object(l.jsx)("th",{children:"Balance (\u20b9.)"}),Object(l.jsx)("th",{children:"Operation"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.customerId}),Object(l.jsx)("td",{children:e.firstname}),Object(l.jsx)("td",{children:e.lastname}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.balance}),Object(l.jsx)("td",{children:Object(l.jsx)(h.a,{variant:"success",id:e.id,onClick:function(){return t=e._id,console.log(c),void a.push({pathname:"/transfer/".concat(t),state:{users:c}});var t},children:"Transfer"})})]},e.customerId)}))})]})]})},f=(c(73),c.p+"static/media/bank.2285842b.svg"),p=function(){return Object(l.jsxs)("div",{className:"i",children:[Object(l.jsx)("div",{className:"i-left",children:Object(l.jsxs)("div",{className:"i-left-wrapper",children:[Object(l.jsx)("h2",{className:"i-introduction",children:"Welcome to"}),Object(l.jsx)("h1",{className:"i-name",children:"TSF Bank"}),Object(l.jsx)("div",{className:"i-title",children:Object(l.jsxs)("div",{className:"i-title-wrapper",children:[Object(l.jsx)("div",{className:"i-title-item",children:"Deposit"}),Object(l.jsx)("div",{className:"i-title-item",children:"Transact"})]})}),Object(l.jsx)("p",{className:"i-desc",children:"With TSF Bank, transfer money in a secure, smooth and hassle-free manner. Buckle up for a great user experience ahead!"})]})}),Object(l.jsxs)("div",{className:"i-right",children:[Object(l.jsx)("div",{className:"i-bg"}),Object(l.jsx)("img",{src:f,alt:"",className:"i-img"})]})]})},v=(c(74),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){m.a.get("/transactions").then((function(e){return s(e.data)})).catch((function(e){return console.log(e)})),console.log(c)})),Object(l.jsxs)("div",{className:"trasaction-history-table",children:[Object(l.jsx)("h3",{className:"Heading",children:"Transaction History"}),Object(l.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"bordered",size:"sm",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Transaction-ID"}),Object(l.jsx)("th",{children:"Sender"}),Object(l.jsx)("th",{children:"Recipient"}),Object(l.jsx)("th",{children:"Amount Transferred (.\u20b9)"}),Object(l.jsx)("th",{children:"Date & Time"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.transactionId}),Object(l.jsx)("td",{children:e.sender}),Object(l.jsx)("td",{children:e.receiver}),Object(l.jsx)("td",{children:e.amount}),Object(l.jsx)("td",{children:e.date})]},e._id)}))})]})]})}),g=(c(75),c(12)),N=c(21),k=c(20),C=c(11),T=function(e){var t=Object(x.f)(),c=Object(n.useState)(e.location.state.users),s=Object(d.a)(c,1)[0],a=Object(n.useState)("select recepient"),r=Object(d.a)(a,2),i=r[0],o=r[1],j=Object(n.useState)("Entered amount"),b=Object(d.a)(j,2),u=b[0],O=b[1],f=Object(n.useState)(e.match.params.id),p=Object(d.a)(f,1)[0],v=s.find((function(t){return t._id===e.match.params.id}));var T=function(e,c,n){var a=s.find((function(t){return t._id===e})),r=s.find((function(e){return e._id===c})),i=n;a.balance=a.balance-i,r.balance=Number(r.balance)+Number(i),function(e,t,c){console.log(e),console.log(t),console.log(c);var n={transactionId:Number(String(e.customerId)+String(t.customerId)),sender:"".concat(e.firstname," ").concat(e.lastname),receiver:"".concat(t.firstname," ").concat(t.lastname),amount:Number(c)};console.log(n),m.a.post("/transactions/add",n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),m.a.post("/customers/update/".concat(e._id),e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),m.a.post("/customers/update/".concat(t._id),t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}(a,r,i),t.push("/success")};return Object(l.jsx)("div",{className:"transfer-card parent",children:Object(l.jsxs)(g.a,{border:"primary",style:{width:"25rem"},className:"child",children:[Object(l.jsx)(g.a.Header,{children:"Transfer Money"}),Object(l.jsxs)(g.a.Body,{children:[Object(l.jsxs)(g.a.Title,{children:["Username: ",v.firstname," ",v.lastname]}),Object(l.jsxs)(g.a.Title,{children:["Balance: \u20b9 ",v.balance]}),Object(l.jsxs)(N.a,{children:[Object(l.jsxs)(k.a,{className:"contentrow",children:[Object(l.jsx)(C.a,{md:"auto",children:Object(l.jsx)(N.a.Label,{children:Object(l.jsx)("b",{children:"Enter Amount:"})})}),Object(l.jsx)(C.a,{children:Object(l.jsx)(N.a.Control,{type:"number",placeholder:"Amount",onChange:function(e){return function(e){O(e.target.value)}(e)}})})]}),Object(l.jsxs)(k.a,{className:"contentrow",children:[Object(l.jsx)(C.a,{children:Object(l.jsx)(N.a.Label,{children:Object(l.jsx)("b",{children:"Transfer To:"})})}),Object(l.jsx)(C.a,{md:"auto",children:Object(l.jsxs)(N.a.Control,{className:"sender",as:"select",onChange:function(e){o(e.target.value)},value:i,children:[Object(l.jsx)("option",{children:"Select Recipient"}),s.map((function(e){return Object(l.jsxs)("option",{value:e._id,children:[e.firstname," ",e.lastname]},e.customerId)}))]})})]}),Object(l.jsxs)(k.a,{className:"contentrow",children:[Object(l.jsx)(C.a,{children:Object(l.jsx)(h.a,{className:"Buttons",onClick:function(){return t.push("/users")},variant:"danger",children:"Abort"})}),Object(l.jsx)(C.a,{children:Object(l.jsx)(h.a,{className:"Buttons",onClick:function(){return T(p,i,u)},variant:"success",children:"Proceed"})})]})]})]})]})})},S=(c(77),c.p+"static/media/success.1680120d.svg"),y=function(){var e=Object(x.f)(),t=function(t){"home"===t.target.value?e.push("/"):e.push("/users")};return Object(l.jsx)("div",{className:"success-portal",children:Object(l.jsx)(g.a,{style:{width:"25rem"},className:"success-card",bg:"Light",text:"dark",border:"success",children:Object(l.jsxs)(g.a.Body,{children:[Object(l.jsx)(g.a.Img,{variant:"top",src:S,className:"success"}),Object(l.jsx)(g.a.Title,{className:"mb-2 mx-auto my-2 success-title",children:"Transaction Successful"}),Object(l.jsx)(g.a.Text,{children:"Click on the 'Home' button to navigate to Home page or else Click on 'More' button to make another transaction."}),Object(l.jsxs)(k.a,{children:[Object(l.jsx)(C.a,{className:"success-buttons",size:"lg",mr:"auto",children:Object(l.jsx)(h.a,{variant:"success",value:"home",onClick:function(e){return t(e)},children:"Home"})}),Object(l.jsx)(C.a,{size:"lg",className:"success-buttons",mr:"auto",children:Object(l.jsx)(h.a,{variant:"success",value:"more",onClick:function(e){return t(e)},children:"More"})})]})]})})})};var w=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{exact:!0,path:"/",component:p}),Object(l.jsx)(x.a,{path:"/users",component:O}),Object(l.jsx)(x.a,{path:"/transactions",component:v}),Object(l.jsx)(x.a,{path:"/transfer/:id",component:T}),Object(l.jsx)(x.a,{path:"/success",component:y})]})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};a.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),I()}},[[78,1,2]]]);
//# sourceMappingURL=main.b3a13892.chunk.js.map