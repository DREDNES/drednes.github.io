(this["webpackJsonponline-radio"]=this["webpackJsonponline-radio"]||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(2),s=t(3),o=t(5),c=t(4),r=t(1),l=t(6),i=t(0),m=t.n(i),p=t(8),g=t.n(p),u=(t(15),function(e){var a=e.name,t=e.logo,n=e.onPlay,s=e.onStop,o=e.isPlaying,c=e.isLoading,r=e.thisIsCurrent;return m.a.createElement("div",{className:"station"},m.a.createElement("div",{className:"station-info"},m.a.createElement("img",{src:t,alt:"",className:"logo"}),m.a.createElement("div",{className:"title"},a)),r&&o&&m.a.createElement("div",{className:"isplaying-wrapper"},m.a.createElement("div",{className:"isplaying"},m.a.createElement("div",null),m.a.createElement("div",null),m.a.createElement("div",null))),m.a.createElement("button",{className:"play-button",type:"button",onClick:function(){return r&&o?s():n(a)}},r&&o?m.a.createElement("i",{className:"icon-pause"}):m.a.createElement("i",{className:"icon-play"})),c&&r&&m.a.createElement("div",{className:"loading-station"},m.a.createElement("i",{className:"icon-spin5 rotating"})))}),d=[{name:"Studio 21",src:"https://icecast-studio21.cdnvideo.ru/S21cl_1p",logo:"./logos/s21.png"},{name:"Radio Record",src:"http://air2.radiorecord.ru:9003//rr_320",logo:"./logos/record.png"},{name:"Energy",src:"http://ic6.101.ru:8000/stream/air/aac/64/99",logo:"./logos/energy.png"},{name:"Europa PLus",src:"http://emgregion.hostingradio.ru:8064/moscow.europaplus.mp3?d2943865",logo:"./logos/europaPlus.png"},{name:"Love Radio",src:"http://stream2.n340.com/12_love_64_reg_45?type=.aac&UID=13A88DCE491B3A91D3601BDF6E14DC0C",logo:"./logos/love.png"},{name:"Dorozhnoe",src:"http://dorognoe.hostingradio.ru:8000/dorognoe?bd6d0807",logo:"./logos/dorozhnoe.png"},{name:"Retro FM",src:"http://emgregion.hostingradio.ru:8064/moscow.retrofm.mp3?5e73",logo:"./logos/retrofm.png"},{name:"Mayak",src:"https://icecast-vgtrk.cdnvideo.ru/mayakfm_mp3_128kbps",logo:"./logos/mayak.png"},{name:"Disney",src:"https://disney.hostingradio.ru:8060/disney?radiostatistica=webofficial",logo:"./logos/disney.png"},{name:"Comedy Radio",src:"http://pub0101.101.ru:8000/stream/air/aac/64/202",logo:"./logos/comedy.png"},{name:"Eldoradio",src:"http://emgspb.hostingradio.ru/eldoradio128.mp3?836b2c6a",logo:"./logos/eldoradio.png"},{name:"Hermitage",src:"http://91.190.127.185:8000/live_test",logo:"./logos/hermitage.png"},{name:"Monte Carlo",src:"https://montecarlo.hostingradio.ru/montecarlo96.aacp",logo:"./logos/montecarlo.png"},{name:"Maximum",src:"https://maximum.hostingradio.ru/maximum96.aacp",logo:"./logos/maximum.png"},{name:"Business FM",src:"http://stream.businessfm.spb.ru:8000/live",logo:"./logos/business.png"},{name:"Radio Metro",src:"http://stream.radiometro.ru:8230/;stream.mp3",logo:"./logos/metro.png"}],h=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={stations:d,isShowing:!1},t.handleSearch=t.handleSearch.bind(Object(r.a)(t)),t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"handleSearch",value:function(e){var a=e.target.value,t=d.filter((function(e){var t=[e.name.toLowerCase(),a.toLowerCase()],n=t[1];return t[0].includes(n)}));this.setState({stations:t})}},{key:"render",value:function(){var e=this,a=this.props,t=a.onPlay,n=a.onStop,s=a.isPlaying,o=a.isLoading,c=a.currentStation,r=this.state,l=r.searchValue,i=r.stations,p=r.isShowing;return m.a.createElement("div",{className:"stations-wrapper ".concat(p?"show":""),id:"stations-wrapper"},m.a.createElement("button",{className:"toogler",type:"button",onClick:function(){e.setState({isShowing:!p})}},m.a.createElement("span",null,m.a.createElement("i",{id:"arrow-1",className:"icon-left-big ".concat(p?"rotate":"")}),"\xa0",m.a.createElement("b",null,"STATIONS"),"\xa0",m.a.createElement("i",{id:"arrow-2",className:"icon-left-big ".concat(p?"rotate":"")}))),m.a.createElement("div",{className:"stations"},m.a.createElement("div",{className:"search"},m.a.createElement("i",{className:"icon-search-1"}),m.a.createElement("input",{type:"text",onChange:this.handleSearch,value:l})),m.a.createElement("div",{className:"stations-items-wrapper"},m.a.createElement("div",{className:"stations-items"},i.map((function(e,a){var r=e.name,l=e.logo;return m.a.createElement(u,{key:String(a),isPlaying:s,isLoading:o,thisIsCurrent:c===r,name:r,logo:l,onPlay:t,onStop:n})}))))))}}]),a}(m.a.Component),E=function(e){var a=e.nowPlaying,t=e.isPlaying;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"cassetteOuter"},m.a.createElement("span",{className:"screw screw1"},m.a.createElement("span",{className:"screwInner"})),m.a.createElement("span",{className:"screw screw2"},m.a.createElement("span",{className:"screwInner"})),m.a.createElement("span",{className:"screw screw3"},m.a.createElement("span",{className:"screwInner"})),m.a.createElement("span",{className:"screw screw4"},m.a.createElement("span",{className:"screwInner"})),m.a.createElement("div",{className:"stickerOuter"},m.a.createElement("div",{className:"sticker"},m.a.createElement("span",{className:"a-side"},"A"),m.a.createElement("p",{className:"cursive"},a||"My Best Mixtape!"),m.a.createElement("span",{className:"stripe"}),m.a.createElement("span",{className:"c90"},"D-C90"),m.a.createElement("span",{className:"logo"},"T.F.H.\xae"),m.a.createElement("div",{className:"middle clearfix"},m.a.createElement("span",{className:"circle one"},m.a.createElement("span",{className:"teethBox ".concat(t?"rotating":"")},m.a.createElement("span",{className:"teeth"}),m.a.createElement("span",{className:"teeth"}),m.a.createElement("span",{className:"teeth"}))),m.a.createElement("div",{className:"window"},m.a.createElement("span",{className:"reelOne"}),m.a.createElement("span",{className:"reelTwo"})),m.a.createElement("span",{className:"circle two"},m.a.createElement("span",{className:"teethBox ".concat(t?"rotating":"")},m.a.createElement("span",{className:"teeth"}),m.a.createElement("span",{className:"teeth"}),m.a.createElement("span",{className:"teeth"})))))),m.a.createElement("div",{className:"cassetteBottom"},m.a.createElement("span",{className:"screw screw5"},m.a.createElement("span",{className:"screwInner"})),m.a.createElement("span",{className:"bottomShadow"},m.a.createElement("span",{className:"bottomHoles one"}),m.a.createElement("span",{className:"bottomHoles two"}),m.a.createElement("span",{className:"bottomHoles three"})),m.a.createElement("span",{className:"holes one"}),m.a.createElement("span",{className:"holes two"}))))},N=t(9),y=function(){function e(a){Object(n.a)(this,e);var t=new Map;d.forEach((function(e){var n=e.name,s=e.src;t.set(n,new N.Howl({src:s,format:["mp3","aac"],html5:!0,preload:!1,onload:a}))})),this.stations=t}return Object(s.a)(e,[{key:"play",value:function(e){this.stop(),this.stations.get(e).load(),this.stations.get(e).play()}},{key:"stop",value:function(){this.stations.forEach((function(e){e.stop(),e.unload()}))}}]),e}(),v=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(o.a)(this,Object(c.a)(a).call(this))).state={currentStation:null,isPlaying:!1,isLoading:!1},e.stationManager=new y((function(){e.setState({isLoading:!1,isPlaying:!0})})),e.play=e.play.bind(Object(r.a)(e)),e.stop=e.stop.bind(Object(r.a)(e)),e}return Object(l.a)(a,e),Object(s.a)(a,[{key:"play",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.state.currentStation,n=function(){e.setState({isLoading:!0,isPlaying:!1}),e.stationManager.play(t)},s=function(){e.setState({isLoading:!0,isPlaying:!1,currentStation:a}),e.stop(),e.stationManager.play(a)};a?s():n()}},{key:"stop",value:function(){this.setState({isPlaying:!1}),this.stationManager.stop()}},{key:"render",value:function(){var e=this.state,a=e.currentStation,t=e.isPlaying,n=e.isLoading;return m.a.createElement("div",{className:"App"},m.a.createElement("div",{className:"loading ".concat(n?"show":"")},"bufferizing...\xa0",m.a.createElement("i",{className:"icon-spin5 rotating"})),m.a.createElement(h,{onPlay:this.play,onStop:this.stop,isPlaying:t,isLoading:n,currentStation:a}),m.a.createElement("div",{className:"main-buts"},m.a.createElement("button",{type:"button",disabled:t||n||!a,className:"play-but inactive",onClick:this.play},m.a.createElement("i",{className:"icon-play"})),m.a.createElement("button",{type:"button",disabled:!t||n,className:"stop-but inactive",onClick:this.stop},m.a.createElement("i",{className:"icon-pause"}))),m.a.createElement(E,{nowPlaying:a,isPlaying:t}))}}]),a}(m.a.Component);g.a.render(m.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.809ba241.chunk.js.map