(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{L3sA:function(t,o,i){"use strict";i.r(o),i.d(o,"ion_toast",function(){return h});var e=i("2atR"),a=i("GTku"),r=(i("1vRN"),i("meiF")),n=i("39oe"),s=(i("B4Jq"),i("PdNu")),d=i("74mu");const l=(t,o)=>{const i=Object(r.a)(),e=Object(r.a)(),a=t.host||t,n=t.querySelector(".toast-wrapper");switch(e.addElement(n),o){case"top":e.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const t=Math.floor(a.clientHeight/2-n.clientHeight/2);n.style.top=`${t}px`,e.fromTo("opacity",.01,1);break;default:e.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return i.addElement(a).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(e)},p=(t,o)=>{const i=Object(r.a)(),e=Object(r.a)(),a=t.host||t,n=t.querySelector(".toast-wrapper");switch(e.addElement(n),o){case"top":e.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":e.fromTo("opacity",.99,0);break;default:e.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return i.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(e)},c=(t,o)=>{const i=Object(r.a)(),e=Object(r.a)(),a=t.host||t,n=t.querySelector(".toast-wrapper");switch(e.addElement(n),o){case"top":n.style.top="calc(8px + var(--ion-safe-area-top, 0px))",e.fromTo("opacity",.01,1);break;case"middle":const t=Math.floor(a.clientHeight/2-n.clientHeight/2);n.style.top=`${t}px`,e.fromTo("opacity",.01,1);break;default:n.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",e.fromTo("opacity",.01,1)}return i.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(e)},b=t=>{const o=Object(r.a)(),i=Object(r.a)(),e=t.host||t,a=t.querySelector(".toast-wrapper");return i.addElement(a).fromTo("opacity",.99,0),o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)},h=class{constructor(t){Object(e.o)(this,t),this.didPresent=Object(e.g)(this,"ionToastDidPresent",7),this.willPresent=Object(e.g)(this,"ionToastWillPresent",7),this.willDismiss=Object(e.g)(this,"ionToastWillDismiss",7),this.didDismiss=Object(e.g)(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=t=>{const o=t.detail.role;if(Object(s.j)(o)){const t=this.getButtons().find(t=>"cancel"===t.role);this.callButtonHandler(t)}}}connectedCallback(){Object(s.f)(this.el)}async present(){await Object(s.e)(this,"toastEnter",l,c,this.position),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(void 0,"timeout"),this.duration))}dismiss(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,t,o,"toastLeave",p,b,this.position)}onDidDismiss(){return Object(s.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return Object(s.h)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(t=>"string"==typeof t?{text:t}:t):[]}async buttonClick(t){const o=t.role;return Object(s.j)(o)||await this.callButtonHandler(t)?this.dismiss(void 0,o):Promise.resolve()}async callButtonHandler(t){if(t&&t.handler)try{if(!1===await Object(s.n)(t.handler))return!1}catch(o){console.error(o)}return!0}renderButtons(t,o){if(0===t.length)return;const i=Object(a.b)(this),r={"toast-button-group":!0,[`toast-button-group-${o}`]:!0};return Object(e.j)("div",{class:r},t.map(t=>Object(e.j)("button",{type:"button",class:g(t),tabIndex:0,onClick:()=>this.buttonClick(t),part:"button"},Object(e.j)("div",{class:"toast-button-inner"},t.icon&&Object(e.j)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===i&&Object(e.j)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))))}render(){const t=this.getButtons(),o=t.filter(t=>"start"===t.side),i=t.filter(t=>"start"!==t.side),r=Object(a.b)(this),s={"toast-wrapper":!0,[`toast-${this.position}`]:!0};return Object(e.j)(e.c,{style:{zIndex:`${6e4+this.overlayIndex}`},class:Object(d.a)(this.color,Object.assign(Object.assign({[r]:!0},Object(d.b)(this.cssClass)),{"toast-translucent":this.translucent})),tabindex:"-1",onIonToastWillDismiss:this.dispatchCancelHandler},Object(e.j)("div",{class:s},Object(e.j)("div",{class:"toast-container",part:"container"},this.renderButtons(o,"start"),Object(e.j)("div",{class:"toast-content"},void 0!==this.header&&Object(e.j)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(e.j)("div",{class:"toast-message",part:"message",innerHTML:Object(n.a)(this.message)})),this.renderButtons(i,"end"))))}get el(){return Object(e.k)(this)}},g=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},Object(d.b)(t.cssClass));h.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}}}]);