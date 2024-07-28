let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let h3=document.querySelector("h3");
    let randomcolor=getrandomcolor();
    
  h3.innerText = randomcolor;
  let div = document.querySelector("div");
  div.style.backgroundColor = randomcolor;
  div.style.boxShadow = `0px 20px 200px 5px ${randomcolor}`;
  console.log("Color updated"); 
})
function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`
    return color;

}