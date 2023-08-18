 const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCount = document.getElementById("task-count");
const count=document.getElementById("counter");
 let tasks = [];

function counter(){
 const taskslist=document.getElementsByClassName("taskslist")
 count.textContent=taskslist.length;
}

function addTask() {
   
    if (inputBox.value === "") {
        alert("Please enter a task!");
 
    }
    else{
        let li= document.createElement("li");
        li.classList.add("taskslist");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
         counter()
    }

     inputBox.value="";

}

  listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        counter();
    }
  },false);









