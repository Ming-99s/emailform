const data=document.getElementById("input");
const errorimg=document.getElementById("error");
const errormassage=document.getElementById("errormessage");
const btngo=document.getElementById("btngo");
const box=document.getElementById("container");
const haha=document.getElementById("haha");

let pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;;
 

function checker(){
    if(data.value.match(pattern)){
        errorimg.style.display = 'none';
        errormassage.style.display ='none';
    }
    else if(data.value == ""){
        errorimg.style.display = 'none';
        errormassage.style.display ='none';
    }
    else{

        errorimg.style.display='block';
        errormassage.style.display='block';
        errormassage.textContent="Please provide a valid email";
    }

}
btngo.onclick=function(){
    if(data.value.match(pattern)){
        box.style.display = 'none';
        haha.style.display ='block';
    }
    else if(data.value == ""){
        errorimg.style.display = 'block';
        errormassage.style.display = 'block';

    }
    else{
        errorimg.style.display='block';
        errormassage.style.display='block';
        errormassage.textContent="Are you an Alien? I said ENTER A VALID EMAIL!!!";

    }
}

