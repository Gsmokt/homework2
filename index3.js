// 5.
// function named(){
//   let numb;
//   const tab = [1,1,1,1,1,1,1,2];
//   const array = [];
// for(;tab.length;){
//   array.push(...tab.splice(Math.floor(Math.random() * tab.length),1))
// }
// console.log(array)
//   const [a,b,c,d,e,f,g,h] = array;
//   if(JSON.stringify([a,b,c]) === JSON.stringify([d,e,f])){
//       if(g > h){
//        numb = array.indexOf(g)
//         }else{
//            numb = array.indexOf(h)         }
//     }
//     if(JSON.stringify([a,b,c]) > JSON.stringify([d,e,f])){
//       if( a === b ){
//            numb = array.indexOf(c)
//       }else if(a === c){
//            numb = array.indexOf(b)
//       }else{
//            numb = array.indexOf(a)
//       }
//   }else if(JSON.stringify([a,b,c]) < JSON.stringify([d,e,f])){
//       if( d === e ){
//            numb = array.indexOf(f)
//       }else if(d === f){
//            numb = array.indexOf(e)
//       }else{
//            numb = array.indexOf(d)
//       }
// }
// return numb
// }
// console.log(named())




// 1.

// let iife = (function(){
//   let num; 
//   function showValue(){
//      num ?? "Brak parametru!"
//     if(typeof num === "number" || typeof num === "string" ){
//       console.log( num)
//     }else return
//   };
//    function setValue(setNum){
//       if(setNum) num = setNum;
//   };
 
//   function reverseValue(){
//     if(typeof num === "number"){
//     console.log(num*(-1))
//     }
//     if(typeof num === "string"){
//       console.log(num.split("").reverse().join(""))
//     }else return
//   }
//   return ({
//     showValue,
//     setValue,
//     reverseValue
//  })
// })()

// 2.
// function Calc(x,y) {
//       this.x = x;
//       this.y = y
//   this.add= function(){
//       return this.x + this.y
//   };
//   this.substr = function(){
//       return this.x - this.y
//   };
//   this.div = function(){
//       return this.x / this.y
//   };
//   this.mult = function(){
//       return this.x * this.y
//   };
// }

// const calc1 = new Calc(1,3)
// console.log(calc1.add())



// 3.
// const array = [
//   {x:2,y:3},
//   {x:-1,y:6},
//   {x:0,y:8}
// ]

// const baseObject = { 
//   x:null,
//   y:null, 
//   sum: function (){ 
//     return this.x+this.y
//   }}

//   const map = array.map((e)=>{
//     return baseObject.sum.call(e)
//   })

//   console.log(map)