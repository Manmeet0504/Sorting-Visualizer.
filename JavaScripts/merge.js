function Merge(){
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;
  msort(0,aa_size-1);
}
function msort( start,end){
    if(start<end){
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");
        msort(start,mid);
        msort(mid+1,end);
        mfinalsort(start,mid,end);

    }
}
function mfinalsort(start,mid,end){
    var p=start;
    var q=mid+1;
    var arr=[];
    var k=0;
for(var i=start;i<=end;i++){
  if(p>mid){
    arr[k]=div_sizes[q];
    k++;
    q++;
    div_update(divs[q-1],div_sizes[q-1],"red");

  }
  else if(q>end){
    arr[k]=div_sizes[p];
    p++;
    k++;
    div_update(divs[p-1],div_sizes[p-1],"red");
  }
  else if(div_sizes[p]>div_sizes[q]){
    arr[k]=div_sizes[q];
    k++;
    q++;
    div_update(divs[q-1],div_sizes[q-1],"red");
  }
  else{
    arr[k]=div_sizes[p];
    k++;
    p++;
    div_update(divs[p-1],div_sizes[p-1],"red");
  }
}
  for(var t=0;t<k;t++)
  {
      div_sizes[start++]=arr[t];
      div_update(divs[start-1],div_sizes[start-1],"green");//Color update
  }
    
    
}

