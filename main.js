function addData() {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var career=document.querySelector("#career").value;
  var group1=document.querySelector("#group1").value;
  var branch1=document.querySelector("#branch1").value;
  var college1=document.querySelector("#college1").value;
  var marks=document.querySelector("#marks").value;
  var group2=document.querySelector("#group2").value;
  var branch2=document.querySelector("#branch2").value;
  var college2= document.querySelector("#college2").value;
  var marks2=document.querySelector("#marks2").value;
  var group3=document.querySelector("#group3").value;
  var school = document.querySelector("#school").value;
  var marks3 = document.querySelector("#marks3").value;
  var tech=document.querySelector("#tech").value;
  //browser compatibility
  var idb = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;

  //creating a database
  var open = idb.open("Resume builder",1);
  
  open.onupgradeneeded=function(e)  {
    var request = e.target.result;
    request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true})

  }
  open.onsuccess=function(e) {
    console.log("indexedDB error");
  }
  open.onsuccess=function(e) {
    var request = e.target.result;
    var transaction = request.transaction("form_data","readwrite");
    var storeDB = transaction.objectStore("form_data");
    storeDB.add({
      career:career,
      name:name,
      email:email,
      education:[
        {
          degree:group1,
          branch:branch1,
          college:college1,
          marks:marks,
        },
        {
          degree:group2,
          branch:branch2,
          college:college2,
          marks:marks2,

        },
        {
          degree:group3,
          branch:"",
          college:school,
          marks:marks3,

        }
      ],
      tech:[
        tech
      ]
    })
    window.open("index.html");
  }
}
