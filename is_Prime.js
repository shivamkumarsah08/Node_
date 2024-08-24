let n = 7;

for(i=2;i<n;i++){
    if(n%i==0){
        console.log("Not Prime Number");
        break;
    }
}
if(i==n){
    console.log("Prime Number");
}