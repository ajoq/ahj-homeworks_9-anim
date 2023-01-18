(()=>{"use strict";(new class{constructor(){this.collapseButtons=Array.from(document.querySelectorAll('[data-toggle="collapse"]'))}init(){this.collapseButtons.forEach((t=>{const e=t.dataset.target,n=document.getElementById(e);t.addEventListener("click",(()=>{const t=n.querySelector(".collapse-body").getBoundingClientRect();n.style.maxHeight?n.style.maxHeight="":n.style.maxHeight=`${t.height}px`}))}))}}).init();const t=document.querySelector(".chat-widget");new class{constructor(t){this.parentEl=t,this.head=document.querySelector("head")}init(){this.parentEl.innerHTML=this.constructor.markup,this.head.insertAdjacentHTML("beforeend",this.constructor.styles),this.circle=document.querySelector(".chat-widget-circle"),this.chat=document.querySelector(".chat-widget-modal"),this.closeChatBtn=document.querySelector(".chat-widget-modal-close-btn"),this.events()}events(){this.circle.addEventListener("click",(()=>this.toggleClass())),this.closeChatBtn.addEventListener("click",(()=>this.toggleClass()))}toggleClass(){this.circle.classList.toggle("chat-widget-hide"),this.chat.classList.toggle("chat-widget-hide")}static get markup(){return'\n            <div class="chat-widget-circle chat-widget-animation"></div>\n            <div class="chat-widget-modal chat-widget-animation chat-widget-hide">\n                <div class="chat-widget-modal-header">\n                    <h5 class="chat-widget-modal-title">Напишите нам</h5>\n                    <button class="chat-widget-modal-close-btn" type="button"><sup>x</sup></button>\n                </div>\n                <div class="chat-widget-modal-body">\n                    <form class="chat-widget-modal-form">\n                        <textarea class="chat-widget-modal-form-textarea" name="message" id="message" cols="30" rows="10"></textarea>\n                        <button class="chat-widget-modal-form-btn-submit" type="submit">Отправить</button>\n                    </form>\n                </div>\n            </div>            \n        '}static get styles(){return"\n            <style>\n                .chat-widget-circle {\n                    position: absolute;\n                    right: 0;\n                    bottom: 0;\n                    margin-right: 45px;\n                    margin-bottom: 45px;\n                    width: 50px; \n                    height: 50px;\n                    background: red;\n                    border-radius: 50%;\n                    z-index: 500;\n                    cursor: pointer;\n                }\n                \n                .chat-widget-circle:hover {\n                    transform: scale(1.2);\n                }\n                \n                .chat-widget-animation {\n                    transition: all linear 100ms;\n                }\n                \n                .chat-widget-hide {\n                    opacity: 0;\n                    visibility: hidden;\n                }\n                \n                .chat-widget-modal {\n                    position: absolute;\n                    right: 0;\n                    bottom: 0;\n                    margin-right: 45px;\n                    margin-bottom: 45px;\n                    z-index: 1000;\n                    display: inline-block;\n                    border: 1px solid #dee2e6;\n                    border-radius: 6px;\n                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n                    background-color: #fff;\n                }\n                \n                .chat-widget-modal-header {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding: 15px 15px 0;\n                }\n                \n                .chat-widget-modal-title {\n                    font-family: Arial, Helvetica, sans-serif;\n                    font-size: 20px;\n                    margin: 0;\n                }\n                \n                .chat-widget-modal-close-btn {\n                    background: unset;\n                    border: 0;\n                    font-size: 20px;\n                    cursor: pointer;\n                    padding: 5px;\n                    color: grey;\n                }\n                \n                .chat-widget-modal-close-btn:hover {\n                    color: #000;\n                }\n                \n                .chat-widget-modal-body {\n                    padding: 15px;\n                }\n                \n                .chat-widget-modal-form {\n                    display: flex;\n                    flex-direction: column;\n                }\n                \n                .chat-widget-modal-form-textarea {\n                    outline: 0;\n                }\n                \n                .chat-widget-modal-form-btn-submit {\n                    margin-top: 10px;\n                    color: #fff;\n                    background-color: #0d6efd;\n                    padding: 6px 12px;\n                    border: 1px solid #0d6efd;\n                    border-radius: 6px;\n                    cursor: pointer;\n                    font-size: 16px;\n                }\n                \n                .chat-widget-modal-form-btn-submit:hover {\n                    background-color: #0b5ed7;\n                    border: 1px solid #0b5ed7;\n                }\n                \n                \n                .square{\n                    width: 60px;\n                    height: 60px;\n                    background: #3fc878;\n                    position: absolute;\n                    left: 0;\n                }       \n            </style>        \n        "}}(t).init(),(new class{constructor(){this.likerDiv=document.querySelector(".liker"),this.likerBtn=document.querySelector(".liker-btn"),this.isDown=!1,this.likerId=null}init(){this.events()}events(){this.likerBtn.addEventListener("mousedown",(()=>{this.isDown=!0,this.doLike()})),this.likerBtn.addEventListener("mouseup",(()=>{this.isDown=!1})),this.likerBtn.addEventListener("mouseleave",(()=>{this.isDown=!1}))}doLike(){if(clearTimeout(this.likerId),!this.isDown)return;const t=document.createElement("div");t.classList.add("liker-img"),this.likerDiv.append(t);const e=this.constructor.getRandomInt(3);t.classList.add(`liker-img-animation${e}`),t.addEventListener("animationend",(()=>{t.remove()})),this.likerId=setTimeout((()=>this.doLike()),100)}static getRandomInt(t){return Math.floor(Math.random()*t+1)}}).init()})();