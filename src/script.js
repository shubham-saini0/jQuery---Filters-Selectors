var products = [{
  "id": "100",
  "name": "iPhone 4S",
  "brand": "Apple",
  "os": "iOS"
},
{
  "id": "101",
  "name": "Moto X",
  "brand": "Motorola",
  "os": "Android"	
},
{
  "id": "102",
  "name": "iPhone 6",
  "brand": "Apple",
  "os": "iOS"
},
{
  "id": "103",
  "name": "Samsung Galaxy S",
  "brand": "Samsung",
  "os": "Android"
},
{
  "id": "104",
  "name": "Google Nexus",
  "brand": "ASUS",
  "os": "Android"
},
{
  "id": "105",
  "name": "Surface",
  "brand": "Microsoft",
  "os": "Windows"
}];

var a_brand=[];
var a_os=[];
var product_display=[];


for(let i=0;i<products.length;i++)
{
a_brand[i]=products[i].brand;
}

for(let i=0;i<products.length;i++)
{
a_os[i]=products[i].os;
}

function getUnique(arr){
  let temp = [];
    for(let i of arr) {
      if(temp.indexOf(i) === -1) {
          temp.push(i);
      }
  }
  return temp;
}
a_brand=getUnique(a_brand);
a_os=getUnique(a_os);


var cont1='<select name="panel1" id="panel1" onchange="b1()"><option value="All" selected>All</option>';

var cont2='<select name="panel2" id="panel2" onchange="b1()"><option value="All" selected>All</option>';
//creating brand dropdown
for(var i=0;i<a_brand.length;i++)
{
cont1+='<option value="'+a_brand[i]+'" >'+a_brand[i]+'</option>';
}
cont1+='</select>';
//creating os dropdown
for(var i=0;i<a_os.length;i++)
{
cont2+='<option value="'+a_os[i]+'">'+a_os[i]+'</option>';
}
cont2+='</select>';
//creating table
var content='Brand:'+cont1+'Operating System'+cont2;
content+='<table><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>';
for(var i=0;i<products.length;i++)
content+='<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td class="brand">'+products[i].brand+'</td><td class="os">'+products[i].os+'</td><td><a href="#" class="close">X</a></td></tr>';
content+="</table>";
content+='<input type="text" id="myInput" ><input type="button" id="btn" value="Submit">';

//function to show complete table
document.getElementById("wrapper").innerHTML=content;
product_display=[];
$(document).ready(function(){
  $("a").click(function(){
    $(this).parent().parent().hide();
  });
});
//function called onchange of filter
function b1(){
  var x=document.getElementById("panel1").value;
  var y=document.getElementById("panel2").value;
$("tr").each(function(){
  var x1=$(this).children(".brand").html();
  var y1=$(this).children(".os").html();
 console.log("x:"+x+"x1"+x1);
 console.log("y:"+y+"y1"+y1); 
 if(x!="All" && y!="All")
  {
    if(x1==x && y1==y)
    $(this).show();
    else if(x1!=x && y1==y)
    $(this).hide();
    else if(x1==x && y1!=y)
    $(this).hide(); 
    else if(x1!=x && y1!=y)
    $(this).hide();
  }
  else if(x!="All" && y=="All")
  {
    if(x1==x && y1==y)
    $(this).show();
    else if(x1!=x && y1==y)
    $(this).show();
    else if(x1==x && y1!=y)
    $(this).show(); 
    else if(x1!=x && y1!=y)
    $(this).hide();
  }
  else if(x=="All" && y!="All")
  {
    if(x1==x && y1==y)
    $(this).show();
    else if(x1!=x && y1==y)
    $(this).show();
    else if(x1==x && y1!=y)
    $(this).show(); 
    else if(x1!=x && y1!=y)
    $(this).hide();
  }
  else if(x=="All" && y=="All")
    $(this).show();
});
}
/*
function display() 
 {
  var ct1='Brand:'+cont1+'Operating System'+cont2;
  ct1+='<table><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>';
  for(var i=0;i<product_display.length;i++)
    ct1+='<tr><td>'+product_display[i].id+'</td><td>'+product_display[i].name+'</td><td class="brand">'+product_display[i].brand+'</td><td class="os">'+product_display[i].os+'</td><td><a href="#" class="close">X</a></td></tr>';
  ct1+="</table>";
  ct1+='<input type="text" id="myInput" ><input type="button" id="btn" value="Submit">';
  document.getElementById("wrapper").innerHTML=ct1;
  product_display=[];
  $(document).ready(function(){
    $("a").click(function(){
      $(this).parent().parent().hide();
    });
  });
 }
*/
 $(document).ready(function(){
  $("#btn").on("click", function() {
    var value = $("#myInput").val().toLowerCase();
    $("tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1 )
    });
  });
});
