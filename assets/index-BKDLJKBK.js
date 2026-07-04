import{a as f,S as y,i as h}from"./vendor-BezXTN6Z.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const A="https://pixabay.com/api/",b="56558379-0c5680570dfc8fcb45f11e8b6",I={image_type:"photo",orientation:"horizontal",safesearch:!0};function P(a){return f.get(A,{params:{key:b,q:a,...I}}).then(s=>s.data)}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function n(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function S({webformatURL:a,largeImageURL:s,tags:r,likes:i,views:e,comments:t,downloads:l}){const d=n(r);return`
    <li class="gallery-item">
      <a class="gallery-link" href="${n(s)}">
        <img class="gallery-image" src="${n(a)}" alt="${d}" loading="lazy" />
        <ul class="image-stats">
          <li class="image-stat">
            <span class="image-stat-label">Likes</span>
            <span class="image-stat-value">${n(i)}</span>
          </li>
          <li class="image-stat">
            <span class="image-stat-label">Views</span>
            <span class="image-stat-value">${n(e)}</span>
          </li>
          <li class="image-stat">
            <span class="image-stat-label">Comments</span>
            <span class="image-stat-value">${n(t)}</span>
          </li>
          <li class="image-stat">
            <span class="image-stat-label">Downloads</span>
            <span class="image-stat-value">${n(l)}</span>
          </li>
        </ul>
      </a>
    </li>
  `}function q(a){m.insertAdjacentHTML("beforeend",a.map(S).join("")),L.refresh()}function u(){m.innerHTML=""}function v(){p.classList.remove("is-hidden")}function w(){p.classList.add("is-hidden")}const g=document.querySelector(".form"),_=g.elements["search-text"],o={emptyQuery:"Please enter a search query.",noResults:"Sorry, there are no images matching your search query. Please try again!",requestFailed:"Something went wrong. Please try again later.",missingApiKey:"Pixabay API key is missing. Add VITE_PIXABAY_API_KEY."},E={position:"topRight",timeout:3500,transitionIn:"fadeInDown"};function c(a){h.error({...E,message:a})}function O(a){a.preventDefault();const s=_.value.trim();if(!s){u(),c(o.emptyQuery);return}u(),v(),P(s).then(({hits:r})=>{if(!r.length){c(o.noResults);return}q(r)}).catch(r=>{const i=r.message==="MISSING_PIXABAY_API_KEY"?o.missingApiKey:o.requestFailed;c(i)}).finally(()=>{w()})}g.addEventListener("submit",O);
//# sourceMappingURL=index-BKDLJKBK.js.map
