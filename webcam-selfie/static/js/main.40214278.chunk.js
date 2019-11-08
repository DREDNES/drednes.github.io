(this["webpackJsonpwebcam-photo"]=this["webpackJsonpwebcam-photo"]||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/close.777b93c6.svg"},12:function(e,t,a){e.exports=a.p+"static/media/save.c293f3fc.svg"},13:function(e,t,a){e.exports=a.p+"static/media/delete.32af59c4.svg"},17:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),c=a(7),l=a(8),o=a(15),u=a(9),m=a(16),d=a(10),v=a(11),h=a.n(v),f=a(12),p=a.n(f),g=a(13),w=a.n(g);function E(e){var t=e.source;return r.a.createElement("div",null,r.a.createElement("div",{className:"ImageView"},r.a.createElement("img",{alt:"",src:t,style:{maxWidth:"600px"}})),r.a.createElement("div",{className:"closeImageView"},r.a.createElement("input",{alt:"",type:"image",onClick:function(){return e.close()},src:h.a})),r.a.createElement("div",{className:"actionsImageView"},r.a.createElement("input",{alt:"",type:"image",style:{backgroundColor:"#6fff36"},onClick:function(){return function(){var e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download","selfie.jpg"),e.click()}()},src:p.a}),r.a.createElement("input",{alt:"",type:"image",style:{backgroundColor:"#ff5c36"},onClick:function(){return e.delete()},src:w.a})))}function y(e){var t=e.source,a=e.open;return r.a.createElement("div",null,r.a.createElement("img",{alt:"",src:t,style:{width:"200px",margin:"10px 5px 0px 5px",cursor:"pointer"},onClick:function(){return a(t)}}))}function k(e){var t=e.start,a=e.error;return r.a.createElement("div",null,r.a.createElement("h1",null,"Make selfies from your WebCam!"),a?r.a.createElement("h3",null,"Ooh, i can't get your camera",r.a.createElement("span",{role:"img","aria-label":"sad emoji"},"\ud83d\ude1e")):r.a.createElement("div",null,r.a.createElement("h3",null,"Click Start and allow access to your camera"),r.a.createElement("div",{className:"Buttons-wrap",style:{marginTop:"-1em"}},r.a.createElement("button",{style:{padding:"0.5em 1em"},onClick:function(){return t()}},"START"))))}a(23),a(24),a(25);var S=a(14),b=a.n(S),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={canvas:!1,stream:null,images:[],fullScreenPreview:"",currentImage:"",width:window.innerWidth,error:null},a.previewOpen=function(e){return a.setState({fullScreenPreview:e})},a.previewDelete=function(){var e=a.state.images.indexOf(a.state.fullScreenPreview),t=a.state.images;t.splice(e,1),a.setState({images:t}),a.previewClose()},a.previewClose=function(){return a.setState({fullScreenPreview:""})},a.updateDimensions=Object(d.debounce)((function(){return a.setState({width:window.innerWidth})}),200),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"startVideo",value:function(){var e=this,t=function(t){console.log(t),e.setState({error:t})},a=function(t){e.setState({stream:t});var a=document.querySelector("video");"srcObject"in a?a.srcObject=t:a.src=window.URL.createObjectURL(t)};navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,"undefined"===typeof navigator.mediaDevices.getUserMedia?navigator.getUserMedia({video:!0,audio:!1},a,t):navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(a).catch(t)}},{key:"stopVideo",value:function(){this.state.stream&&this.state.stream.getTracks().forEach((function(e){return e.stop()})),this.setState({stream:null})}},{key:"capture",value:function(){if(this.state.stream){var e=document.querySelector("video"),t=e.offsetWidth,a=e.offsetHeight,n=document.querySelector("canvas");n.width=t,n.height=a,n.getContext("2d").drawImage(e,0,0,t,a),this.setState({canvas:!0})}}},{key:"saveCapture",value:function(){if(this.state.canvas){var e=this.state.images;e.push(document.querySelector("canvas").toDataURL("image/jpeg")),this.setState({images:e}),this.setState({canvas:!1}),this.clearCanvas()}}},{key:"deleteCapture",value:function(){this.state.canvas&&(this.setState({canvas:!1}),this.clearCanvas())}},{key:"clearCanvas",value:function(){var e=document.querySelector("video"),t=e.offsetWidth,a=e.offsetHeight,n=document.querySelector("canvas");n.width=t,n.height=a,n.getContext("2d").clearRect(0,0,t,a)}},{key:"deleteAllImages",value:function(){this.setState({images:[]})}},{key:"renderButtonsSet",value:function(){var e=this;return this.state.stream&&!this.state.canvas?r.a.createElement("div",{className:"Buttons-wrap"},r.a.createElement("button",{onClick:function(){return e.capture()}},"Selfie!"),r.a.createElement("button",{onClick:function(){return e.stopVideo()}},"Go back")):this.state.canvas?r.a.createElement("div",{className:"Buttons-wrap"},r.a.createElement("button",{onClick:function(){return e.saveCapture()}},"Save"),r.a.createElement("button",{onClick:function(){return e.deleteCapture()}},"Delete")):void 0}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"renderSlider",value:function(){var e=this,t=this.state.width,a={infinite:!0,speed:500,slidesToShow:this.state.images.length<Math.ceil(t/250)?this.state.images.length:Math.ceil(t/250),slidesToScroll:1},n=230*this.state.images.length<t-50?"".concat(230*this.state.images.length,"px"):"95%";return r.a.createElement("div",{className:"captures",style:{width:n}},r.a.createElement(b.a,Object.assign({className:"slick"},a),this.state.images.map((function(t,a){return r.a.createElement(y,{key:a,source:t,open:e.previewOpen})}))))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},this.renderButtonsSet(),r.a.createElement("div",{className:"Video-zone"},this.state.stream?r.a.createElement("div",null,r.a.createElement("canvas",{style:{zIndex:15}}),r.a.createElement("video",{width:"100%",autoPlay:!0}),r.a.createElement("div",{className:"boundary"})):r.a.createElement(k,{start:function(){return e.startVideo()},error:this.state.error})),this.renderSlider(),this.state.fullScreenPreview&&r.a.createElement("div",null,r.a.createElement(E,{source:this.state.fullScreenPreview,close:this.previewClose,delete:this.previewDelete})),0!==this.state.images.length&&r.a.createElement("button",{className:"deleteAllBut",onClick:function(){return e.deleteAllImages()}},"Delete all selfies")))}}]),t}(r.a.Component);s.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.40214278.chunk.js.map