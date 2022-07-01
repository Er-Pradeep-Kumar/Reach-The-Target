const ScorePly1=document.querySelector('.ply1');
const ScorePly2=document.querySelector('.ply2');
const btnPlayer1=document.querySelector('#btn1');
const btnPlayer2=document.querySelector('#btn2');
const reset=document.querySelector('.reset');
let curscorePly1=0;
let curscorePly2=0;
let x=1;
let target=50;
reset.addEventListener('click',function(){
    curscorePly1=0;
    curscorePly2=0;
    x=1;
    ScorePly1.textContent=0;
    ScorePly2.textContent=0;
})
btnPlayer1.addEventListener('click',function(){
    if(!x){
        alert('wrong player')
        return;
    }
    x=0;
    curscorePly1+=Math.trunc(Math.random()*10)+1;
    ScorePly1.textContent=curscorePly1;
    if(curscorePly1>=target){
        alert(`Pradep Won with a score of ${curscorePly1}`);  
    }
})
btnPlayer2.addEventListener('click',function(){
    if(x){
        alert('wrong player')
        return;
    }
    x=1;
    curscorePly2+=Math.trunc(Math.random()*10)+1;
    ScorePly2.textContent=curscorePly2;
    if(curscorePly2>=target){
        alert(`Kisti Won with a score of ${curscorePly2}`);  
    }
})


