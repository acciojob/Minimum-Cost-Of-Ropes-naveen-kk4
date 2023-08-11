function findPivot( s , e , arr){
  let pivot = arr[e];
  let i = s;
  for(let j = s;j<e;j++){
   if(arr[j]<=pivot){
     let temp = arr[j];
     arr[j]=arr[i];
     arr[i]=temp;
     i++;
   }
  }
  let temp = arr[i];
  arr[i]=arr[e];
  arr[e]=temp;
  return i;
}
function quickSort(s,e,arr){
 if(s>=e)return;

let pivot = findPivot(s,e,arr);
quickSort(s,pivot-1,arr);
quickSort(pivot+1,e,arr);


}

function calculateMinCost() {
  var arr = document.getElementById("rope-lengths").value.split(", ").map(function (item) {
    return parseInt(item, 10);
});
  let ans = 0;
  while(arr.length > 1){
    quickSort(0,arr.length-1,arr);
    ans+=arr[0]+arr[1];
    arr[1]+=arr[0];
    arr.shift();
    
  }
  document.getElementById("result").innerText = ans; 
  
}  
