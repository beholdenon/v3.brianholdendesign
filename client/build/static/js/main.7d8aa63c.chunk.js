(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},54:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),a=i(18),c=i.n(a),r=(i(24),i(4)),l=(i(25),i(26),i(0));var o=function(e){return Object(l.jsx)("a",{onClick:e.clickAction,className:e.class?"main-btn "+e.class:"main-btn",href:e.href,"data-aos":e.aos?"fade-up "+e.aos:"fade-up","data-aos-duration":e.duration?e.duration:400,"data-aos-delay":e.delay?e.delay:100,children:e.title})},d=(i(28),i(1)),h=i.n(d);var u=function(e){return Object(l.jsx)("div",{className:"landing",children:Object(l.jsxs)("div",{className:"inner",children:[e.landingItems[0].fields.headline?Object(l.jsx)("h1",{id:"title",children:e.landingItems[0].fields.headline}):Object(l.jsx)(l.Fragment,{}),e.landingItems[0].fields.description?Object(l.jsx)("p",{children:e.landingItems[0].fields.description}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)(o,{clickAction:function(e){e.preventDefault(),h()("html, body").animate({scrollTop:h()(".work").offset().top},1e3)},href:"#",title:"View Work",class:"view-work-btn",duration:"0",delay:"0",aos:"none"})]})})};i(29);var j=function(e){return Object(l.jsxs)("div",{className:"heading aos-init aos-animate","data-aos":"fade-up",children:[e.headline.length?Object(l.jsx)("h2",{children:e.headline}):Object(l.jsx)(l.Fragment,{}),e.description.length?Object(l.jsx)("p",{children:e.description}):Object(l.jsx)(l.Fragment,{})]})};i(30);var m=function(e){return Object(l.jsxs)("div",{className:"section work",children:[Object(l.jsx)(j,{headline:e.landingItems[0].fields.workHeadline,description:e.landingItems[0].fields.workDescription}),Object(l.jsx)("div",{className:"grid-container",children:e.projects.map((function(t,i){return Object(l.jsx)("div",{className:"work-item","data-aos":"fade-up-right","data-aos-duration":"400",children:Object(l.jsx)("button",{onClick:function(){return t=i,void e.openOverlay(t);var t},children:Object(l.jsxs)("div",{className:"inner",children:[Object(l.jsx)("figure",{children:Object(l.jsx)("img",{src:"https:"+t.fields.thumbnail.fields.file.url,alt:t.fields.title})}),Object(l.jsxs)("div",{className:"text-inner",children:[Object(l.jsx)("h4",{children:t.fields.client}),Object(l.jsx)("h3",{children:t.fields.title}),Object(l.jsx)("p",{children:t.fields.shortDescription})]})]})})},i)}))})]})};i(31);var f=function(e){return Object(l.jsxs)("div",{className:"section experience",children:[Object(l.jsx)(j,{headline:e.landingItems[0].fields.experienceHeadline,description:e.landingItems[0].fields.experienceDescription}),e.clients.length?Object(l.jsx)("ul",{className:"logos",children:e.clients.map((function(e,t){return function(e,t){var i;return i=t>3?"hide-for-small":"",Object(l.jsx)("li",{className:i,"data-aos":"fade-up","data-aos-duration":"400","data-aos-delay":100*t,children:Object(l.jsx)("img",{src:"https:"+e.fields.logo.fields.file.url,alt:e.fields.name})},t)}(e,t)}))}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("div",{className:"inner",children:Object(l.jsx)(o,{href:"https://www.linkedin.com/in/brianholden/",title:"LinkedIn Profile",delay:"10000"})})]})};i(32);var b=function(e){return Object(l.jsxs)("div",{className:"section skills",children:[Object(l.jsx)(j,{headline:e.landingItems[0].fields.skillsHeadline,description:e.landingItems[0].fields.skillsDescription}),Object(l.jsx)("ul",{className:"skill-list",children:e.skills[0].fields.skills.map((function(e,t){return Object(l.jsx)("li",{"data-aos":"fade-up","data-aos-duration":"600",className:"aos-init aos-animate",children:Object(l.jsx)("div",{className:"inner",children:e})},t)}))})]})};var v=function(){h()((function(){h()("#contact-form").on("submit",(function(e){e.preventDefault();var t=0,i=h()(this),s={fname:h()("#fname").val(),email:h()("#email").val(),message:h()("#message").val()};""===s.fname&&(t+=1,h()("#fname").addClass("error")),""!==s.email&&/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(s.email).toLowerCase())||(t+=1,h()("#email").addClass("error")),""===s.message&&(t+=1,h()("#message").addClass("error")),0===t&&h.a.ajax({type:i.attr("method"),url:i.attr("action"),data:JSON.stringify(s),cache:!1,contentType:"application/json; charset=utf-8",error:function(e){console.log(e)},success:function(e){h()(".section.contact .heading p").html("Thank you for your comments. I will respond shortly."),h()("#contact-form").addClass("success")}})}))}))};i(33);var x=function(e){var t=function(e){document.getElementById(e).setAttribute("placeholder","")},i=function(e,t){document.getElementById(e).setAttribute("placeholder",t)};return v(),Object(l.jsxs)("div",{className:"section contact",children:[Object(l.jsx)(j,{headline:e.landingItems[0].fields.connectHeadline,description:e.landingItems[0].fields.connectDescription}),Object(l.jsx)("form",{id:"contact-form",method:"post",action:"/contact","data-aos":"fade-up","data-aos-duration":"600",children:Object(l.jsxs)("div",{className:"form","data-aos":"fade-up","data-aos-duration":"600",children:[Object(l.jsxs)("div",{className:"row-2",children:[Object(l.jsx)("input",{className:"input-field",type:"text",id:"fname",name:"fname",placeholder:"Name",onFocus:function(){return t("fname")},onBlur:function(){return i("fname","Name")}}),Object(l.jsx)("input",{className:"email",type:"text",id:"email",name:"email",placeholder:"Email",onFocus:function(){return t("email")},onBlur:function(){return i("email","Email")}})]}),Object(l.jsx)("textarea",{name:"message",id:"message",rows:"30",placeholder:"Message",onFocus:function(){return t("message")},onBlur:function(){return i("message","Message")}}),Object(l.jsx)("input",{type:"submit",className:"button",value:"Send"})]})})]})};var p=function(e){return"workHeading"===e.workItem.sys.contentType.sys.id?Object(l.jsxs)("div",{className:"overlay-title-outer",children:[e.workItem.fields.title?Object(l.jsx)("h2",{className:"work-item-title",children:e.workItem.fields.title}):Object(l.jsx)(l.Fragment,{}),e.workItem.fields.desc?Object(l.jsx)("p",{children:e.workItem.fields.desc}):Object(l.jsx)(l.Fragment,{})]}):e.workItem.fields.media.map((function(t,i){return"video/mp4"===t.fields.file.contentType?function(t,i){return e.link?Object(l.jsx)("a",{href:e.link,children:Object(l.jsx)("div",{className:"overlay-item-inner",children:Object(l.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,src:"https:"+t.fields.file.url})},i)}):Object(l.jsx)("div",{className:"overlay-item-inner",children:Object(l.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,src:"https:"+t.fields.file.url})},i)}(t,i):function(t,i){return e.link?Object(l.jsx)("a",{href:e.link,children:Object(l.jsx)("div",{className:"overlay-item-inner",children:Object(l.jsx)("img",{"data-src":"https:"+t.fields.file.url,alt:e.title})},i)}):Object(l.jsx)("div",{className:"overlay-item-inner",children:Object(l.jsx)("img",{"data-src":"https:"+t.fields.file.url,alt:e.title})},i)}(t,i)}))};i(34);var O=function(e){return Object(l.jsxs)("div",{className:"overlay",children:[Object(l.jsxs)("div",{className:"inner",children:[Object(l.jsx)("div",{className:"close-btn",onClick:function(t){t.preventDefault(),e.closeOverlay()},children:"X"}),Object(l.jsx)("div",{className:"content",children:e.projects.map((function(e,t){return Object(l.jsxs)("div",{className:"overlay-outer","data-index":t,children:[Object(l.jsxs)("div",{className:"overlay-header",children:[e.fields.brand?Object(l.jsx)("h3",{className:"work-overlay-brand",id:"overlay-brand",children:e.fields.brand}):Object(l.jsx)(l.Fragment,{}),e.fields.title?Object(l.jsx)("h2",{className:"work-overlay-title",id:"overlay-name",children:e.fields.title}):Object(l.jsx)(l.Fragment,{}),e.fields.longDescription?Object(l.jsx)("p",{id:"overlay-desc",children:e.fields.longDescription}):Object(l.jsx)(l.Fragment,{}),e.fields.roles?Object(l.jsx)("div",{className:"overlay-roles",children:Object(l.jsx)("ul",{children:e.fields.roles.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})}):Object(l.jsx)(l.Fragment,{})]}),e.fields.workOverlay?Object(l.jsx)("div",{className:"work-container",children:e.fields.workOverlay.map((function(t,i){return Object(l.jsx)("div",{className:"overlay-item",children:Object(l.jsx)("div",{className:"overlay-item-outer",children:Object(l.jsx)(p,{workItem:t,title:e.fields.title,link:e.fields.link})})},i)}))}):Object(l.jsx)(l.Fragment,{}),e.fields.link?Object(l.jsx)(o,{href:e.fields.link,title:"Launch Project"}):""]},t)}))})]}),Object(l.jsx)("div",{className:"bg"})]})},g=i(5),y=i(6),w=function(){function e(){Object(g.a)(this,e),this.maxDist=0,this.mouse={x:0,y:0},this.cursor={x:window.innerWidth,y:window.innerHeight}}return Object(y.a)(e,[{key:"init",value:function(){this.initMouseMove()}},{key:"initMouseMove",value:function(){var e=this;window.addEventListener("mousemove",(function(t){e.cursor.x=t.clientX,e.cursor.y=t.clientY}))}}]),e}(),k=function(){function e(t,i){Object(g.a)(this,e),this.span=document.createElement("span"),this.span.setAttribute("data-char",i),this.span.innerText=i,t.appendChild(this.span),this.mouse={x:0,y:0},this.maxDist=0}return Object(y.a)(e,[{key:"setMouse",value:function(e,t){this.mouse.x=e,this.mouse.y=t}},{key:"setMaxDist",value:function(e){this.maxDist=e}},{key:"getDist",value:function(){return this.pos=this.span.getBoundingClientRect(),Math.dist(this.mouse,{x:this.pos.x+this.pos.width/1.75,y:this.pos.y})}},{key:"getAttr",value:function(e,t,i){var s=i-Math.abs(i*e/this.maxDist);return Math.max(t,s+t)}},{key:"update",value:function(e){var t=this.getDist();this.wdth=e.wdth?~~this.getAttr(t,5,200):100,this.wght=e.wght?~~this.getAttr(t,100,800):400,this.alpha=e.alpha?this.getAttr(t,.2,1).toFixed(2):1,this.ital=e.ital?this.getAttr(t,0,1).toFixed(2):0,this.draw()}},{key:"draw",value:function(){var e="";e+="opacity: "+this.alpha+";",e+="font-variation-settings: 'wght' "+this.wght+", 'wdth' "+this.wdth+", 'ital' "+this.ital+";",this.span.style=e}}]),e}(),N=function(){function e(t){Object(g.a)(this,e),this.title=document.getElementById(t),this.str=this.title.innerText,this.title.innerHTML="",this.alpha=!0,this.width=!0,this.weight=!0,this.italic=!1,this.chars=[],this.mouse={x:0,y:0},this.cursor={x:window.innerWidth,y:window.innerHeight}}return Object(y.a)(e,[{key:"init",value:function(){this.captureChars(),this.set(),this.animate(),this.setListeners()}},{key:"captureChars",value:function(){for(var e=0;e<this.str.length;e+=1){var t=new k(this.title,this.str[e]);this.chars.push(t)}}},{key:"setListeners",value:function(){var e=this;window.addEventListener("resize",this.setSize.bind(this)),window.addEventListener("mousemove",(function(t){e.cursor.x=t.clientX,e.cursor.y=t.clientY})),window.addEventListener("touchmove",(function(t){var i=t.touches[0];e.cursor.x=i.clientX,e.cursor.y=i.clientY}),{passive:!1})}},{key:"set",value:function(){this.title.className="",this.setSize()}},{key:"setSize",value:function(){var e=window.innerWidth;e>900&&(e=900);var t=e/(this.str.length/2);this.title.style="font-size: "+t+"px;"}},{key:"animate",value:function(){this.mouse.x+=(this.cursor.x-this.mouse.x)/10,this.mouse.y+=(this.cursor.y-this.mouse.y)/10,window.requestAnimationFrame(this.animate.bind(this));for(var e=0;e<this.chars.length;e+=1)this.chars[e].setMouse(this.mouse.x,this.mouse.y);this.render()}},{key:"render",value:function(){this.maxDist=this.title.getBoundingClientRect().width/2;for(var e=0;e<this.chars.length;e+=1)this.chars[e].setMaxDist(this.maxDist),this.chars[e].update({wght:this.weight,wdth:this.width,ital:this.italic,alpha:this.alpha})}}]),e}(),I=i(19),D=i.n(I),F=i(35);var M=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)([]),c=Object(r.a)(a,2),o=c[0],d=c[1],j=Object(s.useState)([]),v=Object(r.a)(j,2),p=v[0],g=v[1],y=Object(s.useState)([]),k=Object(r.a)(y,2),I=k[0],M=k[1],C=Object(s.useState)([]),S=Object(r.a)(C,2),A=S[0],E=S[1],L=Object(s.useState)(!1),T=Object(r.a)(L,2),B=T[0],H=T[1],z=function(){H(!1),h()("body").removeClass("overlay-active")};return h()((function(){h()(".overlay .inner").not(".work-item").on("click",(function(){z()})),h()(document).on("keydown",(function(e){"Escape"===e.key&&B&&z()})),h()(window).on("scroll",(function(){var e=h()(window).scrollTop()/2/(h()(window).height()/2);h()(".landing .inner").css("filter","blur("+8*e+"px)"),h()(".landing .inner").css("opacity",1-e/4)}))})),Object(s.useEffect)((function(){document.title="Brian Holden Design & Development";Promise.all([F.get("/landing"),F.get("/projects"),F.get("/clients"),F.get("/skills")]).then((function(e){d(e[0].data.items),g(e[1].data.items),M(e[2].data.items),E(e[3].data.items),n(!0)}))}),[]),i?(h()((function(){Math.dist=function(e,t){var i=t.x-e.x,s=t.y-e.y;return Math.sqrt(Math.pow(i,2),Math.pow(s,2))},(new w).init(),new N("title").init(),D.a.init({mirror:!0})})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"main",children:[Object(l.jsx)("div",{className:"bg"}),Object(l.jsx)(u,{landingItems:o}),Object(l.jsx)(m,{landingItems:o,projects:p,openOverlay:function(e){H(!0),h()(".overlay .inner").scrollTop(0),h()(".overlay .overlay-outer").hide().eq(e).show(),h()("body").addClass("overlay-active"),h()(".overlay .overlay-outer").eq(e).find(".overlay-item-inner video").each((function(){h()(this).html('<source src="'+h()(this).data("src")+'" type="video/mp4"></source>'),h()(this)[0].load(),h()(this)[0].play()})),h()(".overlay .overlay-outer").eq(e).find(".overlay-item-inner img").each((function(){h()(this).attr("src",h()(this).data("src"))}))}}),Object(l.jsx)(f,{landingItems:o,clients:I}),Object(l.jsx)(b,{landingItems:o,skills:A}),Object(l.jsx)(x,{landingItems:o})]}),Object(l.jsx)(O,{projects:p,closeOverlay:z})]})):Object(l.jsx)("div",{children:"Loading..."})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,55)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),C()}},[[54,1,2]]]);
//# sourceMappingURL=main.7d8aa63c.chunk.js.map