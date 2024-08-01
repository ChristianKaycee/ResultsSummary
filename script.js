const bgColor = ["hsl(0, 100%, 98%)", "hsl(39, 100%, 98%)", "hsl(166, 100%, 98%)", "hsl(234, 85%, 98%)"];
const color = ["hsl(0, 100%, 68%)", "hsl(39, 100%, 56%)", "hsl(166, 100%, 37%)", "hsl(234, 85%, 45%)"];
fetch("data.json")
.then(response => response.json())
.then(data =>{ 
let Boxescontainer = document.querySelector(".box-container");
let k = 0;
data.forEach((item,index)=>{
    let divOne = document.createElement("div");
    divOne.classList.add("box");
    divOne.style.backgroundColor = bgColor[index % bgColor.length];

    let imgOne = document.createElement("img");
    imgOne.src = item.icon;
    divOne.appendChild(imgOne);

    let name = document.createElement("span");
    name.innerHTML = item.category;
    name.classList.add("name");
    name.style.color = color[index % color.length];;
    divOne.appendChild(name);

    let score = document.createElement("span");

    let grade = document.createElement("span");
    grade.innerHTML = item.score;
    k += Math.floor(item.score/4);
    grade.classList.add("grade");
    score.appendChild(grade);

    let light = document.createElement("span");
    light.innerHTML = " / 100";
    light.classList.add("over");
    score.appendChild(light);

    divOne.appendChild(score);
    Boxescontainer.appendChild(divOne);
    document.querySelector(".average").innerHTML=k;
});
})
.catch(error => console.error("Error fetching the data",error));