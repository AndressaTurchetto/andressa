document.addEventListener("DOMContentLoaded",(function(){"#inicio"!==window.location.hash&&(window.location.hash="#inicio");const t=document.getElementById("backToTop"),e=document.getElementById("whatsappButton");document.addEventListener("scroll",(function(){window.scrollY>100?(t.style.display="flex",e.style.display="flex",setTimeout((()=>{t.style.opacity="1",e.style.opacity="1"}),10)):(t.style.opacity="0",e.style.opacity="0",setTimeout((()=>{t.style.display="none",e.style.display="none"}),500))})),t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),e.addEventListener("click",(function(){window.open("https://wa.me/5599999999999","_blank")}))}));