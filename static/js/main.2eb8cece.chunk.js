(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{47:function(t,e,n){t.exports=n(81)},52:function(t,e,n){},80:function(t,e){},81:function(t,e,n){"use strict";n.r(e);var a,r,s=n(0),o=n.n(s),c=n(20),i=n.n(c),u=(n(52),n(5)),l=n(6),p=n(8),d=n(7),m=n(18),f=n(4),b=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).getCurrentPage=function(){var t="/",e=a.props.history.location.pathname;if(t!==e){var n=new RegExp("^\\/((?!\\/).)+",""),r=e.match(n);r&&(t=r[0])}return t},a.getActivePageClassIfIsActive=function(t){return t===a.state.activePage?"text-primary":""},a.state={activePage:a.getCurrentPage()},a}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"navbar navbar-expand navbar-light bg-light justify-content-center"},o.a.createElement("ul",{className:"nav navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(m.b,{className:"nav-link ".concat(this.getActivePageClassIfIsActive("/")),to:"/"},o.a.createElement("span",null,"Home"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(m.b,{className:"nav-link ".concat(this.getActivePageClassIfIsActive("/posts")," "),to:"/posts"},o.a.createElement("span",null,"Posts")))))}}]),n}(s.Component),v=Object(f.g)(b),h=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("h2",null,"Welcome to the Redux Essentials example app!"))}}]),n}(o.a.Component),j=n(12),O=n(10),E=n(44),g=n(13),y=n.n(g),P=n(21),I=n(16),k=n(22),C=n.n(k),x="https://ap-webserver.herokuapp.com",w={fetchPosts:Object(I.b)("posts/fetchPosts",Object(P.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(x,"/api/posts"));case 2:return e=t.sent,t.abrupt("return",e.data.data);case 4:case"end":return t.stop()}}),t)})))),addNewPost:Object(I.b)("posts/addNewPost",function(){var t=Object(P.a)(y.a.mark((function t(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.post("".concat(x,"/api/posts"),{post:e});case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),editPost:Object(I.b)("posts/editPost",function(){var t=Object(P.a)(y.a.mark((function t(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.put("".concat(x,"/api/posts/").concat(e._id),{post:e});case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),addReactions:Object(I.b)("posts/addReactions",function(){var t=Object(P.a)(y.a.mark((function t(e,n){var a,r,s,o,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.postId,r=e.reaction,!(s=n.getState().posts.posts.find((function(t){return t._id===a})))){t.next=9;break}return void 0!==(o=Object(E.a)({},s.reactions))?void 0!==o[r]?o[r]++:o[r]=1:o=Object(O.a)({},r,1),t.next=7,C.a.put("".concat(x,"/api/posts/addReactions/").concat(a),{reactions:o});case 7:return c=t.sent,t.abrupt("return",c.data.data);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),deletePost:Object(I.b)("posts/deletePost",function(){var t=Object(P.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.delete("".concat(x,"/api/posts/").concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},N=w.fetchPosts,S=w.addNewPost,_=w.deletePost,D=w.editPost,R=w.addReactions,T=Object(I.c)({name:"posts",initialState:{posts:[],status:"idle",error:null},reducers:{},extraReducers:(a={},Object(O.a)(a,w.fetchPosts.pending,(function(t,e){t.status="loading"})),Object(O.a)(a,w.fetchPosts.fulfilled,(function(t,e){t.status="succeeded",t.posts=t.posts.concat(e.payload)})),Object(O.a)(a,w.fetchPosts.rejected,(function(t,e){t.status="failed",t.error=e.error.message})),Object(O.a)(a,w.addNewPost.fulfilled,(function(t,e){t.posts.unshift(e.payload)})),Object(O.a)(a,w.editPost.fulfilled,(function(t,e){var n=t.posts.find((function(t){return t._id===e.payload._id}));n.title=e.payload.title,n.description=e.payload.description,n.userId=e.payload.userId})),Object(O.a)(a,w.addReactions.fulfilled,(function(t,e){t.posts.find((function(t){return t._id===e.payload._id})).reactions=e.payload.reactions})),Object(O.a)(a,w.addReactions.rejected,(function(t,e){})),Object(O.a)(a,w.deletePost.fulfilled,(function(t,e){var n=t.posts.findIndex((function(t){return t._id===e.payload}));t.posts.splice(n,1)})),a)}),A=function(t,e){return t.posts.posts.find((function(t){return"".concat(t._id)===e}))},F=T.reducer,U=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.users.find((function(e){return e._id===t.props.userId}));return o.a.createElement("span",{className:"text-success"},"by ",e?e.username:"Unknown author")}}]),n}(o.a.Component),M=Object(j.b)((function(t,e){return{users:t.users.users}}))(U),B=n(45),V=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onReactionClick=function(t){var e={postId:a.props.post._id,reaction:t};a.props.addReaction(e)},a.state={reactionEmoji:{thumbsUp:"\ud83d\udc4d",hooray:"\ud83c\udf89",heart:"\u2764\ufe0f",rocket:"\ud83d\ude80",eyes:"\ud83d\udc40"}},a}return Object(l.a)(n,[{key:"getReactionButtons",value:function(){var t=this;return Object.entries(this.state.reactionEmoji).map((function(e){var n=Object(B.a)(e,2),a=n[0],r=n[1],s=0;return void 0!==t.props.post.reactions&&(s=void 0!==t.props.post.reactions[a]?t.props.post.reactions[a]:0),o.a.createElement("button",{key:a,type:"button",className:"muted-button reaction-button",onClick:function(){t.onReactionClick(a)}},r," ",s)}))}},{key:"render",value:function(){return o.a.createElement("div",null,this.getReactionButtons())}}]),n}(o.a.Component),W=Object(j.b)(null,(function(t,e){return{addReaction:function(e){t(R(e))}}}))(V),J=n(23),H=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onDeletePostClicked=function(e){window.confirm("Do you want to delete this item?")&&(t.props.deletePost(e._id),J.NotificationManager.success("Item deleted"))},t.getDisplayPosts=function(){return t.props.posts.slice().sort((function(t,e){return-t.created.localeCompare(e.created)}))},t.renderedPosts=function(){return t.getDisplayPosts().map((function(e,n){var a=e._id||Date.now();return o.a.createElement("article",{className:"post-excerpt",key:a},o.a.createElement("h3",null,o.a.createElement(m.b,{to:"/posts/".concat(e._id)},e.title)),o.a.createElement("div",{className:"post-content"},e.description.substring(0,100),"\xa0-\xa0",o.a.createElement(M,{userId:e.userId}),o.a.createElement(W,{post:e})),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){t.onDeletePostClicked(e)},className:"btn btn-danger"},"Delete")))}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"showContent",value:function(){var t="";return"succeeded"===this.props.status?t=this.props.posts.length>0?this.renderedPosts():"No post to display!":"loading"===this.props.status?t="Loading ...":"failed"===this.props.status&&(t="Something went wrong!"),t}},{key:"render",value:function(){return o.a.createElement("section",{className:"posts-list"},o.a.createElement("h2",null,"Posts"),this.showContent())}}]),n}(o.a.Component),L=Object(j.b)((function(t,e){return{posts:t.posts.posts,status:t.posts.status}}),(function(t,e){return{deletePost:function(e){t(_(e))},fetchPost:function(){t(N())}}}))(H),q=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).componentDidUpdate=function(){a.listPost()},a.listPost=function(){var t;if(a.props.post&&(null===(t=a.props.match)||void 0===t?void 0:t.params.postId)&&"add"===a.state.formType){var e=a.props.post;a.props.post&&a.setState({formType:"edit",id:e.id,title:e.title,description:e.description,userId:e.userId,editingItem:e})}},a.onTitleChanged=function(t){return a.setState({title:t.target.value})},a.onDescriptionChanged=function(t){return a.setState({description:t.target.value})},a.onSubmitted=function(t){t.preventDefault(),a.isFormValid()&&("add"===a.state.formType?a.onAdd():a.onEdit())},a.onEdit=function(){var t=a.state,e=t.title,n=t.description,r=t.userId;a.props.editPost({_id:a.props.match.params.postId,title:e,description:n,userId:r}),J.NotificationManager.success("Item updated")},a.onAdd=function(){var t=a.state,e=t.title,n=t.description,r=t.userId;a.props.addPost({title:e,description:n,userId:r}),J.NotificationManager.success("Item inserted"),a.resetForm()},a.resetForm=function(){a.setState({title:"",description:"",userId:""})},a.onUserSelectChanged=function(t){var e=t.target.value;a.setState({userId:e})},a.isFormValid=function(){var t=a.state,e=t.title,n=t.description,r=t.userId;e=e.trim(),n=n.trim();var s=a.state.editingItem;return""!==e&&""!==n&&""!==r&&(e!==(null===s||void 0===s?void 0:s.title)||n!==(null===s||void 0===s?void 0:s.description)||r!==(null===s||void 0===s?void 0:s.userId))},a.state={formType:"add",title:"",description:"",userId:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.listPost()}},{key:"getUserSelectWidget",value:function(){var t=this.props.users.map((function(t){return o.a.createElement("option",{key:t._id,value:t._id},t.username)})),e=this.state.userId||"default";return o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{className:"custom-select",value:e,name:"",id:"",onChange:this.onUserSelectChanged},o.a.createElement("option",{disabled:!0,value:"default"},"Select user"),t))}},{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("h2",null,"Add a New Post"),o.a.createElement("form",{onSubmit:this.onSubmitted},o.a.createElement("label",{htmlFor:"postTitle"},"Post Title:"),o.a.createElement("input",{type:"text",id:"postTitle",name:"postTitle",value:this.state.title,onChange:this.onTitleChanged}),o.a.createElement("label",{htmlFor:"postContent"},"Post Description:"),o.a.createElement("textarea",{id:"postDescription",name:"postDescription",value:this.state.description,onChange:this.onDescriptionChanged}),o.a.createElement("label",{htmlFor:"postTitle"},"Created user:"),this.getUserSelectWidget(),o.a.createElement("button",{disabled:!this.isFormValid(),type:"submit"},"Save Post")))}}]),n}(o.a.Component),z=Object(j.b)((function(t,e){var n,a;return{post:A(t,null===(n=e.match)||void 0===n||null===(a=n.params)||void 0===a?void 0:a.postId),users:t.users.users}}),(function(t,e){return{addPost:function(e){t(S(e))},editPost:function(e){t(D(e))}}}))(Object(f.g)(q)),G=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container my-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-8 order-2 order-lg-1"},o.a.createElement(L,null)),o.a.createElement("div",{className:"col-lg-4 order-1 order-lg-2"},o.a.createElement(z,null))))}}]),n}(o.a.Component),K=n(85),Q=n(84),X=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"getTime",value:function(){var t="";if(this.props.timestamp){var e=Object(K.a)(this.props.timestamp),n=Object(Q.a)(e);t="".concat(n," ago")}return t}},{key:"render",value:function(){return o.a.createElement("span",null,"\xa0 ",o.a.createElement("i",null,this.getTime()))}}]),n}(o.a.Component),Y=Object(j.b)((function(t,e){return{users:t.users}}))(X),Z=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.post;return t?o.a.createElement("section",null,o.a.createElement("article",{className:"post"},o.a.createElement("h2",null,t.title),o.a.createElement("p",{className:"post-content"},t.description),o.a.createElement("p",null,o.a.createElement(M,{userId:t.userId}),o.a.createElement(Y,{timestamp:t.created})),o.a.createElement("div",null,o.a.createElement(m.b,{to:"/posts/form/".concat(t._id)},"Edit")))):t?void 0:o.a.createElement("section",null,o.a.createElement("h2",null,"Post not found!"))}}]),n}(o.a.Component),$=Object(j.b)((function(t,e){return{post:A(t,e.match.params.postId)}}))(Z),tt=(n(79),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(f.d,null,o.a.createElement(f.b,{exact:!0,path:"/",component:h}),o.a.createElement(f.b,{exact:!0,path:"/posts",component:G}),o.a.createElement(f.b,{exact:!0,path:"/posts/:postId",component:$}),o.a.createElement(f.b,{exact:!0,path:"/posts/form/:postId",component:z}),o.a.createElement(f.a,{to:"/posts"})),o.a.createElement(J.NotificationContainer,null)))}}]),n}(o.a.Component)),et=Object(I.b)("users/fetchUsers",Object(P.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(x,"/api/users"));case 2:return e=t.sent,t.abrupt("return",e.data.data);case 4:case"end":return t.stop()}}),t)})))),nt=Object(I.c)({name:"users",initialState:{users:[],status:"idle",error:null},extraReducers:(r={},Object(O.a)(r,et.pending,(function(t,e){t.status="loading"})),Object(O.a)(r,et.fulfilled,(function(t,e){t.status="succeeded",t.users=t.users.concat(e.payload)})),Object(O.a)(r,et.rejected,(function(t,e){t.status="failed",t.error=e.error.message})),r)}).reducer,at=Object(I.a)({reducer:{posts:F,users:nt}});n(80);at.dispatch(N()),at.dispatch(et()),i.a.render(o.a.createElement(j.a,{store:at},o.a.createElement(tt,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.2eb8cece.chunk.js.map