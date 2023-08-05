document.addEventListener("DOMContentLoaded", function (){
const nav_br=document.getElementById('nv-btn')
const hide=document.getElementById('shw')
nav_br.addEventListener('click',function(){
    const style=window.getComputedStyle(hide).display
    alert('hi')
    if(style=='block')
    {
        hide.style.display="none"
        alert('hi')
    }
})
})