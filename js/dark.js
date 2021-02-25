// 深色模式设置 
function switchNightMode() 
{ var body = document.body;
 if(body.classList.contains('dark')){ document.body.classList.remove('dark'); localStorage.setItem('dark','0'); $('#nightMode').removeClass("fa-lightbulb-o").addClass("fa-moon-o"); return; } 
 else { document.body.classList.add('dark'); localStorage.setItem('dark','1'); $('#nightMode').removeClass("fa-moon-o").addClass("fa-lightbulb-o"); return; } }
