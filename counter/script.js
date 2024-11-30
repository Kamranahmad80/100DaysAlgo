let count=0;

let value=document.querySelector("#value")
let increase=document.querySelector('.increase')
let reset=document.querySelector('.reset')
let decrease=document.querySelector('.decrease')
// console.log(btns)

// btns.forEach(function(btn){
//     btn.addEventListener('click',(e)=>{
        
//     })
// })
increase.addEventListener('click',()=>{
    count++
    value.innerHTML=count
})
decrease.addEventListener('click',()=>{
    if(count>0){
        count--
        value.innerHTML = count;
    }else{
        value.innerHTML=0
    }
})
reset.addEventListener('click',()=>{
    count=0
    value.innerHTML=count
})

