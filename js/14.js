r=document.createElement("Button")
r.setAttribute("onclick","start();");
r.innerHTML="click"
document.body.appendChild(r);


function start()
{
   p=document.createElement("Button");
   p.setAttribute("onclick","multiple();"); 
   p.innerHTML="start";
   document.body.appendChild(p)
   
   q=document.createElement("Button");
   q.setAttribute("onclick","run();");
   document.body.appendChild(q)
   q.innerHTML="run";
}

function multiple()
{
    var x = document.createElement("input");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "enter the number:");
    x.setAttribute("id","n1");
    document.body.appendChild(x);
  
   var y = document.createElement("input");
   y.setAttribute("type", "text");
   y.setAttribute("placeholder", "enter the range:");
   y.setAttribute("id","n2");
   document.body.appendChild(y);
  
}

function run()
{
  m1 = Number(document.getElementById("n1").value);      
  m2 = Number(document.getElementById("n2").value);
  
  var  i=1; 
  while(i<=m2)
  {
    document.write(i+  "  X  "  +m1+ "  =  "  +i*m1+ "<br>");
    i++;
  }
}





















