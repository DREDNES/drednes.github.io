(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/me.fc1069eb.png"},,,function(e,t,a){e.exports=a.p+"static/media/react.de17a054.svg"},function(e,t,a){e.exports=a.p+"static/media/bootstrap.ffded238.svg"},function(e,t,a){e.exports=a.p+"static/media/css.15678ffe.svg"},function(e,t,a){e.exports=a.p+"static/media/html.525f317f.svg"},function(e,t,a){e.exports=a.p+"static/media/mysql.f8a63ae9.svg"},function(e,t,a){e.exports=a.p+"static/media/node.b337a2fb.svg"},function(e,t,a){e.exports=a.p+"static/media/php.d956cbbb.svg"},function(e,t,a){e.exports=a(40)},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),o=a.n(s),c=a(13),i=a(14),l=a.n(i),m=a(15),u=a.n(m),p=function(){return r.a.createElement(u.a,{strings:["Hi! I'm Narek and here you can find projects from <a target='_blank' href='https://github.com/DREDNES'>my GitHub</a>!"],typeSpeed:30})},d=function(){return r.a.createElement("div",{className:"introduce-page fullpage-centered"},r.a.createElement("div",{className:"cloud"},r.a.createElement("span",{className:"typedJS"},r.a.createElement(p,null))),r.a.createElement("img",{src:l.a,className:"avatar",alt:"avatar"}),r.a.createElement(c.Link,{className:"projects-link blink",to:"projects",smooth:!0,duration:500},r.a.createElement("span",null,r.a.createElement("b",null,"projects")),r.a.createElement("i",{className:"icon-down-open"})))},f=a(16),h=a.n(f),g=a(17),k=a.n(g),E=a(18),v=a.n(E),b=a(19),y=a.n(b),N=a(20),w=a.n(N),S=a(21),j=a.n(S),D=a(22),R=a.n(D),x=a(23),F=a.n(x),W=function(e,t,a){return r.a.createElement("img",{key:String(a),src:e,alt:t,height:"30"})},B=function(e){return e.technologies.map((function(e,t){switch(e){case"react":return W(k.a,e,t);case"bootstrap":return W(v.a,e,t);case"css":return W(y.a,e,t);case"html":return W(w.a,e,t);case"mysql":return W(j.a,e,t);case"node":return W(R.a,e,t);case"php":return W(F.a,e,t);default:return""}}))},M=function(e){var t=e.title,a=e.features,n=e.instruments,s=e.links,o=e.icons;return r.a.createElement("div",{className:"project"},r.a.createElement("h2",{className:"title"},t),r.a.createElement("div",{className:"feauters"},r.a.createElement("h3",null,"Features"),r.a.createElement("ul",null,a.map((function(e,t){return r.a.createElement("li",{key:String(t)},e)})))),r.a.createElement("div",{className:"instruments"},n.map((function(e,t){return r.a.createElement("div",{key:String(t),className:"instrument-wrap"},r.a.createElement("p",null,e.for),r.a.createElement("div",{className:"multiple-instruments"},e.used.map((function(e,t){return r.a.createElement("span",{key:String(t)},e)}))))}))),r.a.createElement("div",{className:"links"},s.demo?r.a.createElement("a",{href:s.demo},"demo"):"",s.source?r.a.createElement("a",{href:s.source},"source"):""),r.a.createElement("div",{className:"icons"},r.a.createElement(B,{technologies:o})))},C=[{title:"What to watch?",features:["gives you a random movie","different filters for a more accurate search","list of the most popular movies for last couple of weeks"],instruments:[{for:"Frontend",used:["React.js"]},{for:"Background animation",used:["Particles.js"]},{for:"Movies database api",used:["themoviedb"]}],links:{source:"https://github.com/DREDNES/random-movie",demo:"./demo/whattowatch"},icons:["react"]},{title:"Multiple group chat",features:["2 default chatrooms","possibility to create more chatrooms","more than 2 users in a room","OOP"],instruments:[{for:"Backend",used:["Node.js"]},{for:"Frontend",used:["React.js"]},{for:"WebSockets",used:["Socket.io"]}],links:{source:"https://github.com/DREDNES/WebSocket-chat-React-Socket.io",demo:"https://multiple-group-chat.herokuapp.com"},icons:["node","react"]},{title:"VideoChat Roulette",features:["works even you if don't have a camera",'chat with "typing..." feature',"anonymous","lovely design"],instruments:[{for:"Backend",used:["Node.js"]},{for:"Frontend",used:["React.js"]},{for:"WebSockets",used:["themoviedb"]},{for:"WebRTC",used:["simple-peer.js"]}],links:{source:"https://github.com/DREDNES/video-chat-roulette",demo:"https://video-chat-roulette.herokuapp.com"},icons:["node","react"]},{title:"SelfieMaker",features:["save all selfies and then choose the best","delete selfie","save selfie to hardrive"],instruments:[{for:"Frontend",used:["React.js"]}],links:{source:"https://github.com/DREDNES/webcam-selfie-react",demo:"./demo/webcam-selfie/"},icons:["react"]},{title:"String generator",features:["opens brackets and generates string","counts all posible combinations of given string","writes result to database","nested brackets can be infinite"],instruments:[{for:"Backend",used:["PHP"]},{for:"Database",used:["MySQL"]}],links:{source:"https://github.com/DREDNES/random-string-generator"},icons:["php","mysql"]},{title:"Website for appoxius",features:["adaptive","lovely design"],instruments:[{for:"Frontend",used:["Bootstrap 4","Animation.css","Fontello.css","Grid Masonry"]}],links:{demo:"./demo/appoxius/"},icons:["html","css","bootstrap"]}],P=function(){return r.a.createElement("div",{name:"projects",className:"projects-page fullpage-centered"},r.a.createElement(h.a,{breakpointCols:Math.floor(window.innerWidth/370),className:"masonry-grid",columnClassName:"masonry-grid_column"},C.map((function(e,t){var a=e.title,n=e.features,s=e.instruments,o=e.links,c=e.icons;return r.a.createElement(M,{key:String(t),title:a,features:n,instruments:s,links:o,icons:c})}))))},q=[{href:"tel:+7 (999) 246 85 15",tooltip:"+7 (999) 246 85 15",icon:"icon-phone"},{href:"mailto:ava.narek@gmail.com",tooltip:"ava.narek@gmail.com",icon:"icon-mail-alt"},{href:"https://vk.com/ava.narek",tooltip:"VKontakte",icon:"icon-vkontakte"},{href:"https://www.facebook.com/narek.avagyan.319",tooltip:"Facebook",icon:"icon-facebook"},{href:"https://www.instagram.com/mr.avagyan/",tooltip:"Instagram",icon:"icon-instagram"},{href:"https://teleg.run/drednes",tooltip:"Telegram",icon:"icon-telegram"},{href:"https://wapp.click/79992468515",tooltip:"WhatsApp",icon:"icon-whatsapp"}],H=function(){return r.a.createElement("div",{className:"contacts-page fullpage-centered"},r.a.createElement("div",{className:"contacts"},q.map((function(e,t){var a=e.href,n=e.tooltip,s=e.icon;return r.a.createElement("a",{key:String(t),href:a,tooltip:n,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:s}))}))))};a(39);o.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(P,null),r.a.createElement(H,null))}),null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.0a829856.chunk.js.map