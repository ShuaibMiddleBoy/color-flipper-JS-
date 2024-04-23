const colorCode = document.getElementById('colorCode');
const btn = document.getElementById('btn');

const colorArr = ['#FFA07A', '#1E90FF', '#3CB371', '#DAA520', '#9370DB', '#008B8B', '#FF6347', '#708090', '#DA70D6', '#5F9EA0'];


btn.addEventListener("click", ()=>{
    const pickedColor = colorArr[generateRandomNum()];
    colorCode.innerText = pickedColor;
document.body.style.backgroundColor = pickedColor;
})

const generateRandomNum = () => {
    const rand = Math.floor(Math.random()*10);
    return rand;
}