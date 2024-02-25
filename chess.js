
for(let i=1;i<=8;i++){
    for(let j=1;j<=8;j++)
    {
        if((j%2 == 0 && i%2==1) || (j%2 !=0 && i%2 == 0)){
            classWhite();
        }
        else{
            classBlack();
        }        
    } 
    document.body.appendChild(document.createElement("br"));  
}


function classBlack(){
    let b = document.createElement("div");
    b.style.width = "50px";
    b.style.height = "50px";
    b.style.display = "inline-block";
    b.style.backgroundColor = "#000000";
    b.style.border = ".5px solid #000000";
    b.style.marginTop = "-2px";
    b.style.marginBottom = "-2px";
    document.body.appendChild(b);
}


function classWhite(){
    let b = document.createElement("div");
    b.style.width = "50px";
    b.style.height = "50px";
    b.style.display = "inline-block";
    b.style.border = ".5px solid #000000";
    b.style.backgroundColor = "#ffffff";
    b.style.marginTop = "-2px";
    b.style.marginBottom = "-2px";
    document.body.appendChild(b);
}
