(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,a){},119:function(e,a,t){"use strict";t.r(a);var n,r=t(0),s=t.n(r),i=t(8),c=t.n(i),l=t(42),m=t.n(l),o=t(65),d=t(9),u=(t(83),t(151)),b=t(157),E=t(154),v=t(155),g=t(156),N=t(72),f=t(150),p=t(66),w=t.n(p),y=t(43),h=t.n(y),x=t(44),j=t.n(x),O=t(45),S=t.n(O),C=t(67),F=t.n(C),T=Object(N.a)({palette:{type:"light"}});var q=function(){var e=Object(r.useState)(""),a=Object(d.a)(e,2),t=a[0],i=a[1],c=Object(r.useState)(""),l=Object(d.a)(c,2),N=l[0],p=l[1],y=Object(r.useState)(""),x=Object(d.a)(y,2),O=x[0],C=x[1],q=Object(r.useState)(!1),k=Object(d.a)(q,2),B=k[0],G=k[1],I=Object(r.useState)(!1),L=Object(d.a)(I,2),W=L[0],J=L[1],A=Object(r.useState)(""),R=Object(d.a)(A,2),U=R[0],P=R[1],z=Object(r.useState)(""),H=Object(d.a)(z,2),Q=H[0],D=H[1],K=Object(r.useState)([]),M=Object(d.a)(K,2),V=M[0],X=M[1],Y=Object(r.useState)([]),Z=Object(d.a)(Y,2),$=Z[0],_=Z[1],ee=Object(r.useState)(""),ae=Object(d.a)(ee,2),te=ae[0],ne=ae[1],re=Object(r.useState)(""),se=Object(d.a)(re,2),ie=se[0],ce=se[1],le=Object(r.useState)(Boolean),me=Object(d.a)(le,2),oe=me[0],de=me[1],ue=Object(r.useState)([]),be=Object(d.a)(ue,2),Ee=be[0],ve=be[1],ge=Object(r.useState)(0),Ne=Object(d.a)(ge,2),fe=Ne[0],pe=Ne[1],we=Object(r.useState)({error:!1,message:""}),ye=Object(d.a)(we,2),he=ye[0],xe=ye[1],je=Object(r.useState)({error:!1,message:""}),Oe=Object(d.a)(je,2),Se=Oe[0],Ce=Oe[1],Fe=Object(r.useState)({error:!1,message:""}),Te=Object(d.a)(Fe,2),qe=Te[0],ke=Te[1],Be=Object(r.useState)(!1),Ge=Object(d.a)(Be,2),Ie=Ge[0],Le=Ge[1],We=Object(r.useState)(!1),Je=Object(d.a)(We,2),Ae=Je[0],Re=Je[1],Ue=Object(r.useState)(!1),Pe=Object(d.a)(Ue,2),ze=Pe[0],He=Pe[1];Object(r.useEffect)((function(){(function(){var e=Object(o.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=w()("https://lb.ltng.link"),console.log(n),n.on("gameCreated",(function(e){e.joined&&(G(!0),D(e.gameOwner),X(e.members))})),n.on("gameJoined",(function(e){e.joined&&(G(!0),D(e.gameOwner),X(e.members),_(e.waitingRoom))})),n.on("playerJoined",(function(e){X(e.members),_(e.waitingRoom)})),n.on("gameStarted",(function(e){de(e.gameStarted),ne(e.question),pe(e.questionIndex),X(e.members),_(e.waitingRoom)})),n.on("allQuestionsAnswered",(function(e){console.log("all questions answered!");var a=[];e.map((function(e,t){e.map((function(e,n){void 0===a[n]&&(a[n]=[]),a[n][t]={question:e.question,answer:e.answer}}))})),ve(a),de(!1),pe(0)})),n.on("newQuestion",(function(e){ne(e.question),pe(e.questionIndex)})),n.on("playerLeft",(function(e){X(e.members),_(e.waitingRoom)})),n.on("validationError",(function(e){J(!0),P(e.error),setTimeout((function(){J(!1)}),3e3)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>1270&&(Re(!1),Le(!1),He(!1))}))}),[]),Object(r.useEffect)((function(){window.addEventListener("hashchange",(function(){""===window.location.hash&&(Me(),Ve())}))}),[]);var Qe=function(){var e=!1;if(t?xe({error:!1,message:""}):(xe({error:!0,message:"Lobby Name cannot be empty"}),e=!0),N?N.length>12?(Ce({error:!0,message:"Username maximum of 12 characters"}),e=!0):Ce({error:!1,message:""}):(Ce({error:!0,message:"Username cannot be empty"}),e=!0),e)return!1;xe({error:!1,message:""}),Ce({error:!1,message:""}),ke({error:!1,message:""});var a={lobbyName:t,username:N,password:O};console.log("trying"),n.emit("createGame",a),window.location.hash=t},De=function(){var e=!1;if(t?xe({error:!1,message:""}):(xe({error:!0,message:"Lobby Name cannot be empty"}),e=!0),N?N.length>12&&(Ce({error:!0,message:"Username maximum of 12 characters"}),e=!0):(Ce({error:!0,message:"Username cannot be empty"}),e=!0),Ce({error:!1,message:""}),e)return!1;var a={lobbyName:t,username:N,password:O};n.emit("joinGame",a),window.location.hash=t},Ke=function(){if(""===ie)return J(!0),P("Answer cannot be empty you silly goose"),!1;J(!1),P(""),ce("");var e={lobbyName:t,username:N,answer:ie};n.emit("submitAnswer",e)},Me=function(){n.emit("leaveGame",{lobbyName:t})},Ve=function(){window.location.hash="",Re(!1),Le(!1),He(!1)};return s.a.createElement(f.a,{theme:T},s.a.createElement("div",{className:"App"},s.a.createElement("div",{style:{width:"100%"}},B&&s.a.createElement("div",{className:"gameLobby"},B&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"gameScreen"},s.a.createElement("div",{className:"gameScreenHeader"},s.a.createElement("div",{className:"gameScreenLogoContainer"},s.a.createElement("div",{className:"gameScreenLogo"},"?!"),"Who",s.a.createElement("br",null),"What",s.a.createElement("br",null),"Where",s.a.createElement("br",null)),s.a.createElement("div",{className:"gameScreenRound"},0===fe?"Waiting for new game":"Round",s.a.createElement("br",null),0!==fe?fe:"")),s.a.createElement("div",{className:"gameScreenContainer"},Q!==N&&!oe&&B&&s.a.createElement("div",{className:"waitingText"}," Waiting for ",Q," to start the game "),!oe&&void 0!==Ee[0]&&s.a.createElement(s.a.Fragment,null,Ee.map((function(e){return s.a.createElement(s.a.Fragment,null,e.map((function(e){return s.a.createElement(u.a,{className:"answerCard"},s.a.createElement(b.a,{title:e.question}),s.a.createElement(E.a,null,e.answer))})))}))),oe&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{width:"50%",height:"50%"}},s.a.createElement("div",{className:"question"},te),W&&s.a.createElement("div",null,U),s.a.createElement("div",{className:"answerContainer"},s.a.createElement(v.a,{autoComplete:"new-password",className:"answerTextField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return ce(e.target.value)},value:ie,onKeyDown:function(e){return function(e){13===e.keyCode&&Ke()}(e)}}),s.a.createElement(g.a,{className:"submitAnswerButton",style:{margin:"4px"},color:"primary",onClick:function(){return Ke()}}," Submit ")))),""!==Q&&Q===N&&!oe&&s.a.createElement("div",{className:"startButtonContainer"},s.a.createElement(g.a,{className:"startButton",color:"primary",onClick:function(){return function(){var e={lobbyName:t,username:N};n.emit("startGame",e)}()}}," Start Game "))),s.a.createElement("div",{className:"gameScreenChatContainer"})),s.a.createElement("div",{className:"memberSidebar"},s.a.createElement("div",{className:"memberSidebarTitle"},"Players - ",V.length),s.a.createElement("div",{className:"memberList"},V.map((function(e){return s.a.createElement("div",{className:"memberItem"},s.a.createElement("img",{className:"memberAvatar",src:e.avatar}),e.username)}))),s.a.createElement("div",{className:"waitingRoomSidebarTitle"},"Waiting Room - ",$.length),s.a.createElement("div",{className:"waitingRoomList"},$.map((function(e){return s.a.createElement("div",{className:"memberItem"},s.a.createElement("img",{className:"memberAvatar",src:e.avatar}),e.username)})))))),!B&&s.a.createElement("div",{className:"createOrJoinLobbyContainer"},s.a.createElement("div",{className:"introductionSection"},s.a.createElement("div",{className:"introTitleContainer"},s.a.createElement("img",{className:"introIcon",src:F.a}),s.a.createElement("div",{className:"introTitle"},"Who What Where")),ze&&s.a.createElement("div",{className:"dividerSmall"}),!ze&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"introContent"},"An Interactive Story building game to play with friends. ",s.a.createElement("br",null),s.a.createElement("br",null),"Challenge your friends to a game of Who, What, Where? An Ad-libs inspired interactive story building game where you and your friends answer a series of 9 questions. The answers get mashed together to create wild stories. ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"extraPlayerText"},"Best played with 3-9 players ")),s.a.createElement("div",{className:"divider"})),ze&&s.a.createElement("div",{className:"textFieldSmallContainer"},s.a.createElement("div",{className:"backArrow"}),s.a.createElement("div",{className:"textFieldContainerSmall"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:h.a}),s.a.createElement("div",{className:"textFieldTitle"},"Username *")),s.a.createElement(v.a,{autoComplete:"off",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return p(e.target.value)},value:N}),s.a.createElement("div",{className:"textFieldError2"},Se.error&&Se.message)),s.a.createElement("div",{className:"textFieldContainerSmall"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:j.a}),s.a.createElement("div",{className:"textFieldTitle"},"Lobby Name *")),s.a.createElement(v.a,{autoComplete:"new-password",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return i(e.target.value)},value:t}),s.a.createElement("div",{className:"textFieldError2"},he.error&&he.message)),s.a.createElement("div",{className:"textFieldContainerSmall"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:S.a}),s.a.createElement("div",{className:"textFieldTitle"},"Password")),s.a.createElement(v.a,{autoComplete:"new-password",type:"password",className:"textField",color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return C(e.target.value)},value:O}),s.a.createElement("div",{className:"textFieldError2"},qe.error&&qe.message)),Ae&&s.a.createElement(g.a,{className:"createButtonSmall",color:"primary",onClick:function(){return Qe()}}," Create Game "),Ie&&s.a.createElement(g.a,{className:"joinButtonSmall",color:"primary",onClick:function(){return De()}}," Join Game "))),!ze&&s.a.createElement("div",{className:"createOrJoinSection"},s.a.createElement("div",{className:"createJoin"},s.a.createElement("div",{className:"textFieldContainer"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:h.a}),s.a.createElement("div",{className:"textFieldTitle"},"Username *")),s.a.createElement(v.a,{autoComplete:"new-password",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return p(e.target.value)},value:N}),s.a.createElement("div",{className:"textFieldError2"},Se.error&&Se.message)),s.a.createElement("div",{className:"textFieldContainer"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:j.a}),s.a.createElement("div",{className:"textFieldTitle"},"Lobby Name *")),s.a.createElement(v.a,{autoComplete:"off",className:"textField",required:!0,color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return i(e.target.value)},value:t}),s.a.createElement("div",{className:"textFieldError2"},he.error&&he.message)),s.a.createElement("div",{className:"textFieldContainer"},s.a.createElement("div",{className:"textFieldTags"},s.a.createElement("img",{className:"textFieldIcon",src:S.a}),s.a.createElement("div",{className:"textFieldTitle"},"Password")),s.a.createElement(v.a,{autoComplete:"new-password",type:"password",className:"textField",color:"primary",variant:"outlined",id:"standard-basic",onChange:function(e){return C(e.target.value)},value:O}),s.a.createElement("div",{className:"textFieldError2"},qe.error&&qe.message)),s.a.createElement("div",{className:"createJoinButtonsContainer"},s.a.createElement("div",{style:{color:"#ecbebe",fontSize:"14px",minHeight:"18px",opacity:W?"1":"0",transition:"opacity 0.5s"}},U),"}",s.a.createElement(g.a,{className:"createButton",color:"primary",onClick:function(){return Qe()}}," Create Game "),s.a.createElement(g.a,{className:"joinButton",color:"primary",onClick:function(){return De()}}," Join Game ")),s.a.createElement("div",{className:"createJoinButtonsContainerSmall"},W&&s.a.createElement("div",{style:{color:"#ecbebe",fontSize:"14px",minHeight:"18px",opacity:W?"1":"0",transition:"opacity 0.5s"}},U),s.a.createElement(g.a,{className:"createButton",color:"primary",onClick:function(){return window.location.hash="#createGame",Re(!0),void He(!0)}}," Create Game "),s.a.createElement(g.a,{className:"joinButton",color:"primary",onClick:function(){return window.location.hash="#joinGame",Le(!0),void He(!0)}}," Join Game "))))))))};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(q,null)),document.getElementById("root"))},43:function(e,a,t){e.exports=t.p+"static/media/user.7de5e5f7.svg"},44:function(e,a,t){e.exports=t.p+"static/media/lobby.d10239bd.svg"},45:function(e,a,t){e.exports=t.p+"static/media/password.1b3f94dc.svg"},67:function(e,a,t){e.exports=t.p+"static/media/question.a2bcb8f5.svg"},77:function(e,a,t){e.exports=t(119)},83:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.9b0392e4.chunk.js.map