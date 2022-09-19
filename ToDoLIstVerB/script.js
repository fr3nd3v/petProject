document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      addItem(input.value);
    }
      
  });
  
  document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
  });
  
  addItem = (input) => {

    


    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const taskIcon = document.createElement("i");
    const text = document.createElement("p");
  
    item.className = "item";
    text.textContent = input;

    let  ClickBooleanCounter = false;
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", () => {
      
      if (ClickBooleanCounter == false){
        ClickBooleanCounter = true ;
        checkIcon.style.color = "limegreen";
      }
      else{
        checkIcon.style.color = "lightgray";
        ClickBooleanCounter = false;
      }

        
      
      
    })
    div.appendChild(checkIcon);
  
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", () => {
      item.remove();
    })
    div.appendChild(trashIcon);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";

    taskIcon.className = "fas fa-tasks";
    div.appendChild(taskIcon);
    taskIcon.style.color = "darkgray";
    taskIcon.addEventListener("mouseenter", () => {
       taskIcon.style.color = "limegreen";
      })
      taskIcon.addEventListener("mouseleave", () => {
        taskIcon.style.color = "darkgray";
       })



    let currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()
    let hour = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    const InputDate = document.createElement("div");
    InputDate.className = "Date";
    InputDate.textContent = day + "/" + month + "/" + year + "  " + hour + ":" + minutes;
    div.appendChild(InputDate);
}      
// pop up subtask window
// taskIcon.addEventListener("click", () => {
//    const subTaskDiv = document.createElement("div");
//    const cloz = document.createElement("div");
//    subTaskDiv.className = "subtask";
//    cloz.className = "close";
//    document.body.append(subTaskDiv);
//    subTaskDiv.appendChild(cloz);

//    cloz.addEventListener("click", () => {
//     subTaskDiv.style.display = "none"; 
    
//    })

//  })
 


// pop up subtask window end









