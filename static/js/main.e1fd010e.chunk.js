(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(t,e,n){},27:function(t,e,n){},45:function(t,e,n){},65:function(t,e,n){},75:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var r,i=n(1),a=n.n(i),s=n(17),o=n.n(s),c=(n(45),n(3)),d=n(4),l=n(6),h=n(5),p=n(7),j=n(13),u=(n(23),n(22)),b=n.n(u),x=n(28),O=n(19),f=n.n(O),v={username:"",toDoList:[[],[],[],[]],cash:0,xp:0},g={username:""},m=!1;function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.map((function(t,n){return{id:"".concat(n," ").concat(e),content:t}}))}function w(){return k.apply(this,arguments)}function k(){return(k=Object(x.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://cambio-api.herokuapp.com/api/students/1/").then((function(t){e=[y(t.data.backlog),y(t.data.to_do,1e3),y(t.data.doing,2e3),y(t.data.done,3e3)],v.cash=t.data.cash,v.xp=t.data.xp}));case 2:v.toDoList=e;case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=Object(x.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://cambio-api.herokuapp.com/api/downloads/1/").then((function(t){r=t.data}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return v.toDoList}function S(t){var e=[];t.forEach((function(t){var n=[];t.forEach((function(t){n.push(t.content)})),e.push(n)})),f.a.patch("https://cambio-api.herokuapp.com/api/students/1/",{backlog:e[0],to_do:e[1],doing:e[2],done:e[3]})}function L(){return m}var _=n.p+"static/media/logo.35196d1c.png",A=(n(65),n(0)),E=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{style:{transform:"translateY(0)"},children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"85.8667vh",height:"52.4242vh",viewBox:"0 0 858.667 524.242",children:Object(A.jsxs)("g",{id:"Group_36","data-name":"Group 36",transform:"translate(6 -535.758)",children:[Object(A.jsx)("path",{id:"Path_63","data-name":"Path 63",d:"M0-233.939S86.536-229.013,104.249-127.2,265.1,3.352,324.386,5.808c106.236,4.4,209.248-48.832,323.88,0,214.665,91.445,210.4,284.5,210.4,284.5H0Z",transform:"translate(-6 789.697)",fill:"#8b4389",opacity:"0.22"}),Object(A.jsx)("path",{id:"Path_62","data-name":"Path 62",d:"M0-233.939s82.909,3.878,99.879,84.032S253.99-47.124,310.788-45.19c101.783,3.465,200.477-38.444,310.3,0C826.757,26.8,822.667,178.788,822.667,178.788H0Z",transform:"translate(-6 901.212)",fill:"#8b4389"})]})})})}}]),n}(a.a.Component),z=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).updateUsername=function(t){r.setState((function(e,n){return{username:t,password:r.state.password,showPassword:r.state.showPassword}}))},r.updatePassword=function(t){r.setState((function(e,n){return{username:r.state.username,password:t,showPassword:r.state.showPassword}}))},r.handleShowPassword=function(){var t="text";"text"===r.state.showPassword&&(t="password"),r.setState((function(e,n){return{username:r.state.username,password:r.state.password,showPassword:t}}))},r.renderShowPassword=function(){return"password"===r.state.showPassword?"show password":"hide password"},r.state={username:"Username",password:"Password",showPassword:"password"},r}return Object(d.a)(n,[{key:"renderLoginButton",value:function(){return t="",g.username=t,g.username===v.username&&(m=!0,1)?Object(A.jsx)(j.b,{to:"/journey_prototype",children:Object(A.jsx)("button",{style:{cursor:"pointer"},children:Object(A.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"36",viewBox:"0 0 160 66",children:[Object(A.jsx)("rect",{id:"Rectangle_1585","data-name":"Rectangle 1585",width:"160",height:"66",rx:"19",fill:"#8b4389"}),Object(A.jsx)("text",{id:"Login",transform:"translate(30 50)",fill:"#fff","font-size":"40","font-family":"SegoeUI-Semibold, Segoe UI","font-weight":"600",children:Object(A.jsx)("tspan",{x:"0",y:"0",children:"Login"})})]})})}):Object(A.jsx)("button",{class:"login-button",style:{cursor:"pointer"},children:Object(A.jsx)("h1",{style:{fontSize:"15px",color:"white"},children:"log in"})});var t}},{key:"render",value:function(){var t=this;return Object(A.jsxs)("div",{style:{padding:"50px",borderRadius:"20px"},children:[Object(A.jsx)("h1",{style:{marginLeft:"40px"},children:"Welcome"}),Object(A.jsx)("input",{style:{width:"300px"},onChange:function(e){t.updateUsername(e.target.value)},placeholder:"Username"}),Object(A.jsx)("div",{children:Object(A.jsx)("input",{style:{width:"300px"},onChange:function(e){t.updatePassword(e.target.value)},type:this.state.showPassword,placeholder:"Password"})}),Object(A.jsxs)("div",{style:{transform:"translateY(10px)"},children:[Object(A.jsx)("button",{onClick:this.handleShowPassword,style:{cursor:"pointer"},children:Object(A.jsx)("p1",{children:this.renderShowPassword()})}),Object(A.jsx)("div",{style:{float:"right"},children:this.renderLoginButton()})]})]})}}]),n}(a.a.Component),H=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),r=e.call(this,t),function(){C.apply(this,arguments)}(),w(),r}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{style:{height:"100%",overflow:"hidden",margin:"0"},children:Object(A.jsx)("div",{style:{position:"absolute",bottom:"-10px"},children:Object(A.jsx)(E,{})})}),Object(A.jsx)("div",{style:{marginLeft:"100px",transform:"translateY(100px)"},children:Object(A.jsx)("img",{src:_,style:{height:"40vh"}})}),Object(A.jsx)("div",{style:{width:"400px",right:"100px",position:"absolute",bottom:"30vh"},children:Object(A.jsx)("div",{style:{},children:Object(A.jsx)(z,{})})})]})}}]),n}(a.a.Component),D=n(10),B=n(16),M=(n(75),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("svg",{id:"add_black_24dp",xmlns:"http://www.w3.org/2000/svg",width:this.props.size,height:this.props.size,viewBox:"0 0 29 29",children:[Object(A.jsx)("g",{id:"Group_1","data-name":"Group 1",children:Object(A.jsx)("rect",{id:"Rectangle_5","data-name":"Rectangle 5",width:this.props.size,height:this.props.size,fill:"none"})}),Object(A.jsx)("g",{id:"Group_3","data-name":"Group 3",transform:"translate(0.959 0.977)",children:Object(A.jsx)("g",{id:"Group_2","data-name":"Group 2",children:Object(A.jsx)("path",{id:"Path_8","data-name":"Path 8",d:"M30.144,20.473H20.473v9.671a1.94,1.94,0,0,1-1.934,1.934h0A1.94,1.94,0,0,1,16.6,30.144V20.473H6.934A1.94,1.94,0,0,1,5,18.539H5A1.94,1.94,0,0,1,6.934,16.6H16.6V6.934A1.94,1.94,0,0,1,18.539,5h0a1.94,1.94,0,0,1,1.934,1.934V16.6h9.671a1.94,1.94,0,0,1,1.934,1.934h0A1.94,1.94,0,0,1,30.144,20.473Z",transform:"translate(-5 -5)",fill:"#e02424"})})})]})}}]),n}(a.a.Component)),R=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 55 55",style:{marginLeft:"30px",transform:"translatey(-5px)"},children:Object(A.jsx)("path",{id:"Polygon_5","data-name":"Polygon 5",d:"M41.25,0,55,27.5,41.25,55H13.75L0,27.5,13.75,0Z",transform:"translate(55) rotate(90)",fill:this.props.color})})}}]),n}(a.a.Component),T=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{style:{display:"inline-block",marginLeft:"30px",transform:"translatey(-10px)"},children:Object(A.jsxs)("svg",{id:"home_black_24dp_1_","data-name":"home_black_24dp (1)",xmlns:"http://www.w3.org/2000/svg",width:"27",height:"27",viewBox:"0 0 45.193 45.193",children:[Object(A.jsx)("path",{id:"Path_3","data-name":"Path 3",d:"M0,0H45.193V45.193H0Z",fill:"none"}),Object(A.jsx)("path",{id:"Path_4","data-name":"Path 4",d:"M18.29,38.92V27.558H26.9V38.92a2.221,2.221,0,0,0,2.152,2.272H35.5a2.221,2.221,0,0,0,2.152-2.272V23.013h3.658a1.137,1.137,0,0,0,.71-1.977L24.036,3.924a2.083,2.083,0,0,0-2.883,0L3.163,21.036a1.142,1.142,0,0,0,.71,1.977H7.531V38.92a2.221,2.221,0,0,0,2.152,2.272h6.455A2.221,2.221,0,0,0,18.29,38.92Z",transform:"translate(0 0)",fill:"#fff"})]})})}}]),n}(a.a.Component),I=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)(j.b,{children:Object(A.jsx)("div",{style:{display:"inline-block",marginLeft:"25px"},children:Object(A.jsxs)("svg",{id:"menu_black_24dp",xmlns:"http://www.w3.org/2000/svg",width:"27",height:"27",viewBox:"0 0 45.783 45.783",children:[Object(A.jsx)("path",{id:"Path_6","data-name":"Path 6",d:"M0,0H45.783V45.783H0Z",fill:"none"}),Object(A.jsx)("path",{id:"Path_7","data-name":"Path 7",d:"M4.908,28.891H35.43a1.908,1.908,0,1,0,0-3.815H4.908a1.908,1.908,0,0,0,0,3.815Zm0-9.538H35.43a1.908,1.908,0,1,0,0-3.815H4.908a1.908,1.908,0,0,0,0,3.815ZM3,7.908A1.913,1.913,0,0,0,4.908,9.815H35.43A1.908,1.908,0,1,0,35.43,6H4.908A1.913,1.913,0,0,0,3,7.908Z",transform:"translate(8.446 -6)",fill:"#fff"})]})})})}}]),n}(a.a.Component),U=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.size;return Object(A.jsx)("div",{style:{display:"inline-block"},children:Object(A.jsxs)("svg",{id:"explore_black_24dp",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 35 35",children:[Object(A.jsx)("path",{id:"Path_44","data-name":"Path 44",d:"M0,0H35V35H0Z",fill:"none"}),Object(A.jsx)("path",{id:"Path_45","data-name":"Path 45",d:"M16.583,14.979a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,16.583,14.979ZM16.583,2A14.583,14.583,0,1,0,31.167,16.583,14.589,14.589,0,0,0,16.583,2Zm3.194,17.777L7.833,25.333,13.39,13.39,25.333,7.833Z",transform:"translate(0.917 0.917)",fill:"#246fe0"})]})})}}]),n}(a.a.Component),N=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.size;return Object(A.jsxs)("svg",{id:"description_black_24dp",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 35 35",children:[Object(A.jsx)("path",{id:"Path_46","data-name":"Path 46",d:"M0,0H35V35H0Z",fill:"none"}),Object(A.jsx)("path",{id:"Path_47","data-name":"Path 47",d:"M20.875,2H7.375A3.24,3.24,0,0,0,4.017,5.1L4,29.9A3.24,3.24,0,0,0,7.358,33H27.625A3.256,3.256,0,0,0,31,29.9V11.3ZM24.25,26.8H10.75V23.7h13.5Zm0-6.2H10.75V17.5h13.5Zm-5.062-7.75V4.325l9.281,8.525Z",transform:"translate(0 0)",fill:"#30e024"})]})}}]),n}(a.a.Component),Z=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.size;return Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:(22*parseFloat(t)/35).toString(),viewBox:"0 0 35 22.607",children:Object(A.jsx)("g",{id:"Layer_2","data-name":"Layer 2",transform:"translate(0.001 0.013)",children:Object(A.jsx)("g",{id:"Layer_1","data-name":"Layer 1",transform:"translate(-0.001 -0.013)",children:Object(A.jsx)("path",{id:"Path_61","data-name":"Path 61",d:"M17.609,6.433H4.584V18.617a5.043,5.043,0,0,1-.045,1.807c-.321.768-.841,1.909-1.421,2.01-1.243.207-1.588-.9-1.588-2.031,0-5.137.045-10.279-.045-15.412a4.325,4.325,0,0,0-1-2.311C-.362,1.584-.1.4,1.254.057A5.137,5.137,0,0,1,2.472,0Q17.5-.012,32.562.041A7.424,7.424,0,0,1,35,1c-.361.69-.78,1.361-1.072,2.079a4.593,4.593,0,0,0-.37,1.685c-.028,5,0,10.007,0,15.026,0,2.437-.353,2.794-2.8,2.8-3.545,0-7.095-.045-10.636,0-1.815.032-2.518-.739-2.494-2.55C17.649,15.587,17.609,11.128,17.609,6.433ZM25.52,6.34h0a13.956,13.956,0,0,0-3.2.065A2.3,2.3,0,0,0,20.8,7.879,2.177,2.177,0,0,0,22.015,9.6c.906.309,1.84.142,2.311,1.4.093.256,1.852,0,2.79-.231a4.54,4.54,0,0,0,1.718-1.052c.593-.512,1.515-1.166,1.49-1.722s-.938-1.4-1.624-1.576A12.54,12.54,0,0,0,25.52,6.34Zm2.055,11.578c.252,0,.585.065.772-.069.723-.516,1.884-1.015,1.994-1.673.223-1.34-.906-1.742-2.124-1.726a53.348,53.348,0,0,0-5.816.089,2.293,2.293,0,0,0-1.592,1.58c-.02.573.893,1.218,1.507,1.7.406.317,1.218.211,1.5.569C25.179,20.091,26.588,19.961,27.575,17.918Z",transform:"translate(0.001 0.013)",fill:"#e02424"})})})})}}]),n}(a.a.Component),V=(n(27),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).hideBadges=function(){r.setState((function(t,e){return{show:window.innerWidth>750}}))},window.addEventListener("resize",r.hideBadges),r.state={show:window.innerWidth>750},r}return Object(d.a)(n,[{key:"render",value:function(){return this.state.show?Object(A.jsxs)("div",{className:"badge-div",children:[Object(A.jsx)("h1",{className:"badge-text",children:"Badges"}),Object(A.jsx)(R,{color:"#EECC7C"}),Object(A.jsx)(R,{color:"#7CA9EE"}),Object(A.jsx)(R,{color:"#8BEE7C"}),Object(A.jsx)(R,{color:"#EE7C7C"}),Object(A.jsx)(R,{color:"white"})]}):null}}]),n}(a.a.Component)),Y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"navbar-base",children:Object(A.jsxs)("div",{className:"navbar-internal-div",children:[Object(A.jsx)("div",{onClick:this.props.sideNavAnimation,style:{display:"inline-block"},children:Object(A.jsx)(I,{})}),Object(A.jsx)(j.b,{to:"/journey_prototype/",children:Object(A.jsx)(T,{})}),Object(A.jsx)("h1",{className:"navbar-text",children:this.props.pageName}),Object(A.jsx)(V,{})]})})}}]),n}(a.a.Component),G=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t="25";return Object(A.jsx)("div",{className:this.props.isExtended,children:Object(A.jsx)("div",{className:"sidenav",children:Object(A.jsxs)("div",{className:"sidenav-internal-div",children:[Object(A.jsx)(j.b,{to:"/journey_prototype/journey",children:Object(A.jsxs)("div",{children:[Object(A.jsx)(U,{size:t}),Object(A.jsx)("p1",{className:"sidenav-text",children:"Your Journey"})]})}),Object(A.jsx)(j.b,{to:"/journey_prototype/portfolio",children:Object(A.jsxs)("div",{children:[Object(A.jsx)(N,{size:t}),Object(A.jsx)("p1",{className:"sidenav-text",children:"Your Portfolio"})]})}),Object(A.jsx)(j.b,{to:"/journey_prototype/workspace",children:Object(A.jsxs)("div",{children:[Object(A.jsx)(Z,{size:t}),Object(A.jsx)("p1",{className:"sidenav-text",children:"Your Workspace"})]})})]})})})}}]),n}(a.a.Component),F=n(15),W=n(31);a.a.Component;var J=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{children:Object(A.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#b8b8b8",children:[Object(A.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(A.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})]})})}}]),n}(a.a.Component),K=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).handleAddTask=function(){r.setState((function(t,e){return{isAdding:!r.state.isAdding}}))},r.addText=function(t){if(13===t.keyCode&&""!==r.state.text){var e=[],n=r.props.state[r.props.index];n.push({id:"item-".concat(r.props.state[r.props.index].length+r.props.index,"-").concat((new Date).getTime()),content:r.state.text}),r.props.state.forEach((function(t,i){i===r.props.index?e.push(n):e.push(t)})),r.state.text="",r.props.setState(e)}},r.changeText=function(t){r.setState((function(e,n){return{isAdding:r.state.isAdding,text:t}}))},r.state={isAdding:!1,text:""},r}return Object(d.a)(n,[{key:"renderAddSection",value:function(){var t=this;return this.state.isAdding?Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{value:this.state.text,onChange:function(e){return t.changeText(e.target.value)},onKeyDown:function(e){return t.addText(e)}}),Object(A.jsxs)("div",{style:{transform:"translateY(10px)"},children:[Object(A.jsx)("button",{onClick:function(){return t.addText({keyCode:13})},style:{cursor:"pointer",backgroundColor:"#DD2323",borderRadius:"7px",height:"30px",width:"80px"},children:Object(A.jsx)("p1",{style:{transform:"translatey(-2px)",cursor:"pointer",fontSize:"15px",color:"white"},children:"Add Task"})}),Object(A.jsx)("button",{onClick:this.handleAddTask,style:{marginLeft:"10px",cursor:"pointer",backgroundColor:"#c8c8c8",borderRadius:"7px",height:"30px",width:"80px"},children:Object(A.jsx)("p1",{style:{transform:"translatey(-2px)",cursor:"pointer",fontSize:"15px",color:"white"},children:"Cancel"})})]})]}):Object(A.jsx)("button",{onClick:this.handleAddTask,children:Object(A.jsxs)("div",{style:{transform:"translateY(10px)"},children:[Object(A.jsx)(M,{size:"15px"})," Add Task"]})})}},{key:"render",value:function(){return Object(A.jsx)("div",{children:this.renderAddSection()})}}]),n}(a.a.Component);function Q(){var t=["Backlog","ToDo","Doing","Done"],e=Object(i.useState)(P),n=Object(B.a)(e,2),r=n[0],a=n[1];return Object(A.jsxs)("div",{style:{position:"absolute"},children:[S(r),Object(A.jsx)("div",{style:{display:"flex"},children:Object(A.jsx)(F.a,{onDragEnd:function(t){var e=t.source,n=t.destination;if(n){var i=+e.droppableId,s=+n.droppableId;if(i===s){var o=function(t,e,n){var r=Array.from(t),i=r.splice(e,1),a=Object(B.a)(i,1)[0];return r.splice(n,0,a),r}(r[i],e.index,n.index),c=Object(W.a)(r);c[i]=o,a(c)}else{var d=function(t,e,n,r){var i=Array.from(t),a=Array.from(e),s=i.splice(n.index,1),o=Object(B.a)(s,1)[0];a.splice(r.index,0,o);var c={};return c[n.droppableId]=i,c[r.droppableId]=a,c}(r[i],r[s],e,n),l=Object(W.a)(r);l[i]=d[i],l[s]=d[s],a(l)}}},children:r.map((function(e,n){return Object(A.jsxs)("div",{style:{marginLeft:"50px",userSelect:"none"},children:[Object(A.jsx)("h1",{children:t[n]}),Object(A.jsx)("div",{children:Object(A.jsx)(F.c,{droppableId:"".concat(n),children:function(t,i){return Object(A.jsxs)("div",Object(D.a)(Object(D.a)({ref:t.innerRef,style:(i.isDraggingOver,{background:"white",padding:8,width:200,marginLeft:"-7px",maxHeight:"340px"})},t.droppableProps),{},{children:[Object(A.jsx)("div",{style:{position:"relative",maxHeight:"340px",width:"230px"},className:"scrollingThing",children:e.map((function(t,e){return Object(A.jsx)(F.b,{draggableId:t.id,index:e,children:function(i,s){return Object(A.jsxs)("div",Object(D.a)(Object(D.a)(Object(D.a)({ref:i.innerRef},i.draggableProps),i.dragHandleProps),{},{style:(s.isDragging,o=i.draggableProps.style,Object(D.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),width:170,position:"relative",background:"white",border:"3px solid #8B4389",borderRadius:"10px"},o)),children:[" ",Object(A.jsxs)("div",{style:{minHeight:"20px",padding:"5px"},children:[Object(A.jsx)("div",{style:{display:"flex",justifyContent:"space-around",maxWidth:"120px"},children:Object(A.jsx)("p1",{style:{},children:t.content})}),Object(A.jsx)("div",{style:{top:"10px",right:"10px",position:"absolute"},children:Object(A.jsx)("button",{style:{cursor:"pointer"},type:"button",onClick:function(){var t=[];r.forEach((function(r,i){n===i?t.push(function(t,e){var n=[];return t.forEach((function(t,r){e!==r&&n.push(t)})),n}(r,e)):t.push(r)})),a(t)},children:Object(A.jsx)(J,{})})})]})]}));var o}},t.id)}))}),t.placeholder]}))}},n)}),Object(A.jsx)(K,{state:r,setState:a,index:n})]})}))})})]})}var X=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)(Q,{})}}]),n}(a.a.Component);function q(t,e){var n=[];return t.forEach((function(t,r){e!==r&&n.push(t)})),n}var $=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{children:Object(A.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(A.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(A.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})]})})}}]),n}(a.a.Component),tt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{children:Object(A.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#b8b8b8",children:[Object(A.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(A.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})]})})}}]),n}(a.a.Component),et=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).handleAddTask=function(){r.setState((function(t,e){return{isAdding:!r.state.isAdding}}))},r.state={isAdding:!1},r}return Object(d.a)(n,[{key:"renderAddSection",value:function(){var t=this;return this.state.isAdding?Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{onChange:function(e){return t.props.changeText(e.target.value)},onKeyDown:function(e){return t.props.submitByEnter(e)}}),Object(A.jsxs)("div",{style:{transform:"translateY(10px)"},children:[Object(A.jsx)("button",{onClick:function(){return t.props.submitByEnter()},style:{cursor:"pointer",backgroundColor:"#DD2323",borderRadius:"7px",height:"30px",width:"80px"},children:Object(A.jsx)("p1",{style:{transform:"translatey(-2px)",cursor:"pointer",fontSize:"15px",color:"white"},children:"Add Task"})}),Object(A.jsx)("button",{onClick:this.handleAddTask,style:{marginLeft:"10px",cursor:"pointer",backgroundColor:"#c8c8c8",borderRadius:"7px",height:"30px",width:"80px"},children:Object(A.jsx)("p1",{style:{transform:"translatey(-2px)",cursor:"pointer",fontSize:"15px",color:"white"},children:"Cancel"})})]})]}):Object(A.jsx)("button",{onClick:this.handleAddTask,children:Object(A.jsxs)("div",{style:{transform:"translateY(10px)"},children:[Object(A.jsx)(M,{size:"15px"})," Add Task"]})})}},{key:"render",value:function(){return Object(A.jsx)("div",{children:this.renderAddSection()})}}]),n}(a.a.Component),nt=(a.a.Component,function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).changeState=function(){"extended"===r.state.isExtended?r.setState((function(t,e){return{isExtended:"not-extended",toDoList:r.state.toDoList}})):r.setState((function(t,e){return{isExtended:"extended",toDoList:r.state.toDoList}}))},r.updateToDo=function(t,e){var n=r.state.toDoList;n[e]=t,S(n),r.setState((function(t,e){return{isExtended:r.state.isExtended,toDoList:n}}))},r.addToToDo=function(t,e){if(e!==r.state.toDoList.length){var n=r.state.toDoList;n[e].push(t),S(n),r.setState((function(t,e){return{isExtended:r.state.isExtended,toDoList:n}}))}},w(),r.state={isExtended:"extended",toDoList:P()},window.addEventListener("resize",r.updateSize),r}return Object(d.a)(n,[{key:"render",value:function(){return L()?Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{style:{position:"absolute"},children:Object(A.jsx)(Y,{pageName:"Your Workspace",sideNavAnimation:this.changeState})}),Object(A.jsxs)("div",{style:{position:"absolute",zIndex:-1},className:this.state.isExtended,children:[Object(A.jsx)("div",{style:{display:"inline-block",position:"absolute"},children:Object(A.jsx)(G,{isExtended:"extended"})}),Object(A.jsx)("div",{className:"todo-outer-div",children:Object(A.jsx)("div",{style:{width:"1200px"},children:Object(A.jsx)(X,{})})})]})]}):Object(A.jsx)(p.a,{to:"/journey_prototype/login"})}}]),n}(a.a.Component));function rt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t;return n.map((function(t,n){return{id:"item-".concat(n+e),content:"".concat(t)}}))}var it=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).id2List={droppable:"items",droppable2:"selected"},r.getList=function(t){return r.state[r.id2List[t]]},r.onDragEnd=function(t){var e=t.source,n=t.destination;if(n)if(e.droppableId===n.droppableId){var i=function(t,e,n){var r=Array.from(t),i=r.splice(e,1),a=Object(B.a)(i,1)[0];return r.splice(n,0,a),r}(r.getList(e.droppableId),e.index,n.index),a={items:i},s=[];i.forEach((function(t){s.push(t.content)})),r.props.updateToDo(s,r.props.index),r.setState(a)}else{var o=function(t,e,n,r){var i=Array.from(t),a=Array.from(e),s=i.splice(n.index,1),o=Object(B.a)(s,1)[0];a.splice(r.index,0,o);var c={};return c[n.droppableId]=i,c[r.droppableId]=a,c}(r.getList(e.droppableId),r.getList(n.droppableId),e,n);r.setState({items:o.droppable,selected:o.droppable2})}},r.deleteItem=function(t){var e=r.state.items.map((function(t){return t.content}));e=q(e,t),r.props.updateToDo(e,r.props.index)},r.state={items:rt(r.props.toDoList),selected:rt(r.props.toDoList)},r}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.state.items=rt(this.props.toDoList),Object(A.jsx)(F.a,{onDragEnd:this.onDragEnd,children:Object(A.jsx)(F.c,{droppableId:"droppable",children:function(e,n){return Object(A.jsxs)("div",{ref:e.innerRef,style:(n.isDraggingOver,{background:"white",padding:8,width:200,marginLeft:"-7px"}),children:[t.state.items.map((function(e,n){return Object(A.jsx)(F.b,{draggableId:e.id,index:n,children:function(r,i){return Object(A.jsxs)("div",Object(D.a)(Object(D.a)(Object(D.a)({ref:r.innerRef},r.draggableProps),r.dragHandleProps),{},{style:(i.isDragging,a=r.draggableProps.style,Object(D.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:"white",border:"3px solid #8B4389",borderRadius:"10px"},a)),children:[(n+1).toString()+". "+e.content,Object(A.jsx)(at,{deleteItem:t.deleteItem,index:n})]}));var a}},e.id)})),e.placeholder]})}})})}}]),n}(a.a.Component),at=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).showMore=function(){r.setState((function(t,e){return{showMoreBool:!r.state.showMoreBool}}))},r.state={showMoreBool:!1},r}return Object(d.a)(n,[{key:"renderShowMore",value:function(){var t=this;if(this.state.showMoreBool)return this.state.showMoreBool=!1,Object(A.jsx)("div",{style:{marginLeft:"-10px",cursor:"pointer"},children:Object(A.jsxs)("button",{onClick:function(){return t.props.deleteItem(t.props.index)},children:[Object(A.jsx)("div",{style:{display:"inline-block"},children:Object(A.jsx)(tt,{})}),Object(A.jsx)("div",{style:{display:"inline-block",transform:"translate(5px,-3px)"},children:"Delete Task"})]})})}},{key:"render",value:function(){return[Object(A.jsx)("div",{style:{float:"right",marginRight:"-15px"},children:Object(A.jsx)("button",{onClick:this.showMore,style:{cursor:"pointer"},children:Object(A.jsx)($,{})})}),this.renderShowMore()]}}]),n}(a.a.Component),st=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(A.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(A.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})]})}}]),n}(a.a.Component),ot=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){this.props.size;return Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{style:{borderRadius:"2vh",width:"auto",height:"auto",paddingRight:"1.5vw",paddingLeft:"1.5vw",paddingTop:"3px",paddingBottom:"0.4vh",backgroundColor:"#965594"},children:Object(A.jsx)("h1",{style:{fontSize:"2vh",fontFamily:"SegoeUI-Semibold, Segoe UI",fontWeight:"600",color:"white"},children:this.props.text})}),Object(A.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(A.jsx)(ct,{completion:this.props.loadingBarCompletion})})]})}}]),n}(a.a.Component),ct=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){for(var t=["none","none","none"],e=0;e<this.props.completion;e++)t[e]="#8bee7c";return Object(A.jsx)("div",{style:{position:"absolute",top:"calc(7vh)"},children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"auto",height:"1vh",viewBox:"0 0 112.065 10.945",children:Object(A.jsxs)("g",{id:"Group_21","data-name":"Group 21",transform:"translate(0 0)",children:[Object(A.jsx)("rect",{id:"Rectangle_1510","data-name":"Rectangle 1510",width:110.009,height:"10.945",rx:"5.472",transform:"translate(1.028 0)",fill:"#fff"}),Object(A.jsx)("rect",{id:"Rectangle_1511","data-name":"Rectangle 1511",width:49.35,height:"10.945",rx:"5.472",transform:"translate(0 0)",fill:t[0]}),Object(A.jsx)("rect",{id:"Rectangle_1512","data-name":"Rectangle 1512",width:49.35,height:"10.945",transform:"translate(34.956 0)",fill:t[1]}),Object(A.jsx)("rect",{id:"Rectangle_1513","data-name":"Rectangle 1513",width:111.037,height:"10.945",rx:"5.472",transform:"translate(1.028 0)",fill:t[2]})]})})})}}]),n}(a.a.Component),dt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).changeState=function(){"extended"===r.state.isExtended?r.setState((function(t,e){return{isExtended:"not-extended"}})):r.setState((function(t,e){return{isExtended:"extended"}}))},r.changePopUp=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";r.setState((function(e,n){return{isExtended:r.state.isExtended,popUp:!r.state.popUp,popUpType:t}}))},r.state={isExtended:"extended",popUp:!1},w(),r}return Object(d.a)(n,[{key:"popUp",value:function(){if(this.state.popUp)return Object(A.jsx)(pt,{changePopUp:this.changePopUp,type:this.state.popUpType})}},{key:"render",value:function(){var t=this;if(!L())return Object(A.jsx)(p.a,{to:"/journey_prototype/login"});var e=[1,3,2],n="50vw";return Object(A.jsxs)("div",{children:[this.popUp(),Object(A.jsx)("div",{style:{position:"fixed"},children:Object(A.jsx)(Y,{pageName:"Home",sideNavAnimation:this.changeState})}),Object(A.jsxs)("div",{style:{position:"fixed",zIndex:-1},className:this.state.isExtended,children:[Object(A.jsx)("div",{style:{display:"inline-block",position:"absolute"},children:Object(A.jsx)(G,{isExtended:"extended"})}),Object(A.jsxs)("div",{className:"video-outer-div",children:[Object(A.jsx)("div",{style:{width:n.toString(),aspectRatio:"16/9"},children:Object(A.jsx)("iframe",{src:r.video_url,style:{width:"100%",height:"100%"},frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:"true",title:"video"})}),Object(A.jsxs)("div",{style:{width:n.toString},children:[Object(A.jsxs)("div",{style:{display:"inline-block"},children:[Object(A.jsx)("h1",{style:{fontSize:"3vh"},children:"Startup: Company inc.  "}),Object(A.jsx)("h1",{style:{fontSize:"2vh"},children:"Entrepreneur:   Name Nameson"})]}),Object(A.jsx)("div",{style:{display:"inline-block",float:"right"},children:Object(A.jsx)("div",{style:{backgroundColor:"#E8E8E8",height:"13vh",width:"27vw",marginTop:"2vh",borderRadius:"2vh"},children:Object(A.jsxs)("div",{style:{justifyContent:"space-evenly",display:"flex",transform:"translateY(1.5vh)"},children:[Object(A.jsx)("button",{onClick:function(){return t.changePopUp("download")},style:{cursor:"pointer"},children:Object(A.jsx)(ot,{size:"20px",loadingBarCompletion:e[0],text:"Download"})}),Object(A.jsx)("button",{onClick:function(){return t.changePopUp("challenge")},style:{cursor:"pointer"},children:Object(A.jsx)(ot,{size:"100px",loadingBarCompletion:e[1],text:"Challenge"})}),Object(A.jsx)("button",{style:{cursor:"pointer"},children:Object(A.jsx)(ot,{size:"100px",loadingBarCompletion:e[2],text:"Master"})})]})})})]})]})]}),Object(A.jsxs)("div",{style:{position:"absolute",right:"0px",bottom:"0px",zIndex:"-20",height:"calc(90vh - 100px)",width:"calc(25vw - 50px)",borderRadius:"6vh 0 0 0",backgroundColor:"#f9f9f9"},children:[Object(A.jsxs)("div",{style:{transform:"translateY(-70px)",backgroundColor:"#f9f9f9",width:"200px",padding:"20px",borderRadius:"2vh"},children:["XP:  ",Object(A.jsx)(lt,{completion:v.xp}),"    Cash:  ",v.cash]}),Object(A.jsx)("div",{style:{marginLeft:"20px",marginTop:"20px"},children:Object(A.jsx)("p1",{children:"Placeholder text"})})]})]})}}]),n}(a.a.Component),lt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=3*this.props.completion/100;return Object(A.jsx)("div",{style:{width:"3vw",height:"13px",backgroundColor:"white",display:"inline-block",borderRadius:"1vh"},children:Object(A.jsx)("div",{style:{width:"".concat(t,"vw"),height:"13px",backgroundColor:"#8bee7c",borderRadius:"1vh"}})})}}]),n}(a.a.Component),ht=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(A.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(A.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]})}}]),n}(a.a.Component),pt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{style:{position:"absolute",zIndex:"100",width:"100vw",justifyContent:"center",alignItems:"center",height:"100vh",display:"flex"},children:[Object(A.jsx)("div",{style:{position:"absolute",width:"100vw",height:"100vh",backgroundColor:"black",opacity:"50%"},onClick:this.props.changePopUp}),"challenge"===this.props.type?Object(A.jsx)(jt,{changePopUp:this.props.changePopUp}):null,"download"===this.props.type?Object(A.jsx)(ut,{changePopUp:this.props.changePopUp}):null]})}}]),n}(a.a.Component),jt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).onChangeHandler=function(t){i.setState({selectedFile:t.target.files[0],loaded:0})},i.state={challenges:r.challenges,selectedFile:null},i}return Object(d.a)(n,[{key:"renderChallenges",value:function(){return this.state.challenges.map((function(t){return Object(A.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(A.jsx)(st,{}),Object(A.jsx)("p1",{style:{marginLeft:"15px"},children:t})]})}))}},{key:"render",value:function(){return Object(A.jsxs)("div",{style:{height:"80vh",width:"25vw",backgroundColor:"white",opacity:"100%",zIndex:2,borderRadius:"20px"},children:[Object(A.jsx)("button",{style:{cursor:"pointer",float:"right",marginTop:"15px",marginRight:"15px"},onClick:this.props.changePopUp,children:Object(A.jsx)(ht,{})}),Object(A.jsx)("h1",{style:{marginLeft:"20px"},children:"Challenges"}),Object(A.jsxs)("div",{style:{marginLeft:"20px",display:"block"},children:[this.renderChallenges(),Object(A.jsxs)("div",{style:{position:"absolute",bottom:"15vh"},children:[Object(A.jsx)("input",{type:"file",name:"file",onChange:this.onChangeHandler}),Object(A.jsx)("button",{style:{backgroundColor:"#965594",color:"white",marginLeft:"10px",padding:"7px",borderRadius:"5px",cursor:"pointer"},onClick:this.props.changePopUp,children:"Submit"})]})]})]})}}]),n}(a.a.Component),ut=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"renderDownload",value:function(){return["".concat(r.download_title," points: ").concat(r.download_points)].map((function(t){return Object(A.jsx)("div",{style:{marginBottom:"20px"},children:Object(A.jsx)("p1",{style:{marginLeft:"15px"},children:t})})}))}},{key:"render",value:function(){return Object(A.jsxs)("div",{style:{width:"25vw",backgroundColor:"white",opacity:"100%",zIndex:2,borderRadius:"20px",paddingBottom:"50px"},children:[Object(A.jsx)("button",{style:{cursor:"pointer",float:"right",marginTop:"15px",marginRight:"15px"},onClick:this.props.changePopUp,children:Object(A.jsx)(ht,{})}),Object(A.jsx)("h1",{style:{marginLeft:"20px"},children:"Download"}),this.renderDownload(),Object(A.jsx)("div",{style:{position:"absolute"},children:Object(A.jsx)("a",{href:r.download_url,children:Object(A.jsx)("button",{style:{backgroundColor:"#965594",color:"white",marginLeft:"10px",padding:"7px",borderRadius:"5px",cursor:"pointer"},onClick:this.props.changePopUp,children:"Download Files"})})})]})}}]),n}(a.a.Component),bt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{children:[P()[0][0].content,Object(A.jsx)("button",{})]})}}]),n}(a.a.Component),xt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).changeState=function(){"extended"===r.state.isExtended?r.setState((function(t,e){return{isExtended:"not-extended"}})):r.setState((function(t,e){return{isExtended:"extended"}}))},r.state={isExtended:"extended"},r}return Object(d.a)(n,[{key:"render",value:function(){return L()?Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{style:{position:"fixed"},children:Object(A.jsx)(Y,{pageName:"Your Journey",sideNavAnimation:this.changeState})}),Object(A.jsx)("div",{style:{position:"fixed",zIndex:-1},className:this.state.isExtended,children:Object(A.jsx)("div",{style:{display:"inline-block",position:"absolute"},children:Object(A.jsx)(G,{isExtended:"extended"})})})]}):Object(A.jsx)(p.a,{to:"/journey_prototype/login"})}}]),n}(a.a.Component);var Ot=function(){return Object(A.jsxs)(j.a,{children:[Object(A.jsx)(p.b,{path:"/journey_prototype/login",exact:!0,component:H}),Object(A.jsx)(p.b,{path:"/journey_prototype/",exact:!0,component:dt}),Object(A.jsx)(p.b,{path:"/journey_prototype/workspace",exact:!0,component:nt}),Object(A.jsx)(p.b,{path:"/journey_prototype/journey",exact:!0,component:xt}),Object(A.jsx)(p.b,{path:"/journey_prototype/portfolio",exact:!0,component:bt})]})},ft=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),i(t),a(t),s(t)}))};o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(Ot,{})}),document.getElementById("root")),ft()}},[[77,1,2]]]);
//# sourceMappingURL=main.e1fd010e.chunk.js.map