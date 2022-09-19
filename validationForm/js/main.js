"use strict"
document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('form');
    form.addEventListener('submit', formSend)
    
    
    async function formSend(event){
        event.preventDefault();

        let error = validateForm(form);
        console.log(error)
        
        if (error === 0){
            let jsonstr = dataFormToJSON();
            
            let response = await fetch('http://formdatasender/php/catchData.php',{
                method:'POST',
                body: jsonstr
            });

            // let body = "jsonstr=" + 
            // encodeURIComponent(jsonstr);
            // let xhr = new XMLHttpRequest();
            // xhr.open("POST", "http://formdatasender/php/catchData.php", true);
            // xhr.setRequestHeader('Content-Type', 
            // 'application/x-www-form-urlencoded');
            // xhr.send(body);
        }
        else{
            alert('некорректно заполненные поля будут подсвечены красным')
        }
    }


    function validateForm(form){
        let error = 0;
        let formCheck = document.querySelectorAll('._check');
        
        for (let i = 0; i < formCheck.length; i++){
            const input = formCheck[i];
            
            inputRemoveError(input)
            if(input.getAttribute("type") === "checkbox" && input.checked === false){
                inputAddError(input);
                error++;
            }
            else if(input.getAttribute("name") === "login"){
                if(input.value.length <= 5 || input.value.length >= 40 ){
                    inputAddError(input);
                    error++;
                    alert('логин должен быть больше 5 символов и меньше 40 символов')
                }
            }
            else if(input.value === ''){
                inputAddError(input);
                error++;
            }
            
        }
        
        let userPassword = document.querySelector('#getSignUpPassword');
        let userRepeatPassword = document.querySelector('#getSignUpRepeatPassword');
        if (userPassword.value != userRepeatPassword.value){
            inputAddError(userPassword);
            inputAddError(userRepeatPassword);
            error++;
        }
        if (userPassword.value.length <= 5 || userPassword.value.length >= 40){
            inputAddError(userPassword);
            inputAddError(userRepeatPassword);
            error++;
            alert("пароль должен быть больше 5 символов и меньше 40 символов")
        }
        
        return error;
    }
    function inputAddError(input){
        input.classList.add("_erorr");
    }
    function inputRemoveError(input){
        input.classList.remove("_erorr");
    }
    form.addEventListener('click', function(event){
        inputRemoveError(event.target)
        
    })
    
 
});




function dataFormToJSON(){
    let getDataFromForm = document.querySelectorAll('._check');
    const formData = {
        name: getDataFromForm[0].value,
        email: getDataFromForm[1].value,
        password: getDataFromForm[2].value,
    };
    
    return JSON.stringify(formData);

}