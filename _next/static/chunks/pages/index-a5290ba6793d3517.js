(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(507)}])},4972:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(5893),a=t(5989),r=t(1542),s=t(6486),o=t.n(s),c=t(5241),d=t.n(c),l=t(4362);function u(e){let n,t,{notes:s,frequency:c}=e;if(!s)return(0,i.jsx)("div",{children:"Notes are not specified."});let u=o().minBy(s,e=>Math.abs(e.difference(c)))||s[0],_=-u.difference(c),h=60>Math.abs(_)&&c>30,f=(n=_/60,h?n>1&&(n=1):n=0,n*=360),m=(t="Pull any guitar string",h&&_>=2&&(t="Tune down"),h&&_<=-2&&(t="Tune up"),h&&2>Math.abs(_)&&(t="Good!"),t),x=h?u.name:(0,i.jsx)(l.Z,{fontSize:"inherit"}),p=(e,n)=>e.addEventListener("transitionend",n,!1);return(0,i.jsxs)("div",{className:d().indicator,children:[(0,i.jsxs)("div",{className:d().indicatorMain,children:[(0,i.jsx)("div",{className:d().indicatorArrowDown}),(0,i.jsx)("div",{className:d().indicatorCircle,style:{rotate:"".concat(f+-18,"deg")}}),(0,i.jsx)("div",{className:d().indicatorText,children:(0,i.jsx)(a.Z,{mode:"out-in",children:(0,i.jsx)(r.Z,{addEndListener:p,classNames:"fade",children:(0,i.jsx)("p",{className:h?"":d().noteUnknown,children:x})},x)})})]}),(0,i.jsx)("div",{className:d().indicatorHint,children:(0,i.jsx)(a.Z,{mode:"out-in",children:(0,i.jsx)(r.Z,{addEndListener:p,classNames:"fade",children:(0,i.jsx)("p",{children:m})},m)})})]})}},1883:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(5893),a=t(7294),r=t(4972),s=t(2173),o=t(1543),c=t(7315),d=t.n(c);class l{get name(){return this._name}difference(e){return this._frequency-e}constructor(e,n){this._frequency=n,this._name=e}}class u extends a.Component{render(){return(0,i.jsxs)("div",{children:[!this.state.permissionGranted&&(0,i.jsxs)("div",{className:d(),children:[(0,i.jsx)("p",{className:d().warningIcon,children:(0,i.jsx)(s.Z,{fontSize:"inherit"})}),(0,i.jsxs)("p",{className:d().warningText,children:["Unable to access the microphone.",(0,i.jsx)("br",{}),"Please try the application from another device or reload the page."]})]}),this.state.permissionGranted&&this.state.frequency!==1/0&&(0,i.jsx)(r.default,{frequency:this.state.frequency,notes:this._notes})]})}_setFrequency(e){this.setState({frequency:Math.round(e)})}_setPermissionDenied(){this.setState({permissionGranted:!1})}componentDidMount(){var e,n,t,i,a;navigator.getUserMedia=(null===(e=navigator)||void 0===e?void 0:e.getUserMedia)||(null===(n=navigator)||void 0===n?void 0:n.webkitGetUserMedia)||(null===(t=navigator)||void 0===t?void 0:t.mozGetUserMedia),(null===(i=navigator)||void 0===i?void 0:i.getUserMedia)?null===(a=navigator)||void 0===a||a.getUserMedia({video:!1,audio:!0},e=>this._audioCallback(e),e=>{this._setPermissionDenied(),console.error(e)}):this._setPermissionDenied()}_audioCallback(e){let n=new AudioContext,t=n.createMediaStreamSource(e),i=n.createAnalyser();t.connect(i);let a=o.X.forFloat32Array(i.fftSize),r=new Float32Array(a.inputLength);this._play=()=>{i.getFloatTimeDomainData(r);let[e,t]=a.findPitch(r,n.sampleRate);t>.8&&this._setFrequency(e),console.debug(e,t),setTimeout(this._play,250)},this._play()}componentWillUnmount(){this._play=()=>{}}constructor(e){super(e),this.state={frequency:1/0,permissionGranted:!0},this._notes=[new l("e4",329.63),new l("B3",246.94),new l("G3",196),new l("D3",146.83),new l("A2",110),new l("E2",82.41)]}}},507:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(5893),a=t(3741),r=t.n(a),s=t(9008),o=t.n(s),c=t(2242),d=t.n(c),l=t(1883);function u(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Mic Guitar Tuner"}),(0,i.jsx)("meta",{name:"description",content:"This is a guitar tuner that uses the microphone to determine the frequency of the sound and help you to correctly adjust each string."}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("main",{className:"".concat(d().main," ").concat(r().className),children:(0,i.jsx)(l.default,{})})]})}},3741:function(e){e.exports={style:{fontFamily:"'__Roboto_b4911f', '__Roboto_Fallback_b4911f'",fontStyle:"normal"},className:"__className_b4911f"}},2242:function(e){e.exports={main:"Home_main__2uIek"}},5241:function(e){e.exports={indicator:"Indicator_indicator__d3oYs",indicatorMain:"Indicator_indicatorMain__5zS2_",indicatorCircle:"Indicator_indicatorCircle__fpe7A",indicatorArrowDown:"Indicator_indicatorArrowDown__Nj0zM",indicatorText:"Indicator_indicatorText__64Qsr",indicatorHint:"Indicator_indicatorHint__G51ug",noteUnknown:"Indicator_noteUnknown__g0uhc"}},7315:function(e){e.exports={warningText:"Tuner_warningText__2joCu",warningIcon:"Tuner_warningIcon__dEQTA"}},9008:function(e,n,t){e.exports=t(4605)}},function(e){e.O(0,[662,718,716,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);