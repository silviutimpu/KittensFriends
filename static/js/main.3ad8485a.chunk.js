(this.webpackJsonpkittens=this.webpackJsonpkittens||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(4),a=n.n(r),i=(n(14),n(3)),o=n.n(i),u=n(5),h=n(6),l=n(7),d=n(9),j=n(8),f=(n(16),n(17),n(18),n(0)),m=function(e){return Object(f.jsxs)("div",{className:"card-container",children:[Object(f.jsx)("img",{alt:"kittie",src:"https://robohash.org/".concat(e.monster.id,"?set=set4&size=180x180")}),Object(f.jsx)("h1",{children:e.monster.name}),Object(f.jsx)("h3",{children:e.monster.address.city})]})},p=function(e){return Object(f.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(f.jsx)(m,{monster:e},e.id)}))})},b=(n(20),function(e){var t=e.placeHolder,n=e.handleChange;return Object(f.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({monsters:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{className:"title",children:"Kittens Friends"}),Object(f.jsx)(b,{placeholder:"search kittie",handleChange:this.handleChange}),Object(f.jsx)(p,{monsters:s})]})}}]),n}(s.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),x()}],[[21,1,2]]]);
//# sourceMappingURL=main.3ad8485a.chunk.js.map