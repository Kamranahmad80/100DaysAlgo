const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray", "cyan", "magenta", "teal", "indigo"];
const btn=document.getElementById("btn");
const color =document.querySelector(".color")

let getRandomNumber=()=>{
    return Math.floor(Math.random()*colors.length)
}
 
btn.addEventListener("click",()=>{
    const randomNum=getRandomNumber()
    //console.log(randomNum)

    document.body.style.backgroundColor=colors[randomNum]
    color.textContent=colors[randomNum];
});


