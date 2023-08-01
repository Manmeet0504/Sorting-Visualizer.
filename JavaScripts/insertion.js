function Insertion(){
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";


    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;
    for(var i=1;i<aa_size;i++){
        var curr=div_sizes[i];
        var j=i-1;
        div_update(divs[i],div_sizes[i],"yellow");
        while(j>=0&&div_sizes[j]>curr){
            
            div_update(divs[j],div_sizes[j],"red");
            div_update(divs[j+1],div_sizes[j+1],"red");
            div_sizes[j+1]=div_sizes[j];
            div_update(divs[j],div_sizes[j],"red");//Height update
            div_update(divs[j+1],div_sizes[j+1],"red");//Height update
    
            div_update(divs[j],div_sizes[j],"blue");//Color update
            if(j==(i-1))
            {
                div_update(divs[j+1],div_sizes[j+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[j+1],div_sizes[j+1],"blue");//Color update
            }
            j-=1;
        }
        div_sizes[j+1]=curr;

        for(var t=0;t<i;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[i-1],div_sizes[i-1],"green");//Color update
           
        
       

    }
