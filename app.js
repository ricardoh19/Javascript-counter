let num1 = document.getElementById("number");
let new_num = 0;
let add_button = document.getElementById("add_button");
let sub_button = document.getElementById("sub_button");
let reset_button = document.getElementById("reset");

add_button.addEventListener('click',function(){
    new_num++;
    num1.textContent = new_num;
},false);

sub_button.addEventListener('click',function(){
    new_num--;
    num1.textContent = new_num;
},false);

reset_button.addEventListener('click',function(){
    new_num = 0;
    num1.textContent = new_num;
},false);