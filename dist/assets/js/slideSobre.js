document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("headline-scroll"),t=e.cloneNode(!0);e.parentNode.appendChild(t);const n=e.scrollWidth;e.style.width=`${n}px`,t.style.width=`${n}px`}));const styleSheet=document.createElement("style");styleSheet.type="text/css",styleSheet.innerText="\n@keyframes scroll {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(-50%);\n    }\n}",document.head.appendChild(styleSheet);