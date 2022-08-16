var div=document.createElement("div");
div.style.textAlign="center";
var input =document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","pokename");
input.setAttribute("placeholder","Enter Pokemon Name");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search here";
div.append(input,button);
button.addEventListener("click",foo);


 let ability=document.createElement("div");
 ability.setAttribute("id","ability");

let moves=document.createElement("div");
moves.setAttribute("id","moves");

let weight=document.createElement("div");
 weight.setAttribute("id","weight");

div.append(input,button,ability,moves,weight);
document.body.append(div);

async function foo(){
    let res=document.getElementById("pokename").value;
    var url=`https://pokeapi.co/api/v2/pokemon/${res}`;

    let result=await fetch(url);
    let result1=await result.json();

    console.log(result1.moves.length);
    moves.innerHTML=`Moves:${result1.moves.length} `;
    
    console.log(result1.abilities.length);
     ability.innerHTML=`Abilities:${result1.abilities.length} `;

   
    console.log(result1.weight);
    weight.innerHTML=`Weight:${result1.weight}`;


}

    
