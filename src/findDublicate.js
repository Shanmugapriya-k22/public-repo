//qn:remove dublicate in array

const a=[2,4,5,678,2,2,5,56,4,8,8]
const ans=[]
for(let i=0;i<a.length;i++){
    let con=false
    for(let j=0;j<ans.length;j++){
if(a[i]===ans[j]){
    con=true
}
    }
    if(!con){
        ans.push(a[i])
    }
}
console.log(ans)