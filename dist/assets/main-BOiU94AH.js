(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const a="https://developer.nps.gov/api/v1/",c="N1CTP81TzCHFIlFtCvTgdaQ2JDEoJVz1a5qCqfz0",l="glac",u={method:"GET",headers:{"X-Api-Key":c}};async function d(){let e={};const t=await fetch(a+"parks?parkCode="+l,u);if(t.ok)e=await t.json();else throw new Error("response not ok");return e.data[0]}function p(e){return e.find(t=>t.type==="Mailing")}function f(e){return e.find(o=>o.type==="Voice").phoneNumber}function m(e){return[{name:"Current Conditions &#x203A;",link:"conditions.html",description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",description:"Learn about the visitor centers in the park."}].map((i,n)=>(i.image=e[n+2].url,i))}function h(e){return`
      <a href="/" class="hero-banner__title">${e.name}</a>
      <p class="hero-banner__subtitle">
        <span>${e.designation}</span>
        <span>${e.states}</span>
      </p>`}function g(e,t){const o=`
      <h1>${e.fullName}</h1>
      <p>${e.description}</p>`,i=t.map(n=>`
      <a href="${n.link}" class="figure-content">
        <img src="${n.image}" alt="${n.name} image">
        <div class="content">
          <h2>${n.name}</h2>
          <p>${n.description}</p>
        </div>
      </a>
    `).join("");return{introText:o,mediaCards:i}}function y(e){const t=p(e.addresses),o=f(e.contacts.phoneNumbers);return`
      <div class="container">
        <p>Contact Info</p>
        <ul>
          <li>Mailing Address:</li>
          <li>
            <a href="">${t.line1}<br>${t.city}, ${t.stateCode} ${t.postalCode}</a>
          </li>
        </ul>
        <ul>
          <li>Phone:</li>
          <li>
            <a href="">${o}</a>
          </li>
        </ul>
      </div>`}function v(e){b(e),k(e)}function b(e){const t=document.querySelector(".disclaimer > a");t.href=e.url,t.innerHTML=e.fullName,document.querySelector("head > title").textContent=e.fullName,document.querySelector(".hero-banner > img").src=e.images[0].url,document.querySelector(".hero-banner__content").innerHTML=h(e)}function k(e){document.querySelector("#park-footer").innerHTML=y(e)}function C(e,t){const{introText:o,mediaCards:i}=g(e,t);document.querySelector(".text-content").innerHTML=o,document.querySelector(".figure-container").innerHTML=i}async function L(){const e=await d(),t=m(e.images);v(e),C(e,t)}L();
