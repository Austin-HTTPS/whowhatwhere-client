(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,a){},119:function(e,a,t){"use strict";t.r(a);var n,r=t(0),s=t.n(r),i=t(7),c=t.n(i),l=t(42),m=t.n(l),o=t(65),d=t(9),u=(t(83),t(150)),b=t(153),v=t(154),E=t(72),g=t(149),N=t(66),f=t.n(N),p=t(43),w=t.n(p),y=t(44),h=t.n(y),x=t(45),j=t.n(x),C=t(67),O=t.n(C),S=Object(E.a)({palette:{type:"light"}});var F=function(){var e=Object(r.useState)(""),a=Object(d.a)(e,2),t=a[0],i=a[1],c=Object(r.useState)(""),l=Object(d.a)(c,2),E=l[0],N=l[1],p=Object(r.useState)(""),y=Object(d.a)(p,2),x=y[0],C=y[1],F=Object(r.useState)(!1),T=Object(d.a)(F,2),q=T[0],I=T[1],W=Object(r.useState)(!1),k=Object(d.a)(W,2),B=k[0],G=k[1],L=Object(r.useState)(""),J=Object(d.a)(L,2),A=J[0],R=J[1],U=Object(r.useState)(""),P=Object(d.a)(U,2),z=P[0],H=P[1],Q=Object(r.useState)([]),D=Object(d.a)(Q,2),K=D[0],M=D[1],V=Object(r.useState)([]),X=Object(d.a)(V,2),Y=X[0],Z=X[1],$=Object(r.useState)(""),_=Object(d.a)($,2),ee=_[0],ae=_[1],te=Object(r.useState)(""),ne=Object(d.a)(te,2),re=ne[0],se=ne[1],ie=Object(r.useState)(Boolean),ce=Object(d.a)(ie,2),le=ce[0],me=ce[1],oe=Object(r.useState)([]),de=Object(d.a)(oe,2),ue=de[0],be=de[1],ve=Object(r.useState)(0),Ee=Object(d.a)(ve,2),ge=Ee[0],Ne=Ee[1],fe=Object(r.useState)({error:!1,message:""}),pe=Object(d.a)(fe,2),we=pe[0],ye=pe[1],he=Object(r.useState)({error:!1,message:""}),xe=Object(d.a)(he,2),je=xe[0],Ce=xe[1],Oe=Object(r.useState)({error:!1,message:""}),Se=Object(d.a)(Oe,2),Fe=Se[0],Te=Se[1],qe=Object(r.useState)(!1),Ie=Object(d.a)(qe,2),We=Ie[0],ke=Ie[1],Be=Object(r.useState)(!1),Ge=Object(d.a)(Be,2),Le=Ge[0],Je=Ge[1],Ae=Object(r.useState)(!1),Re=Object(d.a)(Ae,2),Ue=Re[0],Pe=Re[1];Object(r.useEffect)((function(){(function(){var e=Object(o.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=f()("https://lb.ltng.link"),console.log(n),n.on("gameCreated",(function(e){e.joined&&(I(!0),H(e.gameOwner),M(e.members))})),n.on("gameJoined",(function(e){e.joined&&(I(!0),H(e.gameOwner),M(e.members),Z(e.waitingRoom))})),n.on("playerJoined",(function(e){M(e.members),Z(e.waitingRoom)})),n.on("gameStarted",(function(e){me(e.gameStarted),ae(e.question),Ne(e.questionIndex),M(e.members),Z(e.waitingRoom)})),n.on("allQuestionsAnswered",(function(e){console.log("all questions answered!");var a=[];e.map((function(e,t){e.map((function(e,n){void 0===a[n]&&(a[n]=[]),a[n][t]={question:e.question,answer:e.answer}}))})),be(a),me(!1),Ne(0)})),n.on("newQuestion",(function(e){ae(e.question),Ne(e.questionIndex)})),n.on("playerLeft",(function(e){M(e.members),Z(e.waitingRoom)})),n.on("validationError",(function(e){G(!0),R(e.error),setTimeout((function(){G(!1)}),3e3)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>1270&&(Je(!1),ke(!1),Pe(!1))}))}),[]),Object(r.useEffect)((function(){window.addEventListener("hashchange",(function(){""===window.location.hash&&(De(),Ke())}))}),[]);var ze=function(){var e=!1;if(t?ye({error:!1,message:""}):(ye({error:!0,message:"Lobby Name cannot be empty"}),e=!0),E?E.length>12?(Ce({error:!0,message:"Username maximum of 12 characters"}),e=!0):Ce({error:!1,message:""}):(Ce({error:!0,message:"Username cannot be empty"}),e=!0),e)return!1;ye({error:!1,message:""}),Ce({error:!1,message:""}),Te({error:!1,message:""});var a={lobbyName:t,username:E,password:x};console.log("trying"),n.emit("createGame",a),window.location.hash=t},He=function(){var e=!1;if(t?ye({error:!1,message:""}):(ye({error:!0,message:"Lobby Name cannot be empty"}),e=!0),E?E.length>12&&(Ce({error:!0,message:"Username maximum of 12 characters"}),e=!0):(Ce({error:!0,message:"Username cannot be empty"}),e=!0),Ce({error:!1,message:""}),e)return!1;var a={lobbyName:t,username:E,password:x};n.emit("joinGame",a),window.location.hash=t},Qe=function(){if(""===re)return G(!0),R("Answer cannot be empty you silly goose"),!1;G(!1),R(""),se("");var e={lobbyName:t,username:E,answer:re};n.emit("submitAnswer",e)},De=function(){n.emit("leaveGame",{lobbyName:t})},Ke=function(){window.location.hash="",Je(!1),ke(!1),Pe(!1)};return s.a.createElement(g.a,{theme:S},s.a.createElement("div",{className:"App"},s.a.createElement("div",{style:{width:"100%"}},q&&s.a.createElement("div",{className:"gameLobby"},q&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"gameScreen"},s.a.createElement("div",{className:"gameScreenHeader"},s.a.createElement("div",{className:"gameScreenLogoContainer"},s.a.createElement("div",{className:"gameScreenLogo"},"?!"),"Who",s.a.createElement("br",null),"What",s.a.createElement("br",null),"Where",s.a.createElement("br",null)),s.a.createElement("div",{className:"gameScreenRound"},0===ge?"Waiting for new game":"Round",s.a.createElement("br",null),0!==ge?ge:"")),s.a.createElement("div",{className:"gameScreenContainer"},z!==E&&!le&&q&&s.a.createElement("div",{className:"waitingText"}," Waiting for ",z," to start the game "),!le&&void 0!==ue[0]&&s.a.createElement("div",{className:"answerCardContainer"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},ue.map((function(e){return s.a.createElement(u.a,{className:"answerCard"},e.map((function(e){return s.a.createElement("div",null,e.question," - ",e.answer)})))})))),le&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{height:"50%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},s.a.createElement("div",{className:"question"},ee),B&&s.a.createElement("div",null,A),s.a.createElement("div",{className:"answerContainer",style:{width:"50%"}},s.a.createElement(b.a,{autoComplete:"new-password",className:"answerTextField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return se(e.target.value)},value:re,onKeyDown:function(e){return function(e){13===e.keyCode&&Qe()}(e)}}),s.a.createElement(v.a,{className:"submitAnswerButton",style:{margin:"4px"},color:"primary",onClick:function(){return Qe()}}," Submit ")))),""!==z&&z===E&&!le&&s.a.createElement("div",{className:"startButtonContainer"},s.a.createElement(v.a,{className:"startButton",color:"primary",onClick:function(){return function(){var e={lobbyName:t,username:E};n.emit("startGame",e)}()}}," Start Game "))),s.a.createElement("div",{className:"gameScreenChatContainer"})),s.a.createElement("div",{className:"memberSidebar"},s.a.createElement("div",{className:"memberSidebarTitle"},"Players - ",K.length),s.a.createElement("div",{className:"memberList"},K.map((function(e){return s.a.createElement("div",{className:"memberItem"},s.a.createElement("img",{className:"memberAvatar",src:e.avatar}),e.username)}))),s.a.createElement("div",{className:"waitingRoomSidebarTitle"},"Waiting Room - ",Y.length),s.a.createElement("div",{className:"waitingRoomList"},Y.map((function(e){return s.a.createElement("div",{className:"memberItem"},s.a.createElement("img",{className:"memberAvatar",src:e.avatar}),e.username)})))))),!q&&s.a.createElement("div",{className:"createOrJoinLobbyContainer"},s.a.createElement("div",{className:"introductionSection"},s.a.createElement("div",{className:"introTitleContainer"},s.a.createElement("img",{className:"introIcon",src:O.a}),s.a.createElement("div",{className:"introTitle"},"Who What Where")),Ue&&s.a.createElement("div",{className:"dividerSmall"}),!Ue&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"introContent"},"An Interactive Story building game to play with friends. ",s.a.createElement("br",null),s.a.createElement("br",null),"Challenge your friends to a game of Who, What, Where? An Ad-libs inspired interactive story building game where you and your friends answer a series of 9 questions. The answers get mashed together to create wild stories. ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"extraPlayerText"},"Best played with 3-9 players ")),s.a.createElement("div",{className:"divider"})),Ue&&s.a.createElement("div",{className:"textFieldSmallContainer"},s.a.createElement("div",{className:"backArrow"}),s.a.createElement("div",{className:"textFieldContainerSmall"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:w.a}),s.a.createElement("div",{className:"textFieldTitle"},"Username *")),s.a.createElement(b.a,{autoComplete:"off",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return N(e.target.value)},value:E}),s.a.createElement("div",{className:"textFieldError2"},je.error&&je.message)),s.a.createElement("div",{className:"textFieldContainerSmall"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:h.a}),s.a.createElement("div",{className:"textFieldTitle"},"Lobby Name *")),s.a.createElement(b.a,{autoComplete:"new-password",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return i(e.target.value)},value:t}),s.a.createElement("div",{className:"textFieldError2"},we.error&&we.message)),s.a.createElement("div",{className:"textFieldContainerSmall"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:j.a}),s.a.createElement("div",{className:"textFieldTitle"},"Password")),s.a.createElement(b.a,{autoComplete:"new-password",type:"password",className:"textField",color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return C(e.target.value)},value:x}),s.a.createElement("div",{className:"textFieldError2"},Fe.error&&Fe.message)),Le&&s.a.createElement(v.a,{className:"createButtonSmall",color:"primary",onClick:function(){return ze()}}," Create Game "),We&&s.a.createElement(v.a,{className:"joinButtonSmall",color:"primary",onClick:function(){return He()}}," Join Game "))),!Ue&&s.a.createElement("div",{className:"createOrJoinSection"},s.a.createElement("div",{className:"createJoin"},s.a.createElement("div",{className:"textFieldContainer"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:w.a}),s.a.createElement("div",{className:"textFieldTitle"},"Username *")),s.a.createElement(b.a,{autoComplete:"new-password",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return N(e.target.value)},value:E}),s.a.createElement("div",{className:"textFieldError2"},je.error&&je.message)),s.a.createElement("div",{className:"textFieldContainer"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:h.a}),s.a.createElement("div",{className:"textFieldTitle"},"Lobby Name *")),s.a.createElement(b.a,{autoComplete:"off",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return i(e.target.value)},value:t}),s.a.createElement("div",{className:"textFieldError2"},we.error&&we.message)),s.a.createElement("div",{className:"textFieldContainer"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:j.a}),s.a.createElement("div",{className:"textFieldTitle"},"Password")),s.a.createElement(b.a,{autoComplete:"new-password",type:"password",className:"textField",color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return C(e.target.value)},value:x}),s.a.createElement("div",{className:"textFieldError2"},Fe.error&&Fe.message)),s.a.createElement("div",{className:"createJoinButtonsContainer"},s.a.createElement("div",{style:{color:"#ecbebe",fontSize:"14px",minHeight:"18px",opacity:B?"1":"0",transition:"opacity 0.5s"}},A),"}",s.a.createElement(v.a,{className:"createButton",color:"primary",onClick:function(){return ze()}}," Create Game "),s.a.createElement(v.a,{className:"joinButton",color:"primary",onClick:function(){return He()}}," Join Game ")),s.a.createElement("div",{className:"createJoinButtonsContainerSmall"},B&&s.a.createElement("div",{style:{color:"#ecbebe",fontSize:"14px",minHeight:"18px",opacity:B?"1":"0",transition:"opacity 0.5s"}},A),s.a.createElement(v.a,{className:"createButton",color:"primary",onClick:function(){return window.location.hash="#createGame",Je(!0),void Pe(!0)}}," Create Game "),s.a.createElement(v.a,{className:"joinButton",color:"primary",onClick:function(){return window.location.hash="#joinGame",ke(!0),void Pe(!0)}}," Join Game "))))))))};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(F,null)),document.getElementById("root"))},43:function(e,a,t){e.exports=t.p+"static/media/user.7de5e5f7.svg"},44:function(e,a,t){e.exports=t.p+"static/media/lobby.d10239bd.svg"},45:function(e,a,t){e.exports=t.p+"static/media/password.1b3f94dc.svg"},67:function(e,a,t){e.exports=t.p+"static/media/question.a2bcb8f5.svg"},77:function(e,a,t){e.exports=t(119)},83:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.3720f137.chunk.js.map