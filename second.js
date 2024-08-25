const calc= document.querySelector("#Calculate");
const calculate=document.querySelector("#calculate");

calculate.addEventListener("click",function(e){
const height=parseInt(document.querySelector("#height").value);
const width= parseInt(document.querySelector("#width").value);
const area=(height*width);

const result=document.querySelector("#result");
if(height<0 || width<0){
    const Result=document.querySelector("#Result");
    Result.innerHTML="Enter valid Height/width";
}
else if(height==10 && width==14){
    const Result=document.querySelector("#result");
    Result.innerHTML="Abhay and Diksha are in Love";
}
else if(height==14 && width==10){
    const Result=document.querySelector("#result");
    Result.innerHTML="Abhay and Diksha are in Love";
}
else{
    
    result.innerHTML=`${area}`;
}
})

