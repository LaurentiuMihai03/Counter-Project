let valoare=0;

// buton de minus
let decrease=document.querySelector(".buton1");
decrease.addEventListener("click",function(e){
    let rosu=document.querySelector(".number");
    
     for(let i=0;i<=20;i++){
        valoare=valoare-1;
        break;
    }
    
    if(valoare<0){
        rosu.style.color="red";
    }
    rosu.textContent=valoare;

})
//buton de plus
let increase=document.querySelector(".buton3");
increase.addEventListener("click",function(e){
    let verde=document.querySelector(".number");    
    for(let i=0;i>=0;i++){
        valoare=valoare+1;
        break;
    }
    verde.textContent=valoare;
    if(valoare=>1){
        verde.style.color="green";
    }
})

//buton de reset
let rst=document.querySelector(".buton2");
rst.addEventListener("click",function(e){
    let zero=document.querySelector(".number");
    let valoare=0;
    zero.textContent=valoare;
    
})


