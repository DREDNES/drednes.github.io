(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/me.fc1069eb.png"},,,function(e,t,a){e.exports=a.p+"static/media/react.de17a054.svg"},function(e,t,a){e.exports=a.p+"static/media/bootstrap.ffded238.svg"},function(e,t,a){e.exports=a.p+"static/media/css.15678ffe.svg"},function(e,t,a){e.exports=a.p+"static/media/html.525f317f.svg"},function(e,t,a){e.exports=a.p+"static/media/mysql.f8a63ae9.svg"},function(e,t,a){e.exports=a.p+"static/media/node.b337a2fb.svg"},function(e,t,a){e.exports=a.p+"static/media/php.d956cbbb.svg"},function(e,t,a){e.exports=a(40)},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(4),r=a.n(o),i=a(13),c=a(14),l=a.n(c),m=a(15),u=a.n(m),d=function(){return s.a.createElement(u.a,{strings:["Hi! I'm Narek and here you can find projects from <a target='_blank' href='https://github.com/DREDNES'>my GitHub</a>!"],typeSpeed:30})},p=function(){return s.a.createElement("div",{className:"introduce-page fullpage-centered"},s.a.createElement("div",{className:"cloud"},s.a.createElement("span",{className:"typedJS"},s.a.createElement(d,null))),s.a.createElement("img",{src:l.a,className:"avatar",alt:"avatar"}),s.a.createElement(i.Link,{className:"projects-link blink",to:"projects",smooth:!0,duration:500},s.a.createElement("span",null,s.a.createElement("b",null,"projects")),s.a.createElement("i",{className:"icon-down-open"})))},f=a(16),h=a.n(f),g=a(17),k=a.n(g),E=a(18),v=a.n(E),b=a(19),y=a.n(b),N=a(20),w=a.n(N),S=a(21),j=a.n(S),R=a(22),D=a.n(R),x=a(23),F=a.n(x),W=function(e,t,a){return s.a.createElement("img",{key:String(a),src:e,alt:t,height:"30"})},B=function(e){return e.technologies.map((function(e,t){switch(e){case"react":return W(k.a,e,t);case"bootstrap":return W(v.a,e,t);case"css":return W(y.a,e,t);case"html":return W(w.a,e,t);case"mysql":return W(j.a,e,t);case"node":return W(D.a,e,t);case"php":return W(F.a,e,t);default:return""}}))},M=function(e){var t=e.title,a=e.features,n=e.instruments,o=e.links,r=e.icons;return s.a.createElement("div",{className:"project"},s.a.createElement("h2",{className:"title"},t),s.a.createElement("div",{className:"feauters"},s.a.createElement("h3",null,"Features"),s.a.createElement("ul",null,a.map((function(e,t){return s.a.createElement("li",{key:String(t)},e)})))),s.a.createElement("div",{className:"instruments"},n.map((function(e,t){return s.a.createElement("div",{key:String(t),className:"instrument-wrap"},s.a.createElement("p",null,e.for),s.a.createElement("div",{className:"multiple-instruments"},e.used.map((function(e,t){return s.a.createElement("span",{key:String(t)},e)}))))}))),s.a.createElement("div",{className:"links"},o.demo?s.a.createElement("a",{href:o.demo},"demo"):"",o.source?s.a.createElement("a",{href:o.source},"source"):""),s.a.createElement("div",{className:"icons"},s.a.createElement(B,{technologies:r})))},O=[{title:"What to watch?",features:["gives you a random movie","different filters for a more accurate search","list of the most popular movies for last couple of weeks"],instruments:[{for:"Frontend",used:["React.js"]},{for:"Background animation",used:["Particles.js"]},{for:"Movies database api",used:["themoviedb"]}],links:{source:"https://github.com/DREDNES/random-movie",demo:"./demo/whattowatch"},icons:["react"]},{title:"Online Radio",features:["almost all russian radio stations","awesome animations","retro style","OOP"],instruments:[{for:"Frontend",used:["React.js"]},{for:"Sound managing",used:["Howler.js"]},{for:"Icons",used:["Fontello"]}],links:{source:"https://github.com/DREDNES/online-radio",demo:"./demo/onlineradio"},icons:["react"]},{title:"VideoChat Roulette",features:["works even you if don't have a camera",'chat with "typing..." feature',"anonymous","lovely design"],instruments:[{for:"Backend",used:["Node.js"]},{for:"Frontend",used:["React.js"]},{for:"WebSockets",used:["themoviedb"]},{for:"WebRTC",used:["simple-peer.js"]}],links:{source:"https://github.com/DREDNES/video-chat-roulette",demo:"https://video-chat-roulette.herokuapp.com"},icons:["node","react"]},{title:"Multiple group chat",features:["2 default chatrooms","possibility to create more chatrooms","more than 2 users in a room","OOP"],instruments:[{for:"Backend",used:["Node.js"]},{for:"Frontend",used:["React.js"]},{for:"WebSockets",used:["Socket.io"]}],links:{source:"https://github.com/DREDNES/WebSocket-chat-React-Socket.io",demo:"https://multiple-group-chat.herokuapp.com"},icons:["node","react"]},{title:"SelfieMaker",features:["save all selfies and then choose the best","delete selfie","save selfie to hardrive"],instruments:[{for:"Frontend",used:["React.js"]}],links:{source:"https://github.com/DREDNES/webcam-selfie-react",demo:"./demo/webcam-selfie/"},icons:["react"]},{title:"String generator",features:["opens brackets and generates string","counts all posible combinations of given string","writes result to database","nested brackets can be infinite"],instruments:[{for:"Backend",used:["PHP"]},{for:"Database",used:["MySQL"]}],links:{source:"https://github.com/DREDNES/random-string-generator"},icons:["php","mysql"]},{title:"Website for appoxius",features:["adaptive","lovely design"],instruments:[{for:"Frontend",used:["Bootstrap 4","Animation.css","Fontello.css","Grid Masonry"]}],links:{demo:"./demo/appoxius/"},icons:["html","css","bootstrap"]}],P=function(){return s.a.createElement("div",{name:"projects",className:"projects-page fullpage-centered"},s.a.createElement(h.a,{breakpointCols:Math.floor(window.innerWidth/370),className:"masonry-grid",columnClassName:"masonry-grid_column"},O.map((function(e,t){var a=e.title,n=e.features,o=e.instruments,r=e.links,i=e.icons;return s.a.createElement(M,{key:String(t),title:a,features:n,instruments:o,links:r,icons:i})}))))},C=[{href:"tel:+7 (999) 246 85 15",tooltip:"+7 (999) 246 85 15",icon:"icon-phone"},{href:"mailto:ava.narek@gmail.com",tooltip:"ava.narek@gmail.com",icon:"icon-mail-alt"},{href:"https://vk.com/ava.narek",tooltip:"VKontakte",icon:"icon-vkontakte"},{href:"https://www.facebook.com/narek.avagyan.319",tooltip:"Facebook",icon:"icon-facebook"},{href:"https://www.instagram.com/mr.avagyan/",tooltip:"Instagram",icon:"icon-instagram"},{href:"https://teleg.run/drednes",tooltip:"Telegram",icon:"icon-telegram"},{href:"https://wapp.click/79992468515",tooltip:"WhatsApp",icon:"icon-whatsapp"}],H=function(){return s.a.createElement("div",{className:"contacts-page fullpage-centered"},s.a.createElement("div",{className:"contacts"},C.map((function(e,t){var a=e.href,n=e.tooltip,o=e.icon;return s.a.createElement("a",{key:String(t),href:a,tooltip:n,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:o}))}))))};a(39);r.a.render(s.a.createElement((function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p,null),s.a.createElement(P,null),s.a.createElement(H,null))}),null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.81328976.chunk.js.map