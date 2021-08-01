// Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array
(function () {
let y=[1,2,3,4,5,6];
console.log(y.filter(x=>(x%2==0)));
})();



// b. Convert all the strings to title caps in a string array
(function () {
  let c=['strawberry','deer','apple','caterpillar']
console.log(c.map(d=>d[0].toUpperCase()+d.slice(1,d.length)));
})();

// c. Sum of all numbers in an array
(function () {
const p= h=>h.reduce((a,b)=>a+b,0);
let h=[1,2,3,4,5,6];
var k=p(h);
console.log(k)
})();

// d. Return all the prime numbers in an array
(function (){
  const as=ff=>{
    if(ff<2) return false;
    for(let i=2;i<ff;i++){
      if(ff%i==0){
        return false;
      }
    }
    return ff;
  };
  let zz=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  console.log((zz.filter(as)).filter(x=>(x!='false')));
  
})();

// e. Return all the palindromes in an array
(function (){
  const af=et=>{
    const ar=et.split('');
    const reb=ar.reverse();
    const revs=reb.join('');
    if (et == revs){return et} 
  };
  let o=['sos','flower','pewwep','pink','yelley'];
  console.log(o.filter(af));  
})();  

// f. Return median of two sorted arrays of same size
(function () {
  let m=[2,3,4,5,7]
  let n=[8,9,7,6,5]
  let zzz=m.length
  if (zzz%2!=0){
    console.log("Median of 1st Array ",m,' is ',m[parseInt(zzz/2)])
    console.log("Median of 2nd Array ",n,' is ',n[parseInt(zzz/2)])
  }
})();
// g. Remove duplicates from an array
(function () {
  let m=[2,3,4,5,7,8,11,8,2,4];
  console.log(m.filter((a,b)=>m.indexOf(a)===b));
})();
// h. Rotate an array by k times
(function () {
  let m=[1,2,3,4,5];
  let n=4;
  const rs=m.map((e,i)=>m[m.length-i-1])
  console.log(rs)    
  
})();




//Task 3




// Do the below programs in arrow functions


// a.Print odd numbers in an array
let y=[1,2,3,4,5,6];
console.log(y.filter(x=>(x%2==0)));

// b.Convert all the strings to title caps in a string array
let c=['strawberry','deer','apple','caterpillar']
console.log(c.map(d=>d[0].toUpperCase()+d.slice(1,d.length)));

// c.Sum of all numbers in an array
const p= h=>h.reduce((a,b)=>a+b,0);
let h=[1,2,3,4,5,6];
var k=p(h);
console.log(k)

// d.Return all the prime numbers in an array
const as=ff=>{
  if(ff<2) return false;
  for(let i=2;i<ff;i++){
    if(ff%i==0){
      return false;
    }
  }
  return ff;
};
let zz=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log((zz.filter(as)).filter(x=>(x!='false')));


// e.Return all the palindromes in an array
const af=et=>{
  const ar=et.split('');
  const reb=ar.reverse();
  const revs=reb.join('');
  if (et == revs){return et} 
};
let o=['sos','flower','pewwep','pink','yelley'];
console.log(o.filter(af));

