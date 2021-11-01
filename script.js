
    let thickness = document.getElementById("thickness").value;
    let width = document.getElementById("width").value;
    let length = document.getElementById("length").value;

console.log (thickness)


/* CL code
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

// hamburger button
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
