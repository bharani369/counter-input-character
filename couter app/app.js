const add = document.getElementById("bharani");
const input = document.getElementById("content");
input.addEventListener( 'keyup',()=>{
    add.innerHTML=input.value.length;
})