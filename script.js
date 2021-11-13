
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

// input
const thicknessInput = document.querySelector('#thickness');
const widthInput = document.querySelector('#width');
const lengthInput = document.querySelector('#length');
const calculateButton = document.querySelector('#calculate');

calculatebutton.addEventListener ("click",(e)=>{
    e.preventDefault ()
})

// output

let output = document.getElementById('output');

function boardfeetOutput() {

    let thickness, width, length, boardfeet;

    thickness = Number(thicknessInput.value);
    width = Number(widthInput.value);
    length = Number(lengthInput.value);

    boardfeet = (thickness * width * length) / 144;

    calculateButton.textContent = boardfeet.toFixed(2);
    
}

function calculate () {
    if(Number(thicknessInput.value) && Number(widthInput.value) && Number(lengthInput.value)) {
        boardfeetOutput ()
    } else {
        alert('Please fill in all fields with a numerical value.')
    }
}

calculateButton.addEventListener('click', calculate);


    /*document.getElementById('output').innerHTML = boardfeet;*/

// hamburger button
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
 

