document.addEventListener("DOMContentLoaded",(function(){let e=0,t=setInterval((function(){e>=100?(clearInterval(t),document.getElementById("loading-screen").style.opacity=0,setTimeout((function(){document.getElementById("loading-screen").style.display="none"}),500)):(e++,document.getElementById("loading-bar").style.width=e+"%",document.getElementById("loading-text").innerText=e+"%")}),10)}));