(this["webpackJsonpfilm-app"]=this["webpackJsonpfilm-app"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(1),c=a.n(s),i=a(5),r=a.n(i),l=(a(16),a(6)),d=a(7),o=a(10),m=a(9),j=a.p+"static/media/TV.e316e05f.png",u=(a(17),a(18),a(8)),h=(a(19),[{firstName:"\u041f\u0430\u0442\u0440\u0456\u043a \u041c\u0435\u043b\u0440\u043e\u0443\u0437",lastName:a.p+"static/media/Patryk-merous.982439d7.png",date:"11/1/2020",gender:"\u0421\u0435\u0437\u043e\u043d 3 \u0415\u043f\u0456\u0437\u043e\u0434 4"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",date:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",date:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",date:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",date:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",date:"+380956319521",gender:"male"}]);var p=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("h1",{children:" Super Film"}),Object(n.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(n.jsx)("p",{children:"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u0438 \u0434\u0435\u043d\u044c."})]}),Object(n.jsx)("div",{className:"calendar-wrapper",children:Object(n.jsx)(f,{})})]})},f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){return e.setState({value:t})},e.state={value:new Date},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t={paddingRight:"10px",display:"flex"},a=h.filter((function(t){return null==e.state.value||t.firstName.toLowerCase().includes(e.state.value.toLocaleDateString("en-US"))||t.lastName.toLowerCase().includes(e.state.value.toLocaleDateString("en-US"))||t.date.toLowerCase().includes(e.state.value.toLocaleDateString("en-US"))?t:void 0})).map((function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"film-block",children:[Object(n.jsx)("p",{children:e.date}),Object(n.jsxs)("div",{style:t,children:[Object(n.jsx)("div",{className:"image-block-film",children:Object(n.jsx)("img",{src:e.lastName,className:"image-film"})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{className:"name_contact",children:[" ",e.firstName]}),Object(n.jsx)("p",{className:"epyzode",children:e.gender})]})]})]})})})),s=this.state.value;return Object(n.jsxs)("div",{children:[Object(n.jsx)(u.a,{onChange:this.onChange,value:s,calendarType:"Hebrew"}),Object(n.jsx)("p",{children:this.state.value.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}),a]})}}]),a}(s.Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),b()}},[[22,1,2]]]);
//# sourceMappingURL=main.021c488d.chunk.js.map