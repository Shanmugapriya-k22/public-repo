// qn:Most frequent  char
// input:"javascript"
// output:a

const a = "javascritptjjj";
let max=0
let ans=''
for (let i = 0; i < a.length; i++) {
  let count = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[i] === a[j]) {
      count = count + 1;
    }
}
if(count>max){
    max=count
    ans=a[i]
}
}
console.log(ans);