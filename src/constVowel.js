//qn: count vowel and consonent in String

const a="javascript"
let vowel=0
let consonent=0
let obj={}
for(let i=0;i<a.length;i++){
    if(a[i]==="a"||a[i]==="e"||a[i]==="i"||a[i]==="o"||a[i]==="u"){
        vowel++
        obj["vowel"]=vowel
    }
    else{
        consonent++
        obj["consonent"]=consonent
    }
}
console.log(vowel,consonent)
console.log(obj)
