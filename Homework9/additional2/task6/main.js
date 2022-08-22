let images=[
    {id:1,imgName:"img/autmn.jpg"},
    {id:2,imgName:"img/bamboo.jpg"},
    {id:3,imgName:"img/men.jpg"},
    {id:4,imgName:"img/road.jpg"},
    {id:5,imgName:"img/tree.jpg"},
];
let div = document.createElement("div");
let img = document.createElement("img");
let right_btn = document.createElement("button");
let left_btn = document.createElement("button");
right_btn.innerText="Right";
left_btn.innerText="Left";
let index = 0;
img.src=images[index].imgName;
img.style.width="400px";
img.style.height="200px";
div.append(left_btn,img,right_btn);
document.body.appendChild(div);
right_btn.onclick=()=>{
    if(index-1<0){
        index= images.length-1;
    }
    else {
        index--;
    }
    img.src=images[index].imgName;
}
left_btn.onclick=()=>{
    if(index+1>images.length-1){
        index= 0;
    }
    else {
        index++;
    }
    img.src=images[index].imgName;
}