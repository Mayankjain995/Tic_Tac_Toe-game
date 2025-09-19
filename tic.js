let boxs=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let restart=document.querySelector(".restart");
let message_container=document.querySelector(".message_container");
let msg=document.querySelector("#msg");

let turnX=true;
let win_pat=[
    [0,1,2],   //2D array of winning condition
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxs.forEach((box)=> {
    box.addEventListener("click",() => {
        // console.log("Box clicked");
        if(turnX==true){
            box.innerText="X";
            turnX=false;
            box.disabled=true; //once created it will not allow to change its value
        }
        else{
            box.innerText="O"
            turnX=true;
            box.disabled=true; //once clicked it will not allow to change its value
        }
        //console.log("Turn of X:",turnX);

        check_winner();
    })
})


//function to check winner condition
const check_winner=() =>{
    let winnerFound=false;
    for (let pat of win_pat){
        let pos1=boxs[pat[0]].innerText;
        let pos2=boxs[pat[1]].innerText;
        let pos3=boxs[pat[2]].innerText;
        //console.log("\n",pos1,pos2,pos3);
   

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                 console.log(`Winner is ${pos1}`);
                 show_winner(pos1);
                 disableBoxes();
                 winnerFound=true;
                 break;
             }   
        }   
    }

    if(winnerFound==false){
        let filled=true;
        
        for(box of boxs){
            if(box.innerText=="")
                filled=false;
        }
        if(filled==true){
            console.log("game draw")
            msg.innerText="It is Draw";
            message_container.classList.remove("hide");
        }
    }

};

let show_winner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    message_container.classList.remove("hide");
}

let disableBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}

let enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}

reset.addEventListener("click",()=>{
    turnX=true;
    enableBoxes();
     message_container.classList.add("hide");
})

restart.addEventListener("click",()=>{
    turnX=true;
    enableBoxes();
     message_container.classList.add("hide");
})
