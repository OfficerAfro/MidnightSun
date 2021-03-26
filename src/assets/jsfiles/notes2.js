
// function dingbag(){
// var create = document.getElementsByClassName("create")[0];
// var notes = document.getElementsByClassName("notes")[0];
// var i = 0;

// function typeNote(){
//   if(create.style.display === "none"){
//     create.style.display = "block";
//   }
//   else{
//     create.style.display = "none";
//   }
// }
  
// function insertNote(){
//   var noteText = document.getElementById("note-text").value;
//   var node0 = document.createElement("div");
//   var node1 = document.createElement("h1");

//   node0.className = "note";

//   node1.innerHTML = noteText;

//   node1.style.margin = margin();
//   node1.style.transform = rotate();
//   node1.style.background = color();
  
//   node0.appendChild(node1);
  
//   notes.insertAdjacentElement("beforeend", node0);

//   node0.addEventListener("mouseenter", function(){
//     node0.style.transform = "scale(1.1)";
//   })

//   node0.addEventListener("mouseleave", function(){
//     node0.style.transform = "scale(1)";
//   })

//   node0.addEventListener("dblclick", function(){
//     node0.remove();
//   })

//   document.getElementById("note-text").value = '';
// }

// function margin(){
//   var random_margin = ["-5px","1px", "5px", "10px","15px","20px"];

//   return random_margin[Math.floor(Math.random() * random_margin.length)];
// }

// function rotate(){
//   var random_degree = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)", "rotate(-10deg)"];

//   return random_degree[Math.floor(Math.random() * random_degree.length)];
// }

// function color(){
//   var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];

//   if(i > random_colors.length - 1){
//     i = 0;
//   }
//   return random_colors[i++];
// }
// }