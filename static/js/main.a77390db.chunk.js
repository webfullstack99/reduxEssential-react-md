(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{47:function(e,t,n){e.exports=n(81)},52:function(e,t,n){},80:function(e,t){},81:function(e,t,n){"use strict";n.r(t);var a,r,s=n(0),o=n.n(s),c=n(20),i=n.n(c),u=(n(52),n(5)),l=n(6),d=n(8),p=n(7),m=n(4),f=n(17),b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getCurrentPage=function(){var e="/",t=a.props.history.location.pathname;if(e!==t){var n=new RegExp("^\\/((?!\\/).)+",""),r=t.match(n);r&&(e=r[0])}return e},a.getActivePageClassIfIsActive=function(e){return e===a.state.activePage?"text-primary":""},a.state={activePage:a.getCurrentPage()},a}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"navbar navbar-expand navbar-light bg-light justify-content-center"},o.a.createElement("ul",{className:"nav navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(f.b,{className:"nav-link ".concat(this.getActivePageClassIfIsActive("/posts")," "),to:"/posts"},o.a.createElement("span",null,"Posts"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(f.b,{className:"nav-link ".concat(this.getActivePageClassIfIsActive("/users")," "),to:"/users"},o.a.createElement("span",null,"Users")))))}}]),n}(s.Component),v=Object(m.g)(b),h=n(10),j=n(11),O=n(44),E=n(13),g=n.n(E),y=n(21),I=n(16),P=n(22),k=n.n(P),C="https://ap-webserver.glitch.me",N=Object(I.c)({selectId:function(e){return e._id},sortComparer:function(e,t){return-e.created.localeCompare(t.created)}}),w=N.getInitialState({status:"idle",error:null}),x={fetchPosts:Object(I.b)("posts/fetchPosts",Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(C,"/api/posts"));case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})))),addNewPost:Object(I.b)("posts/addNewPost",function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("".concat(C,"/api/posts"),{post:t});case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),editPost:Object(I.b)("posts/editPost",function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put("".concat(C,"/api/posts/").concat(t._id),{post:t});case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),addReactions:Object(I.b)("posts/addReactions",function(){var e=Object(y.a)(g.a.mark((function e(t,n){var a,r,s,o,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.postId,r=t.reaction,!(s=n.getState().posts.entities[a])){e.next=9;break}return void 0!==(o=Object(O.a)({},s.reactions))?void 0!==o[r]?o[r]++:o[r]=1:o=Object(j.a)({},r,1),e.next=7,k.a.put("".concat(C,"/api/posts/addReactions/").concat(a),{reactions:o});case 7:return c=e.sent,e.abrupt("return",c.data.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),deletePost:Object(I.b)("posts/deletePost",function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(C,"/api/posts/").concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},S=x.fetchPosts,A=x.addNewPost,R=x.deletePost,_=x.editPost,D=x.addReactions,T=Object(I.d)({name:"posts",initialState:w,reducers:{testAction:function(e,t){e.error=!0}},extraReducers:(a={},Object(j.a)(a,x.fetchPosts.pending,(function(e,t){e.status="loading"})),Object(j.a)(a,x.fetchPosts.fulfilled,(function(e,t){e.status="succeeded",N.upsertMany(e,t.payload)})),Object(j.a)(a,x.fetchPosts.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),Object(j.a)(a,x.addNewPost.fulfilled,N.addOne),Object(j.a)(a,x.editPost.fulfilled,(function(e,t){var n=e.entities[t.payload._id];n.title=t.payload.title,n.description=t.payload.description,n.userId=t.payload.userId})),Object(j.a)(a,x.addReactions.fulfilled,(function(e,t){e.entities[t.payload._id].reactions=t.payload.reactions})),Object(j.a)(a,x.addReactions.rejected,(function(e,t){})),Object(j.a)(a,x.deletePost.fulfilled,N.removeOne),a)}),U=N.getSelectors((function(e){return e.posts})),F=(U.selectAll,U.selectById),M=U.selectIds,B=T.actions.testAction,V=T.reducer,J=n(23),W=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.users.find((function(t){return t._id===e.props.userId}));return o.a.createElement("span",{className:"text-success"},"by ",t?t.username:"Unknown author")}}]),n}(o.a.Component),L=Object(h.b)((function(e,t){return{users:e.users.users}}))(W),q=n(85),z=n(84),G=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"getTime",value:function(){var e="";if(this.props.timestamp){var t=Object(q.a)(this.props.timestamp),n=Object(z.a)(t);e="".concat(n," ago")}return e}},{key:"render",value:function(){return o.a.createElement("span",null,"\xa0 ",o.a.createElement("i",null,this.getTime()))}}]),n}(o.a.Component),H=Object(h.b)((function(e,t){return{users:e.users}}))(G),K=n(45),Q=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onReactionClick=function(e){var t={postId:a.props.post._id,reaction:e};a.props.addReaction(t)},a.state={reactionEmoji:{thumbsUp:"\ud83d\udc4d",hooray:"\ud83c\udf89",heart:"\u2764\ufe0f",rocket:"\ud83d\ude80",eyes:"\ud83d\udc40"}},a}return Object(l.a)(n,[{key:"getReactionButtons",value:function(){var e=this;return Object.entries(this.state.reactionEmoji).map((function(t){var n=Object(K.a)(t,2),a=n[0],r=n[1],s=0;return void 0!==e.props.post.reactions&&(s=void 0!==e.props.post.reactions[a]?e.props.post.reactions[a]:0),o.a.createElement("button",{key:a,type:"button",className:"muted-button reaction-button",onClick:function(){e.onReactionClick(a)}},r," ",s)}))}},{key:"render",value:function(){return o.a.createElement("div",null,this.getReactionButtons())}}]),n}(o.a.Component),X=Object(h.b)((function(e,t){return{post:F(e,t.id)}}),(function(e,t){return{addReaction:function(t){e(D(t))}}}))(Q),Y=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.post;return o.a.createElement("article",null,o.a.createElement("h3",null,o.a.createElement(f.b,{to:"/posts/".concat(t._id)},t.title)),o.a.createElement("div",{className:"post-content"},t.description.substring(0,100)," \xa0-\xa0",o.a.createElement(L,{userId:t.userId}),o.a.createElement(X,{id:t._id})),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.onDeletePostClicked(t)},className:"btn btn-danger"},"Delete")))}}]),n}(o.a.Component),Z=Object(h.b)((function(e,t){return{post:F(e,t.id)}}),(function(e,t){return{}}))(Y),$=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onDeletePostClicked=function(t){window.confirm("Do you want to delete this item?")&&(e.props.deletePost(t._id),J.NotificationManager.success("Item deleted"))},e.testActionClicked=function(){e.props.testAction()},e.renderedPosts=function(){return e.props.postIds.map((function(e){return o.a.createElement("div",{key:e,className:"my-2"},o.a.createElement(Z,{id:e}))}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"showContent",value:function(){var e="";return"succeeded"===this.props.status?e=this.props.postIds.length>0?this.renderedPosts():"No post to display!":"loading"===this.props.status?e="Loading ...":"failed"===this.props.status&&(e="Something went wrong!"),e}},{key:"render",value:function(){return o.a.createElement("section",{className:"posts-list"},o.a.createElement("h2",null,"Posts"),this.showContent())}}]),n}(o.a.Component),ee=Object(h.b)((function(e,t){return{postIds:M(e),status:e.posts.status}}),(function(e,t){return{deletePost:function(t){e(R(t))},fetchPost:function(){e(S())},testAction:function(){e(B())}}}))($),te=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).componentDidUpdate=function(){a.listPost()},a.listPost=function(){var e;if(a.props.post&&(null===(e=a.props.match)||void 0===e?void 0:e.params.postId)&&"add"===a.state.formType){var t=a.props.post;a.props.post&&a.setState({formType:"edit",id:t.id,title:t.title,description:t.description,userId:t.userId,editingItem:t})}},a.onTitleChanged=function(e){return a.setState({title:e.target.value})},a.onDescriptionChanged=function(e){return a.setState({description:e.target.value})},a.onSubmitted=function(e){e.preventDefault(),a.isFormValid()&&("add"===a.state.formType?a.onAdd():a.onEdit())},a.onEdit=function(){var e=a.state,t=e.title,n=e.description,r=e.userId;a.props.editPost({_id:a.props.match.params.postId,title:t,description:n,userId:r}),J.NotificationManager.success("Item updated")},a.onAdd=function(){var e=a.state,t=e.title,n=e.description,r=e.userId;a.props.addPost({title:t,description:n,userId:r}),J.NotificationManager.success("Item inserted"),a.resetForm()},a.resetForm=function(){a.setState({title:"",description:"",userId:""})},a.onUserSelectChanged=function(e){var t=e.target.value;a.setState({userId:t})},a.isFormValid=function(){var e=a.state,t=e.title,n=e.description,r=e.userId;t=t.trim(),n=n.trim();var s=a.state.editingItem;return""!==t&&""!==n&&""!==r&&(t!==(null===s||void 0===s?void 0:s.title)||n!==(null===s||void 0===s?void 0:s.description)||r!==(null===s||void 0===s?void 0:s.userId))},a.state={formType:"add",title:"",description:"",userId:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.listPost()}},{key:"getUserSelectWidget",value:function(){var e=this.props.users.map((function(e){return o.a.createElement("option",{key:e._id,value:e._id},e.username)})),t=this.state.userId||"default";return o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{className:"custom-select",value:t,name:"",id:"",onChange:this.onUserSelectChanged},o.a.createElement("option",{disabled:!0,value:"default"},"Select user"),e))}},{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("h2",null,"Add a New Post"),o.a.createElement("form",{onSubmit:this.onSubmitted},o.a.createElement("label",{htmlFor:"postTitle"},"Post Title:"),o.a.createElement("input",{type:"text",id:"postTitle",name:"postTitle",value:this.state.title,onChange:this.onTitleChanged}),o.a.createElement("label",{htmlFor:"postContent"},"Post Description:"),o.a.createElement("textarea",{id:"postDescription",name:"postDescription",value:this.state.description,onChange:this.onDescriptionChanged}),o.a.createElement("label",{htmlFor:"postTitle"},"Created user:"),this.getUserSelectWidget(),o.a.createElement("button",{disabled:!this.isFormValid(),type:"submit"},"Save Post")))}}]),n}(o.a.Component),ne=Object(h.b)((function(e,t){var n,a;return{post:F(e,null===(n=t.match)||void 0===n||null===(a=n.params)||void 0===a?void 0:a.postId),users:e.users.users}}),(function(e,t){return{addPost:function(t){e(A(t))},editPost:function(t){e(_(t))}}}))(Object(m.g)(te)),ae=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container my-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-8 order-2 order-lg-1"},o.a.createElement(ee,null)),o.a.createElement("div",{className:"col-lg-4 order-1 order-lg-2"},o.a.createElement(ne,null))))}}]),n}(o.a.Component),re=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.post;return e?o.a.createElement("section",null,o.a.createElement("article",{className:"post"},o.a.createElement("h2",null,e.title),o.a.createElement("p",{className:"post-content"},e.description),o.a.createElement("p",null,o.a.createElement(L,{userId:e.userId}),o.a.createElement(H,{timestamp:e.created}),o.a.createElement(X,{id:e._id})),o.a.createElement("div",null,o.a.createElement(f.b,{className:"btn btn-success",to:"/posts/form/".concat(e._id)},"Edit")))):e?void 0:o.a.createElement("section",null,o.a.createElement("h2",null,"Post not found!"))}}]),n}(o.a.Component),se=Object(h.b)((function(e,t){return{post:F(e,t.match.params.postId)}}))(re),oe=(n(79),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),a=t.call(this,e),console.log("api domain: ".concat(C)),a}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(m.d,null,o.a.createElement(m.b,{exact:!0,path:"/posts",component:ae}),o.a.createElement(m.b,{exact:!0,path:"/posts/:postId",component:se}),o.a.createElement(m.b,{exact:!0,path:"/posts/form/:postId",component:ne}),o.a.createElement(m.a,{to:"/posts"})),o.a.createElement(J.NotificationContainer,null))}}]),n}(o.a.Component)),ce=Object(I.b)("users/fetchUsers",Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(C,"/api/users"));case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})))),ie=Object(I.d)({name:"users",initialState:{users:[],status:"idle",error:null},extraReducers:(r={},Object(j.a)(r,ce.pending,(function(e,t){e.status="loading"})),Object(j.a)(r,ce.fulfilled,(function(e,t){e.status="succeeded",e.users=e.users.concat(t.payload)})),Object(j.a)(r,ce.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),r)}).reducer,ue=Object(I.a)({reducer:{posts:V,users:ie}});n(80);ue.dispatch(S()),ue.dispatch(ce()),i.a.render(o.a.createElement(h.a,{store:ue},o.a.createElement(f.a,{basename:"/reduxEssential-react-md"},o.a.createElement(oe,null))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a77390db.chunk.js.map