function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function blurBackground() {
  
}

function showDate() {
        var d=new Date();
        var curdate=d.getDate()+"-"+(d.getMonth()+1)+"-"+(d.getYear()+1900);
        window.document.getElementById("curdate").innerText=curdate;    
}