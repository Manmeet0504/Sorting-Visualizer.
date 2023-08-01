var inpsize=document.getElementById("a_size");
var aa_size=inpsize.Value;
var newarr=document.getElementById("a_generate");
var arr_speed=document.getElementById("a_speed");
var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";



newarr.addEventListener("click",generate_array);
inpsize.addEventListener("input",update);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<aa_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inpsize.max - inpsize.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/aa_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function update(){
    aa_size=inpsize.value;
    generate_array();
}
window.onload=update();
for (var i = 0; i <butts_algos.length; i++) {
    butts_algos[i].addEventListener("click",sort_algo);

}

function sort_algo(){
    // this.classList.add("butt_selected");
    switch(this.innerHTML) {
        case "Bubble":Bubble();
            
            break;
        case "Selection":Selection();
            
            break;
        case "Insertion":Insertion();
            
            break;
        case "Merge":Merge();
            
            break;
        case "Quick":Quick();
            
            break;
        case "Heap":Heap();
            
            break;
    
    }
}

