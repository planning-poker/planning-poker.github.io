(window.webpackJsonpmarioplan=window.webpackJsonpmarioplan||[]).push([[0],{236:function(e,t,r){e.exports=r(488)},241:function(e,t,r){},488:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(222),i=r.n(o),s=(r(241),r(31)),c=r(25),l=r(33),m=r(32),u=r(34),d=r(7),p=r(35),h=r(16),f=(Object(h.b)(null,function(e){return{signOut:function(){return e(function(e,t,r){(0,r.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})}).catch(function(e){console.log(e)})})}}})(function(e){return n.a.createElement("ul",{className:"right"},n.a.createElement("li",null,n.a.createElement(d.c,{to:"/enterRoom"},"Enter Room")),n.a.createElement("li",null,n.a.createElement(d.c,{to:"/"},n.a.createElement("a",{onClick:e.signOut},"Log Out"))),n.a.createElement("li",null,n.a.createElement(d.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))}),Object(h.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){e.auth,e.profile;return n.a.createElement("nav",{className:"nav-wrapper grey darken-3"},n.a.createElement("div",{className:"container"},n.a.createElement(d.b,{to:"/",className:"brand-logo brand-logo center"},"Planning Poker")))})),E=r(20),g=r(142),b=(r(247),function(e){return function(t,r,a){a.getFirebase;var n=(0,a.getFirestore)(),o=r().user.id,i=r().user.name,s={id:o,name:i},c={author:"them",type:"text",data:{text:"\ud83e\udd16 "+i+" has joined the room."}};n.collection("rooms").doc(e.id).get().then(function(r){r.exists?n.collection("rooms").doc(e.id).update({users:n.FieldValue.arrayUnion(s),messageList:n.FieldValue.arrayUnion(c)}).then(t({type:"JOIN_ROOM",room:e})).catch(function(e){t({type:"JOIN_ROOM_ERROR",err:e})}):t({type:"JOIN_ROOM_ERROR"})})}}),v=function(e){function t(){var e,r;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={name:""},r.handleChange=function(e){r.setState(Object(E.a)({},e.target.id,e.target.value))},r.handleSubmit=function(e){e.preventDefault(),r.state.name?r.props.createUser(r.state):alert("Enter valid username.")},r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.user&&this.props.user.id&&this.props.location&&this.props.location.state&&this.props.location.state.redirectRoom){var e=this.props.location.state.redirectRoom.split("/")[2];return this.props.joinRoom({id:e}),n.a.createElement(p.a,{to:this.props.location.state.redirectRoom})}return this.props.user&&this.props.user.id?n.a.createElement(p.a,{to:"/enterRoom"}):(console.log("Props : ",this.props.location),n.a.createElement("div",{className:"container"},n.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Create User"),n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"material-icons prefix"},"account_circle"),n.a.createElement("input",{type:"text",id:"name",className:"validate",onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"name"},"Username")),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create User")))))}}]),t}(a.Component),O=Object(h.b)(function(e){return{user:e.user}},function(e){return{createUser:function(t){return e(function(e){return function(t,r,a){a.getFirebase;(0,a.getFirestore)().collection("users").add({firstName:e.name,lastName:e.name,initials:"XY"}).then(function(r){var a={id:r.id,name:e.name};t({type:"CREATE_USER",userDetails:a})}).catch(function(e){t({type:"CREATE_USER_ERROR",err:e})})}}(t))},joinRoom:function(t){return e(b(t))}}})(v),y=r(235),R=r(26),S=r.n(R);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}var w=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){r.setState(Object(E.a)({},e.target.id,e.target.value))},r.handleCreateSubmit=function(e){e.preventDefault(),r.state&&r.state.name?r.props.createRoom(r.state):alert("Enter a Valid Room Name! ")},r.handleJoinSubmit=function(e){e.preventDefault(),r.props.joinRoom(r.state)},r.handleFileDrop=function(e){if(1===e.length){var t=e[0];if("text/rtf"==t.type||"text/plain"==t.type){var a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var e=a.result.split("\n").filter(function(e){return e.length>0});e.forEach(function(e){console.log("Story is : ",e)}),r.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(r,!0).forEach(function(t){Object(E.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r.state,{stories:e}));S.a.toast({displayLength:2500,classes:"rounded",html:"User Stories Loaded"}),console.log(r.state)},e.forEach(function(e){return a.readAsBinaryString(e)})}else alert("Choose a valid txt/rtf file!")}else alert("Choose 1 text file!")},r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){S.a.Tabs.init(this.Tabs,{swipeable:!0})}}]),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.room,a=(t.auth,t.user);t.stories;if(a&&!a.id)return n.a.createElement(p.a,{to:"/createUser"});if(this.props.invalidRoom){S.a.toast({displayLength:2e3,classes:"rounded",html:"Invalid Room. Try Again!"})}return r&&r.id?n.a.createElement(p.a,{to:"/room/"+r.id}):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"container mt-60"},n.a.createElement("ul",{ref:function(t){e.Tabs=t},id:"tabs-swipe-demo",className:"tabs tabs-fixed-width tab-demo z-depth-1"},n.a.createElement("li",{className:"tab"},n.a.createElement("a",{href:"#create-room-tab"},"Create Room")),n.a.createElement("li",{className:"tab"},n.a.createElement("a",{href:"#join-room-tab"},"Join Room"))),n.a.createElement("div",{id:"create-room-tab"},n.a.createElement("form",{className:"white mt-0",onSubmit:this.handleCreateSubmit},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Room"),n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"material-icons prefix"},"account_balance"),n.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"name"},"Room Name")),n.a.createElement("div",{className:"upload-border center-align cursor-pointer"},n.a.createElement(y.a,{onDrop:function(t){return e.handleFileDrop(t)}},function(e){var t=e.getRootProps,r=e.getInputProps;return n.a.createElement("section",null,n.a.createElement("div",t(),n.a.createElement("input",r()),n.a.createElement("p",null,"To import user stories automatically, drag and drop a .txt file containing user stories separated by line"),n.a.createElement("div",null,n.a.createElement("i",{className:"large material-icons"},"cloud_upload"))))})),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create Room")))),n.a.createElement("div",{id:"join-room-tab"},n.a.createElement("form",{className:"white mt-0",onSubmit:this.handleJoinSubmit},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Join Room"),n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"material-icons prefix"},"fingerprint"),n.a.createElement("input",{type:"text",id:"id",onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"id"},"Room ID")),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Join Room"))))))}}]),t}(a.Component),j=Object(h.b)(function(e){return e&&console.log("state is -> ",e),{room:e.room,user:e.user,invalidRoom:e.room.invalidRoom,stories:e.stories}},function(e){return{createRoom:function(t){return e(function(e){return function(t,r,a){a.getFirebase;var n=(0,a.getFirestore)(),o=(r().firebase.profile,{author:"them",type:"text",data:{text:"\ud83e\udd16 "+r().user.name+" has joined the room."}});n.collection("rooms").add({name:e.name,users:[{name:r().user.name,id:r().user.id,isOpen:!1,newMessagesCount:0}],moderator:r().user.id,currentStory:"",currentStoryId:null,currentVotes:[],roundsHistory:[],activeRound:!1,messageList:[o],currentStartTime:0,stories:e&&e.stories?e.stories:[]}).then(function(e){console.log("THe room created is :",e),t({type:"CREATE_ROOM",room:e})}).catch(function(e){t({type:"CREATE_ROOM_ERROR",err:e})})}}(t))},joinRoom:function(t){return e(b(t))}}})(w),C=r(19),T=r(226),_=r.n(T),P=r(45),k=r(227),D=(r(399),r(139)),x=(r(414),r(228)),U=r.n(x),A=r(234),F=r(135),I=(r(452),function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},r.handleChange=function(e){e.preventDefault();var t={id:r.props.room[0].id,currentStory:e.target.value};r.props.updateCurrentStory(t)},r.toggleRound=function(e){if(e&&!r.props.currentStory)alert("Enter a story to start round.");else{var t={id:r.props.room[0].id,activeRound:e,currentStoryId:e?_.a.v4():null};r.props.toggleRound(t)}},r.castVote=function(e){var t={roomId:r.props.room[0].id,userId:r.props.user.id,userName:r.props.user.name,vote:e};r.props.castVote(t)},r.copyUrl=function(){S.a.toast({displayLength:2e3,classes:"rounded",html:"URL Copied"})},r.keepOnPage=function(e){r.props.leaveRoom(r.props.roomTest)},r.assignStory=function(e){var t={id:r.props.room[0].id,currentStory:e};r.props.updateCurrentStory(t)},r.state={render:!0},r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"_onMessageWasSent",value:function(e){"text"==e.type?e.data.text=this.props.user.name+" \u27a1\ufe0f "+e.data.text:"emoji"==e.type&&(e.type="text",e.data.text=this.props.user.name+" \u27a1\ufe0f "+e.data.emoji),this.props.sendMessage({author:"them",type:e.type,data:e.data})}},{key:"_handleClick",value:function(){}},{key:"printDocument",value:function(){var e=new F("p"),t=e.autoTableHtmlToJson(document.getElementById("roundHistoryTable")),r=new Date,a=String(r.getDate()).padStart(2,"0"),n=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear();r=n+"/"+a+"/"+o;var i={beforePageContent:function(t){e.setFontSize(18),e.setTextColor(40),e.setFontStyle("normal"),e.text("Planning Poker - "+r,t.settings.margin.left,50)},margin:10,startY:e.autoTableEndPosY()+70};e.autoTable(t.columns,t.data,i),e.save("Planning Poker.pdf")}},{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.keepOnPage),window.addEventListener("unload",this.keepOnPage),window.addEventListener("pagehide",this.keepOnPage);var e=document.querySelectorAll(".modal"),t=(S.a.Modal.init(e),document.querySelectorAll(".dropdown-trigger")),r=(S.a.Dropdown.init(t),document.querySelectorAll(".sidenav"));S.a.Sidenav.init(r)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.keepOnPage),window.addEventListener("unload",this.keepOnPage),window.addEventListener("pagehide",this.keepOnPage)}},{key:"render",value:function(){var e=this,t=this.props,r=t.room,a=t.currentStory,o=t.currentScore,i=t.activeRound,s=t.roundsHistory,c=t.messageList,l=t.userList,m=t.localRoom,u=(t.leaveRoom,t.user,t.stories),d=l?l.filter(function(t){return t.id==e.props.user.id}):{},h=(!!d&&d.isOpen,d&&d.newMessagesCount,o?n.a.createElement("span",{className:"right"},o," points"):"");if(m&&!m.id)return n.a.createElement(p.a,{to:{pathname:"/enterRoom"}});if(console.log("--\x3e",this.props),this.props.user&&!this.props.user.id)return n.a.createElement(p.a,{to:{pathname:"/createUser",state:{redirectRoom:this.props.history.location.pathname}}});var f=r&&r[0].id?"https://nv-marioplan.firebaseapp.com/room/"+r[0].id:"",E=r&&r[0].currentVotes.find(function(t){return t.userId===e.props.user.id}),g=[1,2,3,5,8,13,20,40,100].map(function(t){return t<20?n.a.createElement("img",{onClick:function(){return e.castVote(t)},className:E&&t==E.vote?"vote-selected mr-10 cursor-pointer":"mr-10 cursor-pointer",width:"13%",height:"13%",src:"/img/"+t+".png",key:t}):n.a.createElement("img",{onClick:function(){return e.castVote(t)},className:E&&t==E.vote?"vote-selected mr-20 cursor-pointer":"mr-20 cursor-pointer",width:"18%",height:"18%",src:"/img/"+t+".png",key:t})}),b=u.map(function(t){return n.a.createElement("a",{onClick:function(){return e.assignStory(t)},key:t,href:"#!",className:a&&a==t?"collection-item active":"collection-item"},t)});return this.state.render?n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,r?r[0].name:"",n.a.createElement("a",{className:"btn grey right hide-on-small-only",onClick:function(){console.log("BEFORE :",e.props),e.props.leaveRoom(e.props.roomTest),console.log("AFTER",e.props)}},n.a.createElement("i",{className:"material-icons right"},"exit_to_app"),"Exit"),n.a.createElement("a",{className:"modal-trigger btn green right mr-10 hide-on-small-only",href:"#share-modal"},n.a.createElement("i",{className:"material-icons right"},"share"),"Invite Team"),n.a.createElement("div",{className:"hide-on-med-and-up right lighten-1"},n.a.createElement("a",{className:"dropdown-trigger btn btn-floating pink",href:"#","data-target":"dropdown1"},n.a.createElement("i",{className:"material-icons right"},"menu")),n.a.createElement("ul",{id:"dropdown1",className:"dropdown-content"},n.a.createElement("li",null,n.a.createElement("a",{className:"modal-trigger",href:"#share-modal"},"Share")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(){e.props.leaveRoom(e.props.roomTest)}},"Exit"))))),n.a.createElement("div",{id:"share-modal",className:"modal bottom-sheet"},n.a.createElement("div",{className:"modal-content center-align"},n.a.createElement("h5",null,"Share Room"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s8 m8 l8 offset-l2 s-2 m-2"},n.a.createElement("input",{type:"text",readOnly:!0,value:f})),n.a.createElement("div",{className:"col s2 m2 l2"},n.a.createElement(k.CopyToClipboard,{text:f,onCopy:this.copyUrl},n.a.createElement("a",{className:"btn-floating grey"},n.a.createElement("i",{className:"material-icons right"},"content_copy"))))),n.a.createElement("div",null,n.a.createElement(D.Facebook,{url:f}),n.a.createElement(D.Email,{url:f,text:"Email",subject:"Planning Poker: Join your team!"}))),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-green btn-flat"},"Close")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m6 l6"},n.a.createElement("div",{className:"card white"},n.a.createElement("div",{className:"card-content "},n.a.createElement("span",{className:"card-title"},"Current Story",n.a.createElement("span",{className:"right"},n.a.createElement(U.a,{type:"Watch",color:"black",height:35,width:35,visible:i}))),n.a.createElement("div",{className:"input-field"},n.a.createElement("textarea",{type:"text",id:"currentStory",value:a,onChange:this.handleChange,readOnly:i,placeholder:"Enter Story...",className:"materialize-textarea"}))),n.a.createElement("div",{className:"card-action"},i?n.a.createElement("a",{className:"pink lighten-1 z-depth-0 btn",onClick:function(){return e.toggleRound(!1)}},"End"):n.a.createElement("a",{className:"pink lighten-1 z-depth-0 btn",onClick:function(){return e.toggleRound(!0)}},"Start"))),i?n.a.createElement("div",{className:"card white"},n.a.createElement("div",{className:"card-content "},n.a.createElement("span",{className:"card-title center-align"},"Choose Vote"),n.a.createElement("div",{className:"row center-align mt-20"},g))):"",!i&&u&&u.length>0?n.a.createElement("div",{className:"collection with-header user-story-list"},n.a.createElement("div",{className:"collection-header"},n.a.createElement("h4",null,"User Stories")),b):""),n.a.createElement("div",{className:"col s12 m6 l6"},n.a.createElement("div",{className:"card white round-results-card"},n.a.createElement("div",{className:"card-content "},n.a.createElement("div",{className:"card-title"},"Round Results",h),n.a.createElement("div",{className:"row"},r&&r[0].users.map(function(e){var t=r[0].currentVotes.find(function(t){return t.userId===e.id}),a=(t&&t.vote,t&&t.vote&&!i?"/img/"+t.vote+".png":"/img/card-flipped.jpg");return n.a.createElement("div",{key:e.id,className:"col s3 l3 m3 mt-20"},t&&t.vote&&!i?n.a.createElement("img",{className:"mr-20",width:"65%",height:"65%",src:a}):n.a.createElement("img",{className:"mr-20 card-border",width:"65%",height:"65%",src:a}),n.a.createElement("p",null,e.name,t&&t.vote&&i?n.a.createElement("i",{className:"material-icons tiny green white-text ml-10"},"done"):""))})))),n.a.createElement("div",{className:"card white round-history-card"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title"},"Round History",n.a.createElement("i",{title:"Download Results",className:"material-icons right cursor-pointer",onClick:this.printDocument},"cloud_download")),n.a.createElement("table",{className:"striped",id:"roundHistoryTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Story Name"),n.a.createElement("th",null,"Average Score"),n.a.createElement("th",null,"Duration"))),n.a.createElement("tbody",null,s&&s.map(function(e){return n.a.createElement("tr",{key:e.storyId},n.a.createElement("td",null,e.storyName),n.a.createElement("td",null,e.score),n.a.createElement("td",null,e.duration))}))))))),n.a.createElement(A.a,{agentProfile:{teamName:"Planning Poker Chat",imageUrl:"https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"},onMessageWasSent:this._onMessageWasSent.bind(this),messageList:c,showEmoji:!0})):""}}]),t}(a.Component)),L=Object(C.d)(Object(h.b)(function(e){return console.log("Room State -> ",e),{room:e.firestore.ordered.rooms,currentStory:e.firestore.ordered.rooms?e.firestore.ordered.rooms[0].currentStory:"",messageList:e.firestore.ordered.rooms?e.firestore.ordered.rooms[0].messageList:[],stories:e.firestore.ordered.rooms?e.firestore.ordered.rooms[0].stories:[],currentScore:e.firestore.ordered.rooms?e.firestore.ordered.rooms[0].currentScore:"",activeRound:!!e.firestore.ordered.rooms&&e.firestore.ordered.rooms[0].activeRound,roundsHistory:e.firestore.ordered.rooms?e.firestore.ordered.rooms[0].roundsHistory:[],user:e.user,localRoom:e.room,leaveRoom:e.room.leaveRoom,roomTest:e.firestore.ordered.rooms?e.firestore.ordered.rooms[0]:null,userList:e.firestore.ordered.rooms?e.firestore.ordered.rooms[0].users:[]}},function(e){return{updateCurrentStory:function(t){return e((r=t,function(e,t,a){a.getFirebase,(0,a.getFirestore)().collection("rooms").doc(r.id).update({currentStory:r.currentStory}).then(function(){e({type:"UPDATE_TEST",data:r})}).catch(function(t){e({type:"UPDATE_TEST_ERROR",err:t})})}));var r},toggleRound:function(t){return e(function(e){return function(t,r,a){var n=a.getFirebase,o=(0,a.getFirestore)();n();if(e.activeRound)o.collection("rooms").doc(e.id).update({activeRound:e.activeRound,currentStoryId:e.currentStoryId,currentVotes:[],currentScore:null,currentStartTime:(new Date).getTime()}).then(function(){t({type:"TOGGLE_ROUND",data:e})}).catch(function(e){t({type:"TOGGLE_ROUND_ERROR",err:e})});else{var i=r().firestore.ordered.rooms[0],s=0;i.currentVotes.length>0&&(s=i.currentVotes.reduce(function(e,t){return e+t.vote},0),s/=i.currentVotes.length);var c=(new Date).getTime(),l=c-i.currentStartTime;l=1e3*Math.round(l/1e3);var m=new Date(l),u={storyId:i.currentStoryId,storyName:i.currentStory,score:s,time:c,duration:m.getUTCMinutes()+"m  "+m.getUTCSeconds()+"s"};o.collection("rooms").doc(e.id).update({activeRound:e.activeRound,roundsHistory:o.FieldValue.arrayUnion(u),currentStory:"",currentStoryId:null,currentScore:s}).then(function(){t({type:"TOGGLE_ROUND",data:e})}).catch(function(e){t({type:"TOGGLE_ROUND_ERROR",err:e})})}}}(t))},castVote:function(t){return e(function(e){return function(t,r,a){a.getFirebase;var n,o=(0,a.getFirestore)(),i={userId:(n=e).userId,vote:n.vote,userName:n.userName},s=[],c=r().firestore.ordered.rooms[0];c&&c.currentVotes&&(s=c.currentVotes.filter(function(e){return e.userId!==i.userId})),s.push(i),o.collection("rooms").doc(e.roomId).update({currentVotes:s}).then(function(){t({type:"CAST_VOTE",currentVote:e})}).catch(function(e){t({type:"CAST_VOTE_ERROR",err:e})})}}(t))},leaveRoom:function(t){return e(function(e){return function(t,r,a){a.getFirebase;var n=(0,a.getFirestore)(),o=r().user.id,i={author:"them",type:"text",data:{text:"\ud83e\udd16 "+r().user.name+" has left the room."}};Promise.all([1==e.users.length&&e.users[0].id==o?n.collection("rooms").doc(e.id).delete():n.collection("rooms").doc(e.id).update({users:e.users.filter(function(e){return e.id!==o}),messageList:[].concat(Object(g.a)(e.messageList),[i])}),n.collection("users").doc(o).delete()]).then(t({type:"CLEARSTORE",room:e})).catch(function(e){t({type:"LEAVE_ROOM_ERROR",err:e})})}}(t))},sendMessage:function(t){return e(function(e){return function(t,r,a){a.getFirebase;var n=(0,a.getFirestore)(),o=r().firestore.ordered.rooms[0];console.log("Send : ",e);var i=[];o&&o.messageList?i=[].concat(Object(g.a)(o.messageList),[e]):i.push(e),n.collection("rooms").doc(o.id).update({messageList:i,users:o.users}).then(function(){t({type:"UPDATE_TEST",data:e})}).catch(function(e){t({type:"UPDATE_TEST_ERROR",err:e})})}}(t))}}}),Object(P.firestoreConnect)(function(e){return[{collection:"rooms",doc:e.match.params.id}]}))(I),M=function(){return n.a.createElement("div",{className:"container center-align"},n.a.createElement("i",{className:"material-icons large"},"broken_image"),n.a.createElement("h3",null,"Oops, looks like this room doesn't exist..."),n.a.createElement("h5",null,"Star over by clicking ",n.a.createElement("a",{href:"/createUser"},"here.")))},V=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/",component:O}),n.a.createElement(p.b,{path:"/room/:id",component:L}),n.a.createElement(p.b,{path:"/createUser",component:O}),n.a.createElement(p.b,{path:"/enterRoom",component:j}),n.a.createElement(p.b,{path:"/invalidRoom",component:M}),n.a.createElement(p.b,{render:function(){return n.a.createElement(p.a,{to:{pathname:"/invalidRoom"}})}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(r,!0).forEach(function(t){Object(E.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var H={authError:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return J({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return J({},e,{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return J({},e,{authError:null});case"SIGNUP_ERROR":return J({},e,{authError:t.err.message});default:return e}},W={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"help me find apple",content:"blah blah blah"},{id:"3",title:"help me find mango",content:"blah blah blah"}]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":case"CREATE_PROJECT_ERROR":case"UPDATE_TEST":case"UPDATE_TEST_ERROR":default:return e}};function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(r,!0).forEach(function(t){Object(E.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var K={loggedIn:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_USER":console.log("Action ------\x3e ",t);var r=t.userDetails;return Y({},e,{},r,{loggedIn:!0});case"CREATE_USER_ERROR":return e;case"CLEAR_USER":return console.log("Sampling user redux"),Y({},e,{id:"",name:""});default:return e}};function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach(function(t){Object(E.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Z={},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ROOM":return{id:t.room.id};case"CREATE_ROOM_ERROR":return e;case"JOIN_ROOM":return{id:t.room.id};case"JOIN_ROOM_ERROR":return Q({},e,{invalidRoom:!0});case"LEAVE_ROOM":return Q({},e,{id:""});case"LEAVE_ROOM_ERROR":case"TOGGLE_ROUND":case"TOGGLE_ROUND_ERROR":case"CAST_VOTE":case"CAST_VOTE_ERROR":case"READ_MESSAGE":case"READ_MESSAGE_ERROR":default:return e}},te=r(66),re=Object(C.c)({auth:z,project:B,user:X,room:ee,firestore:te.firestoreReducer,firebase:P.firebaseReducer}),ae=function(e,t){return"CLEARSTORE"===t.type&&(e=void 0),console.log(e),re(e,t)},ne=r(233),oe=r(141),ie=r.n(oe);r(483),r(486);ie.a.initializeApp({apiKey:"AIzaSyCXiaaKeEoxxMCDoeiHToiRTnFad_KuAqg",authDomain:"nv-marioplan.firebaseapp.com",databaseURL:"https://nv-marioplan.firebaseio.com",projectId:"nv-marioplan",storageBucket:"",messagingSenderId:"823946612980",appId:"1:823946612980:web:8c57da3f320f3de21acea1"});var se=ie.a,ce=Object(C.e)(ae,Object(C.d)(Object(C.a)(ne.a.withExtraArgument({getFirebase:P.getFirebase,getFirestore:te.getFirestore})),Object(te.reduxFirestore)(se),Object(P.reactReduxFirebase)(se,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ce.firebaseAuthIsReady.then(function(){i.a.render(n.a.createElement(h.a,{store:ce},n.a.createElement(V,null)),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[236,1,2]]]);
//# sourceMappingURL=main.79bb91c6.chunk.js.map