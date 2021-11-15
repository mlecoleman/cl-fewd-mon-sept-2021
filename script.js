
// hamburger button
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

/* Code Ernesto helped me write in CL Monday class
let thickness = 0;
let width = 0;
let length = 0;

let calculatebutton = document.querySelector ("#calculate") 
calculatebutton.addEventListener ("click",(e)=>{
    e.preventDefault ();
    thickness=document.querySelector ("#thickness").value;
    width=document.querySelector ("#width").value;
    length=document.querySelector ("#length").value;

 
     
})
*/

// input
const thicknessInput = document.getElementById('thickness');
const widthInput = document.getElementById('width');
const lengthInput = document.getElementById('length');

// button
const calculateButton = document.getElementById('calculate');

// output

const totalBoardfeet = document.getElementById('bfoutput');

function calculateBoardfeet() {

    let thickness, width, length, boardfeet;

    thickness = Number(thicknessInput.value);
    width = Number(widthInput.value);
    length = Number(lengthInput.value);

    boardfeet = (thickness * width * length) / 144;

    totalBoardfeet.textContent = boardfeet.toFixed(2);

}


function calculate () {
    if(Number(thicknessInput.value) && Number(widthInput.value) && Number(lengthInput.value)) {
        calculateBoardfeet()
    } else {
        alert('Please fill in all fields with a numerical value.');
    }
}

calculateButton.addEventListener('click', calculate);
