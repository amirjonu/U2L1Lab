let number= 1;
const one = document.getElementById("1");
const two= document.getElementById("2");
const three= document.getElementById("3");
const four= document.getElementById("4"); 

 

function createPara()
{
    const para= document.createElement("p");
    para.textContent= find();
    document.body.appendChild(para);
}

function find(){
    if (number==1){
        return "Roses are Red";
    }else if(number==2){
        return "Violets are Blue";
    }else if(number==3){
        console.log("reached");
        return "im trying my best";
    }else{
        return "so dont judge me";
    }
}

    one.addEventListener("click", ()=>{
        number=1;
        createPara();
    })

    two.addEventListener("click", ()=>{
        number=2;
        createPara();
    })
    three.addEventListener("click", ()=>{
        number=3;
        createPara();
    })
    four.addEventListener("click", ()=>{
        number=4;
        createPara();
    })