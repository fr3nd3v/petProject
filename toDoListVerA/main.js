document.querySelector("#createNote").onclick = function(){

        let Note = document.createElement('div');
        Note.className = "note";
        document.querySelector(".main").appendChild(Note);
        let subnotesplace = document.createElement('div');
        subnotesplace.className = "sub"
        Note.after(subnotesplace);

        let textPlace = document.createElement('div');
        textPlace.className = "text_place";
        textPlace.textContent = document.getElementById('input').value 
        Note.appendChild(textPlace);

        let icons = document.createElement('div');
        icons.className = "icons" 
        Note.appendChild(icons);

        let checkIcon = document.createElement('i');
        checkIcon.className = "gg-check-r" ;
        icons.appendChild(checkIcon);
        let CheckFlag = false
        checkIcon.addEventListener("click", () => {
            
            if (CheckFlag === false) {
                checkIcon.style.color = "limegreen";
                CheckFlag = true;
            }
            else if (CheckFlag === true) {
                checkIcon.style.color = "black";
                
                CheckFlag = false;
            }
            
          })

        let subtaskIcon = document.createElement('i');
        subtaskIcon.className = "gg-menu-boxed" ;
        icons.appendChild(subtaskIcon);

        subtaskIcon.addEventListener("click", () => {

            let subNote = document.createElement('div');
            subNote.className = "subnote";
            subnotesplace.appendChild(subNote);

            let subNoteText = document.createElement('div');
            subNoteText.className = "subText_place";
            subNoteText.textContent = document.getElementById('input').value 
            subNote.appendChild(subNoteText);
            document.getElementById("input").value = "";

            let subIconsPlace = document.createElement('div');
            subIconsPlace.className = "subIcons";
            subNote.appendChild(subIconsPlace);

            let subNoteCheck = document.createElement('i');
            subNoteCheck.className = "gg-check-r"
            subIconsPlace.appendChild(subNoteCheck);

            let subCheckFlag = false; 

            subNoteCheck.addEventListener("click", () => {
            
                if (subCheckFlag === false) {
                    subNoteCheck.style.color = "limegreen";
                    subCheckFlag = true;
                }
                else if (subCheckFlag === true) {
                    subNoteCheck.style.color = "black";    
                    subCheckFlag = false;
                }
                
              })

            checkIcon.addEventListener("click", () => {
            
                if (CheckFlag === true) {
                    subNoteCheck.style.color = "limegreen";
                }
                else if (CheckFlag === false) {
                    subNoteCheck.style.color = "black";    
                }
                
              })


            let subNoteClose = document.createElement('i');
            subNoteClose.className = "gg-close-r"
             
            subIconsPlace.appendChild(subNoteClose);


            subNoteClose.addEventListener("click", () => {
                subnotesplace.removeChild(subNote);
            })
            
            
        })  

        


        let closeIcon = document.createElement('i');
        closeIcon.className = "gg-close-r" ;
        icons.appendChild(closeIcon);
        closeIcon.addEventListener("click", () => {
            document.querySelector(".main").removeChild(Note);
            document.querySelector(".main").removeChild(subnotesplace);
        })
       
        
        document.getElementById("input").value = "";

    let newDate = new Date();

    let Year = newDate.getFullYear();
    let Month = newDate.getMonth();
    let Day = newDate.getDate();
    let Hours = newDate.getHours();
    let Minutes = newDate.getMinutes()
    let DateForNote = Year + "/" + (Month + 1) + "/" + Day + " "+ Hours + ":" + Minutes;  

   let TimePlace = document.createElement("div");
   TimePlace.className = "styleTime";
   TimePlace.textContent = DateForNote;
   icons.appendChild(TimePlace);



}


