var param;
var paramValue;
var query=window.location.search.substring(1).split("?");
console.log(query);
query.map((item)=>{
   param=item.split("=");
   console.log(item);
   paramValue=parseInt(param[1]);
   console.log(paramValue);
})
var idb = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;

//creating a database
var open = idb.open("Resume builder",1);
open.onupgradeneeded=function(e){
var request = e.target.result;
request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true})
}
open.onerror=function(e) {
  console.log("indexedDB error");
}

open.onsuccess=function(e){
var request = e.target.result;
var transaction = request.transaction("form_data","readwrite");
var storeDB = transaction.objectStore("form_data");
var finalData = storeDB.get(paramValue);
finalData.onsuccess=function(event){
  console.log(event.target.result);
  display(event.target.result);
  display1(event.target.result);
 }
}
var parent=document.querySelector(".parent");
var left=document.querySelector(".leftchild");
var right=document.querySelector(".rightchild");
function display(data){
  var profileIcon=document.createElement("img");
  profileIcon.src="481797.svg";
  profileIcon.alt=data.name;
  left.appendChild(profileIcon);

var data1=document.createElement("p")
data1.innerHTML=data.name;
left.appendChild(data1);

  var data1=document.createElement("a");
  data1.textContent=data.email;
  data1.href="mailto"+data.email;
  left.appendChild(data1);
}
var right=document.querySelector(".rightchild");
function display1(edu1){
   var career1=document.createElement("h3");
   career1.textContent="career objective";
  right.appendChild(career1);

  var hr=document.createElement("hr");
  right.appendChild(hr);

  var careerdata=document.createElement("p");
  careerdata.textContent=edu1.career;
  right.appendChild(careerdata);

  var education=document.createElement("h3");
  education.textContent="Educational Qualifications";
  right.appendChild(education);

  var hr1 = document.createElement("hr");
  right.appendChild(hr1);

  var ul=document.createElement("ul");
  edu1.education.map((edu)=>{

    var li=document.createElement("li");
    li.textContent=edu.degree;
    ul.appendChild(li);

var br=document.createElement("br");
ul.appendChild(br);

    var li2=document.createElement("li");
    li2.textContent=edu.branch;
    ul.appendChild(li2);

    var li3=document.createElement("li");
    li3.textContent=edu.college;
    ul.appendChild(li3);

    var li4=document.createElement("li");
    li4.textContent=edu.marks;
    ul.appendChild(li4);

  })
  right.appendChild(ul);
}
