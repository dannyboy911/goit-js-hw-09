!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=document.querySelector("#myParagraph a"),i=null;t.addEventListener("click",(function(){t.disabled=!0,a.disabled=!1,d.style.visibility="hidden",i=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(){a.disabled=!0,t.disabled=!1,d.style.visibility="visible",clearInterval(i)}))}();
//# sourceMappingURL=01-color-switcher.8728e6d4.js.map
