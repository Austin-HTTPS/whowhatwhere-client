(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,a){},118:function(e,a,t){"use strict";t.r(a);var n,r=t(0),i=t.n(r),c=t(7),s=t.n(c),l=t(42),o=t.n(l),m=t(65),d=t(9),u=(t(82),t(151)),E=t(152),b=t(72),v=t(148),g=t(66),f=t.n(g),N=t(43),p=t.n(N),w=t(44),y=t.n(w),h=t(45),x=t.n(h),O=t(67),S=t.n(O),j=Object(b.a)({palette:{type:"light"}});var C=function(){var e=Object(r.useState)(""),a=Object(d.a)(e,2),t=a[0],c=a[1],s=Object(r.useState)(""),l=Object(d.a)(s,2),b=l[0],g=l[1],N=Object(r.useState)(""),w=Object(d.a)(N,2),h=w[0],O=w[1],C=Object(r.useState)(!1),F=Object(d.a)(C,2),T=F[0],q=F[1],B=Object(r.useState)(!1),L=Object(d.a)(B,2),W=L[0],I=L[1],k=Object(r.useState)(""),A=Object(d.a)(k,2),G=A[0],J=A[1],R=Object(r.useState)(""),U=Object(d.a)(R,2),_=U[0],P=U[1],D=Object(r.useState)([]),H=Object(d.a)(D,2),K=H[0],z=H[1],Q=Object(r.useState)([]),M=Object(d.a)(Q,2),V=M[0],X=M[1],Y=Object(r.useState)(""),Z=Object(d.a)(Y,2),$=Z[0],ee=Z[1],ae=Object(r.useState)(""),te=Object(d.a)(ae,2),ne=te[0],re=te[1],ie=Object(r.useState)(Boolean),ce=Object(d.a)(ie,2),se=ce[0],le=ce[1],oe=Object(r.useState)([]),me=Object(d.a)(oe,2),de=me[0],ue=me[1],Ee=Object(r.useState)(0),be=Object(d.a)(Ee,2),ve=be[0],ge=be[1],fe=Object(r.useState)({error:!1,message:""}),Ne=Object(d.a)(fe,2),pe=Ne[0],we=Ne[1],ye=Object(r.useState)({error:!1,message:""}),he=Object(d.a)(ye,2),xe=he[0],Oe=he[1],Se=Object(r.useState)({error:!1,message:""}),je=Object(d.a)(Se,2),Ce=je[0],Fe=je[1],Te=Object(r.useState)(!1),qe=Object(d.a)(Te,2),Be=qe[0],Le=qe[1],We=Object(r.useState)(!1),Ie=Object(d.a)(We,2),ke=Ie[0],Ae=Ie[1],Ge=Object(r.useState)(!1),Je=Object(d.a)(Ge,2),Re=Je[0],Ue=Je[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=f()(Object({NODE_ENV:"production",PUBLIC_URL:"/whowhatwhere-client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).BASEURL),console.log(n),n.on("gameCreated",(function(e){e.joined&&(q(!0),P(e.gameOwner),z(e.members))})),n.on("gameJoined",(function(e){e.joined&&(q(!0),P(e.gameOwner),z(e.members),X(e.waitingRoom))})),n.on("playerJoined",(function(e){z(e.members),X(e.waitingRoom)})),n.on("gameStarted",(function(e){le(e.gameStarted),ee(e.question),ge(e.questionIndex),z(e.members),X(e.waitingRoom)})),n.on("allQuestionsAnswered",(function(e){console.log("all questions answered!");var a=[];e.map((function(e,t){e.map((function(e,n){void 0===a[n]&&(a[n]=[]),a[n][t]={question:e.question,answer:e.answer}}))})),ue(a),le(!1),ge(0)})),n.on("newQuestion",(function(e){ee(e.question),ge(e.questionIndex)})),n.on("playerLeft",(function(e){z(e.members),X(e.waitingRoom)})),n.on("validationError",(function(e){I(!0),J(e.error),setTimeout((function(){I(!1)}),3e3)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>1270&&(Ae(!1),Le(!1),Ue(!1))}))}),[]),Object(r.useEffect)((function(){window.addEventListener("hashchange",(function(){""===window.location.hash&&(He(),Ke())}))}),[]);var _e=function(){var e=!1;if(t?we({error:!1,message:""}):(we({error:!0,message:"Lobby Name cannot be empty"}),e=!0),b?b.length>12?(Oe({error:!0,message:"Username maximum of 12 characters"}),e=!0):Oe({error:!1,message:""}):(Oe({error:!0,message:"Username cannot be empty"}),e=!0),e)return!1;we({error:!1,message:""}),Oe({error:!1,message:""}),Fe({error:!1,message:""});var a={lobbyName:t,username:b,password:h};console.log("trying"),n.emit("createGame",a),window.location.hash=t},Pe=function(){var e=!1;if(t?we({error:!1,message:""}):(we({error:!0,message:"Lobby Name cannot be empty"}),e=!0),b?b.length>12&&(Oe({error:!0,message:"Username maximum of 12 characters"}),e=!0):(Oe({error:!0,message:"Username cannot be empty"}),e=!0),Oe({error:!1,message:""}),e)return!1;var a={lobbyName:t,username:b,password:h};n.emit("joinGame",a),window.location.hash=t},De=function(){if(""===ne)return I(!0),J("Answer cannot be empty you silly goose"),!1;I(!1),J(""),re("");var e={lobbyName:t,username:b,answer:ne};n.emit("submitAnswer",e)},He=function(){n.emit("leaveGame",{lobbyName:t})},Ke=function(){window.location.hash="",Ae(!1),Le(!1),Ue(!1)};return i.a.createElement(v.a,{theme:j},i.a.createElement("div",{className:"App"},i.a.createElement("div",{style:{width:"100%"}},T&&i.a.createElement("div",{className:"gameLobby"},T&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"gameScreen"},i.a.createElement("div",{className:"gameScreenHeader"},i.a.createElement("div",{className:"gameScreenLogoContainer"},i.a.createElement("div",{className:"gameScreenLogo"},"?!"),"Who",i.a.createElement("br",null),"What",i.a.createElement("br",null),"Where",i.a.createElement("br",null)),i.a.createElement("div",{className:"gameScreenRound"},0===ve?"Waiting for new game":"Round",i.a.createElement("br",null),0!==ve?ve:"")),i.a.createElement("div",{className:"gameScreenContainer"},_!==b&&!se&&T&&i.a.createElement("div",{className:"waitingText"}," Waiting for ",_," to start the game "),!se&&void 0!==de[0]&&i.a.createElement("div",null,de.map((function(e){return i.a.createElement("div",null,e.map((function(e){return i.a.createElement("li",null,e.question," - ",e.answer)})))}))),se&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"question"},$),W&&i.a.createElement("div",null,G),i.a.createElement("div",{className:"answerContainer"},i.a.createElement(u.a,{autoComplete:"off",className:"answerTextField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return re(e.target.value)},value:ne,onKeyDown:function(e){return function(e){13===e.keyCode&&De()}(e)}}),i.a.createElement(E.a,{className:"submitAnswerButton",style:{margin:"4px"},color:"primary",onClick:function(){return De()}}," Submit "))),""!==_&&_===b&&!se&&i.a.createElement("div",{className:"startButtonContainer"},i.a.createElement(E.a,{className:"startButton",color:"primary",onClick:function(){return function(){var e={lobbyName:t,username:b};n.emit("startGame",e)}()}}," Start Game "))),i.a.createElement("div",{className:"gameScreenChatContainer"})),i.a.createElement("div",{className:"memberSidebar"},i.a.createElement("div",{className:"memberSidebarTitle"},"Players - ",K.length),i.a.createElement("div",{className:"memberList"},K.map((function(e){return i.a.createElement("div",{className:"memberItem"},i.a.createElement("img",{className:"memberAvatar",src:e.avatar}),e.username)}))),i.a.createElement("div",{className:"waitingRoomSidebarTitle"},"Waiting Room - ",V.length),i.a.createElement("div",{className:"waitingRoomList"},V.map((function(e){return i.a.createElement("div",{className:"memberItem"},i.a.createElement("img",{className:"memberAvatar",src:e.avatar}),e.username)})))))),!T&&i.a.createElement("div",{className:"createOrJoinLobbyContainer"},i.a.createElement("div",{className:"introductionSection"},i.a.createElement("div",{className:"introTitleContainer"},i.a.createElement("img",{className:"introIcon",src:S.a}),i.a.createElement("div",{className:"introTitle"},"Who What Where")),Re&&i.a.createElement("div",{className:"dividerSmall"}),!Re&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"introContent"},"An Interactive Story building game to play with friends. ",i.a.createElement("br",null),i.a.createElement("br",null),"Challenge your friends to a game of Who, What, Where? An Ad-libs inspired interactive story building game where you and your friends answer a series of 9 questions. The answers get mashed together to create wild stories. ",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"extraPlayerText"},"Best played with 3-9 players ")),i.a.createElement("div",{className:"divider"})),Re&&i.a.createElement("div",{className:"textFieldSmallContainer"},i.a.createElement("div",{className:"backArrow"}),i.a.createElement("form",{autoComplete:"off"},i.a.createElement("div",{className:"textFieldContainerSmall"},i.a.createElement("div",{className:"textFieldTags"},i.a.createElement("img",{className:"textFieldIcon",src:p.a}),i.a.createElement("div",{className:"textFieldTitle"},"Username *")),i.a.createElement(u.a,{autoComplete:"off",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return g(e.target.value)},value:b}),i.a.createElement("div",{className:"textFieldError2"},xe.error&&xe.message)),i.a.createElement("div",{className:"textFieldContainerSmall"},i.a.createElement("div",{className:"textFieldTags"},i.a.createElement("img",{className:"textFieldIcon",src:y.a}),i.a.createElement("div",{className:"textFieldTitle"},"Lobby Name *")),i.a.createElement(u.a,{autoComplete:"off",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return c(e.target.value)},value:t}),i.a.createElement("div",{className:"textFieldError2"},pe.error&&pe.message)),i.a.createElement("div",{className:"textFieldContainerSmall"},i.a.createElement("div",{className:"textFieldTags"},i.a.createElement("img",{className:"textFieldIcon",src:x.a}),i.a.createElement("div",{className:"textFieldTitle"},"Password")),i.a.createElement(u.a,{autoComplete:"off",type:"password",className:"textField",color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return O(e.target.value)},value:h}),i.a.createElement("div",{className:"textFieldError2"},Ce.error&&Ce.message))),ke&&i.a.createElement(E.a,{className:"createButtonSmall",color:"primary",onClick:function(){return _e()}}," Create Game "),Be&&i.a.createElement(E.a,{className:"joinButtonSmall",color:"primary",onClick:function(){return Pe()}}," Join Game "))),!Re&&i.a.createElement("div",{className:"createOrJoinSection"},i.a.createElement("div",{className:"createJoin"},i.a.createElement("form",{autoComplete:"off"},i.a.createElement("div",{className:"textFieldContainer"},i.a.createElement("div",{className:"textFieldTags"},i.a.createElement("img",{className:"textFieldIcon",src:p.a}),i.a.createElement("div",{className:"textFieldTitle"},"Username *")),i.a.createElement(u.a,{autoComplete:"off",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return g(e.target.value)},value:b}),i.a.createElement("div",{className:"textFieldError2"},xe.error&&xe.message)),i.a.createElement("div",{className:"textFieldContainer"},i.a.createElement("div",{className:"textFieldTags"},i.a.createElement("img",{className:"textFieldIcon",src:y.a}),i.a.createElement("div",{className:"textFieldTitle"},"Lobby Name *")),i.a.createElement(u.a,{autoComplete:"off",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return c(e.target.value)},value:t}),i.a.createElement("div",{className:"textFieldError2"},pe.error&&pe.message)),i.a.createElement("div",{className:"textFieldContainer"},i.a.createElement("div",{className:"textFieldTags"},i.a.createElement("img",{className:"textFieldIcon",src:x.a}),i.a.createElement("div",{className:"textFieldTitle"},"Password")),i.a.createElement(u.a,{autoComplete:"off",type:"password",className:"textField",color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return O(e.target.value)},value:h}),i.a.createElement("div",{className:"textFieldError2"},Ce.error&&Ce.message))),i.a.createElement("div",{className:"createJoinButtonsContainer"},i.a.createElement("div",{style:{color:"#ecbebe",fontSize:"14px",minHeight:"18px",opacity:W?"1":"0",transition:"opacity 0.5s"}},G),"}",i.a.createElement(E.a,{className:"createButton",color:"primary",onClick:function(){return _e()}}," Create Game "),i.a.createElement(E.a,{className:"joinButton",color:"primary",onClick:function(){return Pe()}}," Join Game ")),i.a.createElement("div",{className:"createJoinButtonsContainerSmall"},W&&i.a.createElement("div",{style:{color:"#ecbebe",fontSize:"14px",minHeight:"18px",opacity:W?"1":"0",transition:"opacity 0.5s"}},G),i.a.createElement(E.a,{className:"createButton",color:"primary",onClick:function(){return window.location.hash="#createGame",Ae(!0),void Ue(!0)}}," Create Game "),i.a.createElement(E.a,{className:"joinButton",color:"primary",onClick:function(){return window.location.hash="#joinGame",Le(!0),void Ue(!0)}}," Join Game "))))))))};s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root"))},43:function(e,a,t){e.exports=t.p+"static/media/user.7de5e5f7.svg"},44:function(e,a,t){e.exports=t.p+"static/media/lobby.d10239bd.svg"},45:function(e,a,t){e.exports=t.p+"static/media/password.1b3f94dc.svg"},67:function(e,a,t){e.exports=t.p+"static/media/question.a2bcb8f5.svg"},76:function(e,a,t){e.exports=t(118)},82:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.f588e8c7.chunk.js.map