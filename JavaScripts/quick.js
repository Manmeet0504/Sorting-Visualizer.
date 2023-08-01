function Quick(){
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    document.getElementById("Space_Worst").innerText="O(log N)";

    c_delay=0;

    sort(0,aa_size-1);





}
function sort(low,hi){
    if(low<hi){
       var piv= finalsort(low,hi);
        sort(low,piv-1);
        sort(piv+1,hi);
    }
}


function finalsort(low,hi){
    var pi=div_sizes[low];
    var i=low+1;
    div_update(divs[low],div_sizes[low],"yellow");
    for (var j = low+1; j <= hi; j++){
        if(div_sizes[j]<pi){
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[j],div_sizes[j],"red")
            
            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;
            
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[j],div_sizes[j],"red");//Height update

            div_update(divs[i],div_sizes[i],"blue");//Height update
            div_update(divs[j],div_sizes[j],"blue");//Height update
            i++;
            
        }
    }
    div_update(divs[low],div_sizes[low],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    var temp=div_sizes[low];
    div_sizes[low]=div_sizes[i-1];
    div_sizes[i-1]=temp;
    div_update(divs[low],div_sizes[low],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");
    for(var t=low;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;
}