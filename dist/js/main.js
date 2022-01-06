(()=>{"use strict";const e=({duration:e,timing:t,draw:o})=>{let n=performance.now();requestAnimationFrame((function r(l){let a=(l-n)/e;a>1&&(a=1);let c=t(a);o(c),a<1&&requestAnimationFrame(r)}))},t=e=>{let t=document.documentElement.scrollTop+e.getBoundingClientRect().top;window.scrollTo({top:t,behavior:"smooth"})},o=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.querySelector(".loader-box"),r=document.createElement("div");try{if(!o)throw new Error("Отсутствует элемент формы!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),a={};o.append(r),n.style.display="flex",l.forEach(((e,t)=>{a[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?"0"!==t.textContent&&(a[e.id]=t.textContent):"input"===e.type&&(a[e.id]=t.value)}));let c=(e=>{const t={user_name:/[а-яА-я\-\ ]/g,user_email:/[a-zA-Z0-9\@\-\_\.\!\~\*\']/g,user_phone:/[\d\()\-]/g,user_message:/[^\d\W]/g};let o={};return e.forEach((e=>{!1===t[e.name].test(e.value)?o[e.name]=!1:o[e.name]=!0})),o})(e);var s;Object.values(c).includes(!1)?alert("Данные не валидны!"):(s=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{n.style.display="none",e.value="",r.textContent="Спасибо! С Вами скоро свяжутся."}))})).catch((e=>{n.style.display="none",r.textContent="Возникла ошибка"}))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),r=document.getElementById("timer-days"),l=e=>e<10?`0${e}`:e;let a;const c=()=>{a=(()=>{let e=(new Date("25 december 2021").getTime()-(new Date).getTime())/1e3;return{day:Math.floor(e/3600/24),hour:Math.floor(e/3600%24),minute:Math.floor(e/60%60),second:Math.floor(e%60),timeRemaining:e}})(),t.textContent=l(a.hour),o.textContent=l(a.minute),n.textContent=l(a.second),r.textContent=l(a.day)};c(),a.timeRemaining>0?setInterval(c,1e3):(t.textContent="00",o.textContent="00",n.textContent="00",r.textContent="00")})(),(()=>{const e=document.querySelector("menu"),o=document.querySelector("body"),n=()=>{e.classList.toggle("active-menu")};o.addEventListener("click",(o=>{if(o.target.closest(".menu")&&n(),"A"===o.target.tagName&&o.target.closest("menu")&&(o.preventDefault(),n(),o.target.closest("li"))){let e=document.querySelector(o.target.getAttribute("href"));t(e)}o.target.closest("menu")||o.target.closest(".menu")||e.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),n=o.querySelector(".popup-content"),r=document.documentElement.scrollWidth;o.style.display="block";let l=n.getBoundingClientRect().left;o.style.display="none";const a=r-l;t.forEach((t=>{t.addEventListener("click",(()=>{o.style.display="block",window.screen.width>768&&e({duration:300,timing:e=>1-e,draw(e){n.style.transform=`translateX(${e*a-50}px)`}})}))})),o.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(window.screen.width>768?(e({duration:300,timing:e=>e,draw(e){n.style.transform=`translateX(${e*a}px)`}}),setTimeout((()=>{o.style.display="none"}),350)):o.style.display="none")}))})(),(()=>{const e=document.querySelector("main").querySelector('[href="#service-block"]'),o=document.getElementById("service-block");e.addEventListener("click",(e=>{e.preventDefault(),t(o)}))})(),((t=100)=>{const o=document.querySelectorAll("input.calc-item"),n=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),s=document.getElementById("total");o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")}))}));const i=(e=>{let t;return o=>{clearTimeout(t),t=setTimeout(e,500,o)}})((()=>{const o=+r.options[r.selectedIndex].value,n=+l.value;let i=0,d=1,u=1;a.value>1&&(d+=+a.value/10),c.value&&c.value<5?u=2:c.value&&c.value<10&&(u=1.5),i=o&&n?t*o*n*d*u:0,e({duration:700,timing:e=>Math.pow(e,2),draw(e){s.textContent=Math.floor(e*i)}})}));n.addEventListener("input",(e=>{e.target!==r&&e.target!==l&&e.target!==a&&e.target!==c||i()}))})(100),(()=>{const e=document.querySelectorAll('form[name="user_form"]'),t=document.querySelector('input[placeholder="Ваше сообщение"]'),o=/[^а-яА-я\-\ ]/g,n=/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g,r=/[^\d\()\-]/g,l=/[^\d\W]/g,a=function(e,t){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(t,"")}))},c=function(e,t){e.addEventListener("blur",(e=>{let o=e.target.value;o=o.trim(),o=o.replace(t,""),o=o.replace(/^\-{0,}|\-{0,}$/g,""),o=o.replace(/^\ {0,}|\ {0,}$/g,""),"text"===e.target.getAttribute("type")&&e.target.value&&(o=o.split(/\ +/).map((e=>e[0].toUpperCase()+e.slice(1).toLowerCase())).join(" ")),"email"!==e.target.getAttribute("type")&&(o=o.replace(/\-+/g,"-")),e.target.value="",e.target.value=o}))};e.forEach((e=>{const s=e.querySelector('input[type="text"]'),i=e.querySelector('input[type="email"]'),d=e.querySelector('input[type="tel"]');a(s,o),a(t,l),a(i,n),a(d,r),c(s,o),c(i,n),c(d,r)}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),o=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{if(t.target.closest(".service-header-tab")){const n=t.target.closest(".service-header-tab");o.forEach(((t,o)=>{t===n?(t.classList.add("active"),e[o].classList.remove("d-none")):(t.classList.remove("active"),e[o].classList.add("d-none"))}))}}))})(),((e,t,o,n="dot-active",r="slide-active",l,a,c)=>{if(e&&t&&o){const s=document.querySelector(`.${e}`),i=document.querySelectorAll(`.${t}`),d=document.querySelector(`.${o}`);if(!(s&&i&&d))return;{(()=>{for(let e=0;e<i.length;e++){let e=document.createElement("li");e.className="dot",d.append(e)}})();const e=document.querySelectorAll(".dot");e[0].classList.add(`${n}`);let t,o=0,u=2e3;const m=(e,t,o)=>{e[t].classList.remove(o)},p=(e,t,o)=>{e[t].classList.add(o)},g=()=>{m(i,o,`${r}`),m(e,o,`${n}`),o++,o>=i.length&&(o=0),p(i,o,`${r}`),p(e,o,`${n}`)},y=(e=1500)=>{t=setInterval(g,e)},v=()=>{clearInterval(t)};s.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(`.${l}, .dot`)&&(m(i,o,`${r}`),m(e,o,`${n}`),t.target.matches(`#${c}`)?o++:t.target.matches(`#${a}`)?o--:t.target.classList.contains("dot")&&e.forEach(((e,n)=>{t.target===e&&(o=n)})),o>=i.length&&(o=0),o<0&&(o=i.length-1),p(i,o,`${r}`),p(e,o,`${n}`))})),s.addEventListener("mouseenter",(e=>{e.target.matches(`.${l}, .dot`)&&v()}),!0),s.addEventListener("mouseleave",(e=>{e.target.matches(`.${l}, .dot`)&&y(u)}),!0),y(u)}}})("portfolio-content","portfolio-item","portfolio-dots","dot-active","portfolio-item-active","portfolio-btn","arrow-left","arrow-right"),o({formId:"form1",someElem:[{type:"block",id:"total"}]}),o({formId:"form2",someElem:[{type:"block",id:"total"}]}),o({formId:"form3",someElem:[{type:"block",id:"total"}]})})();