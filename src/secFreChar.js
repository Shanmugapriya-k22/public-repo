
//qn: second frequent character

const a = "jjjaaaccrarr";
let first=0
let sec=0
let ans=''
for (let i = 0; i < a.length; i++) {
  let count = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[i] === a[j]) {
      count = count + 1;
    }
}
if(count>first){
    sec=first
    first=count
}else if(count>sec && count !== first){
    sec=count
  ans=a[i]
}
}
// console.log(ans)