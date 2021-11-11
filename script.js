
/* CL Code
let thickness = 0;
let width = 0;
let length = 0;

let calculatebutton = document.querySelector ("#calculate") 
calculatebutton.addEventListener ("click",(e)=>{
    e.preventDefault ()
    thickness=document.querySelector ("#thickness").value
    width=document.querySelector ("#width").value
    length=document.querySelector ("#length").value
})
*/



  function calculate() {
    let thickness=document.querySelector ("#thickness").value;
    let width=document.querySelector ("#width").value;
    let length=document.querySelector ("#length").value;
    let boardfeet = (thickness * width * length)/144;


// hamburger button
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
 

