const colorCode = document.getElementById('colorCode');
const btn = document.getElementById('btn');

const arr = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener("click", ()=>{
    let pickedColor = "#";
    for(let i=0; i<6; i++){
      pickedColor += arr[generateRandomNum()];
    }
    colorCode.textContent = pickedColor;
    document.body.style.backgroundColor = pickedColor;
    
})

const generateRandomNum = () => {
    const rand = Math.floor(Math.random()*14);
    return rand;
}